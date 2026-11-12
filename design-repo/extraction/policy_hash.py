#!/usr/bin/env python3
"""Content hash of the files the design policy is enforced by (baseline R15).

    python3 extraction/policy_hash.py           # print sha256:<hex>
    python3 extraction/policy_hash.py --write   # store it in registry.manifest.json and policy/design-policy.json

verify_all.py recomputes it and fails when the stored value drifts.
"""
import hashlib
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ENFORCED_BY = [
    "tokens/llm/token-policy.json",
    "compatibility/graph.json",
    "schema/pagespec.schema.json",
    "schema/semantic_validate.py",
]


def compute(root=ROOT):
    h = hashlib.sha256()
    for rel in ENFORCED_BY:
        h.update(rel.encode() + b"\0")
        h.update((Path(root) / rel).read_bytes().replace(b"\r\n", b"\n"))
        h.update(b"\0")
    return "sha256:" + h.hexdigest()


def main():
    value = compute()
    if "--write" in sys.argv:
        for rel, setter in (("registry.manifest.json", lambda o: o["designPolicy"].__setitem__("contentHash", value)),
                            ("policy/design-policy.json", lambda o: o.__setitem__("contentHash", value))):
            p = ROOT / rel
            o = json.loads(p.read_text())
            setter(o)
            p.write_text(json.dumps(o, indent=2, ensure_ascii=False) + "\n")
    print(value)


if __name__ == "__main__":
    main()
