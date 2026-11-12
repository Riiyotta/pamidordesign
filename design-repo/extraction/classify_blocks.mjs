// In-page block classifier shared by measure_sections.mjs and parity_harness.mjs.
//
// `classifyBlocks` is passed to page.evaluate(), so it must stay self-contained (no imports, no closures).
// It maps the rendered DOM of one route onto the section contracts in ../sections/ using STRUCTURAL markers
// only (ids, landmarks, aria attributes, element kinds) - never the page's copy, so this file carries no
// source text. Every in-flow block of a route must be claimed by exactly one section id; anything left over
// is reported as `unclassified` and the measure script fails.
//
// Output per block: { section, variant, top, heightPx, position, inFlow, profile }
//   profile = per element kind { count, maxWords } (numbers only) - used to derive maxWords / maxItems.
export function classifyBlocks(path) {
  const out = [];
  const words = (el) => (el.textContent || '').trim().split(/\s+/).filter(Boolean).length;
  // descendants plus the element itself (a block can itself be the heading / label)
  const qa = (el, sel) => [...(el.matches(sel) ? [el] : []), ...el.querySelectorAll(sel)];
  const profile = (el) => {
    const o = {};
    for (const t of ['h1', 'h2', 'h3', 'p', 'li', 'dt', 'dd', 'a', 'button', 'label', 'figcaption', 'input', 'select', 'textarea', 'ol', 'ul', 'figure']) {
      const els = qa(el, t);
      if (els.length) o[t] = { count: els.length, maxWords: Math.max(...els.map(words)) };
    }
    // eyebrow labels: the site's small uppercase label style (parenthesised kickers, dt labels)
    const eb = qa(el, '.text-label');
    if (eb.length) o.eyebrow = { count: eb.length, maxWords: Math.max(...eb.map(words)) };
    o.img = el.querySelectorAll('img').length;
    o.video = el.querySelectorAll('video').length;
    return o;
  };
  const pos = (el) => {
    const p = getComputedStyle(el).position;
    return p === 'sticky' ? 'sticky' : p === 'fixed' ? 'fixed' : p === 'absolute' ? 'absolute' : 'in-flow';
  };
  const add = (section, el, extra = {}) => {
    if (!el) return;
    const r = el.getBoundingClientRect();
    const position = extra.position || pos(el);
    out.push({
      section, variant: extra.variant || null, top: Math.round(r.top + scrollY), heightPx: Math.round(r.height),
      position, inFlow: extra.inFlow ?? (position === 'in-flow' || position === 'sticky'), profile: profile(el),
    });
  };
  // a block made of several sibling elements (first .. before `stop`)
  const addRange = (section, first, stop, extra = {}) => {
    // skip non-rendering leaders (e.g. a JSON-LD <script> the live page puts first)
    while (first && first !== stop && (NONRENDER.has(first.tagName) || first.getBoundingClientRect().height === 0)) first = first.nextElementSibling;
    const a = first.getBoundingClientRect().top + scrollY;
    const b = stop.getBoundingClientRect().top + scrollY;
    let n = first;
    const prof = {};
    while (n && n !== stop) {
      const p = profile(n);
      for (const [k, v] of Object.entries(p)) {
        if (typeof v === 'number') prof[k] = (prof[k] || 0) + v;
        else prof[k] = { count: (prof[k]?.count || 0) + v.count, maxWords: Math.max(prof[k]?.maxWords || 0, v.maxWords) };
      }
      n = n.nextElementSibling;
    }
    out.push({ section, variant: extra.variant || null, top: Math.round(a), heightPx: Math.round(b - a), position: 'in-flow', inFlow: true, profile: prof });
  };
  const NONRENDER = new Set(['SCRIPT', 'STYLE', 'TEMPLATE', 'LINK', 'NOSCRIPT']);
  const kids = (el) => [...el.children].filter((c) => !NONRENDER.has(c.tagName));
  const unclassified = [];
  const main = document.getElementById('main');

  // ---- global chrome / overlays (present on every route unless noted)
  add('shell.skip-link', document.querySelector('a[href="#main"]'), { inFlow: false });
  add('shell.awwwards-badge', document.getElementById('awwwards'), { inFlow: false });
  add('overlay.cookie-notice', document.querySelector('aside[aria-label="Cookie notice"]'), { inFlow: false });
  add('overlay.route-curtain', document.querySelector('[data-route-curtain]'), { inFlow: false });
  add('overlay.cart-drawer', document.querySelector('[role="dialog"][aria-label="Cart"]'), { inFlow: false });
  add('overlay.intro-loader', document.querySelector('[data-intro]'), { inFlow: false });
  add('overlay.menu-panel', document.getElementById('site-menu'), { inFlow: false });
  const nav = document.querySelector('nav[aria-label="Primary"]');
  const footer = document.querySelector('footer');
  if (footer) add('shell.footer', footer.parentElement && footer.parentElement.children.length === 1 ? footer.parentElement : footer);

  if (path === '/art-lab') {
    add('art.draggable-plane', main, { inFlow: false });
    add('art.lab-header', main.querySelector(':scope > header'), { inFlow: false });
    add('overlay.drag-cue', main.querySelector(':scope > p[aria-hidden="true"]'), { inFlow: false });
    return { blocks: out, unclassified };
  }
  if (path === '/') {
    add('shell.primary-nav', nav, { variant: 'in-hero', inFlow: false });
    for (const c of kids(main)) {
      if (c.id === 'top') add('hero.home-intro', c);
      else if (c.querySelector('#studio')) add('narrative.studio-teaser', c);
      else if (c.id === 'projects') add('work.projects-list', c);
      else if (c.id === 'art-lab') add('art.lab-teaser', c);
      else if (c.querySelector('#skillset')) add('services.skillset', c);
      else if (c.querySelector('form')) add('conversion.lead-form', c);
      else unclassified.push(c.tagName);
    }
    return { blocks: out, unclassified };
  }
  // interior routes: sticky bar that holds the primary nav
  add('shell.primary-nav', nav && nav.closest('.sticky'), { variant: 'sticky-bar' });
  if (path === '/studio') {
    for (const c of kids(main)) {
      if (c.querySelector('h1')) add('hero.studio-intro', c);
      else if (c.querySelector('button[aria-expanded]')) add('narrative.faq', c);
      else if (c.querySelector('.marquee-wrapper')) add('narrative.industries', c);
      else if (c.querySelector('ol')) add('narrative.process-steps', c);
      else if (c.querySelector('a[href^="mailto:"]')) add('conversion.studio-cta', c);
      else if (c.querySelector('[data-word]')) add('narrative.approach-statement', c);
      else unclassified.push(c.tagName);
    }
  } else if (path.startsWith('/work/')) {
    const ks = kids(main);
    let framing = 0;
    let chapters = 0;
    ks.forEach((c, i) => {
      if (c.tagName === 'HEADER') add('hero.case-header', c);
      else if (i === ks.length - 1) add('work.next-project', c);
      else if (!c.querySelector('h2')) add(framing++ === 0 ? 'work.case-role' : 'work.case-context', c);
      else if (chapters === 0 && c.querySelector('ol')) add('work.case-process', c);
      else { chapters++; add('work.case-chapter', c, { variant: c.querySelector('h2.text-project') ? 'part-opener' : 'chapter' }); }
    });
  } else if (path === '/privacy' || path === '/terms') {
    const box = kids(main)[0];
    const body = kids(box).find((c) => c.tagName === 'DIV' && c.querySelector('section'));
    addRange('hero.legal-header', kids(box)[0], body);
    for (const s of kids(body)) if (s.tagName === 'SECTION') add('legal.clause', s); else unclassified.push(s.tagName);
  } else if (path === '/shop') {
    const box = kids(main)[0];
    const kb = kids(box);
    const bar = kb.find((c) => c.querySelector('button[aria-pressed]'));
    addRange('hero.shop-header', kb[0], bar);
    add('commerce.shop-filters', bar);
    for (const c of kb.slice(kb.indexOf(bar) + 1)) {
      if (c.tagName === 'SECTION' && c.querySelector('form')) add('conversion.drops-signup', c);
      else if (c.querySelector('h2')) add('commerce.product-grid', c);
      else unclassified.push(c.tagName);
    }
  } else if (path.startsWith('/shop/')) {
    const box = kids(main)[0];
    const sec = box.querySelector(':scope > section');
    addRange('hero.product-detail', kids(box)[0], sec);
    add('commerce.more-from-shop', sec);
  } else {
    unclassified.push('route ' + path);
  }
  return { blocks: out, unclassified };
}
