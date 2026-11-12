// Scroll-driven character "wave" — port of module 66707 (work + studio + home).
// Markup (SSR):
//   div.lg:[height:calc(100vh+var(--travel))]   <- "track" (desktop measure)
//     div.lg:sticky ...
//       div.[height:calc(100svh+var(--travel))] <- "mobileTrack" (mobile measure)
//         div.sticky ...
//           p  > span[data-word] > span[data-char]
// On mount the <p> gets [data-wave] (CSS dims chars to --wave-dim). On every
// scroll/resize (rAF-coalesced) progress is computed and the first
// round(progress * nChars) chars get [data-lit] (CSS: .4s char-wave keyframes).
import { reducedMotion } from './motion';

export const WAVE_SELECTOR = '[data-word]';

const instances = new Set();
let raf = 0;
let pending = false;
let mq = null;

function tickAll() {
  pending = false;
  for (const inst of instances) inst.update();
}
function schedule() {
  if (pending) return;
  pending = true;
  raf = requestAnimationFrame(tickAll);
}
function bindGlobal() {
  mq = window.matchMedia('(min-width: 1024px)');
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  mq.addEventListener('change', schedule);
}
function unbindGlobal() {
  cancelAnimationFrame(raf);
  pending = false;
  window.removeEventListener('scroll', schedule);
  window.removeEventListener('resize', schedule);
  mq?.removeEventListener('change', schedule);
  mq = null;
}

// Given any [data-word], resolve the wave paragraph (its parent).
export function waveHostOf(word) {
  return word.parentElement;
}

export function attachWave(p) {
  if (!p || reducedMotion()) return null;
  const chars = Array.from(p.querySelectorAll('[data-char]'));
  const total = chars.length;
  if (total === 0) return null;
  const mobileTrack = p.parentElement?.parentElement || p; // ref `o`
  const track = mobileTrack.parentElement?.parentElement || p; // ref `s`
  p.setAttribute('data-wave', '');
  let lit = 0;
  const inst = {
    update() {
      const desk = (mq || window.matchMedia('(min-width: 1024px)')).matches;
      const r = (desk ? track : mobileTrack).getBoundingClientRect();
      const vh = window.innerHeight;
      const travel = r.height - vh;
      const prog = travel > 0
        ? Math.min(1, Math.max(0, -r.top / travel))
        : Math.min(1, Math.max(0, (0.85 * vh - r.top) / (0.6 * vh)));
      const next = Math.round(prog * total);
      if (next === lit) return;
      if (next > lit) for (let i = lit; i < next; i++) chars[i].setAttribute('data-lit', '');
      else for (let i = lit - 1; i >= next; i--) chars[i].removeAttribute('data-lit');
      lit = next;
    },
  };
  if (instances.size === 0) bindGlobal();
  instances.add(inst);
  inst.update();
  return () => {
    instances.delete(inst);
    if (instances.size === 0) unbindGlobal();
    p.removeAttribute('data-wave');
    chars.forEach((c) => c.removeAttribute('data-lit'));
  };
}
