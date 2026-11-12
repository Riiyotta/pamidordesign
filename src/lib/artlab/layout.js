// Justified-row layout for the Art Lab plane - a 1:1 port of the module-level
// layout code in the original chunk 02hiv7b9fio8a.js.
import { ARTWORKS } from './artworks';

export const PLANE_W = 3300; // row width
export const GAP = 8;
export const TILE_W = PLANE_W + GAP; // horizontal wrap period (3308)
const ROW_H = 300;

function build() {
  const items = [];
  let planeH = 0;
  const src = ARTWORKS.map((e) => ({
    ...e,
    w: ROW_H * Math.min(1.9, Math.max(0.45, e.width / e.height)),
  }));
  const rows = [];
  let row = [];
  let rowW = 0;
  for (const it of src) {
    const next = rowW + GAP * !!row.length + it.w;
    if (row.length && next > PLANE_W && next - PLANE_W > PLANE_W - rowW) {
      rows.push(row);
      row = [it];
      rowW = it.w;
    } else {
      row.push(it);
      rowW = next;
    }
  }
  if (row.length) {
    if (rowW < 2475 && rows.length) row.forEach((it, i) => rows[i % rows.length].push(it));
    else rows.push(row);
  }
  for (const r of rows) {
    const k = (PLANE_W - GAP * (r.length - 1)) / r.reduce((a, it) => a + it.w, 0);
    const h = Math.round(ROW_H * k);
    let x = 0;
    for (const it of r) {
      const w = Math.round(it.w * k);
      items.push({ src: it.src, alt: it.alt, width: it.width, height: it.height, x, y: planeH, w, h });
      x += w + GAP;
    }
    const last = items[items.length - 1];
    last.w = PLANE_W - last.x;
    planeH += h + GAP;
  }
  return { items, planeH };
}

const built = build();
export const ITEMS = built.items;
export const PLANE_H = built.planeH; // vertical wrap period
export const MAX_W = Math.max(...ITEMS.map((e) => e.w));
export const MAX_H = Math.max(...ITEMS.map((e) => e.h));

// Next deploy id the original appends to unoptimized image urls.
export const DPL = '?dpl=dpl_Fa51UQg54dXo76KJix6ccg67Coqj';
