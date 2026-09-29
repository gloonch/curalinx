import { useEffect, useState } from 'react'
import { HERO } from '../content/site'

const TICK_MS = 2000
const TICKS_PER_STAT = 4 // each statistic stays for 8s

const fmt = new Intl.NumberFormat('en-US')

/**
 * Live incidence estimate shared by the Hero and the header strip.
 * Seconds since 00:00 UTC are read ONCE on mount; after that the count only
 * grows from page time (no recalculation, no requests). Ticks every 2s and
 * rotates to the next statistic every 8s.
 */
export default function useLiveEstimate() {
  const [origin] = useState(() => {
    const now = new Date()
    const midnight = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
    return { seconds: (now.getTime() - midnight) / 1000, perf: performance.now() }
  })
  const [state, setState] = useState({ elapsed: origin.seconds, tick: 0 })

  useEffect(() => {
    const id = setInterval(() => {
      setState((s) => ({ elapsed: origin.seconds + (performance.now() - origin.perf) / 1000, tick: s.tick + 1 }))
    }, TICK_MS)
    return () => clearInterval(id)
  }, [origin])

  const stat = HERO.stats[Math.floor(state.tick / TICKS_PER_STAT) % HERO.stats.length]
  return { stat, tick: state.tick, value: fmt.format(Math.floor(stat.perSecond * state.elapsed)) }
}
