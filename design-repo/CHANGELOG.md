# Changelog

## 1.0.0 - 2026-11-12

Initial build (Situation A) against the current clone.

- 40 section contracts (source/semantic split, measured budgets, structured responsive changes, closed motion), 7 templates, 15 routes each mapped once (re-diffed against `src/App.jsx` by verify_all).
- Tokens from the clone's verbatim stylesheet (`src/original.css`) and usage histograms; LLM catalog, token policy and component allowlist generated and drift-checked.
- PageSpec `mode` (reference | generated); 7 reference + 7 generated examples (one per template each).
- Generated-mode leakage rules (brand, person, client, URL, copy, CTA, asset, likeness, rating) over patterns harvested from the rendered clone; copy stored as fingerprints only.
- 23 asset roles with three-way availability pinned in code; 10 runtime/utility sections retrieval-ineligible, pinned in code.
- Whole-page wrapper gate over heights measured at 1440 on all 15 routes (0 errors, 0 warnings).
- Policy binding: `portfolio` -> `n0-design-constraints-common` 0.1.0 + local extension, approval pending architecture review.
- Divergences from the project IA draft: product gallery + buy box merged into `hero.product-detail`; the two Rise prototypes modelled as a chapter `demo` field backed by components.
- No IR generated (none requested).

### Verification of commit 20343e3 (fresh `git clone` into a durable directory under the home folder)

- 1,876 tracked files; none under node_modules/, dist/, _recon/, .playwright-mcp/, no .DS_Store / __pycache__ / design-repo.zip.
- `npm ci` (132 packages) and `npm run build` succeeded; `vite preview` served /, /work/rise, /shop/inked-frame and a public/ asset with HTTP 200.
- In the clone: verify_all 19/19, semantic 14/14, adversarial 112 mutations rejected + 25 controls, prove_drift 57/57 + clean copy, wrapper gate 0/0, baseline audit 26 pass / 0 fail.
- design-repo copied alone into an empty directory: verify_all 19/19 (citations and route table degrade to WARN, as designed), adversarial 112 + 25, prove_drift 53/53 (4 sibling-only cases skipped).
