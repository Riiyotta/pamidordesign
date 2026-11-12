// Infinite drag plane physics - 1:1 port of the original Art Lab effect
// (chunk 02hiv7b9fio8a.js, module 17227). Constants are the original's.
import { useEffect } from 'react';
import { ITEMS, TILE_W, PLANE_H, MAX_W, MAX_H } from './layout';

const FRICTION = 0.95; // inertia decay per frame
const MIN_VEL = 0.08; // stop threshold
const FOCUS_EASE = 0.06; // focus point lerp
const FOCUS_R = 620; // radius of the lens falloff
const KEY_STEP = 140; // arrow-key step (screen px)

// --px from :root (shared util 51459)
function readPx(el = document.documentElement) {
  const v = parseFloat(getComputedStyle(el).getPropertyValue('--px'));
  return Number.isFinite(v) && v > 0 ? v : 1;
}

export default function usePlane(planeRef) {
  useEffect(() => {
    const plane = planeRef.current;
    if (!plane) return;
    const host = plane.parentElement;
    const nodes = Array.from(plane.children);
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    let s = 1;
    const fit = () => {
      s = Math.max(
        1.4 * Math.min(1, Math.max(0.55, window.innerWidth / 1440)) * readPx(),
        Math.max(window.innerWidth / (TILE_W - MAX_W - 120), window.innerHeight / (PLANE_H - MAX_H - 120)),
      );
      plane.style.transform = `scale(${s})`;
    };

    let ox = 0, oy = 0; // plane offset
    let vx = 0, vy = 0; // inertia velocity
    let dragging = false;
    let lx = 0, ly = 0; // last pointer
    let fx = 0, fy = 0; // eased focus
    let tx = 0, ty = 0; // focus target
    let raf = 0;

    const center = () => {
      tx = window.innerWidth / 2 / s;
      ty = window.innerHeight / 2 / s;
    };

    const render = () => {
      const vw = window.innerWidth / s;
      const vh = window.innerHeight / s;
      for (let i = 0; i < nodes.length; i++) {
        const it = ITEMS[i];
        let x = (((it.x + ox) % TILE_W) + TILE_W) % TILE_W;
        let y = (((it.y + oy) % PLANE_H) + PLANE_H) % PLANE_H;
        if (x > vw + 60) x -= TILE_W;
        if (y > vh + 60) y -= PLANE_H;
        let t = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
        if (!reduced) {
          const dx = x + it.w / 2 - fx;
          const dy = y + it.h / 2 - fy;
          const d = Math.min(1, Math.hypot(dx, dy) / FOCUS_R);
          const k = d * d * (3 - 2 * d); // smoothstep
          const sc = 1.1 + (0.92 - 1.1) * k;
          const rot = 4 * Math.max(-1, Math.min(1, dx / FOCUS_R)) * k;
          t += ` translate3d(${(-(0.035 * dx) * k).toFixed(1)}px, ${(-(0.035 * dy) * k).toFixed(1)}px, 0) rotate(${rot.toFixed(2)}deg) scale(${sc.toFixed(3)})`;
          nodes[i].style.zIndex = String(Math.round(20 * sc));
        }
        nodes[i].style.transform = t;
      }
    };

    const tick = () => {
      if (!dragging && (Math.abs(vx) > MIN_VEL || Math.abs(vy) > MIN_VEL)) {
        ox += vx;
        oy += vy;
        vx *= FRICTION;
        vy *= FRICTION;
      }
      fx += (tx - fx) * FOCUS_EASE;
      fy += (ty - fy) * FOCUS_EASE;
      render();
      raf = requestAnimationFrame(tick);
    };

    const onDown = (e) => {
      dragging = true;
      lx = e.clientX;
      ly = e.clientY;
      vx = vy = 0;
      host.setPointerCapture(e.pointerId);
    };
    const onMove = (e) => {
      if (fine) {
        tx = e.clientX / s;
        ty = e.clientY / s;
      }
      if (!dragging) return;
      const dx = (e.clientX - lx) / s;
      const dy = (e.clientY - ly) / s;
      lx = e.clientX;
      ly = e.clientY;
      ox += dx;
      oy += dy;
      vx = dx;
      vy = dy;
    };
    const onUp = () => {
      dragging = false;
      if (reduced) vx = vy = 0;
    };
    const onWheel = (e) => {
      e.preventDefault();
      ox -= e.deltaX / s;
      oy -= e.deltaY / s;
    };
    const onKey = (e) => {
      const step = KEY_STEP / s;
      if (e.key === 'ArrowLeft') ox += step;
      else if (e.key === 'ArrowRight') ox -= step;
      else if (e.key === 'ArrowUp') oy += step;
      else if (e.key === 'ArrowDown') oy -= step;
      else return;
      e.preventDefault();
    };
    const onResize = () => {
      fit();
      if (!fine) center();
    };

    fit();
    center();
    fx = tx;
    fy = ty;
    render();
    raf = requestAnimationFrame(tick);
    host.addEventListener('pointerdown', onDown);
    host.addEventListener('pointermove', onMove);
    host.addEventListener('pointerup', onUp);
    host.addEventListener('pointercancel', onUp);
    host.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(raf);
      host.removeEventListener('pointerdown', onDown);
      host.removeEventListener('pointermove', onMove);
      host.removeEventListener('pointerup', onUp);
      host.removeEventListener('pointercancel', onUp);
      host.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [planeRef]);
}
