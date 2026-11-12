#!/usr/bin/env python3
"""Recomputes registry.manifest.json (counts, entry points, policy binding + content hash) and the README
count table from the files on disk. verify_all.py recomputes the same numbers and fails on any drift.

    python3 extraction/update_manifest.py
"""
import json
import re
import sys
from pathlib import Path

sys.dont_write_bytecode = True
ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / "extraction"))
import policy_hash  # noqa: E402

TOKEN_FILES = [
    "tokens/00-foundation/color.json", "tokens/00-foundation/typography.json", "tokens/00-foundation/spacing.json",
    "tokens/00-foundation/radius.json", "tokens/00-foundation/breakpoint.json", "tokens/00-foundation/motion.json",
    "tokens/00-foundation/elevation.json", "tokens/30-layout/layout.json", "tokens/10-semantic/color.json",
    "tokens/20-component/components.json",
]

ENTRY_POINTS = {
    "readme": "README.md", "changelog": "CHANGELOG.md",
    "pagespecSchema": "schema/pagespec.schema.json", "sectionContractSchema": "schema/section-contract.schema.json",
    "semanticValidator": "schema/semantic_validate.py", "adversarialTests": "schema/tests/adversarial_test.py",
    "examples": "schema/examples",
    "templates": "templates/templates.json", "routes": "templates/routes.json", "sections": "sections",
    "primitives": "primitives", "components": "components",
    "compatibilityGraph": "compatibility/graph.json", "assetRoles": "assets/asset-roles.json",
    "tokenCatalog": "tokens/llm/token-catalog.json", "tokenPolicy": "tokens/llm/token-policy.json",
    "componentAllowlist": "tokens/llm/component-allowlist.json", "motionPatterns": "tokens/00-foundation/motion-patterns.json",
    "theme": "tokens/themes/light.json",
    "designPolicy": "policy/design-policy.json", "sourceBrand": "policy/source-brand.json",
    "measuredValues": "extraction/measured-values.json", "verifyAll": "extraction/verify_all.py", "proveDrift": "extraction/prove_drift.py",
    "wrapperGate": "extraction/wrapper_gate.py", "wrapperWhitelist": "extraction/wrapper-whitelist.json", "policyHash": "extraction/policy_hash.py",
    "builder": "extraction/build_repo.py", "measureSections": "extraction/measure_sections.mjs", "parityHarness": "extraction/parity_harness.mjs", "paritySummary": "extraction/parity_summary.py",
    "classifier": "extraction/classify_blocks.mjs", "harvestCopy": "extraction/harvest_copy.mjs", "updateManifest": "extraction/update_manifest.py",
}


def J(rel):
    return json.loads((ROOT / rel).read_text())


def compute_counts():
    secs = [json.loads(p.read_text()) for p in sorted((ROOT / "sections").glob("*.json"))]
    ex = sorted((ROOT / "schema/examples").rglob("*.json"))
    return {
        "tokens": len(J("tokens/llm/token-catalog.json")["tokens"]),
        "tokenFiles": len(TOKEN_FILES),
        "primitives": len(list((ROOT / "primitives").glob("*.json"))),
        "components": len(list((ROOT / "components").glob("*.json"))),
        "sections": len(secs),
        "retrievalIneligibleSections": sum(1 for s in secs if s["retrievalEligible"] is False),
        "templates": len(J("templates/templates.json")["templates"]),
        "routes": len(J("templates/routes.json")["routes"]),
        "assetRoles": len(J("assets/asset-roles.json")["roles"]),
        "motionPatterns": len(J("tokens/00-foundation/motion-patterns.json")["patterns"]),
        "compatibilityRules": len(J("compatibility/graph.json")["rules"]),
        "referenceExamples": sum(1 for p in ex if J(str(p.relative_to(ROOT)))["mode"] == "reference"),
        "generatedExamples": sum(1 for p in ex if J(str(p.relative_to(ROOT)))["mode"] == "generated"),
        "citations": len(J("extraction/measured-values.json")["citations"]),
    }


def main():
    pol = J("policy/design-policy.json")
    h = policy_hash.compute(ROOT)
    pol["contentHash"] = h
    (ROOT / "policy/design-policy.json").write_text(json.dumps(pol, indent=2, ensure_ascii=False) + "\n")
    counts = compute_counts()
    allow = J("tokens/llm/component-allowlist.json")
    man = {
        "repositoryId": "pamidor-portfolio-design-repo",
        "repositoryVersion": "1.0.0",
        "pageSpecVersion": J("schema/pagespec.schema.json")["properties"]["pageSpecVersion"]["const"],
        "allowlistVersion": allow["version"],
        "versionFieldNote": "allowlistVersion and pageSpecVersion are machine-checked by extraction/verify_all.py (allowlist file version / schema const). repositoryVersion is documentation-only and hand-maintained.",
        "status": "design-review-pending",
        "productionApproved": False,
        "category": pol["classification"]["category"],
        "designPolicy": {k: pol[k] for k in ("policyId", "policyVersion", "commonIrVersion", "enforcementMode", "domain")} | {"contentHash": h, "localExtension": pol["localExtension"]["id"], "approval": pol["approval"]["status"]},
        "sourceStack": {
            "note": "Documentation only - never used in token names, section ids, schema fields or validator logic.",
            "original": "Server-rendered React framework build (Next.js, Turbopack chunks), Lenis 1.3.26 smooth scroll, custom requestAnimationFrame / IntersectionObserver motion, CSS keyframes; compiled utility-class stylesheet.",
            "clone": "React 18 + Vite 5 + react-router 6; the original compiled stylesheet kept verbatim (src/original.css); Tailwind v3 scans only src/tw/**.",
        },
        "sourceProject": {"relativePath": "..", "liveSite": "https://pamidordesign.co", "sensitivity": "live portfolio of a real, named person with real client work - never publish this repo; generated pages carry no source identity"},
        "defaultTheme": "light",
        "schemaValidatedThemes": ["light"],
        "ir": "No IR was requested and none exists in this repo (BASELINE R13).",
        "counts": counts,
        "entryPoints": ENTRY_POINTS,
    }
    (ROOT / "registry.manifest.json").write_text(json.dumps(man, indent=2, ensure_ascii=False) + "\n")
    readme = (ROOT / "README.md").read_text()
    table = "\n".join(["| item | count |", "|---|---|"] + [f"| {k} | {v} |" for k, v in counts.items()])
    readme = re.sub(r"<!-- counts:start -->.*?<!-- counts:end -->", "<!-- counts:start -->\n" + table + "\n<!-- counts:end -->", readme, flags=re.S)
    (ROOT / "README.md").write_text(readme)
    print("manifest + README counts updated:", counts, h)


if __name__ == "__main__":
    main()
