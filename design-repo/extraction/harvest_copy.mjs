// Harvests the source's rendered copy, links and media paths for the generated-mode leakage registry (R2).
//
//   PLAYWRIGHT_MODULE=<dir of an installed `playwright` package> BASE_URL=http://localhost:5188 \
//   node extraction/harvest_copy.mjs > <scratch>/harvest.json
//   python3 extraction/build_repo.py --harvest <scratch>/harvest.json
//
// The output CONTAINS the source's copy, so it is written to stdout for a scratch location and is never
// committed. build_repo.py turns it into policy/source-brand.json, which stores only sha256 fingerprints
// of the copy (plus the names, domains and CTA strings the rules must match literally).
// Text is read with textContent, so collapsed accordion answers and visually hidden labels are included;
// per-character split words ([data-hw-char] / [data-ch]) are re-joined from their sr-only twin labels.
import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
if (!process.env.PLAYWRIGHT_MODULE) { console.error('Set PLAYWRIGHT_MODULE'); process.exit(2); }
const { chromium } = createRequire(import.meta.url)(process.env.PLAYWRIGHT_MODULE);
const base = process.env.BASE_URL || 'http://localhost:5188';
const routes = Object.keys(JSON.parse(readFileSync(join(here, '..', 'templates', 'routes.json'), 'utf8')).routes);
const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: 1440, height: 900 } });
await ctx.addInitScript(() => { try { sessionStorage.setItem('pamidor-intro', '1'); } catch (e) { /* ignore */ } });
const p = await ctx.newPage();
const out = { routes: {} };
for (const r of routes) {
  await p.goto(base + r, { waitUntil: 'load' });
  await p.waitForTimeout(2500);
  out.routes[r] = await p.evaluate(() => {
    const blocks = [];
    const BLOCK = 'h1,h2,h3,h4,p,li,dt,dd,a,button,label,figcaption,blockquote,span,option,summary,th,td';
    for (const el of document.body.querySelectorAll(BLOCK)) {
      if (el.closest('script,style,svg')) continue;
      // only leaf-ish blocks: skip an element when a child block element carries the same text
      const t = (el.textContent || '').replace(/\s+/g, ' ').trim();
      if (!t) continue;
      if ([...el.children].some((c) => c.matches(BLOCK) && (c.textContent || '').replace(/\s+/g, ' ').trim() === t)) continue;
      blocks.push(t);
    }
    const attrs = [];
    for (const el of document.querySelectorAll('[alt],[aria-label],[title],[placeholder],[data-label]')) {
      for (const a of ['alt', 'aria-label', 'title', 'placeholder', 'data-label']) {
        const v = el.getAttribute(a);
        if (v && v.trim()) attrs.push(v.trim());
      }
    }
    const links = [...document.querySelectorAll('a[href]')].map((a) => a.getAttribute('href'));
    const forms = [...document.querySelectorAll('form[action]')].map((f) => f.getAttribute('action'));
    const media = [...document.querySelectorAll('img[src],video[poster],video[src],source[src]')]
      .map((m) => m.getAttribute('src') || m.getAttribute('poster'));
    return { title: document.title, blocks: [...new Set(blocks)], attrs: [...new Set(attrs)], links: [...new Set(links)], forms, media: [...new Set(media)] };
  });
  console.error(r, out.routes[r].blocks.length, 'text blocks');
}
await b.close();
console.log(JSON.stringify(out));
