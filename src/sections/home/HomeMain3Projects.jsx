import { PROJECTS, PROJECTS_HEADING, JUMP_LABEL } from '../../lib/home/data';
import { FILL_STYLE, imgUrl, srcSetFor } from '../../lib/home/image';
import { HwText, Arrow, BTN_BASE } from '../../lib/home/ui';

// Selected Projects — markup of module 10107 (3cjxsh20djos3.js), rendered from data.
// Rows expand min-height 112 -> 270 *--px (500ms ease-out-soft) inside a fixed-height column (--list-h).
const COVER_WIDTHS = [640, 828, 1200, 1920, 2560, 3840];
const LIST_H = 112 * (PROJECTS.length - 1) + 270;

const Rule = ({ className = '' }) => <div aria-hidden="true" className={`h-[1.5px] w-full bg-rule ${className}`} />;

function ProjectRow({ project, index, active }) {
  const { slug, name, category, cover, meta } = project;
  const facts = [['ROLE', meta.role], ['TIMELINE', meta.timeline], ['YEAR', meta.year], ['TEAM', meta.team]];
  return (
    <li
      className={`lg:relative lg:flex lg:flex-1 lg:flex-col lg:overflow-hidden lg:transition-[min-height] lg:duration-500 lg:ease-out-soft ${active ? 'lg:min-h-[calc(270*var(--px))]' : 'lg:min-h-[calc(112*var(--px))]'}`}
    >
      <a className="group block py-8 lg:py-[calc(24*var(--px))]" aria-label={`${name} - ${category}`} href={`/work/${slug}`}>
        <div className="grid grid-cols-1 items-start lg:grid-cols-[1fr_calc(330*var(--px))] lg:gap-x-10">
          <div className="min-w-0 lg:relative">
            <div className="flex flex-col items-start gap-y-4 lg:flex-row lg:flex-wrap lg:items-center lg:justify-between lg:gap-x-6">
              <h3
                data-hw="true"
                data-hw-on={active ? 'true' : undefined}
                className={`text-project font-medium transition-colors duration-300 [--hw-base:#0A0A0A] ${active ? 'text-accent' : 'text-ink lg:opacity-45'}`}
              >
                <HwText text={name} />
              </h3>
              <span
                data-hw="true"
                className={`${BTN_BASE} inline-flex shrink-0 [--hw-base:#0A0A0A] hover:border-ink hover:bg-ink hover:text-white ${active ? 'border-ink text-ink' : 'border-ink/25 text-ink lg:opacity-45'}`}
              >
                <HwText text={JUMP_LABEL} />
                <Arrow />
              </span>
            </div>
            <dl
              aria-hidden="true"
              data-hw-appear="true"
              data-hw-on={active ? 'true' : undefined}
              className={`hidden lg:absolute lg:left-0 lg:top-full lg:mt-[calc(28*var(--px))] lg:flex lg:max-w-full lg:flex-wrap lg:gap-x-12 lg:gap-y-2 lg:transition-[opacity,transform] lg:duration-500 lg:ease-out-soft motion-reduce:lg:transition-none ${active ? 'lg:translate-y-0 lg:opacity-100' : 'lg:pointer-events-none lg:translate-y-1.5 lg:opacity-0'}`}
            >
              {facts.map(([label, value]) => (
                <div key={label}>
                  <dt className="text-label text-muted"><HwText text={label} /></dt>
                  <dd className="mt-1 text-body text-ink"><HwText text={value} /></dd>
                </div>
              ))}
            </dl>
          </div>
          <div className={`transition-opacity duration-500 ease-out-soft motion-reduce:transition-none lg:col-start-2 ${active ? 'opacity-100' : 'lg:opacity-0'}`}>
            <div data-hw-appear="true" className="group/cover relative mt-6 aspect-[16/10] w-full overflow-hidden lg:mt-0 lg:aspect-[3/2] lg:w-[calc(330*var(--px))]">
              <img
                alt={`${name} - ${category}`}
                loading={index === 0 ? undefined : 'lazy'}
                decoding="async"
                data-nimg="fill"
                className="object-cover"
                style={FILL_STYLE}
                sizes="(min-width: 1729px) 19.1vw, (min-width: 1024px) 330px, 100vw"
                srcSet={srcSetFor(cover, COVER_WIDTHS)}
                src={imgUrl(cover, 3840)}
              />
              <div
                className="absolute inset-0 hidden flex-col justify-end opacity-0 transition-opacity duration-300 ease-out-soft group-hover/cover:opacity-100 lg:flex"
                style={{ backgroundImage: 'linear-gradient(180deg, rgba(4,4,4,0) 19%, rgba(4,4,4,0.94) 100%)' }}
              >
                <div className="flex translate-y-1.5 flex-wrap gap-[calc(7*var(--px))] p-[calc(14*var(--px))] transition-transform duration-300 ease-out-soft group-hover/cover:translate-y-0">
                  <span className="border border-white/20 bg-[var(--night-chip)] p-[calc(9*var(--px))] text-label capitalize leading-none tracking-[calc(-0.2*var(--px))] text-white">
                    <HwText text={name} />
                  </span>
                  <span className="max-w-full truncate border border-white/20 bg-[var(--night-chip)] p-[calc(9*var(--px))] text-label capitalize leading-none tracking-[calc(-0.2*var(--px))] text-white">
                    <HwText text={meta.role} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
      <Rule className="lg:absolute lg:inset-x-0 lg:bottom-0" />
    </li>
  );
}

export default function HomeMain3Projects() {
  // Static SSR initial state (row 0 active). The active row (hover on desktop, nearest-to-centre on
  // touch) is driven at runtime by the text workstream (src/lib/text/projectsList.js), which mutates
  // these classes / data-hw-on directly — so this component must not re-render the rows from state.
  const active = 0;
  return (
    <section id="projects" className="relative flex min-h-[100svh] w-full flex-col justify-center bg-canvas py-16 lg:pb-52 lg:pt-32">
      <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
        <div>
          <h2 className="text-section font-medium text-ink">{PROJECTS_HEADING}</h2>
        </div>
        <Rule className="mt-8 lg:mt-[calc(24*var(--px))]" />
        <ul className="lg:flex lg:h-[calc(var(--list-h)*var(--px))] lg:flex-col" style={{ '--list-h': LIST_H }}>
          {PROJECTS.map((p, i) => (
            <ProjectRow
              key={p.slug}
              project={p}
              index={i}
              active={i === active}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
