#!/usr/bin/env python3
"""One-shot verification of this design-repo. Exit 1 on any ERROR.

Checks (each proven to catch drift by extraction/prove_drift.py):
  json-parse, schemas (Draft-07 meta-validation + every contract + every example),
  semantic (every example passes schema/semantic_validate.py; one reference + one generated example per template),
  allowlist-parity (allowlist <-> contracts <-> schema <-> files, both directions),
  versions (manifest.allowlistVersion == allowlist.version, manifest.pageSpecVersion == schema const),
  counts (manifest counts + README count table recomputed from files),
  citations (every cite.* key resolves; with the sibling clone tree present every path:line range, anchor and quote
             is re-read from the real tracked file; absent -> WARNING, not failure),
  budgets (every measured maxWords / maxItems equals the stored field profile),
  token-catalog (catalog == re-flattened token files; policy keys resolve against the catalog),
  asset-pins (registry availability == PINNED_AVAILABILITY here == the validator's copy; generated roles are safe),
  retrieval-pins (RETRIEVAL_INELIGIBLE here == validator copy == contracts == allowlist; runtime-looking ids pinned),
  wrapper-gate (extraction/wrapper_gate.py + pinned thresholds), graph-agreement (graph.json == validator RULES),
  templates-routes (route table == clone ROUTES, observed sequences accepted by their template), motion,
  source-brand, policy-hash (R15 content hash), category-wording, hygiene (paths, junk, entryPoints, approval).

    python3 extraction/verify_all.py
Requires: pip install jsonschema
"""
import json
import re
import sys
from pathlib import Path

sys.dont_write_bytecode = True  # keep the package free of __pycache__
try:
    import jsonschema
except ImportError:  # pragma: no cover
    sys.stderr.write("verify_all.py needs the 'jsonschema' package: pip install jsonschema\n")
    sys.exit(2)

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / "schema"))
sys.path.insert(0, str(ROOT / "extraction"))
import semantic_validate as sv  # noqa: E402
import wrapper_gate  # noqa: E402
import policy_hash  # noqa: E402
import update_manifest  # noqa: E402

# ---- pins (deliberately duplicated from the validator: editing one copy or the registry alone fails the run)
PINNED_AVAILABILITY = {
    "owner-portrait-photo": "blocked-for-generation", "source-wordmark": "blocked-for-generation", "client-logo": "blocked-for-generation",
    "award-badge": "blocked-for-generation", "owner-contact-link": "blocked-for-generation", "source-endpoint": "blocked-for-generation",
    "client-case-media": "reference-only", "client-product-ui": "reference-only", "owner-artwork": "reference-only",
    "studio-showreel": "reference-only", "ambient-backdrop-video": "reference-only", "custom-cursor-image": "reference-only",
    "placeholder-brand-mark": "generation-safe", "fictional-person-portrait": "generation-safe", "generated-artwork-visual": "generation-safe",
    "generated-project-media": "generation-safe", "generated-product-ui-mock": "generation-safe", "generated-backdrop-video": "generation-safe",
    "ui-icon-glyph": "generation-safe", "placeholder-url": "generation-safe", "placeholder-endpoint": "generation-safe",
    "placeholder-rating": "generation-safe", "original-copy": "generation-safe",
}
RETRIEVAL_INELIGIBLE = {"shell.skip-link", "shell.awwwards-badge", "shell.custom-cursor", "overlay.intro-loader", "overlay.menu-panel", "overlay.route-curtain", "overlay.cookie-notice", "overlay.cart-drawer", "overlay.board-lightbox", "overlay.drag-cue"}
TOKEN_FILES = update_manifest.TOKEN_FILES
# citations whose content was checked by hand against the real file during the build; the expected text here is
# independent of the quote stored in measured-values.json (catches a citation that is in range but on the wrong code)
HAND_CHECKED = {
    "cite.home.hero": 'id="top"',
    "cite.home.studio": "(CLIENTS & COLLABORATIONS)",
    "cite.studio.faq": "FaqAccordion",
    "cite.case.next": "NEXT PROJECT",
    "cite.case.context": "(WHY IT EXISTS)",
    "cite.legal.clause": "<h2",
    "cite.overlay.curtain-cover": "667",
    "cite.js.lenis": "lerp: 0.12",
    "cite.artlab.plane": "FRICTION = 0.95",
    "cite.css.px": "1728",
    "cite.shop.detail": "lg:justify-between",
    "cite.routes": "'/shop/pink-portrait'",
}
CHECKS, RESULTS = [], []


def check(name):
    def deco(fn):
        def run():
            errs, warns = [], []
            try:
                fn(errs, warns)
            except Exception as e:  # a crash is a failure, never a pass
                errs.append(f"check crashed: {type(e).__name__}: {e}")
            RESULTS.append((name, errs, warns))
        CHECKS.append(run)
        return run
    return deco


def J(rel):
    return json.loads((ROOT / rel).read_text())


def flatten(obj, prefix=()):
    for k, v in obj.items():
        if isinstance(v, dict) and "$value" in v:
            yield ".".join(prefix + (k,)), v
        elif isinstance(v, dict):
            yield from flatten(v, prefix + (k,))


def contracts():
    return {d["id"]: d for d in (json.loads(p.read_text()) for p in sorted((ROOT / "sections").glob("*.json")))}


def examples():
    return sorted((ROOT / "schema/examples").rglob("*.json"))


def field_defs(fields, path=""):
    for n, f in fields.items():
        yield f"{path}{n}", f
        if f["type"] == "list":
            it = f["items"]
            if "type" in it:
                yield f"{path}{n}[]", it
            else:
                yield from field_defs(it, f"{path}{n}[].")


def sibling():
    return (ROOT.parent / "src").is_dir() and (ROOT.parent / "src" / "App.jsx").is_file()


@check("json-parse")
def c_json(E, W):
    for p in ROOT.rglob("*.json"):
        try:
            json.loads(p.read_text())
        except Exception as e:
            E.append(f"{p.relative_to(ROOT)}: {e}")


@check("schemas")
def c_schemas(E, W):
    ps, cs = J("schema/pagespec.schema.json"), J("schema/section-contract.schema.json")
    for name, s in (("pagespec", ps), ("section-contract", cs)):
        try:
            jsonschema.Draft7Validator.check_schema(s)
        except Exception as e:
            E.append(f"{name} schema invalid: {e}")
    cv = jsonschema.Draft7Validator(cs)
    for sid, c in contracts().items():
        for e in cv.iter_errors(c):
            E.append(f"contract {sid}: {e.message[:200]}")
    pv = jsonschema.Draft7Validator(ps)
    if not examples():
        E.append("no examples found")
    for p in examples():
        for e in pv.iter_errors(json.loads(p.read_text())):
            E.append(f"{p.relative_to(ROOT)}: {'/'.join(map(str, e.path))}: {e.message[:200]}")


@check("semantic")
def c_semantic(E, W):
    reg = sv.load_registry(ROOT)
    have = {}
    for p in examples():
        spec = json.loads(p.read_text())
        res = sv.validate(spec, reg)
        for x in res.errors:
            E.append(f"{p.name}: {x['rule']} @ {x['path']}: {x['message']}")
        for x in res.warnings:
            W.append(f"{p.name}: {x['rule']} @ {x['path']}")
        have.setdefault(spec.get("mode"), set()).add(spec.get("template"))
        if spec.get("mode") not in p.parent.name:
            E.append(f"{p.name}: lives in {p.parent.name}/ but mode is {spec.get('mode')}")
    for t in J("templates/templates.json")["templates"]:
        for m in ("reference", "generated"):
            if t not in have.get(m, set()):
                E.append(f"no {m} example for template {t}")


@check("allowlist-parity")
def c_allow(E, W):
    al = J("tokens/llm/component-allowlist.json")
    ps = J("schema/pagespec.schema.json")
    secs = contracts()
    if set(al["sections"]) != set(secs):
        E.append(f"allowlist sections vs contracts: phantom={sorted(set(al['sections']) - set(secs))} orphan={sorted(set(secs) - set(al['sections']))}")
    for sid, c in secs.items():
        a = al["sections"].get(sid)
        if not a:
            continue
        sch = ps["definitions"].get(f"content.{sid}", {}).get("properties", {})
        if set(a["settableContent"]) != set(c["content"]["fields"]) or set(sch) != set(c["content"]["fields"]):
            E.append(f"{sid}: settable content differs: allowlist={sorted(a['settableContent'])} contract={sorted(c['content']['fields'])} schema={sorted(sch)}")
        if a["variants"] != [v["id"] for v in c.get("variants", [])]:
            E.append(f"{sid}: allowlist variants {a['variants']} != contract")
        if a["retrievalEligible"] != c["retrievalEligible"]:
            E.append(f"{sid}: allowlist retrievalEligible {a['retrievalEligible']} != contract {c['retrievalEligible']}")
        if a["motionPatterns"] != c["motion"]["allowedPatterns"]:
            E.append(f"{sid}: allowlist motionPatterns != contract")
        if a["generatedAssetRoles"] != c["generatedAssetRoles"]:
            E.append(f"{sid}: allowlist generatedAssetRoles != contract")
    for kind in ("primitives", "components"):
        files = {p.stem for p in (ROOT / kind).glob("*.json")}
        if set(al[kind]) != files:
            E.append(f"allowlist {kind} vs files: phantom={sorted(set(al[kind]) - files)} orphan={sorted(files - set(al[kind]))}")
        for k in files & set(al[kind]):
            if J(f"{kind}/{k}.json")["overridableProps"] != al[kind][k]["overridableProps"]:
                E.append(f"{kind}/{k}: overridableProps differ from allowlist")
    roles = list(J("assets/asset-roles.json")["roles"])
    if al["assetRoles"] != roles or ps["definitions"]["assetRole"]["enum"] != roles:
        E.append("assetRole enum differs between allowlist, schema and assets/asset-roles.json")
    mp = list(J("tokens/00-foundation/motion-patterns.json")["patterns"])
    if al["motionPatterns"] != mp or ps["definitions"]["motion"]["properties"]["pattern"]["enum"] != mp:
        E.append("motion pattern enum differs between allowlist, schema and motion-patterns.json")
    if set(al["nodeProps"]) != set(ps["definitions"]["node"]["properties"]):
        E.append(f"allowlist nodeProps {al['nodeProps']} != schema node properties {sorted(ps['definitions']['node']['properties'])}")
    if set(al["styleProps"]) != set(ps["definitions"]["style"]["properties"]) or set(al["styleProps"]) != set(J("tokens/llm/token-policy.json")["styleFields"]):
        E.append("allowlist styleProps != schema style properties / token-policy styleFields")
    if set(ps["definitions"]["node"]["properties"]["section"]["enum"]) != set(secs):
        E.append("schema section enum != contracts")
    if set(ps["properties"]["template"]["enum"]) != set(J("templates/templates.json")["templates"]):
        E.append("schema template enum != templates.json")


@check("versions")
def c_ver(E, W):
    m, a, ps = J("registry.manifest.json"), J("tokens/llm/component-allowlist.json"), J("schema/pagespec.schema.json")
    if m.get("allowlistVersion") != a.get("version"):
        E.append(f"manifest allowlistVersion {m.get('allowlistVersion')} != allowlist version {a.get('version')}")
    if m.get("pageSpecVersion") != ps["properties"]["pageSpecVersion"]["const"]:
        E.append(f"manifest pageSpecVersion {m.get('pageSpecVersion')} != schema const {ps['properties']['pageSpecVersion']['const']}")


@check("counts")
def c_counts(E, W):
    m = J("registry.manifest.json")
    real = update_manifest.compute_counts()
    for k, v in real.items():
        if m.get("counts", {}).get(k) != v:
            E.append(f"manifest counts.{k}={m.get('counts', {}).get(k)} but files give {v}")
    extra = set(m.get("counts", {})) - set(real)
    if extra:
        E.append(f"manifest counts has unchecked keys {sorted(extra)}")
    readme = (ROOT / "README.md").read_text()
    for k, v in real.items():
        if not re.search(rf"^\|\s*{re.escape(k)}\s*\|\s*{v}\s*\|", readme, re.M):
            E.append(f"README count row for {k} missing or not {v}")


@check("citations")
def c_cite(E, W):
    mv = J("extraction/measured-values.json")
    cites = mv["citations"]
    used = set()
    for p in ROOT.rglob("*.json"):
        if p.name == "measured-values.json":
            continue
        used |= set(re.findall(r'"(cite\.[A-Za-z0-9._-]+)"', p.read_text()))
    missing = sorted(used - set(cites))
    if missing:
        E.append(f"unresolved citation keys: {missing[:10]}")
    for sid, c in contracts().items():
        src = c["source"]
        cc = cites.get(src["citation"])
        if not cc:
            E.append(f"{sid}: source citation {src['citation']} missing")
            continue
        if cc["path"] != "../" + src["file"] or cc.get("lines") != src["lines"] or cc.get("tag", "") != src["tag"]:
            E.append(f"{sid}: source {src['file']}:{src['lines']} <{src['tag']}> disagrees with citation {src['citation']} {cc}")
        if src["id"] == c["semantic"]["id"] or src["id"] == sid:
            E.append(f"{sid}: source.id must differ from the semantic id")
        if c["semantic"]["id"] != sid:
            E.append(f"{sid}: semantic.id must equal the contract id")
    sib = sibling()
    if not sib:
        W.append(f"sibling clone tree not present (standalone copy): {len(cites)} citations NOT re-read from source files - shape-checked only")
    for key, cc in cites.items():
        lines = cc.get("lines", "")
        if not re.fullmatch(r"\d+-\d+", lines):
            E.append(f"{key}: malformed lines {lines!r}")
            continue
        if not cc.get("path", "").startswith("../") or "_recon" in cc["path"] or ".playwright-mcp" in cc["path"]:
            E.append(f"{key}: citation path must point at tracked clone source relative to design-repo (../src, ../index.html), got {cc.get('path')}")
        if not sib:
            continue
        fp = (ROOT / cc["path"]).resolve()
        if not fp.is_file():
            E.append(f"{key}: file not found {cc['path']}")
            continue
        L = fp.read_text(errors="ignore").split("\n")
        a, b = map(int, lines.split("-"))
        if not (1 <= a <= b <= len(L)):
            E.append(f"{key}: range {lines} outside {cc['path']} ({len(L)} lines)")
            continue
        body = "\n".join(L[a - 1:b])
        if cc.get("tag") and cc["tag"] not in L[a - 1]:
            E.append(f"{key}: anchor {cc['tag']!r} not at {cc['path']}:{a}")
        if cc.get("quote") and cc["quote"] not in body:
            E.append(f"{key}: quote {cc['quote'][:60]!r} not found in {cc['path']}:{lines}")
        if key in HAND_CHECKED and HAND_CHECKED[key] not in body:
            E.append(f"{key}: hand-checked content {HAND_CHECKED[key]!r} not in cited range")
    for key in HAND_CHECKED:
        if key not in cites:
            E.append(f"hand-checked citation {key} missing from measured-values")


@check("budgets")
def c_budgets(E, W):
    prof = J("extraction/measured-values.json")["fieldProfiles"]["sections"]
    for sid, c in contracts().items():
        for path, f in field_defs(c["content"]["fields"]):
            ev = str(f.get("evidence", ""))
            m = re.fullmatch(r"measured:fieldProfiles\.([\w.-]+)\.(\w+)\.(maxWords|maxCount)", ev)
            if m:
                psid, kind, stat = m.groups()
                real = prof.get(psid, {}).get("kinds", {}).get(kind, {}).get(stat)
                have = f.get("maxWords") if stat == "maxWords" else f.get("maxItems")
                if real is None or have != real:
                    E.append(f"{sid}.{path}: budget {have} != measured {psid}.{kind}.{stat}={real}")
            elif f["type"] in ("text", "link") and not ev.startswith("cite."):
                E.append(f"{sid}.{path}: text budget without evidence")
            elif f["type"] == "list" and not ev.startswith(("cite.", "measured:")):
                E.append(f"{sid}.{path}: list size without evidence")


@check("token-catalog")
def c_tokens(E, W):
    cat = J("tokens/llm/token-catalog.json")
    if cat.get("generatedFrom") != TOKEN_FILES:
        E.append("catalog generatedFrom != pinned token file list")
    flat = {}
    for f in TOKEN_FILES:
        for tid, v in flatten(J(f)):
            if tid in flat:
                E.append(f"duplicate token id {tid}")
            flat[tid] = (f, v)
    ct = cat["tokens"]
    if set(flat) != set(ct):
        E.append(f"catalog out of sync: missing={sorted(set(flat) - set(ct))[:8]} extra={sorted(set(ct) - set(flat))[:8]}")
    for tid in set(flat) & set(ct):
        f, v = flat[tid]
        if ct[tid]["value"] != v["$value"] or ct[tid]["type"] != v["$type"] or ct[tid]["file"] != f or ct[tid]["category"] != tid.split(".")[0]:
            E.append(f"catalog entry {tid} differs from {f}")
    for tid, (f, v) in flat.items():
        if not str(v.get("evidence", "")).startswith("cite."):
            E.append(f"token {tid} has no evidence citation")
        if isinstance(v["$value"], str) and v["$value"].startswith("{") and v["$value"][1:-1] not in flat:
            E.append(f"token {tid} references unknown token {v['$value']}")
    theme = J("tokens/themes/light.json")["resolved"]
    for tid, val in theme.items():
        cur = flat.get(tid, (None, {"$value": None}))[1]["$value"]
        while isinstance(cur, str) and cur.startswith("{"):
            cur = flat[cur[1:-1]][1]["$value"]
        if cur != val:
            E.append(f"theme light.{tid}={val} but tokens resolve to {cur}")
    pol = J("tokens/llm/token-policy.json")
    cats = {t["category"] for t in ct.values()}
    if set(pol["catalogCategories"]) != cats:
        E.append(f"policy catalogCategories {pol['catalogCategories']} != catalog categories {sorted(cats)}")
    for fld, allowed in pol["styleFields"].items():
        for c in allowed:
            if c not in cats:
                E.append(f"policy styleFields.{fld} names unknown category {c}")
    for t in pol["allowedFonts"] + pol["accentTokens"] + pol["spacingTokensForPadding"]:
        if t not in ct:
            E.append(f"policy token {t} not in catalog")
    for s, texts in pol["surfaceTextPairs"].items():
        for t in [s] + texts:
            if t not in ct:
                E.append(f"policy surfaceTextPairs token {t} not in catalog")
    for k in pol["rawValueRestrictions"]:
        if k not in cats:
            E.append(f"policy rawValueRestrictions key {k} is not a catalog category")
    for sid, c in contracts().items():
        for t in c["layout"]["surfaceTokens"]:
            if t not in ct or t not in pol["surfaceTextPairs"]:
                E.append(f"{sid}: surface token {t} not in catalog / surfaceTextPairs")
        for ch in c["responsive"]["changes"]:
            if ch["at"] not in ct:
                E.append(f"{sid}: responsive breakpoint {ch['at']} not in catalog")


@check("asset-pins")
def c_assets(E, W):
    roles = J("assets/asset-roles.json")["roles"]
    if set(roles) != set(PINNED_AVAILABILITY):
        E.append(f"asset roles vs pin: unpinned={sorted(set(roles) - set(PINNED_AVAILABILITY))} stale={sorted(set(PINNED_AVAILABILITY) - set(roles))}")
    if PINNED_AVAILABILITY != sv.PINNED_AVAILABILITY:
        E.append("PINNED_AVAILABILITY in verify_all.py differs from schema/semantic_validate.py")
    for k, r in roles.items():
        if r.get("availability") != PINNED_AVAILABILITY.get(k):
            E.append(f"role {k}: registry availability {r.get('availability')} != pinned {PINNED_AVAILABILITY.get(k)}")
        if r.get("generationPolicy") == "must-reuse-exact":
            E.append(f"role {k}: must-reuse-exact is not allowed (generated mode never reuses source assets verbatim)")
        if r.get("availability") != "generation-safe":
            subs = r.get("generationSafeSubstitutes") or []
            if not subs:
                E.append(f"role {k}: {r.get('availability')} role needs generationSafeSubstitutes")
            for s in subs:
                if PINNED_AVAILABILITY.get(s) != "generation-safe":
                    E.append(f"role {k}: substitute {s} is not generation-safe")
    for k in sv.LIKENESS_ROLES:
        if PINNED_AVAILABILITY.get(k) != "blocked-for-generation":
            E.append(f"likeness role {k} must be blocked-for-generation")
    for sid, c in contracts().items():
        for rl in c["generatedAssetRoles"]:
            if PINNED_AVAILABILITY.get(rl) != "generation-safe":
                E.append(f"{sid}: generatedAssetRoles has non-generation-safe role {rl}")
        for path, fd in field_defs(c["content"]["fields"]):
            if fd["type"] == "media":
                for rl in fd["assetRoles"]["generated"]:
                    if PINNED_AVAILABILITY.get(rl) != "generation-safe":
                        E.append(f"{sid}.{path}: media field allows {rl} in generated mode")
                for rl in fd["assetRoles"]["reference"] + fd["assetRoles"]["generated"]:
                    if rl not in c["assetRoles"] + c["generatedAssetRoles"]:
                        E.append(f"{sid}.{path}: media role {rl} missing from contract assetRoles/generatedAssetRoles")


@check("retrieval-pins")
def c_retrieval(E, W):
    secs = contracts()
    al = J("tokens/llm/component-allowlist.json")["sections"]
    if RETRIEVAL_INELIGIBLE != set(sv.RETRIEVAL_INELIGIBLE):
        E.append("RETRIEVAL_INELIGIBLE in verify_all.py differs from schema/semantic_validate.py")
    ineligible = {k for k, c in secs.items() if c["retrievalEligible"] is False}
    if ineligible != RETRIEVAL_INELIGIBLE:
        E.append(f"contracts ineligible {sorted(ineligible)} != pin {sorted(RETRIEVAL_INELIGIBLE)}")
    for sid, c in secs.items():
        if not isinstance(c.get("retrievalEligible"), bool):
            E.append(f"{sid}: retrievalEligible must be a boolean")
        if c["retrievalEligible"] is False and len(c.get("retrievalIneligibleReason", "")) < 30:
            E.append(f"{sid}: retrievalIneligibleReason shorter than 30 chars")
        if c["retrievalEligible"] is True and "retrievalIneligibleReason" in c:
            E.append(f"{sid}: eligible section carries an ineligibility reason")
        if sv.RUNTIME_UI_RE.search(sid + " " + c["title"]) and sid not in RETRIEVAL_INELIGIBLE:
            E.append(f"{sid}: looks like runtime/utility UI ({c['title']}) but is not in RETRIEVAL_INELIGIBLE")
        if c["semantic"]["category"] == "OVERLAY" and sid not in RETRIEVAL_INELIGIBLE:
            E.append(f"{sid}: OVERLAY sections must be retrieval-ineligible")
        if al.get(sid, {}).get("retrievalEligible") != (sid not in RETRIEVAL_INELIGIBLE):
            E.append(f"{sid}: allowlist retrievalEligible disagrees with the pin")


@check("wrapper-gate")
def c_gate(E, W):
    errs, warns = wrapper_gate.run(ROOT)
    E.extend(errs)
    W.extend(warns)
    for name, val in (("HERO_WARN_PX", 1800), ("HERO_ERROR_PX", 3000), ("SHARE_WARN", 0.50), ("SHARE_ERROR", 0.60), ("REQUIRED_VIEWPORT_WIDTH", 1440), ("MIN_INFLOW_SECTIONS", 3)):
        if getattr(wrapper_gate, name) != val:
            E.append(f"wrapper_gate.{name} = {getattr(wrapper_gate, name)}, pinned value is {val}")


@check("graph-agreement")
def c_graph(E, W):
    g = J("compatibility/graph.json")
    grules = {r["id"]: r["severity"] for r in g["rules"]}
    if grules != sv.RULES:
        diff = {k for k in set(grules) | set(sv.RULES) if grules.get(k) != sv.RULES.get(k)}
        E.append(f"graph.json rules != semantic_validate.RULES for {sorted(diff)}")
    if set(g["NO_HERO_TEMPLATES"]) != sv.NO_HERO_TEMPLATES:
        E.append("graph NO_HERO_TEMPLATES != validator NO_HERO_TEMPLATES")
    secs = contracts()
    for tn, t in J("templates/templates.json")["templates"].items():
        heroes = [n for n in t["nodes"] if secs.get(n["section"], {}).get("semantic", {}).get("category") == "HERO"]
        if tn in sv.NO_HERO_TEMPLATES and heroes:
            E.append(f"template {tn} is exempt from ONE_HERO but has a HERO node")
        if tn not in sv.NO_HERO_TEMPLATES and (len(heroes) != 1 or heroes[0]["min"] != 1 or heroes[0]["max"] != 1):
            E.append(f"template {tn} must have exactly one required HERO node (ONE_HERO)")


@check("templates-routes")
def c_templates(E, W):
    T = J("templates/templates.json")["templates"]
    routes = J("templates/routes.json")["routes"]
    secs = contracts()
    for r, t in routes.items():
        if t not in T:
            E.append(f"route {r} -> unknown template {t}")
        elif not re.match(T[t]["routePattern"], r):
            E.append(f"route {r} does not match {t} pattern")
    for tn, t in T.items():
        if not any(v == tn for v in routes.values()):
            E.append(f"template {tn} has no route")
        for n in t["nodes"]:
            c = secs.get(n["section"])
            if not c:
                E.append(f"template {tn}: unknown section {n['section']}")
                continue
            if n.get("variant") and n["variant"] not in [v["id"] for v in c.get("variants", [])]:
                E.append(f"template {tn}: unknown variant {n['variant']} for {n['section']}")
            if tn not in c["templates"]:
                E.append(f"{n['section']} contract does not list template {tn}")
            if n["required"] != (n["min"] > 0) or n["repeatable"] != (n["max"] > 1):
                E.append(f"template {tn}: {n['section']} required/repeatable disagree with min/max")
            if n["position"] != c["layout"]["position"]:
                E.append(f"template {tn}: {n['section']} position {n['position']} != contract {c['layout']['position']}")
        content_nodes = [n for n in t["nodes"] if n["position"] == "in-flow" and secs[n["section"]]["semantic"]["category"] != "SHELL"]
        mapped = set()
        for ov in t["observedSequences"]:
            keys = []
            for s in ov["sequence"]:
                m = re.fullmatch(r"([\w.-]+)(?:\[([\w-]+)\])?", s)
                keys.append((m.group(1), m.group(2)))
            free = [dict(n, variant=None) if n["section"] != "work.case-chapter" else dict(n, variant=None) for n in content_nodes]
            probs = sv.match_sequence(free, keys)
            if probs:
                E.append(f"template {tn}: observed sequence of {ov['routes'][:2]} rejected by its own node list: {probs}")
            for r in ov["routes"]:
                mapped.add(r)
                if routes.get(r) != tn:
                    E.append(f"observed route {r} not mapped to {tn}")
        for r, tt in routes.items():
            if tt == tn and r not in mapped:
                E.append(f"route {r} has no observed sequence in template {tn}")
    for sid, c in secs.items():
        for tn in c["templates"]:
            if tn not in T or not any(n["section"] == sid for n in T[tn]["nodes"]):
                E.append(f"{sid} lists template {tn} which does not use it")
        if not any(sid in [n["section"] for n in t["nodes"]] for t in T.values()):
            E.append(f"{sid} is used by no template")
    measured = set(J("extraction/measured-values.json")["sectionHeights"]["routes"])
    if measured != set(routes):
        E.append(f"measured routes != routes.json: {sorted(measured ^ set(routes))}")
    app = ROOT.parent / "src" / "App.jsx"
    if app.is_file():
        clone = set(re.findall(r"\{\s*path:\s*'(/[^']*)'", app.read_text()))
        if clone != set(routes):
            E.append(f"clone ROUTES (src/App.jsx) {sorted(clone ^ set(routes))} differ from routes.json")
    else:
        W.append("sibling src/App.jsx absent - route table not re-diffed against the clone")


@check("motion")
def c_motion(E, W):
    mp = J("tokens/00-foundation/motion-patterns.json")["patterns"]
    ps = J("schema/pagespec.schema.json")["definitions"]["motion"]
    if ps.get("additionalProperties") is not False:
        E.append("motion schema must be closed (additionalProperties: false)")
    locks = {b["if"]["properties"]["pattern"]["const"]: b["then"]["properties"]["reducedMotionFallback"]["const"] for b in ps["allOf"]}
    for k, v in mp.items():
        if not v.get("reducedMotionFallback"):
            E.append(f"motion pattern {k} lacks reducedMotionFallback")
        if locks.get(k) != v.get("reducedMotionFallback"):
            E.append(f"schema const-lock for {k} ({locks.get(k)}) != motion-patterns ({v.get('reducedMotionFallback')})")
        if not v.get("evidence"):
            E.append(f"motion pattern {k} has no evidence")
    for sid, c in contracts().items():
        for p in c["motion"]["allowedPatterns"]:
            if p not in mp:
                E.append(f"{sid}: unknown motion pattern {p}")
        if c["motion"]["default"] not in c["motion"]["allowedPatterns"]:
            E.append(f"{sid}: default motion not in allowedPatterns")


@check("source-brand")
def c_brand(E, W):
    b = J("policy/source-brand.json")["sourceBrand"]["patterns"]
    need = {"brand", "person", "client", "url", "cta", "copy", "asset", "likeness", "rating"}
    if set(b) != need:
        E.append(f"sourceBrand.patterns groups {sorted(b)} != {sorted(need)}")
    for k, v in b.items():
        if v.get("rule") not in sv.RULES or not str(v.get("rule")).startswith("GENERATED_MODE_"):
            E.append(f"pattern group {k} maps to unknown rule {v.get('rule')}")
        if not str(v.get("evidence", "")).startswith("cite."):
            E.append(f"pattern group {k} has no evidence")
    for k in ("brand", "person", "client", "rating"):
        if not b.get(k, {}).get("regex"):
            E.append(f"{k} patterns empty")
        for p in b.get(k, {}).get("regex", []):
            re.compile(p)
    if len(b.get("copy", {}).get("shingleHashes", [])) < 500 or not b.get("url", {}).get("domains") or not b.get("cta", {}).get("exact"):
        E.append("copy/url/cta registries look truncated")
    if "pamidordesign.co" not in b.get("url", {}).get("domains", []):
        E.append("the source domain is missing from url.domains")
    ruled = {r for r in sv.RULES if r.startswith("GENERATED_MODE_")}
    if ruled != {v.get("rule") for v in b.values()}:
        E.append(f"GENERATED_MODE rules without a pattern group: {sorted(ruled - {v.get('rule') for v in b.values()})}")
    # copy is stored only as fingerprints
    txt = (ROOT / "policy/source-brand.json").read_text().lower()
    for phrase in ("i take the fun seriously", "somewhere between structure and instinct"):
        if phrase in txt:
            E.append(f"source-brand.json stores source copy in clear text ({phrase!r}); store fingerprints only")


@check("policy-hash")
def c_policy(E, W):
    m = J("registry.manifest.json")
    pol = J("policy/design-policy.json")
    real = policy_hash.compute(ROOT)
    if m.get("designPolicy", {}).get("contentHash") != real:
        E.append(f"manifest designPolicy.contentHash {m.get('designPolicy', {}).get('contentHash')} != recomputed {real}")
    if pol.get("contentHash") != real:
        E.append(f"policy/design-policy.json contentHash != recomputed {real}")
    if pol.get("enforcedBy") != policy_hash.ENFORCED_BY:
        E.append("policy enforcedBy list != extraction/policy_hash.py ENFORCED_BY")
    for k in ("policyId", "policyVersion", "commonIrVersion", "enforcementMode", "domain"):
        if m.get("designPolicy", {}).get(k) != pol.get(k):
            E.append(f"manifest designPolicy.{k} != policy/design-policy.json")
    if m.get("category") != pol.get("classification", {}).get("category"):
        E.append("manifest category != policy classification")
    ap = pol.get("approval", {})
    if ap.get("architectureDecisionRecorded") is not False and not ap.get("decidedBy"):
        E.append("approval recorded without a human decidedBy")
    if ap.get("architectureDecisionRecorded") is False and ap.get("status") != "defined-pending-architecture-review":
        E.append("unratified policy must stay defined-pending-architecture-review")


@check("category-wording")
def c_category(E, W):
    m = J("registry.manifest.json")
    if m.get("category") != "saas":
        txt = ((ROOT / "README.md").read_text() + (ROOT / "policy/design-policy.json").read_text() + json.dumps(m) + (ROOT / "CHANGELOG.md").read_text()).lower()
        if "saas" in txt:
            E.append("SaaS wording in a non-SaaS repo's README / CHANGELOG / manifest / policy")


@check("hygiene")
def c_hygiene(E, W):
    # pattern assembled from pieces so this file itself never contains a machine-path literal
    abs_re = re.compile("/" + r"Users/[A-Za-z0-9._-]+/|" + "/" + r"private/(tmp|var)/|" + "/" + r"home/[a-z0-9._-]+/|[A-Z]:\\" + r"Users\\")
    for p in ROOT.rglob("*"):
        if p.is_file():
            rel = p.relative_to(ROOT)
            if p.name in (".DS_Store", "Thumbs.db", "desktop.ini") or "__MACOSX" in p.parts or "__pycache__" in p.parts or p.suffix == ".pyc":
                E.append(f"junk file {rel}")
            elif p.suffix in (".json", ".md", ".py", ".mjs", ".txt") and abs_re.search(p.read_text(errors="ignore")):
                E.append(f"absolute machine path in {rel}")
    m = J("registry.manifest.json")
    eps = m.get("entryPoints", {})
    for k, v in (eps.items() if isinstance(eps, dict) else enumerate(eps)):
        if not isinstance(v, str) or v.startswith("..") or v.startswith("/"):
            E.append(f"entryPoint {k} points outside the package: {v}")
        elif not (ROOT / v).exists():
            E.append(f"entryPoint {k} missing: {v}")
    for req in ("tokens/llm/token-catalog.json", "tokens/llm/token-policy.json", "tokens/llm/component-allowlist.json", "tokens/00-foundation/motion-patterns.json"):
        if req not in (eps.values() if isinstance(eps, dict) else eps):
            E.append(f"{req} not registered in registry.manifest.json entryPoints")
    if m.get("status") == "design-review-pending":
        if m.get("productionApproved") is not False:
            E.append("manifest status design-review-pending requires productionApproved false")
    elif m.get("status") == "approved":
        if m.get("productionApproved") is not True or not str(m.get("approvedBy", "")).strip() or re.search(r"agent|claude|assistant", str(m.get("approvedBy", "")), re.I):
            E.append("manifest status approved requires productionApproved true and a human approvedBy")
    else:
        E.append("manifest status must be design-review-pending or approved")
    par = J("extraction/measured-values.json").get("parity", {})
    for ex in par.get("exceptions", []):
        pending = ex.get("status") == "pending human approval" and ex.get("approvedBy") is None
        human = ex.get("status") == "approved" and ex.get("approvedBy") and not re.search(r"agent|claude|assistant|automated", str(ex["approvedBy"]), re.I)
        if not (pending or human):
            E.append(f"parity exception {ex.get('route')} {ex.get('section')}: must be 'pending human approval' with approvedBy null until a human approves it")
        for k in ("cause", "run1", "run2"):
            if k not in ex:
                E.append(f"parity exception {ex.get('route')} {ex.get('section')}: missing {k} (exceptions are evidence)")
    if par:
        s = par.get("summary", {})
        if s.get("maxRunToRunDifference") is None or s["maxRunToRunDifference"] > par.get("gate", {}).get("runsMustAgreeWithin", 1.0):
            E.append("parity runs do not agree (or were not recorded twice)")
        for b in par.get("belowGate", []):
            if not any(e.get("route") == b["route"] and e.get("section") == b["section"] for e in par.get("exceptions", [])):
                E.append(f"parity: {b['route']} {b['section']} below the {par['gate']['perSection']}% gate without a recorded exception")


def main():
    for c in CHECKS:
        c()
    bad = 0
    for name, errs, warns in RESULTS:
        print(f"{'FAIL' if errs else 'PASS'}  {name}" + (f"  ({len(warns)} warnings)" if warns else ""))
        for e in errs:
            print(f"      ERROR {e}")
        for w in warns:
            print(f"      WARN  {w}")
        bad += bool(errs)
    print(f"\nverify_all: {len(RESULTS) - bad}/{len(RESULTS)} checks passed")
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main())
