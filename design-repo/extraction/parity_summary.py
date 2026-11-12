#!/usr/bin/env python3
"""Merge two parity_harness.mjs runs into extraction/measured-values.json -> parity (numbers only, no copy,
no screenshots). Requires the two runs to agree (max per-section difference <= AGREE_POINTS).

    python3 extraction/parity_summary.py <run1.json> <run2.json> [--date YYYY-MM-DD]

Sections below GATE are listed under `belowGate`; any exception must be added by hand with
status "pending human approval" and approvedBy null (verify_all enforces that; an agent never approves one).
"""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
GATE = 80.0
AGREE_POINTS = 1.0


def rows(run):
    out = {}
    for r, v in run["routes"].items():
        if "error" in v:
            out[(r, "__route__", 0)] = {"error": v["error"]}
            continue
        for s in v["sections"]:
            out[(r, s["section"], s["index"])] = s
    return out


def main(a, b, date):
    r1, r2 = json.loads(Path(a).read_text()), json.loads(Path(b).read_text())
    k1, k2 = rows(r1), rows(r2)
    per_route, scores1, scores2, diffs, below, errors = {}, [], [], [], [], []
    for key in sorted(set(k1) | set(k2), key=lambda k: (k[0], k[2])):
        route, sec, i = key
        s1, s2 = k1.get(key, {}), k2.get(key, {})
        if "error" in s1 or "error" in s2 or s1.get("match") is None or s2.get("match") is None:
            errors.append({"route": route, "section": sec, "index": i, "error": s1.get("error") or s2.get("error") or "not measured in both runs"})
            continue
        m1, m2 = s1["match"], s2["match"]
        scores1.append(m1)
        scores2.append(m2)
        diffs.append(abs(m1 - m2))
        row = {"index": i, "section": sec, "variant": s1.get("variant"), "cloneH": s1["cloneH"], "liveH": s1["liveH"], "windows": len(s1["windows"]),
               "run1": m1, "run2": m2, "minWindowRun1": s1["minWindow"], "minWindowRun2": s2["minWindow"]}
        per_route.setdefault(route, {"cloneDoc": r1["routes"][route]["cloneDoc"], "liveDoc": r1["routes"][route]["liveDoc"], "sections": []})["sections"].append(row)
        if min(m1, m2) < GATE:
            below.append({"route": route, "section": sec, "index": i, "run1": m1, "run2": m2})
    avg = lambda xs: round(sum(xs) / len(xs), 2) if xs else None
    parity = {
        "measuredOn": date,
        "tool": "extraction/parity_harness.mjs (clone dev server vs live site), merged by extraction/parity_summary.py",
        "capture": r1["capture"],
        "gate": {"perSection": GATE, "runsMustAgreeWithin": AGREE_POINTS},
        "summary": {
            "sections": len(scores1), "routes": len(per_route),
            "run1": {"average": avg(scores1), "min": min(scores1) if scores1 else None, "belowGate": sum(1 for x in scores1 if x < GATE)},
            "run2": {"average": avg(scores2), "min": min(scores2) if scores2 else None, "belowGate": sum(1 for x in scores2 if x < GATE)},
            "maxRunToRunDifference": round(max(diffs), 2) if diffs else None,
            "docHeightsEqual": sum(1 for v in per_route.values() if v["cloneDoc"] == v["liveDoc"]),
        },
        "belowGate": below,
        "notMeasured": errors,
        "exceptions": [],
        "perRoute": per_route,
    }
    mvp = ROOT / "extraction/measured-values.json"
    mv = json.loads(mvp.read_text())
    mv["parity"] = parity
    mvp.write_text(json.dumps(mv, indent=2, ensure_ascii=False) + "\n")
    print(json.dumps(parity["summary"], indent=1))
    print("below gate:", below)
    print("not measured:", errors)
    agree = not diffs or max(diffs) <= AGREE_POINTS
    print("runs agree:" if agree else "RUNS DISAGREE:", round(max(diffs), 2) if diffs else None)
    return 0 if agree and not errors else 1


if __name__ == "__main__":
    args = [x for x in sys.argv[1:] if not x.startswith("--")]
    date = sys.argv[sys.argv.index("--date") + 1] if "--date" in sys.argv else "unknown"
    if "--date" in sys.argv:
        args.remove(date)
    sys.exit(main(args[0], args[1], date))
