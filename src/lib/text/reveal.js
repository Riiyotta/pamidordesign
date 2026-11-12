// `.reveal[data-reveal]` — port of the original Reveal component (module 73195,
// shared by home / studio / work chunks):
//   SSR renders data-reveal="ssr"; a layout effect flips it to "waiting"
//   (CSS: translate3d(0, 13*--px, 0), no transition), then an IntersectionObserver
//   (rootMargin "0px 0px -12% 0px", threshold .05) sets "shown" once and disconnects.
//   CSS `.reveal{transition:transform .7s cubic-bezier(.16,1,.3,1)}` does the motion;
//   per-element delay comes from the inline transitionDelay already in the markup.
import { reducedMotion } from './motion';

export const REVEAL_SELECTOR = '[data-reveal]';

export function attachReveal(el) {
  if (el.getAttribute('data-reveal') === 'shown') return null;
  if (typeof IntersectionObserver === 'undefined' || reducedMotion()) return null;
  el.setAttribute('data-reveal', 'waiting');
  const io = new IntersectionObserver(
    ([e]) => {
      if (e.isIntersecting) {
        el.setAttribute('data-reveal', 'shown');
        io.disconnect();
      }
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.05 },
  );
  io.observe(el);
  return () => io.disconnect();
}
