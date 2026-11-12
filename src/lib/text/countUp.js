// Stat count-up — port of module 71049 (work case studies, `.text-stat`).
// When 60% visible (once), the number eases 0 -> value over 900ms with
// easeOutCubic, keeping prefix/suffix and the value's decimal places, then
// restores the original string. We rewrite the React-owned text node's data in
// place (instead of swapping children) so React reconciliation stays intact.
import { reducedMotion } from './motion';

export const COUNT_SELECTOR = '.text-stat';
const RE = /^(\D*?)(\d+(?:[.,]\d+)?)([\s\S]*)$/;

export function attachCountUp(el) {
  if (typeof IntersectionObserver === 'undefined' || reducedMotion()) return null;
  if (el.childNodes.length !== 1 || el.firstChild.nodeType !== 3) return null;
  const node = el.firstChild;
  const original = node.data;
  const m = original.match(RE);
  if (!m) return null;
  const target = Number(m[2].replace(/,/g, ''));
  if (!Number.isFinite(target)) return null;
  const decimals = (m[2].split(/[.,]/)[1] ?? '').length;
  let raf = 0;
  const io = new IntersectionObserver(
    ([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const step = (now) => {
        const k = Math.min(1, (now - t0) / 900);
        if (k < 1) {
          node.data = m[1] + (target * (1 - Math.pow(1 - k, 3))).toFixed(decimals) + m[3];
          raf = requestAnimationFrame(step);
        } else {
          node.data = original;
        }
      };
      raf = requestAnimationFrame(step);
    },
    { threshold: 0.6 },
  );
  io.observe(el);
  return () => {
    io.disconnect();
    cancelAnimationFrame(raf);
    node.data = original;
  };
}
