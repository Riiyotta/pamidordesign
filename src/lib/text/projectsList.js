// Home "Selected Projects" list — active row drives data-hw-on (hw-sweep on the
// title, hw-appear on the meta <dl>) plus the row's size/opacity classes.
// Port of the projects component in 3cjxsh20djos3.js:
//   active = hovered ?? (desktop ? 0 : nearestToViewportCenter)
//   desktop = matchMedia("(min-width: 1024px) and (hover: hover)")
//   hover: li mouseenter/focus -> idx, ul mouseleave -> null
//   mobile: IntersectionObserver(rootMargin "-45% 0px -45% 0px") on each li;
//           on any callback pick the h3 whose centre is nearest innerHeight/2.
// Skipped if the <ul> carries data-projects-managed (i.e. the section itself
// implements this in React).
export const PROJECTS_SELECTOR = '#projects ul[style*="--list-h"]';

const swap = (el, on, onCls, offCls) => {
  if (!el) return;
  const add = on ? onCls : offCls;
  const rem = on ? offCls : onCls;
  rem.forEach((c) => el.classList.remove(c));
  add.forEach((c) => el.classList.add(c));
};
const hwOn = (el, on) => {
  if (!el) return;
  if (on) el.setAttribute('data-hw-on', 'true');
  else el.removeAttribute('data-hw-on');
};

export function attachProjectsList(ul) {
  if (ul.hasAttribute('data-projects-managed')) return null;
  const items = Array.from(ul.children).filter((n) => n.tagName === 'LI');
  if (!items.length) return null;
  const rows = items.map((li) => {
    const h3 = li.querySelector('h3[data-hw]');
    const btn = h3?.parentElement?.querySelector(':scope > span[data-hw]');
    const dl = li.querySelector('dl[data-hw-appear]');
    const cover = li.querySelector('div[data-hw-appear]')?.parentElement;
    return { li, h3, btn, dl, cover };
  });

  let hovered = null;
  let scrolled = 0;
  let current = -1;
  const mq = window.matchMedia('(min-width: 1024px) and (hover: hover)');

  const apply = () => {
    const active = hovered ?? (mq.matches ? 0 : scrolled);
    if (active === current) return;
    current = active;
    rows.forEach((r, i) => {
      const s = i === active;
      swap(r.li, s, ['lg:min-h-[calc(270*var(--px))]'], ['lg:min-h-[calc(112*var(--px))]']);
      hwOn(r.h3, s);
      swap(r.h3, s, ['text-accent'], ['text-ink', 'lg:opacity-45']);
      swap(r.btn, s, ['border-ink'], ['border-ink/25', 'lg:opacity-45']);
      r.btn?.classList.add('text-ink');
      hwOn(r.dl, s);
      swap(r.dl, s, ['lg:translate-y-0', 'lg:opacity-100'], ['lg:pointer-events-none', 'lg:translate-y-1.5', 'lg:opacity-0']);
      swap(r.cover, s, ['opacity-100'], ['lg:opacity-0']);
    });
  };

  const offs = [];
  const on = (t, ev, fn) => { t.addEventListener(ev, fn); offs.push(() => t.removeEventListener(ev, fn)); };
  rows.forEach((r, i) => {
    on(r.li, 'mouseenter', () => { hovered = i; apply(); });
    on(r.li, 'focusin', () => { hovered = i; apply(); });
  });
  on(ul, 'mouseleave', () => { hovered = null; apply(); });

  let io = null;
  const setupIO = () => {
    io?.disconnect();
    io = null;
    if (mq.matches || typeof IntersectionObserver === 'undefined') return;
    io = new IntersectionObserver(() => {
      const mid = window.innerHeight / 2;
      let best = 0;
      let dist = Infinity;
      rows.forEach((r, i) => {
        const b = (r.h3 ?? r.li).getBoundingClientRect();
        const d = Math.abs(b.top + b.height / 2 - mid);
        if (d < dist) { dist = d; best = i; }
      });
      scrolled = best;
      apply();
    }, { rootMargin: '-45% 0px -45% 0px' });
    rows.forEach((r) => io.observe(r.li));
  };
  const onMq = () => { setupIO(); apply(); };
  mq.addEventListener('change', onMq);
  offs.push(() => mq.removeEventListener('change', onMq));
  setupIO();
  apply();

  return () => {
    io?.disconnect();
    offs.forEach((f) => f());
  };
}
