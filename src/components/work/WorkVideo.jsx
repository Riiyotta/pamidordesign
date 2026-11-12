// Port of module 64462 (work chunk): muted inline video that plays while in
// view (IO threshold .25, rootMargin 200px 0px) and pauses when out. A
// play-once video (no `loop`) stops for good after "ended". With
// prefers-reduced-motion it never autoplays and shows native controls instead.
// Accepts the same props the SSR <video> had, so swapping the tag is enough.
import { useEffect, useRef, useState } from 'react';

export default function WorkVideo({ children, ...props }) {
  const ref = useRef(null);
  const [controls, setControls] = useState(false);
  const ended = useRef(false);
  useEffect(() => {
    const v = ref.current;
    if (!v) return undefined;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setControls(mq.matches);
    if (mq.matches) return undefined;
    const onEnded = () => {
      ended.current = true;
    };
    v.addEventListener('ended', onEnded);
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          if (!ended.current) v.play().catch(() => {});
        } else v.pause();
      },
      { rootMargin: '200px 0px', threshold: 0.25 },
    );
    io.observe(v);
    return () => {
      io.disconnect();
      v.removeEventListener('ended', onEnded);
    };
  }, []);
  return (
    <video ref={ref} controls={controls} {...props}>
      {children}
    </video>
  );
}
