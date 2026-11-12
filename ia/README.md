# Information architecture — Pamidor clone

**`ia.json` is the only file to hand-edit.** `IA.md` and `matrix.csv` are generated
from it by `build.mjs` and are overwritten on every run.

```bash
cd ia
node validate.mjs   # hard invariants + informational notes
node build.mjs      # regenerates IA.md and matrix.csv
```

Source: the 15 routes in pamidordesign.co's sitemap, mapped from the rendered page
structure (landmarks and h1–h3) and checked against this project's `src/`. Every section
names the file(s) that render it in `implementedBy`.

## What the data shows

- **15 routes, 7 templates.** Two templates (Shop product detail ×5, Case study ×4)
  cover 9 of 15 routes (60%). The remaining 6 routes are spread over five templates, four
  of them single-route (Home, Studio, Shop index, Art Lab), plus Legal ×2. Most of the
  design effort is in those one-off pages.
- **9 shared sections, 34 page-local, and every shared one is chrome.** The 9 sections
  used by more than one template are all SHELL/OVERLAY (nav, menu, footer, badge,
  cursor, curtain, cookie notice, cart drawer, skip link). No content section is reused
  across templates. Content blocks should stay page-local until a second page needs one.
- **The nav and footer aren't actually shared in code.** `shell.primary-nav` and
  `shell.footer` each appear on 14 routes, yet the markup is copied inline into every
  page file: the nav into 13 `src/pages/*.jsx` files plus the home hero, and the footer
  into 13 page files plus `src/sections/home/HomeTop6.jsx`. They are the strongest
  candidates for extraction into single components. Most other chrome (badge, cursor,
  curtain, cookie notice, cart drawer) already is one component.
- **Art Lab is the only route without full chrome.** It swaps the nav for a reduced
  header (`art.lab-header`) and has no footer (`chrome: "minimal"`).

## Known, intentional "mismatch"

`validate.mjs` notes that `work.case-context` says **3** but computes **4**. Both are
true: the Case study template has 4 routes, but Rise has no "(WHY IT EXISTS)/(THE
PROBLEM)/(OVERVIEW)" block. The template's section list is the union across the four case
studies (see its `notes`). For the same reason, `work.dashboard-finder` and
`work.customer-dashboard` count 4 routes but render only on Rise, and
`overlay.board-lightbox` opens only on Figcoms and Rise. Don't "fix" the scope text to
say 4. If per-route precision matters later, split Rise into its own template.
