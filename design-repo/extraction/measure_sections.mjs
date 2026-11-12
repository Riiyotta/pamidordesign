// Re-measure tool for extraction/measured-values.json -> sectionHeights / responsiveHeights / fieldProfiles
// (baseline R9, R11).
//
//   PLAYWRIGHT_MODULE=<dir of an installed `playwright` package> \
//   BASE_URL=http://localhost:5188 node extraction/measure_sections.mjs [1440x900,768x1024,390x844] > measure.json
//
// No browser or library path is stored in this repo: PLAYWRIGHT_MODULE must be supplied by the caller
// (e.g. `$(npm root -g)/playwright` or a project-local node_modules/playwright).
// Every route in templates/routes.json is loaded, the intro is marked as already seen (sessionStorage, the
// same flag the site sets itself) so the loader takes its short path, and blocks are classified by
// extraction/classify_blocks.mjs (structural markers only). Output is numbers only - no copy.
// Merge with: python3 extraction/build_repo.py --measure measure.json
import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { classifyBlocks } from './classify_blocks.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const mod = process.env.PLAYWRIGHT_MODULE;
if (!mod) {
  console.error('Set PLAYWRIGHT_MODULE to the playwright package directory, e.g. PLAYWRIGHT_MODULE=$(npm root -g)/playwright');
  process.exit(2);
}
const { chromium } = createRequire(import.meta.url)(mod);
const base = process.env.BASE_URL || 'http://localhost:5188';
const routes = Object.keys(JSON.parse(readFileSync(join(here, '..', 'templates', 'routes.json'), 'utf8')).routes);
const vps = (process.argv[2] || '1440x900').split(',').map((v) => v.split('x').map(Number));

const browser = await chromium.launch();
const out = { base: 'local clone dev server', viewports: {} };
let bad = 0;
for (const [w, h] of vps) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
  await ctx.addInitScript(() => { try { sessionStorage.setItem('pamidor-intro', '1'); } catch (e) { /* storage blocked */ } });
  const page = await ctx.newPage();
  const vp = (out.viewports[`${w}x${h}`] = {});
  for (const r of routes) {
    await page.goto(base + r, { waitUntil: 'load' });
    await page.waitForTimeout(3600); // short intro path (3000ms safety timer) + fonts + reveal settle
    const res = await page.evaluate(classifyBlocks, r);
    const doc = await page.evaluate(() => document.documentElement.scrollHeight);
    if (res.unclassified.length) { bad++; console.error(`${w}x${h} ${r}: unclassified blocks ${res.unclassified}`); }
    vp[r] = { docHeight: doc, sections: res.blocks };
    console.error(`${w}x${h} ${r} doc=${doc} blocks=${res.blocks.length}`);
  }
  await ctx.close();
}
await browser.close();
console.log(JSON.stringify(out, null, 1));
process.exit(bad ? 1 : 0);
