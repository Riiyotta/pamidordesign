// Port of module 20239 (shared chunk 3fup6o6cccqm1): screen-reader text plus
// per-character [data-hw-char] spans (word-wrapped, running --hwi index) that
// the hover-sweep CSS animates.
import { Fragment } from 'react';

export default function HwText({ text }) {
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
