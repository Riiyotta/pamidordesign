import ArtPlane from '../components/artlab/ArtPlane';
import DragCue from '../components/artlab/DragCue';

export default function ArtLab() {
  return (
    <>
    <main id="main" data-lenis-prevent="true" className="fixed inset-0 h-[100dvh] overflow-hidden bg-canvas">
      <h1 className="sr-only">
        The Art Lab
      </h1>
      <p className="sr-only">
        164
        {' '}pieces of personal work by Dor Sharaby - posters, apparel graphics, editorial spreads, 3D studies, packaging and type - arranged by color on one plane you can drag in any direction. Use the arrow keys to move the field.
      </p>
      <ArtPlane />
      <header className="pointer-events-none absolute inset-x-0 top-0 z-[60] flex items-center justify-between px-6 py-5 sm:px-10 lg:px-margin">
        <a data-hw="true" className="group/btn items-center border px-[calc(15*var(--px))] py-[calc(9*var(--px))] [@media(pointer:coarse)]:min-h-[calc(48*var(--px))] text-body font-medium leading-[1.5] transition-[background-color,color,border-color] duration-300 ease-out-soft inline-flex w-fit border-ink bg-ink text-white [--hw-base:#fff] hover:bg-transparent hover:text-ink  pointer-events-auto hover:!bg-canvas" href="/">
          <span className="relative flex h-[1.5em] shrink-0 items-center">
            <img src="/images/wordmark-pamidor-studio.svg" alt="PAMIDOR® STUDIO" width="1371" height="118" className="block h-[0.691em] w-auto max-w-none shrink-0 transition-opacity duration-300 ease-out-soft group-hover/btn:opacity-0 max-[359px]:h-[0.55em]" />
            <img src="/images/wordmark-pamidor-studio-ink.svg" alt="" width="1371" height="118" className="absolute left-0 top-1/2 h-[0.691em] w-auto max-w-none -translate-y-1/2 opacity-0 transition-opacity duration-300 ease-out-soft group-hover/btn:opacity-100 max-[359px]:h-[0.55em]" aria-hidden="true" />
          </span>
        </a>
        <a data-hw="true" className="group/btn items-center gap-3 border px-[calc(15*var(--px))] py-[calc(9*var(--px))] [@media(pointer:coarse)]:min-h-[calc(48*var(--px))] text-body font-medium leading-[1.5] transition-[background-color,color,border-color] duration-300 ease-out-soft inline-flex w-fit border-ink bg-ink text-white [--hw-base:#fff] hover:bg-transparent hover:text-ink  pointer-events-auto hover:!bg-canvas" href="/work/figcoms">
          <span className="sr-only">
            Figcoms
          </span>
          <span aria-hidden="true">
            <span className="inline-block whitespace-nowrap">
              <span data-hw-char="true" data-ch="F" className="inline-block" style={{"--hwi":"0"}} />
              <span data-hw-char="true" data-ch="i" className="inline-block" style={{"--hwi":"1"}} />
              <span data-hw-char="true" data-ch="g" className="inline-block" style={{"--hwi":"2"}} />
              <span data-hw-char="true" data-ch="c" className="inline-block" style={{"--hwi":"3"}} />
              <span data-hw-char="true" data-ch="o" className="inline-block" style={{"--hwi":"4"}} />
              <span data-hw-char="true" data-ch="m" className="inline-block" style={{"--hwi":"5"}} />
              <span data-hw-char="true" data-ch="s" className="inline-block" style={{"--hwi":"6"}} />
            </span>
          </span>
          <svg aria-hidden="true" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 shrink-0 transition-transform duration-300 ease-out-soft group-hover/btn:-rotate-45">
            <g transform="rotate(0 8 8) translate(1.9000000000000004 3.0560475611639797) scale(0.40966)">
              <path d="M23.1099 10.9188C19.5082 8.73064 14.2988 4.0372 13.5814 0.0155222L15.9065 3.2973e-06C17.9701 4.66018 24.0697 10.0675 29.7806 10.9898L29.759 13.0893C24.3025 14.0138 17.8165 19.4278 15.9857 24.1101L13.6701 24.1367C13.9005 20.39 19.7218 15.2819 23.0571 13.1913L0.00959874 13.1691L5.90407e-07 10.9388L23.1099 10.9188Z" />
            </g>
          </svg>
        </a>
      </header>
      <DragCue />
    </main>
    </>
  );
}
