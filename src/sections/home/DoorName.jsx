import { useEffect, useRef } from 'react';

// Hero name line — port of module 83054. For "Dor" it measures the extra width of "Door" vs "Dor",
// exposes it as --door-o and sets [data-door-open] so the CSS door-grow/door-give loop runs.
export default function DoorName({ text }) {
  const outer = useRef(null);
  const give = useRef(null);

  useEffect(() => {
    const el = outer.current;
    const r = give.current;
    if (!el || !r) return undefined;
    const measure = () => {
      const probe = document.createElement('span');
      probe.style.cssText = 'position:absolute;visibility:hidden;white-space:pre';
      el.appendChild(probe);
      probe.textContent = 'Door';
      const wide = probe.getBoundingClientRect().width;
      probe.textContent = 'Dor';
      const narrow = probe.getBoundingClientRect().width;
      probe.remove();
      el.style.setProperty('--door-o', `${wide - narrow}px`);
      el.setAttribute('data-door-open', '');
    };
    measure();
    if (typeof ResizeObserver === 'undefined') return undefined;
    const ro = new ResizeObserver(measure);
    ro.observe(r);
    return () => ro.disconnect();
  }, []);

  if (text !== 'Dor') return <span className="block">{text}</span>;
  return (
    <span ref={outer} className="block">
      Do
      <span aria-hidden="true" className="door-add" />
      <span ref={give} className="door-give inline-block">r</span>
    </span>
  );
}
