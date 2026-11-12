// Content data ported from the original bundles (module 8803 + 3cjxsh20djos3 project list).

// Intro chip images (8803 "M")
export const INTRO_IMAGES = [
  { src: '/images/intro/intro-1.png', width: 878, height: 1098 },
  { src: '/images/intro/intro-2.png', width: 878, height: 1288 },
  { src: '/images/intro/intro-3.png', width: 878, height: 878 },
  { src: '/images/intro/intro-4.png', width: 878, height: 878 },
  { src: '/images/intro/intro-5.png', width: 879, height: 1241 },
  { src: '/images/intro/intro-6.png', width: 878, height: 1098 },
  { src: '/images/intro/intro-7.png', width: 878, height: 878 },
  { src: '/images/intro/intro-8.png', width: 878, height: 1240 },
  { src: '/images/intro/intro-9.png', width: 878, height: 1240 },
];

// Projects list (order from the original: rise, figcoms, gloog(unlisted), imotion, israel-police)
export const PROJECTS_HEADING = 'Selected Projects';
export const JUMP_LABEL = 'Jump To Project';
export const PROJECTS = [
  { slug: 'rise', name: 'Rise', category: 'Product · Client', cover: '/images/project-rise.png',
    meta: { role: 'Brand · Product · Marketing · Motion & 3D', timeline: '17 Months', year: '2025-2026', team: 'In-House Studio' } },
  { slug: 'figcoms', name: 'Figcoms', category: 'Product · Venture', cover: '/images/project-figcoms.png',
    meta: { role: 'Brand & Product Design', timeline: '4 Months', year: '2025', team: 'Co-Founder' } },
  { slug: 'imotion', name: 'iMotion', category: 'Brand · Device launch', cover: '/images/project-imotion.png',
    meta: { role: 'Brand & Product Designer', timeline: '3 Months', year: '2025 / 2026', team: 'Co-founded studio' } },
  { slug: 'israel-police', name: 'Israel Police', category: 'Brand · Client', cover: '/projects/israel-police/border-police/cover.webp',
    meta: { role: 'Brand Design', timeline: 'Ongoing', year: '2026', team: 'Israel Police (external)' } },
];

// Skillset (8803 "n")
export const SKILLS = [
  { n: '01', title: 'Product Design', blurb: 'From “we have an idea” to flows, prototypes and systems ready to grow.',
    preview: { src: '/projects/imotion/hero.png', width: 1968, height: 1161, alt: 'The iMotion device, controller and companion app' } },
  { n: '02', title: 'Brand & Art Direction', blurb: 'Identities with a point of view, built to be recognized, remembered and used.',
    preview: { src: '/projects/rise/brand-system-preview.jpg', width: 1990, height: 1174, alt: 'The Rise brand system - palette, logo, shapes and imagery' } },
  { n: '03', title: 'UX | UI', blurb: 'Clear interfaces for real behavior, weird edge cases and every screen in between.',
    preview: { src: '/projects/figcoms/ui-screens.png', width: 1967, height: 1211, alt: 'The Figcoms review board on desktop' } },
  { n: '04', title: 'Motion & 3D', blurb: 'Motion and 3D that explain, elevate and occasionally steal the show.',
    preview: { src: '/projects/rise/motion-3d-preview.jpg', width: 1024, height: 704, alt: 'Rise - glass forms from the 3D system',
      video: '/videos/skillset-3d.mp4', crop: { x: 0.17, y: 0.05, width: 0.669, height: 0.85 } } },
];

// Lead form copy (8803 "j")
export const LEAD = {
  eyebrow: '(LEAVE YOUR DETAILS)',
  title: 'OPEN THE DOOR',
  direct: { label: 'Or just write:', email: 'dor@pamidordesign.co' },
  fields: {
    name: { label: 'NAME', placeholder: 'Your full name' },
    email: { label: 'EMAIL', placeholder: 'name@company.com' },
    phone: { label: 'PHONE', placeholder: '+972' },
    reason: { label: 'REASON', placeholder: '' },
    message: { label: 'MESSAGE', placeholder: 'A few words' },
  },
  reasons: ['Freelance project', 'Role / Opportunity', 'Just saying hi'],
  submit: 'Send Details',
  sending: 'Sending…',
  note: 'No spam. A real reply, usually the same day.',
  privacy: { text: 'Sent details land in my inbox and nowhere else -', label: 'privacy policy', href: '/privacy' },
  sent: { title: 'GOT IT.', body: 'Your details are in. A real reply, usually the same day.' },
  failed: 'That did not go through. Write to dor@pamidordesign.co and it will reach me.',
  invalid: 'Name and a valid email are all it takes.',
};
