#!/usr/bin/env python3
"""Builds the design-repo from extraction/build_spec.py + measurements (+ an optional copy harvest).

    python3 extraction/build_repo.py                                  # rebuild from the stored measurements
    python3 extraction/build_repo.py --measure <measure.json>         # merge a fresh measure_sections.mjs run
    python3 extraction/build_repo.py --harvest <harvest.json>         # refresh policy/source-brand.json

Needs the sibling clone tree (../src, ../index.html): every citation needle is resolved against the real file
here, so line numbers are never typed by hand (BASELINE R16). Writes tokens, sections, templates, routes, graph,
assets, schema, allowlist, catalog, source-brand and the examples; then run extraction/update_manifest.py.
"""
import argparse
import hashlib
import json
import re
import sys
from pathlib import Path

sys.dont_write_bytecode = True
ROOT = Path(__file__).resolve().parent.parent
PROJ = ROOT.parent
sys.path.insert(0, str(ROOT / "extraction"))
import build_spec as B  # noqa: E402
import examples_spec as X  # noqa: E402


def W(rel, obj):
    p = ROOT / rel
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(json.dumps(obj, indent=2, ensure_ascii=False) + "\n")


def R(rel):
    return json.loads((ROOT / rel).read_text())


# ------------------------------------------------------------------------------------------- citations
def resolve_citations():
    out = {}
    cache = {}
    for key, (file, needle, end, tag, after, quote) in B.C.items():
        if file not in cache:
            fp = PROJ / file
            if not fp.is_file():
                raise SystemExit(f"build_repo: cited file missing {file} (needs the sibling clone tree)")
            cache[file] = fp.read_text().split("\n")
        L = cache[file]
        start = 0
        if after:
            hits = [i for i, l in enumerate(L) if after in l]
            if not hits:
                raise SystemExit(f"{key}: after-needle not found in {file}: {after!r}")
            start = hits[0]
        a = next((i for i in range(start, len(L)) if needle in L[i]), None)
        if a is None:
            raise SystemExit(f"{key}: needle not found in {file}: {needle!r}")
        b = a
        if end:
            b = next((i for i in range(a, len(L)) if end in L[i]), None)
            if b is None:
                raise SystemExit(f"{key}: end needle not found in {file} after line {a + 1}: {end!r}")
        q = quote or needle
        body = "\n".join(L[a:b + 1])
        if q not in body:
            raise SystemExit(f"{key}: quote not in resolved range {file}:{a + 1}-{b + 1}: {q[:60]!r}")
        if tag and tag not in L[a]:
            raise SystemExit(f"{key}: tag {tag!r} not on line {a + 1} of {file}")
        c = {"path": "../" + file, "lines": f"{a + 1}-{b + 1}", "quote": q}
        if tag:
            c["tag"] = tag
        out[key] = c
    return out


# ------------------------------------------------------------------------------------------- measurements
def merge_measure(mv, path):
    m = json.loads(Path(path).read_text())["viewports"]
    big = m["1440x900"]
    routes = {}
    profiles = {}
    for r, v in big.items():
        secs = []
        for s in v["sections"]:
            secs.append({k: s[k] for k in ("section", "variant", "top", "heightPx", "position", "inFlow")})
            pr = profiles.setdefault(s["section"], {"instances": 0, "kinds": {}})
            pr["instances"] += 1
            for kind, val in s["profile"].items():
                if isinstance(val, dict):
                    k = pr["kinds"].setdefault(kind, {"maxWords": 0, "maxCount": 0})
                    k["maxWords"] = max(k["maxWords"], val["maxWords"])
                    k["maxCount"] = max(k["maxCount"], val["count"])
        routes[r] = {"docHeight": v["docHeight"], "sections": secs}
    mv["sectionHeights"] = {
        "viewport": {"width": 1440, "height": 900},
        "method": "extraction/measure_sections.mjs + classify_blocks.mjs on the local clone; getBoundingClientRect per classified block; intro marked seen",
        "routes": routes,
    }
    mv["responsiveHeights"] = {
        vp: {r: {"docHeight": v["docHeight"], "sections": [[s["section"], s["heightPx"]] for s in v["sections"] if s["inFlow"]]} for r, v in data.items()}
        for vp, data in m.items() if vp != "1440x900"
    }
    mv["fieldProfiles"] = {"note": "max words / max element count per element kind across every measured instance (1440x900); numbers only", "sections": profiles}


# ------------------------------------------------------------------------------------------- fields
def resolve_field(sid, f, prof):
    f = json.loads(json.dumps(f))
    kinds = prof.get(sid, {}).get("kinds", {})
    if f["type"] == "list":
        if "count" in f:
            k = f.pop("count")
            if k not in kinds:
                raise SystemExit(f"{sid}: count kind {k} not measured")
            f["maxItems"] = kinds[k]["maxCount"]
            f["evidence"] = f"measured:fieldProfiles.{sid}.{k}.maxCount"
        it = f["items"]
        if "type" in it:
            f["items"] = resolve_field(sid, it, prof)
        else:
            f["items"] = {n: resolve_field(sid, v, prof) for n, v in it.items()}
        return f
    if "measure" in f:
        k = f.pop("measure")
        if k not in kinds:
            raise SystemExit(f"{sid}: measure kind {k} not measured")
        f["maxWords"] = kinds[k]["maxWords"]
        f["evidence"] = f"measured:fieldProfiles.{sid}.{k}.maxWords"
    return f


def field_schema(f):
    t = f["type"]
    if t == "text":
        return {"type": "string", "minLength": 1}
    if t in ("link", "contact", "endpoint", "media"):
        return {"$ref": f"#/definitions/{t}"}
    if t == "bool":
        return {"type": "boolean"}
    if t == "enum":
        return {"enum": f["enum"]}
    if t == "list":
        it = f["items"]
        items = field_schema(it) if "type" in it else obj_schema(it)
        return {"type": "array", "minItems": f["minItems"], "maxItems": f["maxItems"], "items": items}
    raise SystemExit(f"unknown field type {t}")


def obj_schema(fields):
    return {"type": "object", "additionalProperties": False,
            "required": [n for n, f in fields.items() if f["required"]],
            "properties": {n: field_schema(f) for n, f in fields.items()}}


def roles_in(fields):
    ref, gen = set(), set()
    stack = list(fields.values())
    while stack:
        f = stack.pop()
        if f["type"] == "media":
            ref |= set(f["assetRoles"]["reference"])
            gen |= set(f["assetRoles"]["generated"])
        elif f["type"] == "contact":
            ref.add("owner-contact-link"); gen.add("placeholder-url")
        elif f["type"] == "endpoint":
            ref.add("source-endpoint"); gen.add("placeholder-endpoint")
        elif f["type"] == "list":
            it = f["items"]
            stack.extend([it] if "type" in it else it.values())
    return ref, gen


# ------------------------------------------------------------------------------------------- build
def build(args):
    mv_path = ROOT / "extraction/measured-values.json"
    mv = json.loads(mv_path.read_text()) if mv_path.exists() else {}
    if args.measure:
        merge_measure(mv, args.measure)
    if "sectionHeights" not in mv:
        raise SystemExit("no measurements: run measure_sections.mjs and pass --measure")
    mv["citations"] = resolve_citations()
    prof = mv["fieldProfiles"]["sections"]

    # tokens
    catalog = {}
    for f, toks in B.TOKENS.items():
        tree = {}
        for tid, typ, val, ev, note in toks:
            if ev not in B.C:
                raise SystemExit(f"token {tid}: unknown evidence {ev}")
            parts = tid.split(".")
            cur = tree
            for p in parts[:-1]:
                cur = cur.setdefault(p, {})
            cur[parts[-1]] = {"$type": typ, "$value": val, "evidence": ev, **({"note": note} if note else {})}
            catalog[tid] = {"category": parts[0], "type": typ, "value": val, "file": f, "evidence": ev}
        W(f, tree)
    # resolve semantic references for the theme
    def res(v):
        while isinstance(v, str) and v.startswith("{"):
            v = catalog[v[1:-1]]["value"]
        return v
    W("tokens/themes/light.json", {"theme": "light", "default": True, "note": "The site has one theme (warm canvas). Night is a section surface, not a theme.",
                                   "resolved": {t: res(c["value"]) for t, c in catalog.items() if c["file"] == "tokens/10-semantic/color.json"}})
    W("tokens/llm/token-catalog.json", {"catalogVersion": "1.0.0", "generatedFrom": B.TOKEN_FILES,
                                        "note": "Flattened from the token files by extraction/build_repo.py; verify_all re-derives and diffs it.", "tokens": catalog})

    # motion patterns
    W("tokens/00-foundation/motion-patterns.json", {"version": "1.0.0", "patterns": {k: {"description": d, "reducedMotionFallback": fb, "evidence": ev} for k, (d, fb, ev) in B.MOTION.items()}})

    # asset roles
    roles = {}
    for k, (av, pol, subs, desc, ev) in B.ROLES.items():
        r = {"availability": av, "generationPolicy": pol, "description": desc, "evidence": ev}
        if subs:
            r["generationSafeSubstitutes"] = subs
        roles[k] = r
    W("assets/asset-roles.json", {
        "version": "1.0.0",
        "licensing": "The source is the live portfolio of a real, named designer. Every reference-only or blocked role is that person's, their clients' or a third party's property. Generated pages never reproduce, trace, restyle or describe the owner's likeness, wordmark, client logos, client work, artworks, award badge, contact details or endpoints; they use the generation-safe substitutes.",
        "availabilityPinnedIn": ["schema/semantic_validate.py PINNED_AVAILABILITY", "extraction/verify_all.py PINNED_AVAILABILITY"],
        "notApplicable": "No reviews, testimonials or star ratings exist in the source. Its only rating-like claims are a third-party award ribbon and a launch ranking inside a case study (both blocked by GENERATED_MODE_RATING).",
        "roles": roles})

    # sections
    contracts = {}
    for s in B.S:
        sid = s["id"]
        fields = {n: resolve_field(sid, f, prof) for n, f in s["fields"].items()}
        ref, gen = roles_in(fields)
        c = {
            "id": sid, "title": s["title"], "contractVersion": "1.0.0",
            "source": {"id": "src." + sid.replace(".", "-"), "file": s["src"][0], "tag": B.C[s["src"][1]][3] or "", "lines": mv["citations"][s["src"][1]]["lines"], "citation": s["src"][1]},
            "semantic": {"id": sid, "category": s["category"], "purpose": s["purpose"]},
            "retrievalEligible": "ineligible" not in s,
        }
        if "ineligible" in s:
            c["retrievalIneligibleReason"] = s["ineligible"]
        c["templates"] = s["templates"]
        if s.get("variants"):
            c["variants"] = [{"id": v, "description": d, "evidence": e} for v, d, e in s["variants"]]
        c["content"] = {"fields": fields}
        c["constraints"] = s.get("constraints", {})
        c["layout"] = {"position": s["position"], "surfaceTokens": s["surfaces"], "height": s["height"]}
        c["responsive"] = {"breakpoints": sorted({x[0] for x in s["responsive"]}),
                           "changes": [{"at": a, "property": p, "below": b, "atOrAbove": o, "evidence": e} for a, p, b, o, e in s["responsive"]]}
        c["motion"] = {"allowedPatterns": s["motion"], "default": s.get("default", s["motion"][0])}
        c["assetRoles"] = sorted(ref)
        c["generatedAssetRoles"] = sorted(gen | {"original-copy"})
        if s.get("instances"):
            c["instances"] = s["instances"]
        if s.get("notes"):
            c["notes"] = s["notes"]
        if sid in prof:
            c["measuredInstances"] = prof[sid]["instances"]
        contracts[sid] = c
        W(f"sections/{sid}.json", c)
    for p in (ROOT / "sections").glob("*.json"):
        if p.stem not in contracts:
            p.unlink()

    # templates + routes
    routes_doc = R("templates/routes.json")["routes"]
    seq = mv["sectionHeights"]["routes"]
    templates = {}
    for tn, (title, pat, cite, nodes) in B.TEMPLATES.items():
        tnodes = []
        for n in nodes:
            sid, mn, mx = n[:3]
            var = n[3] if len(n) > 3 else None
            tn_ = {"section": sid}
            if var:
                tn_["variant"] = var
            tn_.update({"min": mn, "max": mx, "required": mn > 0, "repeatable": mx > 1, "position": contracts[sid]["layout"]["position"]})
            tnodes.append(tn_)
        observed = {}
        for r, t in routes_doc.items():
            if t != tn:
                continue
            ss = [s for s in seq[r]["sections"] if s["inFlow"] and contracts[s["section"]]["semantic"]["category"] != "SHELL"]
            key = tuple(f"{s['section']}" + (f"[{s['variant']}]" if s["variant"] and s["section"] == "work.case-chapter" else "") for s in sorted(ss, key=lambda x: x["top"]))
            observed.setdefault(key, []).append(r)
        templates[tn] = {"title": title, "routePattern": pat, "citation": cite, "nodes": tnodes,
                         "observedSequences": [{"sequence": list(k), "routes": v} for k, v in observed.items()]}
    W("templates/templates.json", {"templatesVersion": "1.0.0",
                                   "note": "Node order = PageSpec node order. In-flow content order is the measured order on every route (observedSequences); fixed/overlay chrome is listed first (skip link, loader, nav, menu) or last (footer, badge, notices, drawer, lightbox, curtain, cursor).",
                                   "templates": templates})
    W("templates/routes.json", {"routesVersion": "1.0.0", "citation": "cite.routes",
                                "note": "Every route the clone serves (src/App.jsx ROUTES), each mapped to exactly one template.", "routes": routes_doc})

    # graph (rules mirror schema/semantic_validate.py RULES; verify_all checks agreement)
    W("compatibility/graph.json", X.GRAPH)

    # schema
    motion_enum = list(B.MOTION)
    role_enum = list(B.ROLES)
    sec_ids = sorted(contracts)
    defs = {
        "link": {"type": "object", "additionalProperties": False, "required": ["label", "href"], "properties": {"label": {"type": "string", "minLength": 1}, "href": {"type": "string", "minLength": 1}}},
        "contact": {"type": "object", "additionalProperties": False, "required": ["assetRole", "label", "href"], "properties": {"assetRole": {"enum": ["owner-contact-link", "placeholder-url"]}, "label": {"type": "string", "minLength": 1}, "href": {"type": "string", "pattern": "^(mailto:|https?://|/)"}}},
        "endpoint": {"type": "object", "additionalProperties": False, "required": ["assetRole", "href"], "properties": {"assetRole": {"enum": ["source-endpoint", "placeholder-endpoint"]}, "href": {"type": "string", "minLength": 1}}},
        "media": {"type": "object", "additionalProperties": False, "required": ["assetRole", "alt"], "properties": {"assetRole": {"$ref": "#/definitions/assetRole"}, "src": {"type": "string"}, "alt": {"type": "string"}}},
        "assetRole": {"enum": role_enum},
        "motion": {"type": "object", "additionalProperties": False, "required": ["pattern", "reducedMotionFallback"],
                   "properties": {"pattern": {"enum": motion_enum}, "reducedMotionFallback": {"type": "string"}},
                   "allOf": [{"if": {"properties": {"pattern": {"const": k}}}, "then": {"properties": {"reducedMotionFallback": {"const": v[1]}}}} for k, v in B.MOTION.items()]},
        "style": {"type": "object", "additionalProperties": False, "properties": {k: {"type": "string"} for k in ("surface", "text", "accent", "paddingBlock", "displayFont")}},
        "node": {"type": "object", "additionalProperties": False, "required": ["section", "content", "motion"],
                 "properties": {"section": {"enum": sec_ids}, "variant": {"type": "string"}, "retrievalEligible": {"type": "boolean"},
                                "content": {"type": "object"}, "motion": {"$ref": "#/definitions/motion"}, "style": {"$ref": "#/definitions/style"}},
                 "allOf": [{"if": {"properties": {"section": {"const": sid}}}, "then": {"properties": {"content": {"$ref": f"#/definitions/content.{sid}"}}}} for sid in sec_ids]},
    }
    for sid in sec_ids:
        defs[f"content.{sid}"] = obj_schema(contracts[sid]["content"]["fields"])
    W("schema/pagespec.schema.json", {
        "$schema": "http://json-schema.org/draft-07/schema#", "$id": "pagespec.schema.json", "title": "PageSpec",
        "description": "A page composed from this design-repo. mode=reference reconstructs a source page (real content allowed as evidence); mode=generated is a new page that must carry no source identity (enforced by schema/semantic_validate.py GENERATED_MODE_* rules).",
        "type": "object", "additionalProperties": False,
        "required": ["pageSpecVersion", "mode", "template", "route", "meta", "nodes"],
        "properties": {
            "pageSpecVersion": {"const": X.PAGESPEC_VERSION},
            "mode": {"enum": ["reference", "generated"]},
            "template": {"enum": list(templates)},
            "route": {"type": "string", "pattern": "^/"},
            "meta": {"type": "object", "additionalProperties": False, "required": ["title"], "properties": {"title": {"type": "string", "minLength": 1}, "description": {"type": "string"}}},
            "nodes": {"type": "array", "minItems": 1, "items": {"$ref": "#/definitions/node"}},
        },
        "definitions": defs,
    })
    W("schema/section-contract.schema.json", X.section_contract_schema(list(templates), motion_enum, role_enum, sorted({c["responsive"]["changes"][0]["at"] for c in contracts.values()} | {"breakpoint.sm", "breakpoint.md", "breakpoint.lg", "breakpoint.xl", "breakpoint.wide", "breakpoint.2xl", "breakpoint.max"})))

    # primitives / components
    for kind, items in (("primitives", B.PRIMITIVES), ("components", B.COMPONENTS)):
        for p in (ROOT / kind).glob("*.json"):
            if p.stem not in items:
                p.unlink()
        for k, (desc, ev, props) in items.items():
            W(f"{kind}/{k}.json", {"id": k, "description": desc, "evidence": ev, "overridableProps": props})

    # allowlist
    W("tokens/llm/component-allowlist.json", {
        "version": X.ALLOWLIST_VERSION,
        "note": "Closed list of what a generator may instantiate and set. verify_all checks parity with contracts, schema and files both ways.",
        "sections": {sid: {"settableContent": list(c["content"]["fields"]), "variants": [v["id"] for v in c.get("variants", [])],
                           "retrievalEligible": c["retrievalEligible"], "motionPatterns": c["motion"]["allowedPatterns"],
                           "generatedAssetRoles": c["generatedAssetRoles"]} for sid, c in sorted(contracts.items())},
        "primitives": {k: {"overridableProps": v[2]} for k, v in B.PRIMITIVES.items()},
        "components": {k: {"overridableProps": v[2]} for k, v in B.COMPONENTS.items()},
        "assetRoles": role_enum, "motionPatterns": motion_enum,
        "nodeProps": ["section", "variant", "retrievalEligible", "content", "motion", "style"],
        "styleProps": ["surface", "text", "accent", "paddingBlock", "displayFont"],
    })
    W("tokens/llm/token-policy.json", X.token_policy(catalog))

    # source brand
    if args.harvest:
        W("policy/source-brand.json", X.source_brand(json.loads(Path(args.harvest).read_text()), PROJ))

    # examples
    for p in (ROOT / "schema/examples").rglob("*.json"):
        p.unlink()
    for name, spec in X.examples().items():
        W(f"schema/examples/{spec['mode']}/{name}.json", spec)

    mv["evidenceNote"] = "Citation paths are relative to design-repo/ and point into the tracked clone source (../src, ../index.html). In a standalone copy of design-repo/ they degrade to WARNINGS in verify_all (shape-checked only)."
    W("extraction/measured-values.json", mv)
    print(f"built: {len(contracts)} sections, {len(templates)} templates, {len(catalog)} tokens, {len(roles)} roles, {len(mv['citations'])} citations, {len(X.examples())} examples")


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--measure")
    ap.add_argument("--harvest")
    build(ap.parse_args())
