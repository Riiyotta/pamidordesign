# Pamidor clone — working notes for all agents

Original: https://pamidordesign.co (Next.js + Turbopack, Lenis 1.3.26, custom rAF/IO motion, CSS keyframes).
Dev server: http://localhost:5188 (already running — do NOT start another, do NOT run npm install; ask lead if a dep is needed).

## How this clone is built
- `src/original.css` = the original compiled stylesheet, verbatim (font urls rewritten to /_next/static/immutable/media/).
  Every Tailwind class in the markup resolves from it. Tailwind v3 (preflight off) scans ONLY `src/tw/**` — never point it at
  the generated markup, or it re-emits original class names with its default theme and overrides original.css (fonts/padding break).
- Markup was machine-converted from the original **server-rendered HTML** (initial state, pre-hydration) into JSX:
  - `src/sections/home/*.jsx` (home sections), `src/pages/*.jsx` (one per route), `src/components/Awwwards.jsx`.
  - Classnames are the original ones. Keep them. Inline `style` objects are SSR initial values.
- All assets are local under `public/` at their original paths.
- Behaviour is what's missing. Original JS (beautified) lives in `_recon/pretty/*.js`; raw in `_recon/public/_next/static/immutable/chunks/`.
  Chunk map:
  - 3caqzl0t03zug.js — global layout: Lenis, custom cursor (data-cursor), cart drawer, route transitions
  - 00_ke73_g_6t6 / 2vpvoelkdtdyq / 3_4cgfs6yzcje — nav + menu (data-menu, data-menu-item, data-menu-scrim, data-nav-intro) per-route variants
  - 3fup6o6cccqm1.js — shared: hw text (data-hw, data-hw-char, data-ch), image component (data-loaded-src)
  - 3cjxsh20djos3.js — home: loader (data-loading), intro, hero trail, data-hw-appear, data-cursor-invert, projects list
  - 1x4nkdwz6qvwl / 2xy6etck_is2l — work case-study pages (data-wave, data-lit, data-reveal, data-word, video ended)
  - 3uz44me8nntup.js — studio page (clients search modal "Search organizations", data-reveal)
  - 02hiv7b9fio8a.js — art-lab (drag/wheel canvas, door, data-gone)
  - 0i9-w5fy8ra5v.js — newsletter /api/subscribe form
  - 26sovqznmk9mp.js — small util (--px)

## Measuring the original (Playwright MCP is DOWN — use local Playwright)
`_recon/node_modules/playwright` (v1.63, chromium installed). Write scripts in `_recon/scripts/` and run with
`cd _recon && node scripts/yourscript.mjs`. Example helpers: `_recon/scripts/check.mjs`, `_recon/scripts/smoke.mjs`.
Compare original vs http://localhost:5188 at 1440x900 (also check 390x844 mobile).
Use page.evaluate to read getComputedStyle / getAnimations() / element.style over time to capture real timings.

## Rules
- Implement as React (hooks/components). For DOM-wide attribute-driven effects, a hook that queries the DOM after
  route change is fine (re-run on `useLocation().pathname`).
- Only edit files your workstream owns (listed in your brief). If you need a change elsewhere, write it in your final report.
- Match the original's exact durations/easings/delays — read them from the source, then verify by measuring.
- No console errors.
