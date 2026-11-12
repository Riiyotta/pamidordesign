#!/usr/bin/env python3
"""Whole-page-wrapper quality gate (baseline R9).

Reads measured section heights (extraction/measured-values.json -> sectionHeights, measured
at 1440px) and fails on:
  * a HERO section taller than HERO_ERROR_PX (warn above HERO_WARN_PX)
  * one in-flow section holding more than SHARE_ERROR of its page (warn above SHARE_WARN),
    skipping pages with fewer than MIN_INFLOW_SECTIONS in-flow sections; SHELL / OVERLAY and
    fixed/sticky/absolute elements take no page height
  * a route from templates/routes.json with no measurement, or a measurement at the wrong viewport
  * a whitelist entry without reviewedBy / a >= 30-char justification / a maxHeightPx above the
    measured height, or a stale entry (route/section no longer measured)
Thresholds are pinned here in code, not read from JSON. A whitelisted hit still warns.

    python3 extraction/wrapper_gate.py           # exit 1 on any error
"""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

HERO_WARN_PX = 1800
HERO_ERROR_PX = 3000
SHARE_WARN = 0.50
SHARE_ERROR = 0.60
MIN_INFLOW_SECTIONS = 3
REQUIRED_VIEWPORT_WIDTH = 1440


def run(root=ROOT):
    root = Path(root)
    errors, warnings = [], []
    mv = json.loads((root / "extraction/measured-values.json").read_text())
    routes = json.loads((root / "templates/routes.json").read_text())["routes"]
    wl = json.loads((root / "extraction/wrapper-whitelist.json").read_text())["entries"]
    cats = {}
    for p in (root / "sections").glob("*.json"):
        d = json.loads(p.read_text())
        cats[d["id"]] = d["semantic"]["category"]

    sh = mv.get("sectionHeights")
    if not sh:
        return ["sectionHeights missing from extraction/measured-values.json"], warnings
    if sh.get("viewport", {}).get("width") != REQUIRED_VIEWPORT_WIDTH:
        errors.append(f"sectionHeights measured at width {sh.get('viewport', {}).get('width')}, gate requires {REQUIRED_VIEWPORT_WIDTH}")
    measured = sh.get("routes", {})

    wl_index = {}
    for e in wl:
        key = (e.get("route"), e.get("section"))
        wl_index[key] = e
        if not str(e.get("reviewedBy", "")).strip():
            errors.append(f"whitelist {key}: reviewedBy missing")
        elif "agent" in e["reviewedBy"].lower() and "not a human" not in e["reviewedBy"].lower():
            errors.append(f"whitelist {key}: agent reviewer must say 'agent attestation, not a human sign-off'")
        if len(str(e.get("justification", "")).strip()) < 30:
            errors.append(f"whitelist {key}: justification shorter than 30 chars")
        secs = measured.get(e.get("route"), {}).get("sections", [])
        hit = [s for s in secs if s["section"] == e.get("section")]
        if not hit:
            errors.append(f"whitelist {key}: stale - no such measured section")
        elif not isinstance(e.get("maxHeightPx"), (int, float)) or e["maxHeightPx"] <= max(s["heightPx"] for s in hit):
            errors.append(f"whitelist {key}: maxHeightPx {e.get('maxHeightPx')} not above measured {max(s['heightPx'] for s in hit)}")

    for route in routes:
        if route not in measured:
            errors.append(f"{route}: no section-height measurement")
            continue
        secs = measured[route].get("sections", [])
        if not secs:
            errors.append(f"{route}: measurement has no sections")
            continue
        for s in secs:
            if s["section"] not in cats:
                errors.append(f"{route}: measured section {s['section']} has no contract")
        inflow = [s for s in secs if s.get("inFlow") and cats.get(s["section"]) not in ("SHELL", "OVERLAY") and s.get("position") not in ("fixed", "sticky", "absolute")]
        total = sum(s["heightPx"] for s in inflow)
        for s in inflow:
            key = (route, s["section"])
            wle = wl_index.get(key)
            if cats.get(s["section"]) == "HERO":
                if s["heightPx"] > HERO_ERROR_PX and not wle:
                    errors.append(f"{route}: HERO {s['section']} {s['heightPx']}px > {HERO_ERROR_PX}px")
                elif s["heightPx"] > HERO_WARN_PX:
                    warnings.append(f"{route}: HERO {s['section']} {s['heightPx']}px > {HERO_WARN_PX}px{' (whitelisted)' if wle else ''}")
            if len(inflow) >= MIN_INFLOW_SECTIONS and total:
                share = s["heightPx"] / total
                if share > SHARE_ERROR and not wle:
                    errors.append(f"{route}: {s['section']} holds {share:.1%} of the page (> {SHARE_ERROR:.0%})")
                elif share > SHARE_WARN:
                    warnings.append(f"{route}: {s['section']} holds {share:.1%} of the page (> {SHARE_WARN:.0%}){' (whitelisted)' if wle else ''}")
    return errors, warnings


def main():
    errors, warnings = run()
    for w in warnings:
        print("WARN  wrapper-gate:", w)
    for e in errors:
        print("ERROR wrapper-gate:", e)
    print(f"wrapper gate: {len(errors)} errors, {len(warnings)} warnings")
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())
