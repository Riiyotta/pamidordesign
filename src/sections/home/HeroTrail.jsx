import { useEffect, useRef } from 'react';
import { HERO_MASK } from '../../lib/home/heroMask';
import { getPx } from '../../lib/home/px';

// Hero image trail — port of module 97329 (3cjxsh20djos3.js).
// Six pooled <img>s; while the pointer is over the parent (and, for the >=1440px photo, over the
// subject per HERO_MASK) a new image is stamped every 90*--px of pointer travel. Each stamp runs an
// 840ms WAAPI wipe-in/hold/fade; at most 4 are live, older ones are fast-forwarded (2.5x from 600ms).
const SRCS = [1, 2, 3, 4, 5, 6].map(n => `/images/hero-trail/trail-${n}.webp`);
const DURATION = 840;
const HOLD_END = 600;
const MASK_STYLE = {
  maskImage: 'linear-gradient(105deg, #000 45%, rgba(0, 0, 0, 0) 62%)',
  maskSize: '280% 100%',
  maskRepeat: 'no-repeat',
  maskPosition: '100% 0%',
};

function onSubject(x, y, w, h, photo, focus) {
  const ax = w * focus.zoomX;
  const ay = h * focus.zoomY;
  const ux = ax + (x - ax) / focus.zoom;
  const uy = ay + (y - ay) / focus.zoom;
  const scale = Math.max(w / photo.width, h / photo.height);
  const ox = (w - photo.width * scale) * focus.x;
  const oy = (h - photo.height * scale) * focus.y;
  const col = Math.floor((ux - ox) / (photo.width * scale) * 256);
  const row = HERO_MASK[Math.floor((uy - oy) / (photo.height * scale) * 145)];
  if (!row) return false;
  for (let i = 0; i < row.length; i += 2) if (col >= row[i] && col < row[i + 1]) return true;
  return false;
}

export default function HeroTrail({ photo, focus }) {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    const area = root?.parentElement;
    if (!root || !area || !window.matchMedia('(hover: hover) and (prefers-reduced-motion: no-preference)').matches) return undefined;
    const slots = Array.from(root.children).map(el => ({ el, img: el.querySelector('img'), anim: null }));
    let active = false;
    let lx = 0;
    let ly = 0;
    let dist = 0;
    let px = 1;
    let srcIdx = -1;
    let slotIdx = 0;
    const live = [];
    const draining = [];

    const drain = slot => {
      if (slot.anim && slot.anim.currentTime !== null) {
        slot.anim.currentTime = Math.max(Number(slot.anim.currentTime), HOLD_END);
        slot.anim.playbackRate = 2.5;
        draining.push(slot);
        if (draining.length > 1) draining.shift().anim?.finish();
      }
    };

    const stamp = (x, y) => {
      srcIdx = (srcIdx + 1) % SRCS.length;
      const slot = slots[slotIdx];
      slotIdx = (slotIdx + 1) % 6;
      if (live.length >= 4) drain(live.shift());
      const li = live.indexOf(slot);
      if (li !== -1) live.splice(li, 1);
      const di = draining.indexOf(slot);
      if (di !== -1) draining.splice(di, 1);
      slot.img.src = SRCS[srcIdx];
      slot.el.style.transform = `translate3d(${x + 4 * px}px, ${y + -53 * px}px, 0)`;
      slot.anim?.cancel();
      slot.anim = slot.img.animate([
        { opacity: 1, transform: 'scale(0.98)', maskPosition: '100% 0%', easing: 'cubic-bezier(0.45, 0, 0.25, 1)' },
        { opacity: 1, transform: 'scale(1)', maskPosition: '0% 0%', offset: 240 / DURATION },
        { opacity: 1, maskPosition: '0% 0%', offset: HOLD_END / DURATION, easing: 'cubic-bezier(0.55, 0, 0.45, 1)' },
        { opacity: 0, transform: 'scale(0.97)', maskPosition: '0% 0%' },
      ], { duration: DURATION, fill: 'both' });
      live.push(slot);
    };

    const release = () => {
      active = false;
      while (live.length) {
        const slot = live.shift();
        if (slot.anim && slot.anim.currentTime !== null) slot.anim.currentTime = Math.max(Number(slot.anim.currentTime), HOLD_END);
      }
      draining.length = 0;
    };

    const onMove = e => {
      const r = area.getBoundingClientRect();
      const inside = r.width > 0 && e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom
        && (!photo || !focus || onSubject(e.clientX - r.left, e.clientY - r.top, r.width, r.height, photo, focus));
      if (!inside) { if (active) release(); return; }
      if (!active) {
        active = true;
        px = getPx();
        lx = e.clientX; ly = e.clientY; dist = 0;
        stamp(e.clientX - r.left, e.clientY - r.top);
        return;
      }
      dist += Math.hypot(e.clientX - lx, e.clientY - ly);
      lx = e.clientX; ly = e.clientY;
      if (dist >= 90 * px) { dist = 0; stamp(e.clientX - r.left, e.clientY - r.top); }
    };
    const onLeave = () => release();

    document.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    window.addEventListener('blur', onLeave);
    return () => {
      document.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('blur', onLeave);
      slots.forEach(s => s.anim?.cancel());
    };
  }, [photo, focus]);

  return (
    <div ref={ref} aria-hidden="true" className="pointer-events-none absolute left-0 top-0 z-10">
      {SRCS.map(src => (
        <div key={src} className="absolute left-0 top-0" style={{ width: 'calc(80 * var(--px))' }}>
          <img src={src} alt="" width="480" className="h-auto w-full opacity-0" style={MASK_STYLE} />
        </div>
      ))}
    </div>
  );
}
