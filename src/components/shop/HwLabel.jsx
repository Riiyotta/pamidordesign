import { Fragment } from 'react';

// Per-character label used inside data-hw buttons (original module 20239).
export default function HwLabel({ text }) {
  let n = 0;
  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {text.split(' ').map((w, i) => (
          <Fragment key={i}>
            {i > 0 && ' '}
            <span className="inline-block whitespace-nowrap">
              {w.split('').map((c, j) => (
                <span key={j} data-hw-char="true" data-ch={c} className="inline-block" style={{ '--hwi': n++ }} />
              ))}
            </span>
          </Fragment>
        ))}
      </span>
    </>
  );
}
