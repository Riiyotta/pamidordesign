// Port of module 44947 (work chunk 3uz44me8nntup): a grid of process boards,
// each opening a full-screen lightbox dialog (portal to <body>) with
// (CLOSE) / (PREV) / (NEXT), Escape / ArrowLeft / ArrowRight, a Tab focus trap,
// body scroll lock, and focus restored to the opening button on close.
import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { imageProps } from '../../lib/work/nextImage';

const GRID_SIZES = '(min-width: 1024px) 640px, (min-width: 640px) 46vw, 100vw';
const pad = (i) => String(i + 1).padStart(2, '0');

export default function BoardGallery({ items }) {
  const [open, setOpen] = useState(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const step = useCallback(
    (d) => setOpen((s) => (s === null ? null : (s + d + items.length) % items.length)),
    [items.length],
  );
  const dialogRef = useRef(null);
  const openerRef = useRef(null);

  useEffect(() => {
    if (open === null) {
      openerRef.current?.focus();
      openerRef.current = null;
      return undefined;
    }
    const focusables = () => Array.from(dialogRef.current?.querySelectorAll('button, [href]') ?? []);
    focusables()[0]?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(null);
      else if (e.key === 'ArrowRight') step(1);
      else if (e.key === 'ArrowLeft') step(-1);
      else if (e.key === 'Tab') {
        const f = focusables();
        if (f.length === 0) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, step]);

  const cur = open === null ? null : items[open];
  const label = (it) => it.stage ?? it.alt;

  return (
    <>
      <ul className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:gap-8">
        {items.map((it, i) => (
          <li key={it.src}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="group/board block w-full text-left"
              onClickCapture={(e) => {
                openerRef.current = e.currentTarget;
              }}
              aria-label={`Open ${label(it)} full screen`}
            >
              <div className="flex items-baseline gap-3">
                <span className="text-label text-muted">
                  [ {pad(i)} ]
                </span>
                <span className="text-label text-ink">{label(it)}</span>
              </div>
              <div className="mt-3 overflow-hidden border border-rule bg-white transition-colors duration-300 ease-out-soft group-hover/board:border-ink">
                <img
                  alt={it.alt}
                  loading="lazy"
                  width={it.width}
                  height={it.height}
                  decoding="async"
                  data-nimg="1"
                  className="h-auto w-full transition-transform duration-500 ease-out-soft group-hover/board:scale-[1.02]"
                  style={{ color: 'transparent' }}
                  {...imageProps(it.src, GRID_SIZES)}
                />
              </div>
            </button>
          </li>
        ))}
      </ul>
      {mounted &&
        cur &&
        createPortal(
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={label(cur)}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[70] flex flex-col bg-night p-4 sm:p-8"
          >
            <div className="flex shrink-0 items-center justify-between pb-4">
              <p className="text-label text-night-muted">
                [ {pad(open)} ] {label(cur)}
              </p>
              <button
                type="button"
                onClick={() => setOpen(null)}
                aria-label="Close"
                className="-m-2 p-2 text-label text-night-muted transition-colors hover:text-canvas"
              >
                (CLOSE)
              </button>
            </div>
            <div onClick={(e) => e.stopPropagation()} data-lenis-prevent="true" className="min-h-0 flex-1 overflow-auto">
              <img
                alt={cur.alt}
                loading="lazy"
                width={cur.width}
                height={cur.height}
                decoding="async"
                data-nimg="1"
                className="mx-auto h-auto w-full min-w-[var(--board)] max-w-none bg-white lg:min-w-0 lg:max-w-[1600px]"
                style={{ color: 'transparent', '--board': `${Math.round(cur.width / 2)}px` }}
                {...imageProps(cur.src, `(min-width: 1024px) 100vw, ${Math.round(cur.width / 2)}px`)}
              />
            </div>
            {items.length > 1 && (
              <div className="flex shrink-0 justify-center gap-6 pt-4">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    step(-1);
                  }}
                  className="text-label text-night-muted transition-colors hover:text-canvas"
                >
                  (PREV)
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    step(1);
                  }}
                  className="text-label text-night-muted transition-colors hover:text-canvas"
                >
                  (NEXT)
                </button>
              </div>
            )}
          </div>,
          document.body,
        )}
    </>
  );
}
