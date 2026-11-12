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
