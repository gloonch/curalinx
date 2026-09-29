import LiveNumber from './LiveNumber'
import StatDetails from './StatDetails'
import { HERO } from '../content/site'

/**
 * Compact live estimate pinned under the navbar (1/3 of its height). The Hero
 * number travels into `numberRef`; the rest fades in near the end. No shape:
 * only a blur that fades from the top to transparent, its tail reaching
 * slightly past the strip so the text itself always sits on solid blur.
 */
export default function StatStrip({ live, numberRef, progress }) {
  const docked = progress === 1
  const fade = Math.min(1, Math.max(0, (progress - 0.55) / 0.45))

  return (
    <div
      data-site-subheader
      aria-hidden={!docked}
      inert={!docked}
      className="fixed inset-x-0 top-[calc(env(safe-area-inset-top,0px)_+_var(--nav-h))] z-[99] h-(--sub-h)"
      style={{ pointerEvents: docked ? 'auto' : 'none' }}
    >
      <div
        className="absolute inset-x-0 top-0 h-[170%] backdrop-blur-xl backdrop-saturate-150 [mask-image:linear-gradient(to_bottom,#000_45%,transparent)]"
        style={{ opacity: fade }}
      />
      <div className="relative mx-auto flex h-full max-w-[1200px] items-center justify-center gap-3 px-4 text-[12px] leading-none nav:text-[13px]">
        <span className="flex flex-none items-center gap-1.5">
          <span className="relative flex size-1.5" style={{ opacity: fade }}>
            <span className="absolute inset-0 animate-ping rounded-full bg-teal-500/60" />
            <span className="relative size-1.5 rounded-full bg-teal-500" />
          </span>
          <StatDetails ref={numberRef} stat={live.stat}>
            <LiveNumber
              value={live.value}
              tick={live.tick}
              statId={live.stat.id}
              className="text-[13px] font-extrabold tracking-[-0.02em] text-blue-600 nav:text-[14px]"
            />
          </StatDetails>
        </span>
        <span className="min-w-0 font-medium text-gray-900" style={{ opacity: fade }}>
          <span key={live.stat.id} className="block animate-panel-in truncate">
            {live.stat.title}
          </span>
        </span>
        <span className="hidden flex-none text-gray-700 sm:inline" style={{ opacity: fade }}>
          {live.stat.counted}
        </span>
      </div>
    </div>
  )
}
