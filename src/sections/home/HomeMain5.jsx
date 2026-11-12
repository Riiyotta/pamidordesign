import { useEffect, useRef, useState } from 'react';
import PinSection from './PinSection';
import { SKILLS } from '../../lib/home/data';
import { srcSetFor, imgUrl } from '../../lib/home/image';

// Skillset — port of module 46792 (3cjxsh20djos3.js), wrapped in PinSection (module 5820).
// * Rows slide in from the right (28% -> 0, eased cubic) and their rules grow (scaleX, origin right)
//   as the list scrolls into view (or with --pin progress when pinned on mobile).
// * Fine-pointer hover: a 320x220 preview follows the cursor with 0.12 lerp and velocity tilt
//   (+-14deg); non-hovered rows dim to 40%; a row's preview video restarts on enter.
const Rule = () => <div aria-hidden="true" className="h-[1.5px] w-full bg-[var(--night-hr)] " />;

export default function HomeMain5() {
  const [hovered, setHovered] = useState(null);
  const [fine, setFine] = useState(false);
  const follower = useRef(null);
  const videos = useRef([]);
  const list = useRef(null);
  const target = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const seeded = useRef(false);

  useEffect(() => {
    const hover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!hover || reduce) return undefined;
    setFine(true);
    let raf = 0;
    const loop = () => {
      const el = follower.current;
      if (el) {
        const prevX = pos.current.x;
        pos.current.x += (target.current.x - pos.current.x) * 0.12;
        pos.current.y += (target.current.y - pos.current.y) * 0.12;
        const tilt = Math.max(-14, Math.min(14, (pos.current.x - prevX) * 0.22));
        el.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%) rotate(${tilt}deg)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const ul = list.current;
    if (!ul || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const bodies = Array.from(ul.children).map(li => li.firstElementChild);
    const rules = Array.from(ul.children).map(li => li.lastElementChild);
    const n = bodies.length;
    let raf = 0;
    let queued = false;
    const update = () => {
      queued = false;
      let p;
      const pin = ul.closest('[data-pinned="true"]');
      if (pin) p = Math.min(1, Math.max(0, (Number(pin.style.getPropertyValue('--pin') || 0) - 0.15) / 0.7));
      else {
        const r = ul.getBoundingClientRect();
        p = Math.min(1, Math.max(0, (0.78 * window.innerHeight - r.top) / (0.72 * window.innerHeight)));
      }
      for (let i = 0; i < n; i++) {
        const k = 1 - Math.pow(1 - Math.min(1, Math.max(0, p * n - i)), 3);
        bodies[i].style.transform = `translate3d(${((1 - k) * 28).toFixed(2)}%, 0, 0)`;
        bodies[i].style.opacity = String(k);
        rules[i].style.transform = `scaleX(${k.toFixed(3)})`;
        rules[i].style.transformOrigin = 'right';
      }
    };
    const onScroll = () => { if (!queued) { queued = true; raf = requestAnimationFrame(update); } };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  useEffect(() => {
    videos.current.forEach((v, i) => {
      if (!v) return;
      if (i === hovered) { v.currentTime = 0; v.play().catch(() => {}); } else v.pause();
    });
  }, [hovered]);

  const onMouseMove = fine ? e => {
    target.current = { x: e.clientX, y: e.clientY };
    if (!seeded.current) { pos.current = { ...target.current }; seeded.current = true; }
  } : undefined;

  return (
    <PinSection>
      <div className="relative w-full bg-canvas">
        <section id="skillset" data-cursor-invert="true" className="relative flex min-h-[100svh] w-full flex-col justify-center bg-night py-16 lg:py-52">
          <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
            <div>
              <h2 className="text-section font-medium text-canvas">Skillset</h2>
            </div>
            <div aria-hidden="true" className="h-[1.5px] w-full bg-[var(--night-hr)] mt-8 lg:mt-[calc(24*var(--px))]" />
            <ul ref={list} className="overflow-hidden" onMouseMove={onMouseMove} onMouseLeave={fine ? () => setHovered(null) : undefined}>
              {SKILLS.map((s, i) => (
                <li key={s.n} onMouseEnter={fine ? () => setHovered(i) : undefined}>
                  <div className="will-change-transform">
                    <div className={`grid grid-cols-1 items-baseline gap-y-3 py-7 transition-opacity duration-300 lg:grid-cols-5 lg:gap-0 lg:py-[calc(32*var(--px))] ${hovered !== null && hovered !== i ? 'lg:opacity-40' : 'lg:opacity-100'}`}>
                      <span className="text-label text-night-muted lg:pt-[calc(10*var(--px))] lg:text-body">{s.n}</span>
                      <span className="text-subhead font-medium text-canvas lg:col-span-2 lg:-ml-[calc(152*var(--px))]">{s.title}</span>
                      <span className="max-w-[46ch] text-body text-night-body lg:col-span-2 lg:max-w-none lg:pt-[calc(12*var(--px))]">{s.blurb}</span>
                    </div>
                  </div>
                  <Rule />
                </li>
              ))}
            </ul>
          </div>
          {fine && (
            <div ref={follower} aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-30 will-change-transform">
              {SKILLS.map((s, i) => {
                const { video, crop } = s.preview;
                const box = crop
                  ? { width: `${100 / crop.width}%`, height: `${100 / crop.height}%`, left: `${-crop.x / crop.width * 100}%`, top: `${-crop.y / crop.height * 100}%` }
                  : { width: '100%', height: '100%', left: 0, top: 0 };
                return (
                  <div key={s.n} className={`absolute left-0 top-0 h-[calc(220*var(--px))] w-[calc(320*var(--px))] -translate-x-1/2 -translate-y-1/2 overflow-hidden transition-[opacity,transform] duration-[450ms] ease-out-soft ${hovered === i ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
                    <img
                      alt={s.preview.alt}
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="object-cover"
                      style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }}
                      sizes="(min-width: 1729px) 18.52vw, 320px"
                      srcSet={srcSetFor(s.preview.src)}
                      src={imgUrl(s.preview.src, 3840)}
                    />
                    {video && (
                      <video
                        ref={el => { videos.current[i] = el; }}
                        src={video}
                        muted
                        loop
                        playsInline
                        preload="none"
                        className="absolute max-w-none bg-transparent object-cover"
                        style={box}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </PinSection>
  );
}
