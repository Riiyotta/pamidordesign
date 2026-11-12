# https://pamidordesign.co (15 routes from its sitemap.xml) as rebuilt in this project's src/

Source: https://pamidordesign.co (15 routes from its sitemap.xml) as rebuilt in this project's src/ · Local React clone at project root; routes declared in src/App.jsx
Status: **measured-from-clone** · production approved: **false**
15 routes · 7 templates · 43 unique sections

> Generated from `ia.json` by `build.mjs`. Edit the JSON, not this file.

## Shape of the site

The largest 3 templates (Shop product detail, Case study, Legal document) account for 11 of 15 routes (73%). The remaining 4 routes span 4 templates.

| template | routes | share |
|---|---:|---:|
| Shop product detail | 5 | 33% |
| Case study | 4 | 27% |
| Legal document | 2 | 13% |
| Home | 1 | 7% |
| Studio (about) | 1 | 7% |
| Shop index | 1 | 7% |
| Art Lab canvas | 1 | 7% |

## Page chrome

**14 routes carry chrome = `full`** — Home, Studio (about), Case study, Shop index, Shop product detail, Legal document.

**1 routes carry chrome = `minimal`** — Art Lab canvas.

## Sections by reuse

How widely a section is shared determines whether it belongs in a shared
component library or stays local to its page.

| section | category | templates | routes | implementation | scope |
|---|---|---:|---:|---|---|
| `shell.skip-link` | SHELL | 7 | 15 | `src/App.jsx` | Present on all 15 routes. |
| `shell.awwwards-badge` | SHELL | 7 | 15 | `src/components/Awwwards.jsx` | Present on all 15 routes. |
| `shell.custom-cursor` | SHELL | 7 | 15 | `src/components/global/CursorState.jsx + src/original.css` | Present on all 15 routes. |
| `overlay.route-curtain` | OVERLAY | 7 | 15 | `src/components/global/RouteCurtain.jsx + src/components/global/LinkRouter.jsx` | Present on all 15 routes. |
| `overlay.cookie-notice` | OVERLAY | 7 | 15 | `src/components/global/CookieBanner.jsx` | Present on all 15 routes. |
| `overlay.cart-drawer` | OVERLAY | 7 | 15 | `src/components/global/CartDrawer.jsx + src/lib/global/cart.js` | Mounted on all 15 routes. |
| `shell.primary-nav` | SHELL | 6 | 14 | `Inline markup duplicated in src/sections/home/HomeMain1Top.jsx and 13 src/pages/*.jsx files; behaviour in src/components/global/MenuController.jsx` | Every route except /art-lab (14 routes). |
| `shell.footer` | SHELL | 6 | 14 | `src/sections/home/HomeTop6.jsx (home) plus inline copies in 13 src/pages/*.jsx files; clip reveal in HomeTop6.jsx and src/components/work/ClipReveal.jsx` | Every route except /art-lab (14 routes). |
| `overlay.menu-panel` | OVERLAY | 6 | 14 | `Markup inline with shell.primary-nav; src/components/global/MenuController.jsx` | Every route except /art-lab (14 routes). |
| `commerce.product-gallery` | COMMERCE | 1 | 5 | `src/components/shop/ProductGallery.jsx` | All 5 product detail routes. |
| `commerce.buy-box` | COMMERCE | 1 | 5 | `src/components/shop/BuyBox.jsx` | All 5 product detail routes. |
| `commerce.more-from-shop` | COMMERCE | 1 | 5 | `src/pages/Shop*.jsx + src/components/shop/ProductCard.jsx` | All 5 product detail routes. |
| `overlay.board-lightbox` | OVERLAY | 1 | 4 | `src/components/work/BoardGallery.jsx` | Case-study template; actually opened only on Figcoms and Rise, the two case studies with board galleries. |
| `hero.case-header` | HERO | 1 | 4 | `src/pages/Work*.jsx (+ src/components/work/WorkVideo.jsx where the lead media is video)` | All 4 case-study routes. |
| `work.case-role` | WORK | 1 | 4 | `src/pages/Work*.jsx` | All 4 case-study routes. |
| `work.case-context` | WORK | 1 | 4 | `src/pages/WorkFigcoms.jsx, WorkImotion.jsx, WorkIsraelPolice.jsx` | Case-study template; present on Figcoms, iMotion and Israel Police, absent on Rise (3 of the case studies). |
| `work.case-process` | WORK | 1 | 4 | `src/pages/Work*.jsx` | All 4 case-study routes. |
| `work.case-chapter` | WORK | 1 | 4 | `src/pages/Work*.jsx + src/components/work/WorkVideo.jsx + BoardGallery.jsx + src/lib/text/countUp.js` | All 4 case-study routes. |
| `work.dashboard-finder` | WORK | 1 | 4 | `src/components/work/DashboardFinder.jsx + src/lib/work/riseFinderData.js` | Case-study template; rendered on Rise only. |
| `work.customer-dashboard` | WORK | 1 | 4 | `src/components/work/CustomerDashboard.jsx` | Case-study template; rendered on Rise only. |
| `work.next-project` | WORK | 1 | 4 | `src/pages/Work*.jsx` | All 4 case-study routes. |
| `hero.legal-header` | HERO | 1 | 2 | `src/pages/Privacy.jsx, src/pages/Terms.jsx` | Both legal routes. |
| `legal.clause` | LEGAL | 1 | 2 | `src/pages/Privacy.jsx, src/pages/Terms.jsx` | Both legal routes. |
| `overlay.intro-loader` | OVERLAY | 1 | 1 | `src/sections/home/HomeTop4.jsx + src/lib/home/introBoot.js + inline script in index.html` | Home route only. |
| `overlay.drag-cue` | OVERLAY | 1 | 1 | `src/components/artlab/DragCue.jsx` | Art Lab route only. |
| `hero.home-intro` | HERO | 1 | 1 | `src/sections/home/HomeMain1Top.jsx + HeroTrail.jsx + DoorName.jsx` | Home route only. |
| `hero.studio-intro` | HERO | 1 | 1 | `src/pages/Studio.jsx` | Studio route only. |
| `hero.shop-header` | HERO | 1 | 1 | `src/components/shop/ShopListing.jsx` | Shop index route only. |
| `narrative.studio-teaser` | NARRATIVE | 1 | 1 | `src/sections/home/HomeMain2Studio.jsx + PinSection.jsx + src/lib/text/wave.js` | Home route only. |
| `narrative.approach-statement` | NARRATIVE | 1 | 1 | `src/pages/Studio.jsx + src/lib/text/wave.js` | Studio route only. |
| `narrative.industries` | NARRATIVE | 1 | 1 | `src/pages/Studio.jsx` | Studio route only. |
| `narrative.process-steps` | NARRATIVE | 1 | 1 | `src/pages/Studio.jsx` | Studio route only. |
| `narrative.faq` | NARRATIVE | 1 | 1 | `src/components/studio/FaqAccordion.jsx + HwText.jsx` | Studio route only. |
| `work.projects-list` | WORK | 1 | 1 | `src/sections/home/HomeMain3Projects.jsx + src/lib/text/projectsList.js` | Home route only. |
| `services.skillset` | SERVICES | 1 | 1 | `src/sections/home/HomeMain5.jsx` | Home route only. |
| `art.lab-teaser` | ART | 1 | 1 | `src/sections/home/HomeMain4ArtLab.jsx` | Home route only. |
| `art.lab-header` | ART | 1 | 1 | `src/pages/ArtLab.jsx` | Art Lab route only. |
| `art.draggable-plane` | ART | 1 | 1 | `src/components/artlab/ArtPlane.jsx + src/lib/artlab/usePlane.js, layout.js, artworks.js` | Art Lab route only. |
| `commerce.shop-filters` | COMMERCE | 1 | 1 | `src/components/shop/ShopListing.jsx` | Shop index route only. |
| `commerce.product-grid` | COMMERCE | 1 | 1 | `src/components/shop/ShopListing.jsx + ProductCard.jsx` | Shop index route only. |
| `conversion.lead-form` | CONVERSION | 1 | 1 | `src/sections/home/HomeMain6.jsx + src/lib/newsletter.js` | Home route only. |
| `conversion.studio-cta` | CONVERSION | 1 | 1 | `src/pages/Studio.jsx` | Studio route only. |
| `conversion.drops-signup` | CONVERSION | 1 | 1 | `src/components/shop/DropsForm.jsx` | Shop index route only. |

**9 shared sections** appear in more than one template and belong in a component library.

**34 single-use sections** appear in exactly one template. Building these
as "reusable" components up front would be speculative — keep them page-local
until a second caller actually appears.

## Templates

### Home — `template.home`

1 route · `/` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.skip-link` | shared ×7 |
| 2 | OVERLAY | `overlay.intro-loader` | page-local |
| 3 | SHELL | `shell.primary-nav` | shared ×6 |
| 4 | OVERLAY | `overlay.menu-panel` | shared ×6 |
| 5 | HERO | `hero.home-intro` | page-local |
| 6 | NARRATIVE | `narrative.studio-teaser` | page-local |
| 7 | WORK | `work.projects-list` | page-local |
| 8 | ART | `art.lab-teaser` | page-local |
| 9 | SERVICES | `services.skillset` | page-local |
| 10 | CONVERSION | `conversion.lead-form` | page-local |
| 11 | SHELL | `shell.footer` | shared ×6 |
| 12 | SHELL | `shell.awwwards-badge` | shared ×7 |
| 13 | OVERLAY | `overlay.cookie-notice` | shared ×7 |
| 14 | OVERLAY | `overlay.cart-drawer` | shared ×7 |
| 15 | OVERLAY | `overlay.route-curtain` | shared ×7 |
| 16 | SHELL | `shell.custom-cursor` | shared ×7 |

### Studio (about) — `template.studio`

1 route · `/studio` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.skip-link` | shared ×7 |
| 2 | SHELL | `shell.primary-nav` | shared ×6 |
| 3 | OVERLAY | `overlay.menu-panel` | shared ×6 |
| 4 | HERO | `hero.studio-intro` | page-local |
| 5 | NARRATIVE | `narrative.approach-statement` | page-local |
| 6 | NARRATIVE | `narrative.industries` | page-local |
| 7 | NARRATIVE | `narrative.process-steps` | page-local |
| 8 | NARRATIVE | `narrative.faq` | page-local |
| 9 | CONVERSION | `conversion.studio-cta` | page-local |
| 10 | SHELL | `shell.footer` | shared ×6 |
| 11 | SHELL | `shell.awwwards-badge` | shared ×7 |
| 12 | OVERLAY | `overlay.cookie-notice` | shared ×7 |
| 13 | OVERLAY | `overlay.cart-drawer` | shared ×7 |
| 14 | OVERLAY | `overlay.route-curtain` | shared ×7 |
| 15 | SHELL | `shell.custom-cursor` | shared ×7 |

### Case study — `template.case-study`

4 routes · `/work/figcoms`, `/work/rise`, `/work/imotion`, `/work/israel-police` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.skip-link` | shared ×7 |
| 2 | SHELL | `shell.primary-nav` | shared ×6 |
| 3 | OVERLAY | `overlay.menu-panel` | shared ×6 |
| 4 | HERO | `hero.case-header` | page-local |
| 5 | WORK | `work.case-role` | page-local |
| 6 | WORK | `work.case-context` | page-local |
| 7 | WORK | `work.case-process` | page-local |
| 8 | WORK | `work.case-chapter` | page-local |
| 9 | WORK | `work.dashboard-finder` | page-local |
| 10 | WORK | `work.customer-dashboard` | page-local |
| 11 | OVERLAY | `overlay.board-lightbox` | page-local |
| 12 | WORK | `work.next-project` | page-local |
| 13 | SHELL | `shell.footer` | shared ×6 |
| 14 | SHELL | `shell.awwwards-badge` | shared ×7 |
| 15 | OVERLAY | `overlay.cookie-notice` | shared ×7 |
| 16 | OVERLAY | `overlay.cart-drawer` | shared ×7 |
| 17 | OVERLAY | `overlay.route-curtain` | shared ×7 |
| 18 | SHELL | `shell.custom-cursor` | shared ×7 |

### Shop index — `template.shop-index`

1 route · `/shop` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.skip-link` | shared ×7 |
| 2 | SHELL | `shell.primary-nav` | shared ×6 |
| 3 | OVERLAY | `overlay.menu-panel` | shared ×6 |
| 4 | HERO | `hero.shop-header` | page-local |
| 5 | COMMERCE | `commerce.shop-filters` | page-local |
| 6 | COMMERCE | `commerce.product-grid` | page-local |
| 7 | CONVERSION | `conversion.drops-signup` | page-local |
| 8 | SHELL | `shell.footer` | shared ×6 |
| 9 | SHELL | `shell.awwwards-badge` | shared ×7 |
| 10 | OVERLAY | `overlay.cookie-notice` | shared ×7 |
| 11 | OVERLAY | `overlay.cart-drawer` | shared ×7 |
| 12 | OVERLAY | `overlay.route-curtain` | shared ×7 |
| 13 | SHELL | `shell.custom-cursor` | shared ×7 |

### Shop product detail — `template.product-detail`

5 routes · `/shop/red-series-01`, `/shop/red-series-02`, `/shop/red-series-03`, `/shop/inked-frame`, `/shop/pink-portrait` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.skip-link` | shared ×7 |
| 2 | SHELL | `shell.primary-nav` | shared ×6 |
| 3 | OVERLAY | `overlay.menu-panel` | shared ×6 |
| 4 | COMMERCE | `commerce.product-gallery` | page-local |
| 5 | COMMERCE | `commerce.buy-box` | page-local |
| 6 | COMMERCE | `commerce.more-from-shop` | page-local |
| 7 | SHELL | `shell.footer` | shared ×6 |
| 8 | SHELL | `shell.awwwards-badge` | shared ×7 |
| 9 | OVERLAY | `overlay.cookie-notice` | shared ×7 |
| 10 | OVERLAY | `overlay.cart-drawer` | shared ×7 |
| 11 | OVERLAY | `overlay.route-curtain` | shared ×7 |
| 12 | SHELL | `shell.custom-cursor` | shared ×7 |

### Legal document — `template.legal`

2 routes · `/privacy`, `/terms` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.skip-link` | shared ×7 |
| 2 | SHELL | `shell.primary-nav` | shared ×6 |
| 3 | OVERLAY | `overlay.menu-panel` | shared ×6 |
| 4 | HERO | `hero.legal-header` | page-local |
| 5 | LEGAL | `legal.clause` | page-local |
| 6 | SHELL | `shell.footer` | shared ×6 |
| 7 | SHELL | `shell.awwwards-badge` | shared ×7 |
| 8 | OVERLAY | `overlay.cookie-notice` | shared ×7 |
| 9 | OVERLAY | `overlay.cart-drawer` | shared ×7 |
| 10 | OVERLAY | `overlay.route-curtain` | shared ×7 |
| 11 | SHELL | `shell.custom-cursor` | shared ×7 |

### Art Lab canvas — `template.art-lab`

1 route · `/art-lab` · chrome: **minimal**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.skip-link` | shared ×7 |
| 2 | ART | `art.lab-header` | page-local |
| 3 | ART | `art.draggable-plane` | page-local |
| 4 | OVERLAY | `overlay.drag-cue` | page-local |
| 5 | SHELL | `shell.awwwards-badge` | shared ×7 |
| 6 | OVERLAY | `overlay.cookie-notice` | shared ×7 |
| 7 | OVERLAY | `overlay.cart-drawer` | shared ×7 |
| 8 | OVERLAY | `overlay.route-curtain` | shared ×7 |
| 9 | SHELL | `shell.custom-cursor` | shared ×7 |

## Section reference

### SHELL

_Persistent site chrome rendered in normal flow or fixed on many routes: skip link, primary nav bar, footer, award badge, cursor._

**`shell.skip-link`** — Visually hidden 'Skip to content' link targeting #main that becomes a bordered chip on keyboard focus.

· Present on all 15 routes. · appears on 15 routes · implemented by `src/App.jsx`

**`shell.primary-nav`** — Top bar labelled 'Primary': the PAMIDOR.STUDIO wordmark linking home on the left and a two-line hamburger toggle on the right that opens overlay.menu-panel. On the home route it is rendered inside the hero and fades in after the intro loader.

· Every route except /art-lab (14 routes). · appears on 14 routes · implemented by `Inline markup duplicated in src/sections/home/HomeMain1Top.jsx and 13 src/pages/*.jsx files; behaviour in src/components/global/MenuController.jsx`

**`shell.footer`** — Dark (night) footer: oversized wordmark image, the line 'Somewhere between structure and instinct.', contact email, Privacy/Terms links and copyright row; revealed by a scroll-driven clip-path that opens from inset(5% 7% 0 7%) to inset(0).

· Every route except /art-lab (14 routes). · appears on 14 routes · implemented by `src/sections/home/HomeTop6.jsx (home) plus inline copies in 13 src/pages/*.jsx files; clip reveal in HomeTop6.jsx and src/components/work/ClipReveal.jsx`

**`shell.awwwards-badge`** — Fixed black 'Nominee' award ribbon pinned to the right edge at mid-height, linking to the award site.

· Present on all 15 routes. · appears on 15 routes · implemented by `src/components/Awwwards.jsx`

**`shell.custom-cursor`** — Image-based cursor defined in CSS that swaps to a pressed state while the pointer is down and inverts over dark regions marked data-cursor-invert.

· Present on all 15 routes. · appears on 15 routes · implemented by `src/components/global/CursorState.jsx + src/original.css`

### OVERLAY

_Runtime/utility UI that sits above the page and is not content: intro loader, menu panel, route curtain, cookie notice, cart drawer, lightbox, drag cue._

**`overlay.intro-loader`** — Full-screen canvas-coloured loader spelling P-A-M-I-D-O-R letter by letter with a centre image chip that cycles nine intro images every 230ms; shortened on repeat visits in the same browser session, then hands off to the hero.

· Home route only. · appears on 1 routes · implemented by `src/sections/home/HomeTop4.jsx + src/lib/home/introBoot.js + inline script in index.html`

**`overlay.menu-panel`** — Full-screen navigation panel opened by the hamburger: staggered menu items (home, Studio, Projects, Art Lab, contact), a scrim, Escape-to-close, focus trap and scroll lock.

· Every route except /art-lab (14 routes). · appears on 14 routes · implemented by `Markup inline with shell.primary-nav; src/components/global/MenuController.jsx`

**`overlay.route-curtain`** — Night-coloured full-viewport curtain that covers the screen on in-site navigation to another path, swaps the route, then lifts.

· Present on all 15 routes. · appears on 15 routes · implemented by `src/components/global/RouteCurtain.jsx + src/components/global/LinkRouter.jsx`

**`overlay.cookie-notice`** — Bottom-left 'Cookie notice' card (analytics-only explanation, cookie policy link, Accept / Decline) that appears after load and remembers the choice.

· Present on all 15 routes. · appears on 15 routes · implemented by `src/components/global/CookieBanner.jsx`

**`overlay.cart-drawer`** — Side drawer labelled 'Cart' listing added shop items with a close control; mounted site-wide but only opened by an add-to-cart action, which is unreachable while every product is sold out.

· Mounted on all 15 routes. · appears on 15 routes · implemented by `src/components/global/CartDrawer.jsx + src/lib/global/cart.js`

**`overlay.board-lightbox`** — Modal image viewer opened from a case-study board gallery: full-screen image with (CLOSE)/(PREV)/(NEXT), arrow keys, Escape, focus trap and scroll lock.

· Case-study template; actually opened only on Figcoms and Rise, the two case studies with board galleries. · appears on 4 routes · implemented by `src/components/work/BoardGallery.jsx`

**`overlay.drag-cue`** — '(DRAG ANYWHERE)' hint that follows the Art Lab canvas and disappears on the first drag, wheel or key press, or after a few seconds.

· Art Lab route only. · appears on 1 routes · implemented by `src/components/artlab/DragCue.jsx`

### HERO

_The page-opening composition of a route (title block plus its lead media), nothing below it._

**`hero.home-intro`** — Home opening: oversized 'Dor Sharaby' name with the Dor/Door name animation, two-line tagline, five discipline chips, a large back-lit portrait, and an image trail that spawns artwork thumbnails along the pointer path.

· Home route only. · appears on 1 routes · implemented by `src/sections/home/HomeMain1Top.jsx + HeroTrail.jsx + DoorName.jsx`

**`hero.studio-intro`** — Studio opening: eyebrow, 'Studio' title, a facts list (designing since, studio founded, based in, clients) and the first question-and-answer block introducing the designer.

· Studio route only. · appears on 1 routes · implemented by `src/pages/Studio.jsx`

**`hero.case-header`** — Case-study opening (header#top): uppercase project title with project meta and the lead image or video.

· All 4 case-study routes. · appears on 4 routes · implemented by `src/pages/Work*.jsx (+ src/components/work/WorkVideo.jsx where the lead media is video)`

**`hero.shop-header`** — Shop opening: '(ART SHOP)' eyebrow, 'ORIGINALS & PRINTS' title and a short paragraph on signed, numbered pieces shipped worldwide.

· Shop index route only. · appears on 1 routes · implemented by `src/components/shop/ShopListing.jsx`

**`hero.legal-header`** — Legal page opening: single-word title (Privacy / Terms) with its short preamble.

· Both legal routes. · appears on 2 routes · implemented by `src/pages/Privacy.jsx, src/pages/Terms.jsx`

### NARRATIVE

_About-the-studio storytelling: statements, industries, working process, FAQ._

**`narrative.studio-teaser`** — Home 'studio' band (section#studio): a scroll-lit statement whose characters light up with scroll progress, plus the studio showreel video that plays only while in view.

· Home route only. · appears on 1 routes · implemented by `src/sections/home/HomeMain2Studio.jsx + PinSection.jsx + src/lib/text/wave.js`

**`narrative.approach-statement`** — Studio page answer to 'What makes your approach different?' rendered as a sticky scroll-lit statement (characters light up with scroll).

· Studio route only. · appears on 1 routes · implemented by `src/pages/Studio.jsx + src/lib/text/wave.js`

**`narrative.industries`** — 'Which industries do you work in?' block: a list of sector chips (technology, AI, fintech, cybersecurity, adtech, consumer brands, digital products) with an answer paragraph.

· Studio route only. · appears on 1 routes · implemented by `src/pages/Studio.jsx`

**`narrative.process-steps`** — 'What does working with you look like?' block: ordered engagement steps, each an h3 (e.g. Discovery & Research) with a short description.

· Studio route only. · appears on 1 routes · implemented by `src/pages/Studio.jsx`

**`narrative.faq`** — Single-open accordion of studio questions (specialisms, startups, etc.) with rotating arrow and 500ms height animation; first item open by default.

· Studio route only. · appears on 1 routes · implemented by `src/components/studio/FaqAccordion.jsx + HwText.jsx`

### WORK

_Client project content: the project index and the blocks that make up a case study._

**`work.projects-list`** — 'Selected Projects' index: one row per client project with title, 'Jump To Project' button, role/scope definition list and cover media; the hovered (desktop) or centred (mobile) row expands while the others compress.

· Home route only. · appears on 1 routes · implemented by `src/sections/home/HomeMain3Projects.jsx + src/lib/text/projectsList.js`

**`work.case-role`** — '(MY ROLE)' paragraph stating what the designer personally did on the project.

· All 4 case-study routes. · appears on 4 routes · implemented by `src/pages/Work*.jsx`

**`work.case-context`** — Second framing paragraph explaining why the project existed ('(WHY IT EXISTS)', '(THE PROBLEM)' or '(OVERVIEW)').

· Case-study template; present on Figcoms, iMotion and Israel Police, absent on Rise (3 of the case studies). · appears on 4 routes · implemented by `src/pages/WorkFigcoms.jsx, WorkImotion.jsx, WorkIsraelPolice.jsx`

**`work.case-process`** — 'Process' / 'Approach' block: h2 plus a sequence of h3 steps (e.g. Research & Context, Audit, Positioning) with short descriptions.

· All 4 case-study routes. · appears on 4 routes · implemented by `src/pages/Work*.jsx`

**`work.case-chapter`** — Repeating media chapter of a case study: an h2 chapter title (e.g. 'The Board', 'Brand System', 'Photography') with its images, autoplaying in-view videos, board galleries or animated stat counters. Repeats 3-11 times per case study.

· All 4 case-study routes. · appears on 4 routes · implemented by `src/pages/Work*.jsx + src/components/work/WorkVideo.jsx + BoardGallery.jsx + src/lib/text/countUp.js`

**`work.dashboard-finder`** — Interactive product prototype: a dashboard finder with a product toggle, removable filter chips, searchable collapsible field lists, time-frame buttons and live perfect/partial match ranking.

· Case-study template; rendered on Rise only. · appears on 4 routes · implemented by `src/components/work/DashboardFinder.jsx + src/lib/work/riseFinderData.js`

**`work.customer-dashboard`** — Interactive product prototype: a customer dashboard with sidebar navigation, Overview/Settings/Lists tabs and a live 'Search organizations' table filter with an empty state.

· Case-study template; rendered on Rise only. · appears on 4 routes · implemented by `src/components/work/CustomerDashboard.jsx`

**`work.next-project`** — Closing 'NEXT PROJECT' link to the following case study, cycling Figcoms → iMotion → Israel Police → Rise → Figcoms.

· All 4 case-study routes. · appears on 4 routes · implemented by `src/pages/Work*.jsx`

### SERVICES

_What the studio offers, presented as a list of capabilities._

**`services.skillset`** — 'Skillset' list of disciplines; rows slide in and their rules grow with scroll, and on hover a preview image follows the cursor with tilt while other rows dim.

· Home route only. · appears on 1 routes · implemented by `src/sections/home/HomeMain5.jsx`

### ART

_The personal art practice: the Art Lab teaser and the Art Lab canvas._

**`art.lab-teaser`** — Home 'The Art Lab' band: rule, title, grid of artwork thumbnails and link chips into the Art Lab and shop.

· Home route only. · appears on 1 routes · implemented by `src/sections/home/HomeMain4ArtLab.jsx`

**`art.lab-header`** — Reduced fixed header over the Art Lab canvas: wordmark link home, visually hidden 'The Art Lab' title and description, and a corner link to a case study. Replaces the primary nav on this route.

· Art Lab route only. · appears on 1 routes · implemented by `src/pages/ArtLab.jsx`

**`art.draggable-plane`** — Full-viewport infinite plane of 164 artworks in justified, colour-ordered rows; drag with inertia, wheel and arrow-key panning, and a cursor-following lens that scales and tilts nearby tiles.

· Art Lab route only. · appears on 1 routes · implemented by `src/components/artlab/ArtPlane.jsx + src/lib/artlab/usePlane.js, layout.js, artworks.js`

### COMMERCE

_The art shop: filtering, product cards, product gallery, purchase box, cross-sell._

**`commerce.shop-filters`** — Filter toggle row (All / Prints / Originals / Framed, aria-pressed) and a 'SORT: NEWEST' label above the product grid.

· Shop index route only. · appears on 1 routes · implemented by `src/components/shop/ShopListing.jsx`

**`commerce.product-grid`** — Grid of product cards (image, type, SOLD OUT flag, title, price, edition) filtered by commerce.shop-filters.

· Shop index route only. · appears on 1 routes · implemented by `src/components/shop/ShopListing.jsx + ProductCard.jsx`

**`commerce.product-gallery`** — Product detail media: 'Back to shop' link, main artwork image and thumbnail strip that swaps the main image instantly.

· All 5 product detail routes. · appears on 5 routes · implemented by `src/components/shop/ProductGallery.jsx`

**`commerce.buy-box`** — Product purchase column: title, price, edition and paper details, description, and an add-to-cart button that reads SOLD OUT and is disabled for every current product.

· All 5 product detail routes. · appears on 5 routes · implemented by `src/components/shop/BuyBox.jsx`

**`commerce.more-from-shop`** — 'More From The Shop' cross-sell row of other product cards.

· All 5 product detail routes. · appears on 5 routes · implemented by `src/pages/Shop*.jsx + src/components/shop/ProductCard.jsx`

### CONVERSION

_Blocks whose job is to get a visitor to make contact or sign up._

**`conversion.lead-form`** — Home closing block over a sky video: animated 'OPEN THE DOOR' title and a project enquiry form (name, email, project type select, message) with invalid / sending / sent / failed states.

· Home route only. · appears on 1 routes · implemented by `src/sections/home/HomeMain6.jsx + src/lib/newsletter.js`

**`conversion.studio-cta`** — Studio closing band: 'LET'S WORK TOGETHER' headline, a 'Start Project' button and the contact email.

· Studio route only. · appears on 1 routes · implemented by `src/pages/Studio.jsx`

**`conversion.drops-signup`** — 'Be first when the next piece lands' email signup for new shop drops, with idle / invalid / sending / done / failed states and a privacy link.

· Shop index route only. · appears on 1 routes · implemented by `src/components/shop/DropsForm.jsx`

### LEGAL

_Policy text broken into heading-bounded clauses._

**`legal.clause`** — One heading-bounded policy clause: parenthesised uppercase h2 label (e.g. '(WHO I AM)', '(NO WARRANTY)') and its body text. Repeats per clause (9 on Privacy, 7 on Terms); the Privacy cookies clause also carries a 'Reset cookie choice' button.

· Both legal routes. · appears on 2 routes · implemented by `src/pages/Privacy.jsx, src/pages/Terms.jsx`
