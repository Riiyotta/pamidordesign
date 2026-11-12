import { useEffect, useState } from 'react';

// Port of module 64462 (media video): plays while intersecting (rootMargin 200px, threshold .25),
// pauses otherwise; a videoOnce clip is not restarted after 'ended'. Reduced motion -> controls.
export default function useAutoplayVideo(ref, { rootMargin = '200px 0px', threshold = 0.25 } = {}) {
  const [controls, setControls] = useState(false);
  useEffect(() => {
    const v = ref.current;
    if (!v) return undefined;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    setControls(reduce.matches);
    if (reduce.matches) return undefined;
    let ended = false;
    const onEnded = () => { ended = true; };
    v.addEventListener('ended', onEnded);
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { if (!ended) v.play().catch(() => {}); } else v.pause();
    }, { rootMargin, threshold });
    io.observe(v);
    return () => { io.disconnect(); v.removeEventListener('ended', onEnded); };
  }, [ref, rootMargin, threshold]);
  return controls;
}
