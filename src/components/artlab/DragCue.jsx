import { useEffect, useState } from 'react';

// "(DRAG ANYWHERE)" cue (original module 41661): fades out on first
// pointerdown / wheel / keydown or after 5.2s; remembered per session.
export default function DragCue() {
  const [gone, setGone] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem('lab-cue') === 'seen') { setGone(true); return; }
    const hide = () => {
      setGone(true);
      try { sessionStorage.setItem('lab-cue', 'seen'); } catch { /* ignore */ }
    };
    const t = window.setTimeout(hide, 5200);
    const opts = { passive: true };
    window.addEventListener('pointerdown', hide, opts);
    window.addEventListener('wheel', hide, opts);
    window.addEventListener('keydown', hide, opts);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener('pointerdown', hide);
      window.removeEventListener('wheel', hide);
      window.removeEventListener('keydown', hide);
    };
  }, []);
  return (
    <p aria-hidden="true" data-gone={gone || undefined} className="pointer-events-none absolute inset-x-0 bottom-8 z-[60] text-center text-label text-ink transition-opacity duration-700 ease-out-soft data-[gone]:opacity-0 sm:bottom-10 motion-reduce:transition-none">
      <span className="bg-canvas/80 px-3 py-2">
        (DRAG ANYWHERE)
      </span>
    </p>
  );
}
