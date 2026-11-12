import { useEffect, useRef, useState } from 'react';
import { LEAD } from '../../lib/home/data';
import { Button } from '../../lib/home/ui';
import { EMAIL_RE, submitLead } from '../../lib/newsletter';

// "Open the door" lead form — port of module 81013 (3cjxsh20djos3.js).
// States: idle -> sending -> sent | failed; client validation flags name/email (border-accent).
// The POST /api/lead call is stubbed locally (src/lib/newsletter.js).
const ROWS = [['name', 'email', false], ['phone', 'reason', true]];
const INPUT_ATTRS = {
  name: { type: 'text', autoComplete: 'name' },
  email: { type: 'email', autoComplete: 'email', inputMode: 'email' },
  phone: { type: 'tel', autoComplete: 'tel', inputMode: 'tel' },
  reason: {},
  message: { type: 'text' },
};
const FIELD = 'mt-1 w-full border-b bg-transparent pb-2 text-body-lg text-white outline-none sm:mt-2 sm:pb-3 transition-colors duration-300 [@media(pointer:coarse)]:min-h-[calc(48*var(--px))] focus:border-white/70';

// data-reveal markup is kept as SSR initial state; the text workstream drives the reveal.
const Reveal = ({ as: Tag = 'div', className = '', children }) => (
  <Tag data-reveal="ssr" className={`reveal ${className}`}>{children}</Tag>
);

function Field({ name, invalid, wide = false }) {
  const f = LEAD.fields[name];
  return (
    <div className={wide ? 'lg:col-span-2' : ''}>
      <label htmlFor={`lead-${name}`} className="block text-label text-night-muted">{f.label}</label>
      {name === 'reason' ? (
        <select id={`lead-${name}`} name={name} defaultValue={LEAD.reasons[0]} className={`${FIELD} cursor-pointer border-white/25 [&>option]:text-ink`}>
          {LEAD.reasons.map(r => <option key={r} value={r}>{r}</option>)}
        </select>
      ) : (
        <input
          id={`lead-${name}`}
          name={name}
          placeholder={f.placeholder}
          aria-invalid={invalid || undefined}
          {...INPUT_ATTRS[name]}
          className={`${FIELD} placeholder:text-white/45 ${invalid ? 'border-accent' : 'border-white/25'}`}
        />
      )}
    </div>
  );
}

// "OPEN THE DOOR": the trailing O shuts / R slides (CSS door-shut/door-slide) once --door-o is measured.
function DoorTitle({ text }) {
  const wrap = useRef(null);
  const o = useRef(null);
  const r = useRef(null);
  useEffect(() => {
    const w = wrap.current;
    const oe = o.current;
    const re = r.current;
    if (!w || !oe || !re) return undefined;
    const measure = () => {
      w.style.setProperty('--door-o', `${re.offsetLeft - oe.offsetLeft}px`);
      w.setAttribute('data-door', '');
    };
    measure();
    if (typeof ResizeObserver === 'undefined') return undefined;
    const ro = new ResizeObserver(measure);
    ro.observe(oe);
    return () => ro.disconnect();
  }, []);
  if (!text.endsWith('DOOR')) return text;
  return (
    <>
      {text.slice(0, -4)}
      <span ref={wrap} className="inline-block whitespace-nowrap">
        DO
        <span ref={o} className="door-o inline-block">O</span>
        <span ref={r} className="door-r inline-block">R</span>
      </span>
    </>
  );
}

function SkyVideo() {
  const ref = useRef(null);
  useEffect(() => {
    const v = ref.current;
    if (!v || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) v.play().catch(() => {}); else v.pause();
    }, { rootMargin: '300px 0px', threshold: 0.05 });
    io.observe(v);
    return () => io.disconnect();
  }, []);
  return (
    <video ref={ref} aria-hidden="true" poster="/images/form-sky.webp" muted loop playsInline preload="none" className="absolute inset-0 h-full w-full object-cover">
      <source src="/videos/form-sky.mp4" type="video/mp4" />
    </video>
  );
}

export default function HomeMain6() {
  const [status, setStatus] = useState('idle');
  const [invalid, setInvalid] = useState([]);
  const sending = status === 'sending';

  const onSubmit = async e => {
    e.preventDefault();
    if (status === 'sending') return;
    const data = new FormData(e.currentTarget);
    const bad = [];
    if (!String(data.get('name') ?? '').trim()) bad.push('name');
    const email = String(data.get('email') ?? '').trim();
    if (!EMAIL_RE.test(email)) bad.push('email');
    setInvalid(bad);
    if (bad.length > 0) return;
    setStatus('sending');
    try {
      const res = await submitLead(Object.fromEntries(data));
      setStatus(res.ok ? 'sent' : 'failed');
    } catch {
      setStatus('failed');
    }
  };

  return (
    <div className="relative bg-canvas">
      <section className="relative flex min-h-[100svh] w-full flex-col justify-center overflow-hidden py-4 sm:py-16 lg:py-[7svh]">
        <SkyVideo />
        <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
          <div id="start-project" data-cursor-invert="true" className="relative bg-night px-6 py-5 sm:px-10 sm:py-12 lg:mx-auto lg:w-3/5 lg:min-w-[calc(680*var(--px))] lg:px-[calc(52*var(--px))] lg:py-[calc(40*var(--px))] [box-shadow:0_calc(18*var(--px))_calc(40*var(--px))_calc(-12*var(--px))_rgba(10,10,10,0.28)]">
            <div className="flex items-center">
              <span className="text-label text-night-muted">{LEAD.eyebrow}</span>
            </div>
            {status === 'sent' ? (
              <div className="pt-8 lg:pt-[calc(52*var(--px))]">
                <h2 className="text-section font-medium uppercase text-canvas">{LEAD.sent.title}</h2>
                <p className="mt-6 max-w-[44ch] text-body text-night-body lg:mt-[calc(30*var(--px))]">{LEAD.sent.body}</p>
              </div>
            ) : (
              <>
                <Reveal as="h2" className="pt-3 text-section font-medium uppercase text-canvas sm:pt-8 lg:pt-[calc(16*var(--px))] lg:text-[calc(68*var(--px))]">
                  <DoorTitle text={LEAD.title} />
                </Reveal>
                <Reveal className="flex flex-wrap items-baseline gap-x-3 gap-y-1 pt-2 sm:pt-4 lg:pt-[calc(14*var(--px))]">
                  <span className="text-body text-night-muted">{LEAD.direct.label}</span>
                  <a href={`mailto:${LEAD.direct.email}`} className="inline-flex items-center border-b border-white/30 pb-[calc(2*var(--px))] text-body text-canvas transition-colors duration-300 [@media(pointer:coarse)]:min-h-[calc(48*var(--px))] hover:border-white sm:text-body-lg">
                    {LEAD.direct.email}
                  </a>
                </Reveal>
                <form onSubmit={onSubmit} noValidate>
                  <input type="text" name="website" tabIndex="-1" autoComplete="off" aria-hidden="true" className="sr-only" />
                  {ROWS.map(([a, b, split]) => (
                    <Reveal key={a} className={`grid gap-y-4 pt-4 sm:gap-y-7 sm:pt-7 lg:grid-cols-2 lg:gap-x-[calc(35*var(--px))] lg:pt-[calc(34*var(--px))] ${split ? 'grid-cols-[2fr_3fr] gap-x-4' : 'grid-cols-1'}`}>
                      <Field name={a} invalid={invalid.includes(a)} />
                      <Field name={b} invalid={invalid.includes(b)} />
                    </Reveal>
                  ))}
                  <Reveal className="grid grid-cols-1 pt-4 sm:pt-7 lg:pt-[calc(34*var(--px))]">
                    <Field name="message" invalid={false} wide />
                  </Reveal>
                  <Reveal className="flex flex-row items-center gap-4 pb-3 pt-5 sm:gap-[calc(36*var(--px))] sm:pb-20 sm:pt-9 lg:pb-[calc(46*var(--px))] lg:pt-[calc(36*var(--px))]">
                    <Button type="submit" tone="invert" disabled={sending} className="shrink-0 whitespace-nowrap">
                      {sending ? LEAD.sending : LEAD.submit}
                    </Button>
                    <p className={`text-label ${status === 'failed' ? 'text-accent' : 'text-night-muted'}`} aria-live="polite">
                      {status === 'failed' ? LEAD.failed : invalid.length > 0 ? LEAD.invalid : LEAD.note}
                    </p>
                  </Reveal>
                  <Reveal className="sm:-mt-14 lg:-mt-[calc(34*var(--px))]">
                    <p className="text-label text-night-muted">
                      {LEAD.privacy.text}{' '}
                      <a className="underline underline-offset-4 transition-colors hover:text-white" href={LEAD.privacy.href}>{LEAD.privacy.label}</a>
                    </p>
                  </Reveal>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
