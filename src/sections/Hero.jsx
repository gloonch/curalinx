import Ribbon from '../components/Ribbon'
import SectionLink from '../components/SectionLink'
import { HERO } from '../content/site'

/**
 * Hero: main heading above an EMPTY logo slot. The visible logo is the
 * travelling element rendered by the Home page (see hooks/useLogoMorph).
 */
export default function Hero({ slotRef, progress }) {
  return (
    <section
      id="top"
      aria-label="Curalinx"
      className="relative grid min-h-[calc(100svh_-_var(--nav-h))] place-items-center overflow-hidden px-4 pt-12 pb-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="dot-grid absolute inset-0 opacity-[0.06] [mask-image:radial-gradient(70%_60%_at_50%_50%,transparent_30%,#000_100%)]" />
        <Ribbon width={1400} height={420} turns={1.25} strokeWidth={2.5} opacity={0.07} className="absolute bottom-[8%] left-1/2 w-[max(1400px,120vw)] -translate-x-1/2" />
      </div>

      <div className="relative flex flex-col items-center gap-7 text-center md:gap-11">
        <h1
          className="type-display-hero m-0 max-w-full text-navy-900 [overflow-wrap:break-word] md:max-w-[12ch]"
          style={{ opacity: Math.max(0, 1 - progress * 2.4), transform: `translateY(${(-progress * 24).toFixed(1)}px)` }}
        >
          {HERO.heading}
        </h1>
        <div ref={slotRef} role="img" aria-label="Curalinx" className="aspect-[1089/209] w-(--logo-hero) max-w-full" />
      </div>

      <SectionLink
        id="why-curalinx"
        aria-label="Scroll to Why Curalinx"
        className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2.5 text-[11px] font-semibold tracking-[0.16em] text-gray-600 uppercase no-underline"
        style={{ opacity: Math.max(0, 1 - progress * 3) }}
      >
        <span>Scroll</span>
        <i className="block h-9 w-[1.5px] origin-top animate-cue rounded-full bg-linear-to-b from-blue-600 to-transparent" />
      </SectionLink>
    </section>
  )
}
