#!/usr/bin/env python3
"""Semantic validator for this design-repo's PageSpecs.

Enforces what JSON Schema (schema/pagespec.schema.json) cannot express: the declared template's node list
(per (section, variant), min/max), route patterns, hero/position rules, case-study chapter rules, maxWords,
motion pattern/fallback pairing, asset-role availability (PINNED below), retrieval eligibility (PINNED below),
the token policy (tokens/llm/token-policy.json) and the generated-mode leakage rules
(policy/source-brand.json: GENERATED_MODE_BRAND / PERSON / CLIENT / URL / COPY / CTA / ASSET / LIKENESS / RATING).

    python3 schema/semantic_validate.py <pagespec.json> [...]
    python3 schema/semantic_validate.py --all        # every example under schema/examples

Exit 0 when no error-severity finding; warnings are printed but not fatal.
Requires: pip install jsonschema
"""
import hashlib
import json
import re
import sys
from pathlib import Path

sys.dont_write_bytecode = True
try:
    import jsonschema
except ImportError:  # pragma: no cover
    sys.stderr.write("semantic_validate.py needs the 'jsonschema' package: pip install jsonschema\n")
    sys.exit(2)

ROOT = Path(__file__).resolve().parent.parent

# ---- pins: independent of the registries on purpose (editing assets/asset-roles.json alone cannot loosen these)
PINNED_AVAILABILITY = {
    "owner-portrait-photo": "blocked-for-generation",
    "source-wordmark": "blocked-for-generation",
    "client-logo": "blocked-for-generation",
    "award-badge": "blocked-for-generation",
    "owner-contact-link": "blocked-for-generation",
    "source-endpoint": "blocked-for-generation",
    "client-case-media": "reference-only",
    "client-product-ui": "reference-only",
    "owner-artwork": "reference-only",
    "studio-showreel": "reference-only",
    "ambient-backdrop-video": "reference-only",
    "custom-cursor-image": "reference-only",
    "placeholder-brand-mark": "generation-safe",
    "fictional-person-portrait": "generation-safe",
    "generated-artwork-visual": "generation-safe",
    "generated-project-media": "generation-safe",
    "generated-product-ui-mock": "generation-safe",
    "generated-backdrop-video": "generation-safe",
    "ui-icon-glyph": "generation-safe",
    "placeholder-url": "generation-safe",
    "placeholder-endpoint": "generation-safe",
    "placeholder-rating": "generation-safe",
    "original-copy": "generation-safe",
}
LIKENESS_ROLES = {"owner-portrait-photo"}

# runtime / utility UI: never a retrieval unit
RETRIEVAL_INELIGIBLE = {
    "shell.skip-link": "keyboard utility link",
    "shell.awwwards-badge": "third-party award ribbon",
    "shell.custom-cursor": "CSS pointer cursor",
    "overlay.intro-loader": "preloader",
    "overlay.menu-panel": "menu drawer + scrim",
    "overlay.route-curtain": "route transition curtain",
    "overlay.cookie-notice": "cookie consent banner",
    "overlay.cart-drawer": "cart drawer dialog",
    "overlay.board-lightbox": "image lightbox dialog",
    "overlay.drag-cue": "transient interaction hint",
}
# any section whose id/title looks like runtime/utility UI must be in RETRIEVAL_INELIGIBLE
RUNTIME_UI_RE = re.compile(r"loader|preloader|curtain|cookie|consent|drawer|\bcart\b|lightbox|modal|dialog|\bcue\b|cursor|badge|skip|toast|popup|overlay|menu", re.I)

NO_HERO_TEMPLATES = {"art-lab"}

RULES = {
    "TEMPLATE_ROUTE": "error", "TEMPLATE_SEQUENCE": "error", "TEMPLATE_VARIANT": "error",
    "ONE_HERO": "error", "HERO_FIRST_CONTENT": "error", "LAST_CONTENT_NODE": "error",
    "PART_OPENER_FIRST": "error", "PART_FIELDS_MATCH_VARIANT": "error", "DEMO_ONCE": "error", "STAT_VALUE_NUMERIC": "error",
    "LEGAL_LABEL_STYLE": "warn", "PRICE_FORMAT": "warn",
    "MAX_WORDS": "error", "MOTION_PATTERN_NOT_ALLOWED": "error", "MOTION_FALLBACK_MISMATCH": "error",
    "ASSET_ROLE_NOT_ALLOWED": "error", "RETRIEVAL_MISMATCH": "error",
    "TOKEN_UNKNOWN": "error", "TOKEN_RAW_COLOR": "error", "TOKEN_ARBITRARY_SPACING": "error", "TOKEN_FONT_UNSUPPORTED": "error",
    "TOKEN_WRONG_CATEGORY": "error", "TOKEN_SECTION_SURFACE": "error", "TOKEN_THEME_COMBO": "error",
    "GENERATED_MODE_BRAND": "error", "GENERATED_MODE_PERSON": "error", "GENERATED_MODE_CLIENT": "error", "GENERATED_MODE_URL": "error",
    "GENERATED_MODE_COPY": "error", "GENERATED_MODE_CTA": "error", "GENERATED_MODE_ASSET": "error", "GENERATED_MODE_LIKENESS": "error",
    "GENERATED_MODE_RATING": "error",
}

RAW_COLOR_RE = re.compile(r"^\s*(#[0-9a-f]{3,8}|rgba?\(|hsla?\(|oklch\(|(red|blue|black|white|green|yellow|gray|grey|orange|purple|pink|navy|transparent|currentcolor)\s*$)", re.I)
RAW_LENGTH_RE = re.compile(r"^\s*-?[0-9.]+\s*(px|rem|em|svh|lvh|dvh|vh|vw|%|pt|ch)?\s*$|^\s*(calc|clamp|min|max|var)\(", re.I)
HOST_RE = re.compile(r"\b((?:[a-z0-9-]+\.)+(?:co|com|net|org|io|app|dev|art|design|studio|il|me|ai|xyz|example|invalid))\b", re.I)
WORD_RE = re.compile(r"\S+")


def load_registry(root=ROOT):
    root = Path(root)
    j = lambda rel: json.loads((root / rel).read_text())
    sections = {}
    for p in sorted((root / "sections").glob("*.json")):
        d = json.loads(p.read_text())
        sections[d["id"]] = d
    return {
        "root": root,
        "schema": j("schema/pagespec.schema.json"),
        "sections": sections,
        "templates": j("templates/templates.json")["templates"],
        "graph": j("compatibility/graph.json"),
        "motion": j("tokens/00-foundation/motion-patterns.json")["patterns"],
        "roles": j("assets/asset-roles.json")["roles"],
        "catalog": j("tokens/llm/token-catalog.json")["tokens"],
        "policy": j("tokens/llm/token-policy.json"),
        "brand": j("policy/source-brand.json")["sourceBrand"]["patterns"],
    }


def words(s):
    return len(WORD_RE.findall(str(s)))


def norm(s):
    return re.sub(r"\s+", " ", re.sub(r"[^\w\s']", " ", str(s).lower().replace("’", "'"))).strip()


def h16(s):
    return hashlib.sha256(s.encode()).hexdigest()[:16]


class Findings(list):
    def add(self, rule, path, msg):
        self.append({"rule": rule, "severity": RULES.get(rule, "error"), "path": path, "message": msg})

    @property
    def errors(self):
        return [f for f in self if f["severity"] == "error"]

    @property
    def warnings(self):
        return [f for f in self if f["severity"] == "warn"]


def walk(fields, content, path):
    """yield (field_def, value, path) for every leaf field instance."""
    if not isinstance(content, dict):
        return
    for name, fdef in fields.items():
        if name not in content:
            continue
        val, p = content[name], f"{path}.{name}"
        if fdef["type"] == "list":
            it = fdef["items"]
            for i, v in enumerate(val if isinstance(val, list) else []):
                if "type" in it:
                    yield it, v, f"{p}[{i}]"
                else:
                    yield from walk(it, v, f"{p}[{i}]")
        else:
            yield fdef, val, p


def all_strings(obj, path):
    if isinstance(obj, str):
        yield path, obj
    elif isinstance(obj, list):
        for i, v in enumerate(obj):
            yield from all_strings(v, f"{path}[{i}]")
    elif isinstance(obj, dict):
        for k, v in obj.items():
            if k == "assetRole":
                continue
            yield from all_strings(v, f"{path}.{k}")


def match_sequence(tnodes, keys):
    """greedy match of [(section, variant)] against template nodes; returns a list of problems."""
    probs, i = [], 0
    for tn in tnodes:
        n = 0
        while i < len(keys) and keys[i][0] == tn["section"] and (tn.get("variant") is None or keys[i][1] == tn["variant"]) and n < tn["max"]:
            i += 1
            n += 1
        if n < tn["min"]:
            probs.append(f"template requires {tn['min']}x {tn['section']}{'[' + tn['variant'] + ']' if tn.get('variant') else ''} at this position, found {n}")
    if i < len(keys):
        probs.append(f"node {i} ({keys[i][0]}{'[' + str(keys[i][1]) + ']' if keys[i][1] else ''}) is not allowed here by the template node list")
    return probs


def media_like(fdef):
    return fdef["type"] in ("media", "contact", "endpoint")


def allowed_roles(fdef, mode):
    if fdef["type"] == "media":
        return fdef["assetRoles"]["generated"] if mode == "generated" else fdef["assetRoles"]["reference"] + fdef["assetRoles"]["generated"]
    if fdef["type"] == "contact":
        return ["placeholder-url"] if mode == "generated" else ["owner-contact-link", "placeholder-url"]
    return ["placeholder-endpoint"] if mode == "generated" else ["source-endpoint", "placeholder-endpoint"]


def validate(spec, reg=None):
    reg = reg or load_registry()
    f = Findings()
    v = jsonschema.Draft7Validator(reg["schema"])
    errs = sorted(v.iter_errors(spec), key=lambda e: list(e.path))
    for e in errs:
        f.add("SCHEMA", "/".join(str(x) for x in e.path) or "$", e.message[:300])
    if errs:
        return f

    secs, tmpls = reg["sections"], reg["templates"]
    mode, tname, route = spec["mode"], spec["template"], spec["route"]
    tmpl = tmpls[tname]
    nodes = spec["nodes"]

    # ---- route + template sequence (cross-referenced against the DECLARED template's node list)
    if not re.match(tmpl["routePattern"], route):
        f.add("TEMPLATE_ROUTE", "route", f"route {route} does not match template {tname} pattern {tmpl['routePattern']}")
    for i, n in enumerate(nodes):
        c = secs[n["section"]]
        vids = [x["id"] for x in c.get("variants", [])]
        if vids and n.get("variant") not in vids:
            f.add("TEMPLATE_VARIANT", f"nodes[{i}].variant", f"{n['section']} needs a variant in {vids}")
        if not vids and "variant" in n:
            f.add("TEMPLATE_VARIANT", f"nodes[{i}].variant", f"{n['section']} declares no variants")
        if tname not in c["templates"]:
            f.add("TEMPLATE_SEQUENCE", f"nodes[{i}]", f"{n['section']} is not used by template {tname}")
    for p in match_sequence(tmpl["nodes"], [(n["section"], n.get("variant")) for n in nodes]):
        f.add("TEMPLATE_SEQUENCE", "nodes", p)

    cat = lambda n: secs[n["section"]]["semantic"]["category"]
    content_nodes = [(i, n) for i, n in enumerate(nodes) if secs[n["section"]]["layout"]["position"] == "in-flow" and cat(n) != "SHELL"]
    heroes = [i for i, n in enumerate(nodes) if cat(n) == "HERO"]
    if tname not in NO_HERO_TEMPLATES and len(heroes) != 1:
        f.add("ONE_HERO", "nodes", f"expected exactly 1 HERO node, found {len(heroes)}")
    if tname in NO_HERO_TEMPLATES and heroes:
        f.add("ONE_HERO", "nodes", f"template {tname} has no hero (NO_HERO_TEMPLATES)")
    if tname not in NO_HERO_TEMPLATES and content_nodes and cat(content_nodes[0][1]) != "HERO":
        f.add("HERO_FIRST_CONTENT", f"nodes[{content_nodes[0][0]}]", "first in-flow content node must be the HERO")
    last_req = [sid for sid, c in secs.items() if c["constraints"].get("mustBeLastContent") and tname in c["templates"]]
    if last_req and content_nodes and content_nodes[-1][1]["section"] not in last_req:
        f.add("LAST_CONTENT_NODE", f"nodes[{content_nodes[-1][0]}]", f"last in-flow content node must be {last_req[0]}")

    # ---- case-study chapter rules
    chapters = [(i, n) for i, n in enumerate(nodes) if n["section"] == "work.case-chapter"]
    if any(n.get("variant") == "part-opener" for _, n in chapters) and chapters[0][1].get("variant") != "part-opener":
        f.add("PART_OPENER_FIRST", f"nodes[{chapters[0][0]}]", "the first chapter must be a part opener when part openers are used")
    demos = {}
    for i, n in chapters:
        ct = n["content"]
        has_part = "partLabel" in ct or "partTitle" in ct
        if n.get("variant") == "part-opener" and not ("partLabel" in ct and "partTitle" in ct):
            f.add("PART_FIELDS_MATCH_VARIANT", f"nodes[{i}].content", "part-opener chapters need partLabel and partTitle")
        if n.get("variant") == "chapter" and (has_part or "partIntro" in ct):
            f.add("PART_FIELDS_MATCH_VARIANT", f"nodes[{i}].content", "plain chapters carry no part fields")
        if "demo" in ct:
            demos.setdefault(ct["demo"], []).append(i)
        for k, st in enumerate(ct.get("stats", [])):
            if not re.search(r"\d", st["value"]):
                f.add("STAT_VALUE_NUMERIC", f"nodes[{i}].content.stats[{k}].value", "count-up needs a numeric value")
    for d, idxs in demos.items():
        if len(idxs) > 1:
            f.add("DEMO_ONCE", f"nodes[{idxs[1]}].content.demo", f"demo {d} appears {len(idxs)} times")
    for i, n in enumerate(nodes):
        if n["section"] == "legal.clause" and not re.fullmatch(r"\([^a-z]+\)", n["content"]["label"]):
            f.add("LEGAL_LABEL_STYLE", f"nodes[{i}].content.label", "legal labels are parenthesised uppercase")
        for fdef, val, p in walk(secs[n["section"]]["content"]["fields"], n["content"], f"nodes[{i}].content"):
            if p.endswith(".price") and isinstance(val, str) and not re.fullmatch(r"\D{1,3}\s?\d[\d.,]*", val):
                f.add("PRICE_FORMAT", p, "price should be a currency sign followed by a number")

    # ---- per-node content, assets, motion, retrieval, tokens
    motion, policy, catalog = reg["motion"], reg["policy"], reg["catalog"]
    for i, n in enumerate(nodes):
        c = secs[n["section"]]
        base = f"nodes[{i}]"
        for fdef, val, p in walk(c["content"]["fields"], n["content"], base + ".content"):
            mw = fdef.get("maxWords")
            if mw is not None and fdef["type"] != "media":
                txt = val.get("label") if isinstance(val, dict) else val
                if isinstance(txt, str) and words(txt) > mw:
                    f.add("MAX_WORDS", p, f"{words(txt)} words > maxWords {mw}")
            if fdef["type"] == "media" and isinstance(val, dict) and words(val.get("alt", "")) > fdef["maxWords"]:
                f.add("MAX_WORDS", p + ".alt", f"alt text {words(val['alt'])} words > {fdef['maxWords']}")
            if media_like(fdef) and isinstance(val, dict):
                role = val.get("assetRole")
                if mode == "generated" and PINNED_AVAILABILITY.get(role) != "generation-safe":
                    rule = "GENERATED_MODE_LIKENESS" if role in LIKENESS_ROLES else "GENERATED_MODE_ASSET"
                    f.add(rule, p + ".assetRole", f"role {role} is {PINNED_AVAILABILITY.get(role, 'unpinned')} (pinned); generated pages need a generation-safe role")
                elif role not in allowed_roles(fdef, mode):
                    f.add("ASSET_ROLE_NOT_ALLOWED", p + ".assetRole", f"role {role} not allowed here in {mode} mode; allowed {allowed_roles(fdef, mode)}")
                src = str(val.get("src", "") or val.get("href", ""))
                if mode == "generated" and src.startswith("/") and any(src.startswith(pre) for pre in reg["brand"]["url"]["assetPathPrefixes"]):
                    f.add("GENERATED_MODE_ASSET", p, f"source asset path {src}")
                if mode == "generated" and fdef["type"] == "endpoint" and any(e in src for e in reg["brand"]["url"]["endpoints"]):
                    f.add("GENERATED_MODE_URL", p + ".href", f"source endpoint {src}")

        pat = n["motion"]["pattern"]
        if pat not in c["motion"]["allowedPatterns"]:
            f.add("MOTION_PATTERN_NOT_ALLOWED", base + ".motion.pattern", f"{pat} not in {c['motion']['allowedPatterns']}")
        if pat in motion and n["motion"]["reducedMotionFallback"] != motion[pat]["reducedMotionFallback"]:
            f.add("MOTION_FALLBACK_MISMATCH", base + ".motion.reducedMotionFallback", f"{pat} requires {motion[pat]['reducedMotionFallback']}")

        expected = n["section"] not in RETRIEVAL_INELIGIBLE
        if n.get("retrievalEligible", True) != expected:
            f.add("RETRIEVAL_MISMATCH", base + ".retrievalEligible", f"{n['section']} must be retrievalEligible={expected} (pinned)")
        if c["retrievalEligible"] != expected:
            f.add("RETRIEVAL_MISMATCH", base, f"contract {n['section']} retrievalEligible={c['retrievalEligible']} disagrees with the RETRIEVAL_INELIGIBLE pin")

        st = n.get("style", {})
        for fld, val in st.items():
            check_token(f, fld, val, f"{base}.style.{fld}", c, policy, catalog)
        if "surface" in st and "text" in st and st["surface"] in catalog and st["text"] in catalog:
            if st["text"] not in policy["surfaceTextPairs"].get(st["surface"], []):
                f.add("TOKEN_THEME_COMBO", f"{base}.style.text", f"{st['text']} is not allowed on {st['surface']}")

    if mode == "generated":
        leakage(f, spec, reg)
    return f


def check_token(f, fld, val, path, contract, policy, catalog):
    if fld in ("surface", "text", "accent") and RAW_COLOR_RE.search(str(val)):
        f.add("TOKEN_RAW_COLOR", path, f"raw colour {val!r}; use a catalog token id")
        return
    if fld == "paddingBlock" and RAW_LENGTH_RE.search(str(val)):
        f.add("TOKEN_ARBITRARY_SPACING", path, f"raw length {val!r}; use a space.section-* / space.block-* token")
        return
    if fld == "displayFont" and val not in policy["allowedFonts"]:
        f.add("TOKEN_FONT_UNSUPPORTED", path, f"{val!r} is not an allowed font ({policy['allowedFonts']})")
        return
    if val not in catalog:
        f.add("TOKEN_UNKNOWN", path, f"{val!r} is not in tokens/llm/token-catalog.json")
        return
    cat = catalog[val]["category"]
    if cat not in policy["styleFields"].get(fld, []):
        f.add("TOKEN_WRONG_CATEGORY", path, f"{val} ({cat}) not allowed for {fld}")
        return
    if fld == "accent" and val not in policy["accentTokens"]:
        f.add("TOKEN_WRONG_CATEGORY", path, f"{val} is not an accent token")
    if fld == "paddingBlock" and val not in policy["spacingTokensForPadding"]:
        f.add("TOKEN_WRONG_CATEGORY", path, f"{val} is not a section padding token")
    if fld == "surface" and val not in contract["layout"]["surfaceTokens"]:
        f.add("TOKEN_SECTION_SURFACE", path, f"{val} is not an allowed surface for {contract['id']} ({contract['layout']['surfaceTokens']})")


def leakage(f, spec, reg):
    b = reg["brand"]
    strings = list(all_strings(spec["meta"], "meta")) + list(all_strings(spec["route"], "route")) + \
        [(p, s) for i, n in enumerate(spec["nodes"]) for p, s in all_strings(n["content"], f"nodes[{i}].content")]
    rx = {k: [re.compile(p, re.I) for p in b[k]["regex"]] for k in ("brand", "person", "client", "rating")}
    domains = [d.lower() for d in b["url"]["domains"]]
    emails = [e.lower() for e in b["url"]["emails"]]
    ok_suffix = tuple(b["url"]["allowedHostSuffixes"])
    n = b["copy"]["shingleWords"]
    shingles = set(b["copy"]["shingleHashes"])
    phrases = {int(k): set(v) for k, v in b["copy"]["phraseHashes"].items()}
    cta_exact = [x.lower() for x in b["cta"]["exact"]]
    cta_rx = [re.compile(p, re.I) for p in b["cta"]["regex"]]
    seen = set()

    def add(rule, path, msg):
        if (rule, path) not in seen:
            seen.add((rule, path))
            f.add(rule, path, msg)

    for i, nd in enumerate(spec["nodes"]):
        if nd["section"] in b["rating"]["sections"]:
            add("GENERATED_MODE_RATING", f"nodes[{i}]", f"{nd['section']} is the source's award claim; generated pages carry no award badge")
    for path, s in strings:
        low = s.lower()
        for k, rule in (("brand", "GENERATED_MODE_BRAND"), ("person", "GENERATED_MODE_PERSON"), ("client", "GENERATED_MODE_CLIENT"), ("rating", "GENERATED_MODE_RATING")):
            for r in rx[k]:
                if r.search(s):
                    add(rule, path, f"matches source {k} pattern /{r.pattern}/")
                    break
        for e in emails:
            if e in low:
                add("GENERATED_MODE_URL", path, f"source e-mail {e}")
        for d in domains:
            if d in low:
                add("GENERATED_MODE_URL", path, f"source domain/profile {d}")
        for e in b["url"]["endpoints"]:
            if e in low:
                add("GENERATED_MODE_URL", path, f"source endpoint {e}")
        for host in HOST_RE.findall(s):
            if not host.lower().endswith(ok_suffix):
                add("GENERATED_MODE_URL", path, f"non-reserved host {host}; use *.example / *.invalid")
        if path.endswith(".href"):
            if low.startswith(("http://", "https://")):
                host = re.sub(r"^https?://", "", low).split("/")[0].split(":")[0]
                if not host.endswith(ok_suffix):
                    add("GENERATED_MODE_URL", path, f"external link host {host} is not reserved (.example/.invalid)")
            elif low.startswith("mailto:"):
                if not low.split("@")[-1].endswith(ok_suffix):
                    add("GENERATED_MODE_URL", path, "mailto must use a reserved domain")
            elif not low.startswith(("/", "#")):
                add("GENERATED_MODE_URL", path, f"unsupported link {s}")
        w = norm(s).split()
        for k, hs in phrases.items():
            if any(h16(" ".join(w[j:j + k])) in hs for j in range(len(w) - k + 1)):
                add("GENERATED_MODE_COPY", path, f"contains a distinctive {k}-word source phrase")
                break
        if any(h16(" ".join(w[j:j + n])) in shingles for j in range(len(w) - n + 1)):
            add("GENERATED_MODE_COPY", path, f"shares a {n}-word sequence with source copy")
        nl = " ".join(w)
        for c in cta_exact:
            if re.search(r"(^| )" + re.escape(norm(c)) + r"( |$)", nl):
                add("GENERATED_MODE_CTA", path, f"source CTA '{c}'")
        for r in cta_rx:
            if r.search(s.strip()):
                add("GENERATED_MODE_CTA", path, f"source CTA pattern /{r.pattern}/")


def main(argv):
    reg = load_registry()
    files = argv[1:]
    if not files or files == ["--all"]:
        files = sorted(str(p) for p in (ROOT / "schema/examples").rglob("*.json"))
    bad = 0
    for fp in files:
        spec = json.loads(Path(fp).read_text())
        res = validate(spec, reg)
        try:
            rel = Path(fp).resolve().relative_to(ROOT)
        except ValueError:
            rel = fp
        print(f"{'FAIL' if res.errors else 'ok  '}  {rel}  errors={len(res.errors)} warnings={len(res.warnings)}")
        for x in res:
            print(f"      {x['severity']:5} {x['rule']} @ {x['path']}: {x['message']}")
        bad += bool(res.errors)
    print(f"semantic validation: {len(files) - bad}/{len(files)} passed")
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
