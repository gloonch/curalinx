import { useEffect, useState } from 'react'

// Time constant (ms) of the easing that chases the scroll target. Keeps the
// transition visible even when a single wheel flick jumps past `distance`.
const TAU = 130

/**
 * Hero → header transformations driven by one scroll progress (0 → 1).
 * Each pair moves ONE fixed element (`el`) from the `from` slot to the `to`
 * slot with translate + scale (`fit`: match the slot's width or height).
 * With `swap`, the slots themselves are shown at the two ends (crisp text)
 * and the travelling copy only in between.
 * The rendered progress eases toward the scroll target every frame, so fast
 * scrolls still animate. Scroll-linked (the visitor drives it), so it also
 * runs under reduced motion. Returns progress.
 */
export default function useScrollMorph({ pairs, distance = 300 }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let raf = 0
    let last = 0
    let t = null

    const target = () => Math.min(1, Math.max(0, window.scrollY / distance))

    const apply = () => {
      // Scale + vertical: ease-in-out cubic. Horizontal leads slightly so the path arcs.
      const e = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
      const ex = 1 - Math.pow(1 - t, 2.2)

      for (const { el: elRef, from: fromRef, to: toRef, fit = 'width', swap = false } of pairs) {
        const el = elRef.current
        const from = fromRef.current
        const to = toRef.current
        if (!el || !from || !to) continue

        const a = from.getBoundingClientRect()
        const b = to.getBoundingClientRect()
        if (!a.width || !a.height) continue
        const s = fit === 'height' ? b.height / a.height : b.width / a.width
        const bx = b.left
        const by = b.top + (b.height - a.height * s) / 2

        const x = a.left + (bx - a.left) * ex
        const y = a.top + (by - a.top) * e
        const k = 1 + (s - 1) * e

        el.style.width = `${a.width}px`
        el.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) scale(${k.toFixed(4)})`
        if (swap) {
          from.style.visibility = t === 0 ? 'visible' : 'hidden'
          to.style.visibility = t === 1 ? 'visible' : 'hidden'
          el.style.visibility = t > 0 && t < 1 ? 'visible' : 'hidden'
        } else {
          el.style.visibility = 'visible'
        }
      }
      setProgress(t)
    }

    const tick = (now) => {
      const goal = target()
      if (t === null) {
        t = goal
      } else {
        const dt = Math.min(64, now - (last || now))
        t += (goal - t) * (1 - Math.exp(-dt / TAU))
        if (Math.abs(goal - t) < 0.001) t = goal
      }
      last = now
      apply()
      raf = t === goal ? 0 : requestAnimationFrame(tick)
    }

    const schedule = () => {
      if (raf) return
      last = performance.now()
      raf = requestAnimationFrame(tick)
    }
    const remeasure = () => {
      cancelAnimationFrame(raf)
      raf = 0
      schedule()
    }

    tick(performance.now())
    // Re-measure once web fonts settle (the navbar layout can shift slightly).
    document.fonts?.ready?.then(remeasure)
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', remeasure)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', remeasure)
    }
  }, [pairs, distance])

  return progress
}
