import { useCallback, useEffect, useRef, useState } from 'react';
import '../../lib/home/introBoot';
import { INTRO_IMAGES } from '../../lib/home/data';
import { FILL_STYLE, imgUrl, srcSetFor } from '../../lib/home/image';

// Intro loader — port of module 28856 (3cjxsh20djos3.js).
// Sequence (ms from mount): letters rise in (620ms, 45ms stagger) -> 820 chip opens (width 300ms)
// -> chip fades/scales in (CSS 1180ms delay) -> 1880 images start cycling every 230ms
// -> exit at 1880 + max(cycles, ceil(late/2070)) * 2070  (2 cycles first visit, 0 on 'short' repeat)
// -> letters out (420ms, 26ms stagger), chip collapses (560ms), overlay fades (420ms, 260ms delay)
// -> +560ms: data-loading/data-intro removed, body overflow restored, unmount.
// The boot script (introBoot) also drops data-loading after 6000/3000ms as a safety net, exactly like
// the original inline <head> script; CSS hides [data-intro] whenever html lacks [data-loading].
const CYCLE = 230 * INTRO_IMAGES.length; // 2070
const FALLBACK = 4 * CYCLE;
// The original's CSS animations start at SSR paint while its timers start at hydration, measured
// ~160ms later on a cold first visit and ~12ms on a cached repeat visit. In the SPA both start at
// mount, so the timers are offset by a middle value to keep chip fade-in vs width/cycle timing close.
const HYDRATION_LAG = 80;

const EASE_IN = 'cubic-bezier(0.22,1,0.36,1)';

function Letter({ children, index, leaving }) {
  return (
    <span className="-mx-[0.06em] block overflow-hidden px-[0.06em]">
      <span
        className="block will-change-transform"
        style={{
          animation: leaving
            ? `loader-letter-out 420ms cubic-bezier(0.65,0,0.2,1) ${26 * index}ms both`
            : `loader-letter-in 620ms ${EASE_IN} ${45 * index}ms both`,
        }}
      >
        {children}
      </span>
    </span>
  );
}

export default function HomeTop4() {
  const [phase, setPhase] = useState('in');
  const [tick, setTick] = useState(0);
  const [open, setOpen] = useState(false);
  const start = useRef(0);

  const finish = useCallback(() => {
    const d = document.documentElement;
    d.removeAttribute('data-loading');
    d.removeAttribute('data-intro');
    document.body.style.overflow = '';
    setPhase('done');
    const hash = window.location.hash;
    if (hash) {
      try { document.querySelector(hash)?.scrollIntoView(); } catch { /* invalid selector */ }
    }
  }, []);

  useEffect(() => {
    if (document.documentElement.dataset.loading !== 'true') return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { finish(); return undefined; }
    document.body.style.overflow = 'hidden';
    start.current = performance.now() + HYDRATION_LAG;
    const cycles = document.documentElement.dataset.intro !== 'short' ? 2 : 0;
    const timers = [];
    let interval = 0;
    timers.push(window.setTimeout(() => setOpen(true), HYDRATION_LAG + 820));
    timers.push(window.setTimeout(() => {
      interval = window.setInterval(() => setTick(t => t + 1), 230);
    }, HYDRATION_LAG + 1880));
    let scheduled = false;
    const onReady = () => {
      if (scheduled) return;
      scheduled = true;
      const elapsed = performance.now() - start.current;
      const wait = Math.max(0, 1880 + Math.max(cycles, Math.ceil(Math.max(0, elapsed - 1880) / CYCLE)) * CYCLE - elapsed);
      timers.push(window.setTimeout(() => {
        window.clearInterval(interval);
        setOpen(false);
        setPhase('out');
        timers.push(window.setTimeout(finish, 560));
      }, wait));
    };
    if (document.readyState === 'complete') onReady();
    else window.addEventListener('load', onReady, { once: true });
    timers.push(window.setTimeout(onReady, HYDRATION_LAG + 1880 + FALLBACK));
    return () => {
      window.clearInterval(interval);
      timers.forEach(window.clearTimeout);
      window.removeEventListener('load', onReady);
      document.body.style.overflow = '';
    };
  }, [finish]);

  if (phase === 'done') return null;

  const leaving = phase === 'out';
  const active = tick % INTRO_IMAGES.length;
  const cur = INTRO_IMAGES[active];
  const w = 1.508 * (cur.width / cur.height);
  const head = 'PAMI'.split('');

  return (
    <div
      aria-hidden="true"
      data-intro="true"
      className={`fixed inset-0 z-[70] flex items-center justify-center bg-canvas transition-opacity duration-[420ms] ${leaving ? 'opacity-0 delay-[260ms]' : 'opacity-100'}`}
    >
      <div
        className="flex items-center gap-[0.06em] font-medium leading-none tracking-[-0.03em] text-ink"
        style={{ fontSize: 'clamp(min(3rem, calc((100vw - 48px) / 6.75)), 9vw, 8rem)' }}
      >
        {head.map((ch, i) => <Letter key={`h${i}`} index={i} leaving={leaving}>{ch}</Letter>)}
        <span
          className="relative block shrink-0 overflow-hidden"
          style={{
            height: '1.508em',
            width: open ? `${w + 0.24}em` : '0em',
            transition: `width ${open ? 300 : 560}ms ${EASE_IN}`,
          }}
        >
          <div
            className="absolute left-1/2 top-0 -translate-x-1/2"
            style={{
              width: `${w}em`,
              height: '1.508em',
              transition: `width 300ms ${EASE_IN}`,
              animation: leaving ? undefined : `loader-chip 360ms ${EASE_IN} 1180ms both`,
            }}
          >
            {INTRO_IMAGES.map((img, i) => (
              <img
                key={img.src}
                alt=""
                loading={i < 2 ? undefined : 'lazy'}
                decoding="async"
                data-nimg="fill"
                className={`object-cover transition-opacity duration-150 ${i === active ? 'opacity-100' : 'opacity-0'}`}
                style={FILL_STYLE}
                sizes="(min-width: 1729px) 13.9vw, 240px"
                srcSet={srcSetFor(img.src)}
                src={imgUrl(img.src, 3840)}
              />
            ))}
          </div>
        </span>
        {'DOR'.split('').map((ch, i) => <Letter key={`t${i}`} index={head.length + i} leaving={leaving}>{ch}</Letter>)}
      </div>
    </div>
  );
}
