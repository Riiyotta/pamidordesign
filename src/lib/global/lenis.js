// Shared Lenis instance holder (mirrors the original's module 2595: k() getter / j() setter).
let instance = null;
export const getLenis = () => instance;
export const setLenis = (l) => { instance = l; };

// `y` is a number or an Element. Instant scroll used for route changes / history restoration (original module 64091 `o`).
export function scrollInstant(y) {
  const l = getLenis();
  if (l) { l.resize(); l.scrollTo(y, { immediate: true, force: true }); }
  else {
    if (y instanceof Element) y = y.getBoundingClientRect().top + window.scrollY - (parseFloat(getComputedStyle(y).scrollMarginTop) || 0);
    window.scrollTo({ top: y, left: 0, behavior: 'instant' });
  }
}
