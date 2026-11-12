// Live-vs-clone per-section parity harness (baseline R12).
//
//   PLAYWRIGHT_MODULE=<dir of an installed `playwright` package> CLONE_URL=<clone base> LIVE_URL=<live base> \
//   OUT=<scratch>/parity-run1.json node extraction/parity_harness.mjs
//   python3 extraction/parity_summary.py <scratch>/parity-run1.json <scratch>/parity-run2.json   # -> measured-values.parity
//
// Capture state, identical on BOTH sides:
//   * 1440x900 viewport, DPR 1, prefers-reduced-motion: reduce (both sites honour it: smooth scroll, reveals, scroll
//     waves, marquees, loader, curtain and in-view videos switch to their static fallbacks), no pointer movement;
//   * the cookie notice is HIDDEN with CSS (never clicked, no consent stored) - it is a fixed overlay, no layout change;
//   * every <video> is paused at currentTime 0 after its poster/first frame has loaded;
//   * fonts ready + all <img> in the viewport complete before each capture.
// Each in-flow section (plus the fixed art-lab canvas; classified by extraction/classify_blocks.mjs on each side) is reached by scrolling and
// compared window by window (900px windows, up to MAX_WINDOWS per section): per-pixel max channel delta <= 24 counts
// as matching. Section score = mean of its windows; the min window is reported too. Nothing is masked except the
// cookie notice; no screenshots are written to disk.
import { createRequire } from 'node:module';
import fs from 'node:fs';
import { classifyBlocks } from './classify_blocks.mjs';

if (!process.env.PLAYWRIGHT_MODULE) { console.error('Set PLAYWRIGHT_MODULE to the playwright package dir'); process.exit(2); }
const { chromium } = createRequire(import.meta.url)(process.env.PLAYWRIGHT_MODULE);
const CLONE = process.env.CLONE_URL || 'http://localhost:5188';
const LIVE = process.env.LIVE_URL;
if (!LIVE) { console.error('Set LIVE_URL to the live site base URL'); process.exit(2); }
const ROUTES = (process.env.ROUTES ? process.env.ROUTES.split(',') : Object.keys(JSON.parse(fs.readFileSync(new URL('../templates/routes.json', import.meta.url))).routes));
const W = 1440, H = 900, MAX_WINDOWS = Number(process.env.MAX_WINDOWS || 8), TOL = 24;
const HIDE = 'aside[aria-label="Cookie notice"],[role=dialog][aria-label*="ookie"],[aria-label*="onsent"]{display:none!important}';

const browser = await chromium.launch();
const mk = async () => {
  const c = await browser.newContext({ viewport: { width: W, height: H }, deviceScaleFactor: 1, reducedMotion: 'reduce' });
  return c.newPage();
};
const [pc, pl, cmp] = await Promise.all([mk(), mk(), mk()]);
await cmp.setContent('<canvas id=a></canvas><canvas id=b></canvas>');

async function open(p, url) {
  await p.goto(url, { waitUntil: 'load', timeout: 90000 });
  await p.addStyleTag({ content: HIDE });
  await p.evaluate(() => document.fonts && document.fonts.ready);
  await p.waitForTimeout(3500);
  await p.addStyleTag({ content: HIDE });
}
async function settle(p, y) {
  await p.evaluate((yy) => window.scrollTo(0, yy), y);
  await p.waitForTimeout(700);
  return p.evaluate(async () => {
    const vs = [...document.querySelectorAll('video')];
    await Promise.all(vs.map((v) => new Promise((res) => {
      try { v.pause(); } catch (e) { /* ignore */ }
      if (v.readyState >= 2) { try { v.currentTime = 0; } catch (e) { /* ignore */ } setTimeout(res, 150); return; }
      setTimeout(res, 150);
    })));
    const imgs = [...document.images].filter((i) => { const r = i.getBoundingClientRect(); return r.bottom > 0 && r.top < innerHeight; });
    await Promise.race([Promise.all(imgs.map((i) => (i.complete ? 0 : new Promise((r) => { i.onload = i.onerror = r; })))), new Promise((r) => setTimeout(r, 4000))]);
    return Math.round(scrollY);
  });
}
const diff = (a, b, y0, y1) => cmp.evaluate(async ([a, b, y0, y1]) => {
  const load = (s) => new Promise((r) => { const i = new Image(); i.onload = () => r(i); i.src = 'data:image/png;base64,' + s; });
  const [ia, ib] = await Promise.all([load(a), load(b)]);
  const get = (i, id) => { const c = document.getElementById(id); c.width = i.width; c.height = i.height; const x = c.getContext('2d'); x.drawImage(i, 0, 0); return x.getImageData(0, y0, i.width, y1 - y0).data; };
  const da = get(ia, 'a'), db = get(ib, 'b');
  let same = 0; const n = da.length / 4;
  for (let k = 0; k < da.length; k += 4) {
    const d = Math.max(Math.abs(da[k] - db[k]), Math.abs(da[k + 1] - db[k + 1]), Math.abs(da[k + 2] - db[k + 2]));
    if (d <= 24) same++;
  }
  return n ? +(100 * same / n).toFixed(2) : null;
}, [a, b, y0, y1]);

const res = { capture: { viewport: { width: W, height: H }, deviceScaleFactor: 1, reducedMotion: 'reduce', tolerance: `per-pixel max channel delta <= ${TOL}`, windowsPerSectionMax: MAX_WINDOWS,
  hidden: 'cookie notice (CSS display:none on both sides, never clicked)', videos: 'paused at the first frame on both sides' }, routes: {} };
for (const r of ROUTES) {
  try {
    await Promise.all([open(pc, CLONE + r), open(pl, LIVE + r)]);
    const [cc, ll] = await Promise.all([pc.evaluate(classifyBlocks, r), pl.evaluate(classifyBlocks, r)]);
    const [dc, dl] = await Promise.all([pc.evaluate(() => document.documentElement.scrollHeight), pl.evaluate(() => document.documentElement.scrollHeight)]);
    // in-flow sections, plus the art-lab plane (a fixed full-viewport canvas that IS the page)
    const pick = (x) => x.blocks.filter((b) => (b.inFlow && b.position !== 'sticky') || b.section === 'art.draggable-plane').sort((a, b) => a.top - b.top);
    const cb = pick(cc), lb = pick(ll);
    const rows = [];
    for (let i = 0; i < cb.length; i++) {
      const c = cb[i], l = lb[i] && lb[i].section === c.section ? lb[i] : null;
      const row = { index: i, section: c.section, variant: c.variant, cloneTop: c.top, cloneH: c.heightPx, liveTop: l ? l.top : null, liveH: l ? l.heightPx : null, windows: [] };
      if (!l) { row.error = 'section not found at the same position on the live page'; rows.push(row); continue; }
      const n = Math.min(MAX_WINDOWS, Math.max(1, Math.ceil(c.heightPx / H)));
      for (let k = 0; k < n; k++) {
        const off = k * H;
        const yc = Math.max(0, Math.min(c.top + off, dc - H)), yl = Math.max(0, Math.min(l.top + off, dl - H));
        const [sc, sl] = await Promise.all([settle(pc, yc), settle(pl, yl)]);
        const top = Math.max(0, c.top + off - sc), bot = Math.min(H, c.top + Math.min(c.heightPx, off + H) - sc);
        if (bot - top < 8) continue;
        const [ia, ib] = await Promise.all([pc.screenshot(), pl.screenshot()]);
        const m = await diff(ia.toString('base64'), ib.toString('base64'), top, bot);
        row.windows.push({ k, scrollClone: sc, scrollLive: sl, rows: bot - top, match: m });
      }
      const ms = row.windows.map((w) => w.match).filter((x) => x != null);
      row.match = ms.length ? +(ms.reduce((a, b) => a + b, 0) / ms.length).toFixed(2) : null;
      row.minWindow = ms.length ? Math.min(...ms) : null;
      rows.push(row);
    }
    res.routes[r] = { cloneDoc: dc, liveDoc: dl, sections: rows, liveUnclassified: ll.unclassified };
    process.stderr.write(`${r} doc ${dc}/${dl} ${JSON.stringify(rows.map((x) => [x.section.split('.')[1], x.match]))}\n`);
  } catch (e) {
    res.routes[r] = { error: String(e).slice(0, 300) };
    process.stderr.write(`${r} ERROR ${e}\n`);
  }
  fs.writeFileSync(process.env.OUT || 'parity.json', JSON.stringify(res, null, 1));
}
await browser.close();
