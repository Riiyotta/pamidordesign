import { Fragment } from 'react';

// Port of module 20239 (hw text): sr-only copy + per-char spans (glyph comes from CSS attr(data-ch)).
export function HwText({ text }) {
  let n = 0;
  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {text.split(' ').map((word, wi) => (
          <Fragment key={wi}>
            {wi > 0 && ' '}
            <span className="inline-block whitespace-nowrap">
              {word.split('').map((ch, ci) => (
                <span key={ci} data-hw-char="true" data-ch={ch} className="inline-block" style={{ '--hwi': n++ }} />
              ))}
            </span>
          </Fragment>
        ))}
      </span>
    </>
  );
}

// Port of module 68539 (arrow glyph) with defaults ink=12.2, turn=0.
export function Arrow({ className = 'h-4 w-4 shrink-0 transition-transform duration-300 ease-out-soft group-hover/btn:-rotate-45', ink = 12.2, turn = 0 }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="currentColor" className={className}>
      <g transform={`rotate(${turn} 8 8) translate(${(16 - ink) / 2} ${(16 - 24.1367 * ink / 29.7806) / 2}) scale(${(ink / 29.7806).toFixed(5)})`}>
        <path d="M23.1099 10.9188C19.5082 8.73064 14.2988 4.0372 13.5814 0.0155222L15.9065 3.2973e-06C17.9701 4.66018 24.0697 10.0675 29.7806 10.9898L29.759 13.0893C24.3025 14.0138 17.8165 19.4278 15.9857 24.1101L13.6701 24.1367C13.9005 20.39 19.7218 15.2819 23.0571 13.1913L0.00959874 13.1691L5.90407e-07 10.9388L23.1099 10.9188Z" />
      </g>
    </svg>
  );
}

// Port of module 76525 button class strings.
export const BTN_BASE = 'group/btn items-center gap-3 border px-[calc(15*var(--px))] py-[calc(9*var(--px))] [@media(pointer:coarse)]:min-h-[calc(48*var(--px))] text-body font-medium leading-[1.5] transition-[background-color,color,border-color] duration-300 ease-out-soft';
export const BTN_TONES = {
  ink: 'border-ink bg-ink text-white [--hw-base:#fff] hover:bg-transparent hover:text-ink',
  invert: 'border-white bg-white text-night [--hw-base:#0D0D0B] hover:bg-transparent hover:text-white',
  outline: 'border-ink/25 bg-transparent text-ink [--hw-base:#0A0A0A] hover:border-ink hover:bg-ink hover:text-white',
};
export function Button({ children, type = 'button', tone = 'ink', disabled = false, className = '' }) {
  const cls = `${BTN_BASE} inline-flex w-fit ${BTN_TONES[tone]} ${disabled ? 'pointer-events-none opacity-55' : ''} ${className}`;
  return (
    <button type={type} disabled={disabled} data-hw="true" className={cls}>
      {typeof children === 'string' ? <HwText text={children} /> : children}
      <Arrow />
    </button>
  );
}
