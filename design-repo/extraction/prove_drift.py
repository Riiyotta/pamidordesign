#!/usr/bin/env python3
"""Prove that verify_all.py actually catches drift.

Copies this design-repo into a fresh temp directory once per case (with read-only symlinks to the sibling clone
tree when it exists, so citation checks really re-read the source), injects one kind of drift, runs that copy's own
extraction/verify_all.py and requires (a) a non-zero exit and (b) the expected failing check name + message fragment.
Finally runs verify_all on an untouched copy and requires exit 0.

    python3 extraction/prove_drift.py
"""
import json
import re
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

sys.dont_write_bytecode = True
ROOT = Path(__file__).resolve().parent.parent


def jedit(rel, fn):
    def m(d):
        p = d / rel
        o = json.loads(p.read_text())
        fn(o)
        p.write_text(json.dumps(o, indent=2, ensure_ascii=False))
    return m


def tedit(rel, old, new):
    def m(d):
        p = d / rel
        s = p.read_text()
        if old not in s:
            raise SystemExit(f"prove_drift: anchor not found in {rel}: {old[:60]}")
        p.write_text(s.replace(old, new, 1))
    return m


def both(*ms):
    def m(d):
        for x in ms:
            x(d)
    return m


def field(o, *path):
    cur = o["content"]["fields"]
    for k in path[:-1]:
        cur = cur[k]
    return cur[path[-1]]


CASES = [
    # allowlist / registry parity
    ("allowlist phantom section", jedit("tokens/llm/component-allowlist.json", lambda o: o["sections"].__setitem__("content.blog-post", {"settableContent": [], "variants": [], "retrievalEligible": True, "motionPatterns": [], "generatedAssetRoles": []})), "allowlist-parity", "phantom"),
    ("allowlist orphan contract", jedit("tokens/llm/component-allowlist.json", lambda o: o["sections"].pop("legal.clause")), "allowlist-parity", "orphan"),
    ("allowlist settable field drift", jedit("tokens/llm/component-allowlist.json", lambda o: o["sections"]["work.case-role"]["settableContent"].append("subtitle")), "allowlist-parity", "settable content differs"),
    ("primitive phantom", jedit("tokens/llm/component-allowlist.json", lambda o: o["primitives"].__setitem__("primitive.divider", {"overridableProps": []})), "allowlist-parity", "phantom"),
    ("component file without allowlist entry", lambda d: (d / "components/component.ticker.json").write_text(json.dumps({"id": "component.ticker", "description": "x", "evidence": "cite.css.marquee", "overridableProps": []})), "allowlist-parity", "orphan"),
    # versions + counts
    ("allowlistVersion drift", jedit("registry.manifest.json", lambda o: o.__setitem__("allowlistVersion", "9.9.9")), "versions", "allowlistVersion"),
    ("pageSpecVersion drift", jedit("registry.manifest.json", lambda o: o.__setitem__("pageSpecVersion", "2.0.0")), "versions", "pageSpecVersion"),
    ("manifest count drift", jedit("registry.manifest.json", lambda o: o["counts"].__setitem__("sections", 99)), "counts", "counts.sections"),
    ("README count drift", tedit("README.md", "| routes | 15 |", "| routes | 16 |"), "counts", "README count row for routes"),
    # citations (need the sibling clone tree)
    ("citation out of range", jedit("extraction/measured-values.json", lambda o: o["citations"]["cite.home.hero"].__setitem__("lines", "10-99999")), "citations", "outside"),
    ("citation in range but wrong code", jedit("extraction/measured-values.json", lambda o: o["citations"]["cite.case.next"].__setitem__("lines", "1-5")), "citations", "not at"),
    ("citation quote no longer in range", jedit("extraction/measured-values.json", lambda o: o["citations"]["cite.js.lenis"].__setitem__("quote", "new Lenis({ lerp: 0.2")), "citations", "quote"),
    ("citation into untracked capture dir", jedit("extraction/measured-values.json", lambda o: o["citations"]["cite.js.lenis"].__setitem__("path", "../_recon/pretty/x.js")), "citations", "tracked clone source"),
    ("contract source disagrees with citation", jedit("sections/hero.case-header.json", lambda o: o["source"].__setitem__("lines", "50-60")), "citations", "disagrees with citation"),
    ("source id equals semantic id", jedit("sections/work.case-role.json", lambda o: o["source"].__setitem__("id", "work.case-role")), "citations", "must differ"),
    # budgets
    ("measured budget edited by hand", jedit("sections/narrative.faq.json", lambda o: field(o, "items")["items"]["answer"].__setitem__("maxWords", 400)), "budgets", "budget 400"),
    ("measured profile edited", jedit("extraction/measured-values.json", lambda o: o["fieldProfiles"]["sections"]["hero.home-intro"]["kinds"]["h1"].__setitem__("maxWords", 9)), "budgets", "hero.home-intro"),
    ("text budget without evidence", jedit("sections/work.next-project.json", lambda o: field(o, "eyebrow").pop("evidence")), "budgets", "without evidence"),
    # tokens
    ("token value edited without catalog", jedit("tokens/00-foundation/color.json", lambda o: o["color"]["canvas"].__setitem__("$value", "#f0efec")), "token-catalog", "catalog entry color.canvas differs"),
    ("token added without catalog", jedit("tokens/00-foundation/radius.json", lambda o: o["radius"].__setitem__("huge", {"$value": "40px", "$type": "dimension", "evidence": "cite.css.radius-full"})), "token-catalog", "catalog out of sync"),
    ("theme out of sync with tokens", jedit("tokens/themes/light.json", lambda o: o["resolved"].__setitem__("text.primary", "#000000")), "token-catalog", "theme light.text.primary"),
    ("policy category not in catalog", jedit("tokens/llm/token-policy.json", lambda o: o["rawValueRestrictions"].__setitem__("typography", "x")), "token-catalog", "rawValueRestrictions key typography"),
    # asset pins
    ("registry availability loosened", jedit("assets/asset-roles.json", lambda o: o["roles"]["client-logo"].__setitem__("availability", "generation-safe")), "asset-pins", "registry availability"),
    ("availability pin removed from validator", tedit("schema/semantic_validate.py", '    "owner-portrait-photo": "blocked-for-generation",\n', ""), "asset-pins", "differs from schema/semantic_validate.py"),
    ("contract + allowlist flipped together (asset)", both(jedit("sections/art.draggable-plane.json", lambda o: o["generatedAssetRoles"].append("owner-artwork")),
                                                          jedit("tokens/llm/component-allowlist.json", lambda o: o["sections"]["art.draggable-plane"]["generatedAssetRoles"].append("owner-artwork"))), "asset-pins", "non-generation-safe role"),
    ("media field opened to a blocked role", jedit("sections/hero.home-intro.json", lambda o: field(o, "portrait")["assetRoles"]["generated"].append("owner-portrait-photo")), "asset-pins", "allows owner-portrait-photo in generated mode"),
    ("must-reuse-exact policy introduced", jedit("assets/asset-roles.json", lambda o: o["roles"]["source-wordmark"].__setitem__("generationPolicy", "must-reuse-exact")), "asset-pins", "must-reuse-exact"),
    # retrieval pins
    ("retrieval pin removed", tedit("extraction/verify_all.py", '"overlay.board-lightbox", "overlay.drag-cue"}', '"overlay.board-lightbox"}'), "retrieval-pins", "differs from schema/semantic_validate.py"),
    ("contract + allowlist flipped together (retrieval)", both(jedit("sections/overlay.cookie-notice.json", lambda o: (o.__setitem__("retrievalEligible", True), o.pop("retrievalIneligibleReason"))),
                                                              jedit("tokens/llm/component-allowlist.json", lambda o: o["sections"]["overlay.cookie-notice"].__setitem__("retrievalEligible", True))), "retrieval-pins", "contracts ineligible"),
    ("runtime-UI section added unpinned", lambda d: (d / "sections/shell.newsletter-popup.json").write_text((d / "sections/work.case-role.json").read_text().replace('"work.case-role"', '"shell.newsletter-popup"').replace("Case-study role", "Newsletter popup")), "retrieval-pins", "looks like runtime/utility UI"),
    # wrapper gate
    ("wrapper gate threshold loosened", tedit("extraction/wrapper_gate.py", "HERO_ERROR_PX = 3000", "HERO_ERROR_PX = 9000"), "wrapper-gate", "pinned value is 3000"),
    ("measurement removed", jedit("extraction/measured-values.json", lambda o: o["sectionHeights"]["routes"].pop("/work/rise")), "wrapper-gate", "no section-height measurement"),
    ("measured at wrong viewport", jedit("extraction/measured-values.json", lambda o: o["sectionHeights"]["viewport"].__setitem__("width", 1280)), "wrapper-gate", "width 1280"),
    ("whole-page section measured", jedit("extraction/measured-values.json", lambda o: next(s for s in o["sectionHeights"]["routes"]["/privacy"]["sections"] if s["section"] == "legal.clause").__setitem__("heightPx", 40000)), "wrapper-gate", "holds"),
    # graph / templates / routes
    ("graph rule severity diverges from validator", jedit("compatibility/graph.json", lambda o: next(r for r in o["rules"] if r["id"] == "DEMO_ONCE").__setitem__("severity", "warn")), "graph-agreement", "DEMO_ONCE"),
    ("graph hero exception diverges", jedit("compatibility/graph.json", lambda o: o.__setitem__("NO_HERO_TEMPLATES", [])), "graph-agreement", "NO_HERO_TEMPLATES"),
    ("route unmapped", jedit("templates/routes.json", lambda o: o["routes"].pop("/terms")), "templates-routes", "routes"),
    ("route not served by the clone", jedit("templates/routes.json", lambda o: o["routes"].__setitem__("/work/ghost", "case-study")), "templates-routes", "src/App.jsx"),
    ("template drops a node a real route needs", jedit("templates/templates.json", lambda o: next(n for n in o["templates"]["case-study"]["nodes"] if n["section"] == "work.case-chapter").__setitem__("max", 5)), "templates-routes", "rejected by its own node list"),
    # motion
    ("motion schema opened", jedit("schema/pagespec.schema.json", lambda o: o["definitions"]["motion"].__setitem__("additionalProperties", True)), "motion", "closed"),
    ("motion fallback drift", jedit("tokens/00-foundation/motion-patterns.json", lambda o: o["patterns"]["reveal-rise"].__setitem__("reducedMotionFallback", "none")), "motion", "const-lock"),
    # examples
    ("example drifts from schema", jedit("schema/examples/generated/generated.home.json", lambda o: o.__setitem__("mode", "draft")), "schemas", "draft"),
    ("generated example leaks the owner", jedit("schema/examples/generated/generated.case-study.json", lambda o: o["meta"].__setitem__("title", "Tidewell - by Dor Sharaby")), "semantic", "GENERATED_MODE_PERSON"),
    ("generated example removed for a template", lambda d: (d / "schema/examples/generated/generated.legal.json").unlink(), "semantic", "no generated example for template legal"),
    # brand registry
    ("source-brand group removed", jedit("policy/source-brand.json", lambda o: o["sourceBrand"]["patterns"].pop("rating")), "source-brand", "sourceBrand.patterns groups"),
    ("source copy stored in clear text", jedit("policy/source-brand.json", lambda o: o["sourceBrand"]["patterns"]["copy"].__setitem__("examples", ["I take the fun seriously."])), "source-brand", "clear text"),
    # policy binding
    ("policy-enforcing file edited without re-hash", jedit("tokens/llm/token-policy.json", lambda o: o.__setitem__("allowedFonts", o["allowedFonts"] + ["font.mono"])), "policy-hash", "contentHash"),
    ("validator edited without re-hash", tedit("schema/semantic_validate.py", '"LEGAL_LABEL_STYLE": "warn"', '"LEGAL_LABEL_STYLE": "warn" '), "policy-hash", "contentHash"),
    ("policy ratified by nobody", jedit("policy/design-policy.json", lambda o: o["approval"].__setitem__("architectureDecisionRecorded", True)), "policy-hash", "decidedBy"),
    ("SaaS wording added to a portfolio repo", tedit("README.md", "## Known limits", "## Known limits\n\nA SaaS product."), "category-wording", "SaaS"),
    # hygiene
    ("absolute path leaked", tedit("README.md", "# Design-repo", "# Design-repo (" + "/Us" + "ers/someone/x/)"), "hygiene", "absolute machine path"),
    ("junk file", lambda d: (d / "sections/.DS_Store").write_text("x"), "hygiene", "junk file"),
    ("entryPoint outside package", jedit("registry.manifest.json", lambda o: o["entryPoints"].__setitem__("ia", "../ia/ia.json")), "hygiene", "points outside the package"),
    ("production approved by an agent", jedit("registry.manifest.json", lambda o: o.update(status="approved", productionApproved=True, approvedBy="build agent")), "hygiene", "human approvedBy"),
    ("parity runs disagree", jedit("extraction/measured-values.json", lambda o: o["parity"]["summary"].__setitem__("maxRunToRunDifference", 12.5)), "hygiene", "do not agree"),
    ("section below the gate without exception", jedit("extraction/measured-values.json", lambda o: o["parity"]["belowGate"].append({"route": "/shop", "section": "commerce.product-grid", "run1": 61.0, "run2": 61.2})), "hygiene", "without a recorded exception"),
    ("parity exception self-approved", jedit("extraction/measured-values.json", lambda o: o.setdefault("parity", {}).setdefault("exceptions", []).append({"route": "/x", "section": "y", "status": "approved", "approvedBy": "claude agent"})), "hygiene", "pending human approval"),
]

NEEDS_SIBLING = {"citation out of range", "citation in range but wrong code", "citation quote no longer in range", "route not served by the clone"}


def run_copy(mutate):
    tmp = Path(tempfile.mkdtemp(prefix="dr-drift-"))
    d = tmp / "design-repo"
    shutil.copytree(ROOT, d, ignore=shutil.ignore_patterns("__pycache__"))
    if (ROOT.parent / "src").is_dir():
        for name in ("src", "index.html"):
            (tmp / name).symlink_to(ROOT.parent / name)
    if mutate:
        mutate(d)
    r = subprocess.run([sys.executable, "-B", str(d / "extraction/verify_all.py")], capture_output=True, text=True)
    shutil.rmtree(tmp)
    return r


def main():
    ok = 0
    sibling = (ROOT.parent / "src" / "App.jsx").is_file()
    cases = [c for c in CASES if sibling or c[0] not in NEEDS_SIBLING]
    for name in sorted(NEEDS_SIBLING - {c[0] for c in cases}):
        print(f"SKIPPED {name:52} -> needs the sibling clone tree (citations are only shape-checked in a standalone copy)")
    for name, mutate, check_name, frag in cases:
        r = run_copy(mutate)
        failing = re.findall(r"^FAIL  (\S+)", r.stdout, re.M)
        caught = r.returncode != 0 and check_name in failing and frag in r.stdout
        ok += caught
        print(f"{'CAUGHT' if caught else 'MISSED'}  {name:52} -> {check_name}" + ("" if caught else f"  (failing: {','.join(failing)})"))
    clean = run_copy(None)
    clean_ok = clean.returncode == 0
    print(f"{'PASS' if clean_ok else 'FAIL'}    untouched copy -> verify_all exit {clean.returncode}")
    if not clean_ok:
        print(clean.stdout[-3000:])
    print(f"\nprove_drift: {ok}/{len(cases)} drift cases caught; clean copy {'passes' if clean_ok else 'FAILS'}")
    return 0 if ok == len(cases) and clean_ok else 1


if __name__ == "__main__":
    sys.exit(main())
