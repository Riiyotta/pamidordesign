// Shared helpers for the text/reveal effects (mirrors the original's guards).
export const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Collect `el` itself (if it matches) plus all matching descendants.
export function collect(root, selector) {
  const out = [];
  if (!root || root.nodeType !== 1) return out;
  if (root.matches(selector)) out.push(root);
  root.querySelectorAll(selector).forEach((n) => out.push(n));
  return out;
}
