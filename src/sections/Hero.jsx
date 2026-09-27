import LiveNumber from '../components/LiveNumber'
import Ribbon from '../components/Ribbon'
import SectionLink from '../components/SectionLink'
import StatDetails from '../components/StatDetails'
import { HERO } from '../content/site'

/**
 * Hero: an EMPTY logo slot above the live incidence estimate. The visible logo
 * (and the number while it travels) are rendered by the Home page, which moves
 * them into the navbar and the strip below it (see hooks/useScrollMorph).
 */
export default function Hero({ slotRef, numberSlotRef, live, progress }) {
  const fade = { opacity: Math.max(0, 1 - progress * 2.4), transform: `translateY(${(-progress * 24).toFixed(1)}px)` }

  return (
    <section
      id="top"
      aria-label="Curalinx"
      className="relative grid min-h-[calc(100svh_-_var(--nav-h))] place-items-center overflow-hidden px-4 pt-12 pb-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Ribbon width={1400} height={420} turns={1.25} strokeWidth={2.5} opacity={0.07} className="absolute bottom-[8%] left-1/2 w-[max(1400px,120vw)] -translate-x-1/2" />
      </div>

      <div className="relative flex flex-col items-center text-center">
        <div ref={slotRef} role="img" aria-label="Curalinx" className="aspect-[1089/209] w-(--logo-hero) max-w-full" />

        <h1 className="type-eyebrow eyebrow-pill m-0 mt-12 text-blue-700 md:mt-16" style={fade}>
          <span className="size-1.5 rounded-full bg-blue-600" aria-hidden="true" />
          {HERO.heading}
        </h1>

        <p className="sr-only">
          {live.value} {live.stat.label} {HERO.today}. {HERO.live}, {HERO.sinceShort}. Source: {live.stat.source}.
        </p>

        <StatDetails ref={numberSlotRef} stat={live.stat} rate={live.rate} className="mt-4">
          <LiveNumber
            value={live.value}
            tick={live.tick}
            statId={live.stat.id}
            className="type-stat-hero text-blue-600"
          />
        </StatDetails>

        <p aria-hidden="true" className="m-0 mt-3 max-w-[32ch] text-sm text-balance text-gray-900 md:max-w-none md:text-base" style={fade}>
          <span key={live.stat.id} className="inline-block animate-panel-in">
            <span className="relative mr-2 inline-flex size-1.5 align-middle">
              <span className="absolute inset-0 animate-ping rounded-full bg-teal-500/60" />
              <span className="relative size-1.5 rounded-full bg-teal-500" />
            </span>
            {live.stat.label} {HERO.today}
          </span>
        </p>
      </div>

      <SectionLink
        id="why-curalinx"
        aria-label="Scroll to Why Curalinx"
        className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2.5 text-[11px] font-semibold tracking-[0.16em] text-navy-900 uppercase no-underline"
        style={{ opacity: Math.max(0, 1 - progress * 3) }}
      >
        <span>Scroll</span>
        <i className="block h-9 w-[1.5px] origin-top animate-cue rounded-full bg-linear-to-b from-blue-600 to-transparent" />
      </SectionLink>
    </section>
  )
}
