import { useState } from 'react';
import { T } from '../../lib/shop/products';
import HwLabel from './HwLabel';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const D = T.drops;
const BTN = 'group/btn items-center gap-3 border px-[calc(15*var(--px))] py-[calc(9*var(--px))] [@media(pointer:coarse)]:min-h-[calc(48*var(--px))] text-body font-medium leading-[1.5] transition-[background-color,color,border-color] duration-300 ease-out-soft inline-flex w-fit border-ink bg-ink text-white [--hw-base:#fff] hover:bg-transparent hover:text-ink';

// "(MORE DROPS SOON)" signup (original fn `o` in chunk 0i9-w5fy8ra5v.js).
// States: idle | invalid | sending | done | failed. POSTs to /api/subscribe.
export default function DropsForm() {
  const [state, setState] = useState('idle');
  const sending = state === 'sending';
  const onSubmit = async (ev) => {
    ev.preventDefault();
    if (state === 'sending') return;
    const fd = new FormData(ev.currentTarget);
    const email = String(fd.get('email') ?? '').trim();
    if (!EMAIL.test(email)) { setState('invalid'); return; }
    setState('sending');
    try {
      const r = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, website: String(fd.get('website') ?? ''), page: window.location.pathname }),
      });
      setState(r.ok ? 'done' : 'failed');
    } catch {
      setState('failed');
    }
  };
  return (
    <section className="flex min-h-[100svh] flex-col justify-center py-16 text-center">
      <p className="font-archivo text-[calc(13*var(--px))] font-semibold tracking-[calc(1.2*var(--px))] text-muted">
        {T.moreDrops}
      </p>
      <h2 className="mx-auto max-w-[22ch] pt-5 font-archivo text-lead font-semibold uppercase leading-[1.1] text-ink">
        {D.title}
      </h2>
      <p className="mx-auto max-w-[42ch] pt-4 text-body text-muted">
        {D.body}
      </p>
      {state === 'done' ? (
        <p className="mx-auto max-w-[calc(520*var(--px))] pt-8 text-body-lg text-ink" role="status">
          {D.done}
        </p>
      ) : (
        <form onSubmit={onSubmit} noValidate className="mx-auto max-w-[calc(520*var(--px))] pt-8 text-left lg:pt-10">
          <input type="text" tabIndex="-1" autoComplete="off" aria-hidden="true" className="sr-only" name="website" />
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:gap-6">
            <div className="flex-1">
              <label htmlFor="drops-email" className="sr-only">
                {D.label}
              </label>
              <input id="drops-email" type="email" inputMode="email" autoComplete="email" placeholder={D.placeholder} aria-invalid={state === 'invalid' || undefined} onChange={() => state !== 'idle' && setState('idle')} className={`w-full border-b bg-transparent pb-3 text-body-lg text-ink outline-none transition-colors duration-300 placeholder:text-muted/70 [@media(pointer:coarse)]:min-h-[calc(48*var(--px))] focus:border-ink ${state === 'invalid' ? 'border-accent' : 'border-ink/25'}`} name="email" />
            </div>
            <button type="submit" disabled={sending} data-hw="true" className={`${BTN} ${sending ? 'pointer-events-none opacity-55' : ''} `}>
              <HwLabel key={sending ? 's' : 'i'} text={sending ? D.sending : D.submit} />
              <svg aria-hidden="true" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 shrink-0 transition-transform duration-300 ease-out-soft group-hover/btn:-rotate-45">
                <g transform="rotate(0 8 8) translate(1.9000000000000004 3.0560475611639797) scale(0.40966)">
                  <path d="M23.1099 10.9188C19.5082 8.73064 14.2988 4.0372 13.5814 0.0155222L15.9065 3.2973e-06C17.9701 4.66018 24.0697 10.0675 29.7806 10.9898L29.759 13.0893C24.3025 14.0138 17.8165 19.4278 15.9857 24.1101L13.6701 24.1367C13.9005 20.39 19.7218 15.2819 23.0571 13.1913L0.00959874 13.1691L5.90407e-07 10.9388L23.1099 10.9188Z" />
                </g>
              </svg>
            </button>
          </div>
          <p className={`pt-5 text-label ${state === 'idle' ? 'text-muted' : 'text-accent'}`} aria-live="polite">
            {state === 'invalid' ? D.invalid : state === 'failed' ? D.failed : (
              <>
                {D.consent}
                {' '}
                <a className="underline underline-offset-4 transition-colors hover:text-ink" href={D.consentHref}>
                  {D.consentLink}
                </a>
                .
              </>
            )}
          </p>
        </form>
      )}
    </section>
  );
}
