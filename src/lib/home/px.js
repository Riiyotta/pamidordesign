// Port of module 51459: current value of the --px design unit (falls back to 1).
export function getPx(el = document.documentElement) {
  const v = parseFloat(getComputedStyle(el).getPropertyValue('--px'));
  return Number.isFinite(v) && v > 0 ? v : 1;
}

export const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
