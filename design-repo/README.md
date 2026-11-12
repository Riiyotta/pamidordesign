# Design-repo: personal brand & product design portfolio

An AI-ready design system extracted from a pixel-faithful local clone of a live personal portfolio (brand and
product designer + small sold-out art shop, 15 routes). A generator composes **PageSpecs** from this repo's
templates, section contracts and tokens; `schema/semantic_validate.py` decides whether a PageSpec is acceptable.

**Status:** `design-review-pending`, `productionApproved: false`. Category `portfolio`, bound to the generic
`n0-design-constraints-common` 0.1.0 policy with a local extension (`policy/design-policy.json`); approval
`defined-pending-architecture-review`, no architecture decision recorded. Nothing here has been signed off by a person.

**Sensitivity.** The source is the live site of a real, named designer with real client case studies, real client
logos, the owner's portrait photographs, personal artworks and a third-party award ribbon. This repo is for internal
use and must not be published. `mode: "reference"` examples carry real copy and asset paths as evidence;
`mode: "generated"` PageSpecs may contain none of it (rules `GENERATED_MODE_BRAND / PERSON / CLIENT / URL / COPY / CTA /
ASSET / LIKENESS / RATING`, patterns harvested from the rendered clone into `policy/source-brand.json`; copy is stored
there only as sha256 fingerprints).

## Counts

<!-- counts:start -->
| item | count |
|---|---|
| tokens | 101 |
| tokenFiles | 10 |
| primitives | 8 |
| components | 10 |
| sections | 40 |
| retrievalIneligibleSections | 10 |
| templates | 7 |
| routes | 15 |
| assetRoles | 23 |
| motionPatterns | 17 |
| compatibilityRules | 33 |
| referenceExamples | 7 |
| generatedExamples | 7 |
| citations | 179 |
<!-- counts:end -->

Adversarial suite and drift proof sizes are printed by the scripts themselves (see *Verify*).

## Layout

```
registry.manifest.json      status, versions, counts (recomputed), entry points, category + policy binding + contentHash
tokens/00-foundation/       color, typography, spacing (--px design unit), radius, breakpoint, motion, elevation, motion-patterns
tokens/10-semantic/         surface / text / border / accent roles -> palette references
tokens/20-component/        button padding, chip radius, rule height, footer clip start
tokens/30-layout/           canvas max width, 5-column editorial grid, nav height
tokens/themes/light.json    the only theme (warm canvas); "night" is a section surface, not a theme
tokens/llm/                 token-catalog.json (generated), token-policy.json, component-allowlist.json (generated)
primitives/ components/     8 primitives, 10 components, each citing a real source line
sections/                   40 section contracts: source{} provenance + semantic{} taxonomy, measured budgets, motion, responsive
templates/                  templates.json (7 templates + observed sequences), routes.json (15 routes, each mapped once)
compatibility/graph.json    33 rules (error|warn), each implemented in the validator with the same id and severity
assets/asset-roles.json     23 closed roles, three-way availability pinned in code, substitutes, licensing
policy/                     design-policy.json (category, rules, approval), source-brand.json (harvested patterns + fingerprints)
schema/                     pagespec.schema.json, section-contract.schema.json, semantic_validate.py, examples/{reference,generated}, tests/
extraction/                 build + measure + harvest + parity tools, measured-values.json, verify_all, prove_drift, wrapper gate
```

## How it was built (evidence, not guesses)

* **Pre-existing groundwork used:** the project's information architecture (`../ia/ia.json`, 15 routes, 7 templates,
  43 sections) was the first draft of the taxonomy. It was spot-checked against `src/` and the rendered DOM; the
  divergences are listed below.
* **Measured** with `extraction/measure_sections.mjs` (headless Chromium through any Playwright install passed in
  `PLAYWRIGHT_MODULE`; clone served by its own dev server on `BASE_URL`) at 1440x900, 768x1024 and 390x844. Every
  in-flow block of every route is classified by `extraction/classify_blocks.mjs` from structural markers only (ids,
  landmarks, aria attributes) - no copy - and must be claimed by exactly one contract. Results (heights, positions,
  per-element-kind word maxima) are in `extraction/measured-values.json`.
* **Budgets:** every `maxWords`/`maxItems` is either the maximum measured across every real instance of the section
  (`evidence: measured:fieldProfiles.<section>.<kind>`, re-derived by `verify_all`) or an explicit value carrying a
  source citation.
* **Built** by `extraction/build_repo.py` from `extraction/build_spec.py` + `examples_spec.py` + `examples_content.py`.
  Citations are declared by needle (a literal string in the tracked file) and resolved to line ranges at build time;
  `verify_all` re-reads every range, anchor and quote from the real file. `src/original.css` is one minified line per
  block, so its citations are pinned by an exact quote of the rule.
* **Harvested** by `extraction/harvest_copy.mjs` (rendered text, attributes, links, media paths of all 15 routes) into
  `policy/source-brand.json` - names, domains, endpoints and CTA strings literally; all copy as 6-word shingle and
  distinctive-phrase fingerprints.

## Templates and routes

| template | routes | content sequence (measured on every route) |
|---|---|---|
| `home` | / | hero.home-intro, narrative.studio-teaser, work.projects-list, art.lab-teaser, services.skillset, conversion.lead-form |
| `studio` | /studio | hero.studio-intro, narrative.approach-statement, narrative.industries, narrative.process-steps, narrative.faq, conversion.studio-cta |
| `case-study` | /work/figcoms, /work/rise, /work/imotion, /work/israel-police | hero.case-header, work.case-role, (work.case-context), work.case-process, 3-10 x work.case-chapter[chapter / part-opener], work.next-project |
| `shop-index` | /shop | hero.shop-header, commerce.shop-filters, commerce.product-grid, conversion.drops-signup |
| `product-detail` | /shop/red-series-01, -02, -03, /shop/inked-frame, /shop/pink-portrait | hero.product-detail, commerce.more-from-shop |
| `legal` | /privacy, /terms | hero.legal-header, 1-12 x legal.clause (9 on privacy, 7 on terms) |
| `art-lab` | /art-lab | art.lab-header (overlay), art.draggable-plane (fixed full viewport), overlay.drag-cue - no hero, no footer |

Chrome on every other template: skip link, primary nav (sticky 72px bar; inside the hero on home), menu panel,
footer, award ribbon (optional; forbidden in generated mode), cookie notice, cart drawer, route curtain, custom cursor.

### Judgement calls and divergences from the IA draft

* **Product detail = one HERO.** The IA lists `commerce.product-gallery` and `commerce.buy-box` as two sections. In the
  source they are the two columns of one row and the page `h1` sits in the buy-box column, so together they are the
  page-opening composition: `hero.product-detail` (components `component.product-gallery`, `component.buy-box`).
* **Rise prototypes are components, not sections.** `work.dashboard-finder` / `work.customer-dashboard` render as the
  last child INSIDE a chapter section (`src/pages/WorkRise.jsx`), so they are the chapter's `demo` field backed by
  `component.dashboard-finder` / `component.customer-dashboard` (`DEMO_ONCE` rule).
* **Case studies are decomposed** into header / role / context / process / heading-bounded chapters / next-project;
  part openers ("(PART nn)") are a chapter variant. Measured chapter heights 482-6532px at 1440; the largest share is
  43.7% of a page (under the 50% warn line). Legal pages: header + one `legal.clause` per heading (114-571px each).
* **HERO = page opener only:** largest HERO 1461px (a case-study header). No HERO exceeds 1800px.
* **Runtime UI** (skip link, award ribbon, custom cursor, intro loader, menu panel, route curtain, cookie notice,
  cart drawer, board lightbox, drag cue) is `retrievalEligible: false`, pinned in the validator and in `verify_all`.
* **Art lab has no hero** (`NO_HERO_TEMPLATES`, in graph and validator): one fixed canvas with a visually hidden title.
* **Product pages have 2 in-flow sections**, so the wrapper gate's share rule does not apply (hero 53-56% of the page).
* **Ratings:** the source has no reviews or star ratings; its rating-like claims are the award ribbon and a launch
  ranking inside a case study. `GENERATED_MODE_RATING` blocks both; `placeholder-rating` exists for completeness.
* **Category honesty:** conversion blocks (lead form, studio CTA, drops signup) are CONVERSION; the skillset is
  SERVICES (capabilities); no editorial block is classed as a capability.
* **Not tokens:** inline hex values used only inside the recreated client product UI belong to that client's product
  and are deliberately absent from the catalog (`token-policy.json#notTokens`).
* **Forms are stubs in the clone** (`src/lib/newsletter.js`): no request leaves the machine. The source endpoints are
  recorded as `source-endpoint` (blocked) so a generated page cannot reuse them.

## Verify

```bash
pip install jsonschema                             # Python 3.9+
python3 extraction/verify_all.py                   # all cross-file checks (degrades to WARN without the sibling clone)
python3 schema/semantic_validate.py --all          # every example
python3 schema/tests/adversarial_test.py           # every mutation rejected, every control passes
python3 extraction/prove_drift.py                  # every injected drift makes verify_all fail
python3 extraction/wrapper_gate.py
```

Rebuilding after a clone change (BASELINE R16), with the clone's dev server running:

```bash
PLAYWRIGHT_MODULE=<playwright package dir> BASE_URL=<clone url> node extraction/measure_sections.mjs 1440x900,768x1024,390x844 > <scratch>/measure.json
PLAYWRIGHT_MODULE=<playwright package dir> BASE_URL=<clone url> node extraction/harvest_copy.mjs > <scratch>/harvest.json   # contains copy: keep out of git
python3 extraction/build_repo.py --measure <scratch>/measure.json --harvest <scratch>/harvest.json
python3 extraction/update_manifest.py && python3 extraction/verify_all.py
```

### Version fields

`allowlistVersion` and `pageSpecVersion` are machine-checked by `verify_all` (against the allowlist file and the
schema const). `repositoryVersion` is documentation-only.

## Clone parity (R12)

Measured 2026-11-12 with `extraction/parity_harness.mjs` (clone dev server vs the live site), merged by
`extraction/parity_summary.py` into `extraction/measured-values.json -> parity` (numbers only; no screenshots stored).

* **Capture state, identical on both sides:** 1440x900, DPR 1, `prefers-reduced-motion: reduce` (both sites switch
  smooth scroll, reveals, scroll-lit text, marquees, loader, curtain and in-view videos to their static fallbacks),
  no pointer; the cookie notice is hidden with CSS on both sides (never clicked, no consent stored); videos paused at
  their first frame; fonts ready and in-view images complete before each capture. Sections are classified on each side
  by the same structural classifier and reached by scrolling; each section is compared in up to 8 viewport windows
  (162 windows in total); a pixel matches when its max channel delta is <= 24.
* **Result:** 102 sections on 15 routes (in-flow sections + footer; the art-lab canvas compared as its single
  viewport). Run 1: average **99.91%**, min **97.75%**, 0 below the 80% per-section gate. Run 2: identical numbers
  (max run-to-run difference 0.00 points). Document heights equal on 15/15 routes (under reduced motion).
* **Lowest sections:** `commerce.more-from-shop` on four product pages (97.75-99.03%) and `art.draggable-plane`
  (98.61%); no section needed an exception, so none is recorded.
* **Not covered by this number:** full-motion states (intro loader, hover trails, scroll-lit mid-states, the art-lab
  lens) and the 768 / 390 viewports. Responsive document heights are recorded per viewport in `responsiveHeights`.
* **Fresh-clone build:** see the commit verification in the CHANGELOG (`npm ci` + `npm run build` + every validator
  from a fresh `git clone`).

## Known limits

* The design-repo is a snapshot of the clone at build time (BASELINE R16): after any `src/` change re-run the
  rebuild steps above; citations are re-resolved by needle, never hand-edited.
* No IR exists and none was requested (R13).
