import { useEffect, useRef } from 'react'
import cx from '../lib/cx'

const EASE = 'cubic-bezier(0.2, 0, 0, 1)'

/**
 * A counting number: on every tick the changed digits roll up and a faint
 * teal glow pulses, so it reads as live.
 */
export default function LiveNumber({ value, tick, statId, className, ref }) {
  const textRef = useRef(null)

  useEffect(() => {
    if (tick === 0) return
    textRef.current?.animate(
      [
        { textShadow: '0 0 0 rgb(20 163 160 / 0)' },
        { textShadow: '0 0 0.5em rgb(20 163 160 / 0.35)', offset: 0.3 },
        { textShadow: '0 0 0 rgb(20 163 160 / 0)' },
      ],
      { duration: 1200, easing: EASE },
    )
  }, [tick])

  return (
    <span ref={ref} className={cx('inline-flex overflow-hidden leading-none whitespace-nowrap tabular-nums', className)}>
      <span ref={textRef} className="inline-flex">
        {[...value].map((ch, i) => (
          <span key={i} className="inline-block overflow-hidden py-[0.08em]">
            <span key={`${value.length - i}:${ch}:${statId}`} className="inline-block animate-digit-in">
              {ch}
            </span>
          </span>
        ))}
      </span>
    </span>
  )
}
