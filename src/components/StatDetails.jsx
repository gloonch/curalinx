import { useEffect, useRef, useState } from 'react'
import cx from '../lib/cx'
import { HERO } from '../content/site'

const OPEN_MS = 3000

/**
 * Wraps the live number: hovering, focusing or tapping it opens a small card
 * with the full details, which hides again after 3s.
 */
export default function StatDetails({ stat, rate, className, ref, children }) {
  const [open, setOpen] = useState(false)
  const timer = useRef(0)

  const show = () => {
    setOpen(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setOpen(false), OPEN_MS)
  }
  useEffect(() => () => clearTimeout(timer.current), [])

  return (
    <span ref={ref} className={cx('relative inline-flex', className)}>
      <button
        type="button"
        onMouseEnter={show}
        onFocus={show}
        onClick={show}
        aria-expanded={open}
        aria-label={`About this estimate: ${stat.label}`}
        className="inline-flex cursor-help rounded-xs"
      >
        {children}
      </button>

      <span
        role="tooltip"
        className={cx(
          'absolute top-full left-1/2 z-10 mt-3 block w-[min(18rem,calc(100vw_-_32px))] -translate-x-1/2 glass-strong rounded-lg p-4 text-left transition-[opacity,translate] duration-250 ease-standard',
          open ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-1 opacity-0',
        )}
      >
        <span className="flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] text-teal-700 uppercase">
          <span className="size-1.5 rounded-full bg-teal-500" />
          {HERO.live}
        </span>
        <span className="mt-2 block text-sm font-semibold text-navy-900">{stat.label}</span>
        <span className="mt-3 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-[13px]">
          <span className="text-gray-700">Counted from</span>
          <span className="text-gray-900">00:00 UTC today</span>
          <span className="text-gray-700">Rate</span>
          <span className="text-gray-900 tabular-nums">+{rate.toFixed(2)} per second</span>
          <span className="text-gray-700">Source</span>
          <span className="text-gray-900">{stat.source}</span>
        </span>
        <span className="mt-3 block text-[11px] leading-snug text-gray-700">{HERO.note}</span>
      </span>
    </span>
  )
}
