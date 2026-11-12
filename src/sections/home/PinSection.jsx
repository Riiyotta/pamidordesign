import { useEffect, useRef } from 'react';

// Port of module 5820: on <1024px (and motion allowed) pins its content for `travel` extra viewports
// when the content fits within `fit` of the viewport height; exposes progress as --pin (0..1) and
// data-pin-progress on the wrapper. Above 1024px it is inert.
export default function PinSection({ travel = 1, fit = 0.94, className = '', children }) {
  const outer = useRef(null);
  const inner = useRef(null);

  useEffect(() => {
    const t = outer.current;
    const a = inner.current;
    if (!t || !a) return undefined;
    const mobile = window.matchMedia('(max-width: 1023px)');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    let pinned = false;
    let raf = 0;
    let queued = false;
    const reset = () => {
      t.style.height = ''; a.style.position = ''; a.style.top = ''; a.style.height = ''; a.style.overflow = '';
      t.style.removeProperty('--pin'); delete t.dataset.pinned;
    };
    const update = () => {
      queued = false;
      if (!pinned) return;
      const range = t.offsetHeight - window.innerHeight;
      const p = range > 0 ? Math.min(1, Math.max(0, -t.getBoundingClientRect().top / range)) : 0;
      t.style.setProperty('--pin', p.toFixed(4));
      t.dataset.pinProgress = p < 0.001 ? 'start' : p > 0.999 ? 'end' : 'mid';
    };
    const layout = () => {
      const content = a.firstElementChild;
      if (!content) return;
      if (!mobile.matches || reduce.matches) { reset(); pinned = false; return; }
      t.dataset.pinned = 'true'; t.style.height = ''; a.style.position = ''; a.style.height = '';
      pinned = content.scrollHeight <= window.innerHeight * fit;
      if (pinned) {
        t.style.height = `calc(${(1 + travel) * 100}dvh)`;
        a.style.position = 'sticky'; a.style.top = '0px'; a.style.height = '100dvh'; a.style.overflow = 'hidden';
        update();
      } else reset();
    };
    const onScroll = () => { if (!queued) { queued = true; raf = requestAnimationFrame(update); } };
    layout();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', layout);
    mobile.addEventListener('change', layout);
    reduce.addEventListener('change', layout);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', layout);
      mobile.removeEventListener('change', layout);
      reduce.removeEventListener('change', layout);
      reset();
    };
  }, [travel, fit]);

  return (
    <div ref={outer} className={`relative ${className}`}>
      <div ref={inner} className="flex flex-col justify-center">{children}</div>
    </div>
  );
}
