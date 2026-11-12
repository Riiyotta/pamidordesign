// Port of module 88814 (studio chunk 2xy6etck_is2l): the (Questions) list.
// One answer open at a time (first open by default); clicking the open one
// closes it. The panel animates grid-template-rows 0fr<->1fr + opacity over
// 500ms (classes from the original CSS); the arrow rotates 180deg.
import { useState } from 'react';
import HwText from './HwText';

function Collapse({ open, children }) {
  return (
    <div
      className={`grid transition-[grid-template-rows] duration-500 ease-out-soft motion-reduce:transition-none ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} `}
    >
      <div className={`min-h-0 overflow-hidden transition-opacity duration-500 motion-reduce:transition-none ${open ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </div>
    </div>
  );
}

const ARROW_PATH =
  'M23.1099 10.9188C19.5082 8.73064 14.2988 4.0372 13.5814 0.0155222L15.9065 3.2973e-06C17.9701 4.66018 24.0697 10.0675 29.7806 10.9898L29.759 13.0893C24.3025 14.0138 17.8165 19.4278 15.9857 24.1101L13.6701 24.1367C13.9005 20.39 19.7218 15.2819 23.0571 13.1913L0.00959874 13.1691L5.90407e-07 10.9388L23.1099 10.9188Z';

export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <ol>
      {items.map((item, i) => {
        const open = openIndex === i;
        const id = `studio-answer-${i}`;
        return (
          <li key={item.q}>
            <div aria-hidden="true" className="h-[1.5px] w-full bg-rule " />
            <div data-reveal="ssr" className="reveal ">
              <h2>
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={id}
                  onClick={() => setOpenIndex(open ? null : i)}
                  data-hw="true"
                  className="grid w-full grid-cols-[auto_1fr_auto] items-baseline gap-x-4 py-7 text-left text-subhead-sm font-medium text-ink transition-colors duration-200 [--hw-base:#0A0A0A] hover:text-accent lg:grid-cols-5 lg:gap-x-0 lg:py-[calc(30*var(--px))]"
                >
                  <span
                    aria-hidden="true"
                    data-n={String(i + 1).padStart(2, '0')}
                    className="text-body text-muted before:content-[attr(data-n)] lg:pt-[calc(8*var(--px))]"
                  />
                  <span className="lg:col-span-3 lg:ml-[calc(100*var(--px)-100%/3)]">
                    <HwText text={item.q} />
                  </span>
                  <span
                    className={`block self-center justify-self-end transition-transform duration-500 ease-out-soft motion-reduce:transition-none ${open ? 'rotate-180' : ''}`}
                  >
                    <svg aria-hidden="true" viewBox="0 0 16 16" fill="currentColor" className="block h-[calc(24*var(--px))] w-[calc(24*var(--px))]">
                      <g transform="rotate(90 8 8) translate(1.9000000000000004 3.0560475611639797) scale(0.40966)">
                        <path d={ARROW_PATH} />
                      </g>
                    </svg>
                  </span>
                </button>
              </h2>
            </div>
            <Collapse open={open}>
              <div id={id} className="grid grid-cols-1 pb-8 lg:grid-cols-5 lg:pb-[calc(40*var(--px))]">
                <p className="text-body text-muted lg:col-span-3 lg:col-start-3 lg:max-w-[calc(747*var(--px))]">{item.a}</p>
              </div>
            </Collapse>
          </li>
        );
      })}
    </ol>
  );
}
