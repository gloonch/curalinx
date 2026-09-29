import { useEffect, useRef, useState } from 'react'
import cx from '../lib/cx'
import { HERO } from '../content/site'

const OPEN_MS = 3000

/**
 * Wraps the live number: hovering, focusing or tapping it opens a small card
 * with the full details, which hides again after 3s.
 */
export default function StatDetails({ stat, className, ref, children }) {
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
        aria-label={`${HERO.live}: ${stat.title}`}
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
        <span className="mt-2 block text-sm font-semibold text-navy-900">{stat.title}</span>
        <span className="mt-3 grid gap-1.5 text-[13px] text-gray-900">
          <span>{stat.counted}</span>
          <span className="tabular-nums">{stat.rate}</span>
          <span>{stat.source}</span>
        </span>
        <span className="mt-3 block text-[11px] leading-snug text-gray-700">{stat.note}</span>
      </span>
    </span>
  )
}
