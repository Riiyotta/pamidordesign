// Port of module 14709 (studio + work chunks): the footer wrapper whose
// clip-path opens from inset(5% 7% 0% 7%) to inset(0) as its top travels the
// first 60% of the viewport (easeOutCubic), driven by scroll/resize in a rAF.
import { useEffect, useRef } from 'react';

export default function ClipReveal({ children }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    let raf = 0;
    let queued = false;
    const update = () => {
      queued = false;
      const r = el.getBoundingClientRect();
      const span = 0.6 * window.innerHeight;
      const k = 1 - (1 - Math.pow(1 - Math.min(1, Math.max(0, (window.innerHeight - r.top) / span)), 3));
      el.style.clipPath = `inset(${(5 * k).toFixed(2)}% ${(7 * k).toFixed(2)}% 0% ${(7 * k).toFixed(2)}% round ${(0 * k).toFixed(1)}px ${(0 * k).toFixed(1)}px 0 0)`;
    };
    const onScroll = () => {
      if (!queued) {
        queued = true;
        raf = requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
  return (
    <div ref={ref} className="will-change-[clip-path]">
      {children}
    </div>
  );
}
