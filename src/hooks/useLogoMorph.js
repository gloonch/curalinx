import { useEffect, useState } from 'react'

export const LOGO_ASPECT = 1089 / 209

// Time constant (ms) of the easing that chases the scroll target. Keeps the
// transition visible even when a single wheel flick jumps past `distance`.
const TAU = 130

/**
 * Hero → Navbar logo transformation.
 * ONE logo element travels: it is measured against an empty slot in the Hero
 * and an empty slot in the Navbar, and scroll progress drives translate + scale.
 * The rendered progress eases toward the scroll target every frame, so fast
 * scrolls still animate. Scrolling back to the top reverses it. Returns progress (0 → 1).
 */
export default function useLogoMorph({ heroSlotRef, navSlotRef, logoRef, distance = 300 }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let raf = 0
    let last = 0
    let t = null

    // Scroll-linked (the visitor drives it), so it also runs under reduced motion.
    const target = () => Math.min(1, Math.max(0, window.scrollY / distance))

    const apply = () => {
      const logo = logoRef.current
      const heroSlot = heroSlotRef.current
      const navSlot = navSlotRef.current
      if (!logo || !heroSlot || !navSlot) return

      // Scale + vertical: ease-in-out cubic. Horizontal leads slightly so the path arcs.
      const e = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
      const ex = 1 - Math.pow(1 - t, 2.2)

      const a = heroSlot.getBoundingClientRect()
      const b = navSlot.getBoundingClientRect()
      const bh = b.width / LOGO_ASPECT
      const bx = b.left
      const by = b.top + (b.height - bh) / 2

      const x = a.left + (bx - a.left) * ex
      const y = a.top + (by - a.top) * e
      const s = (a.width + (b.width - a.width) * e) / a.width

      logo.style.width = `${a.width}px`
      logo.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) scale(${s.toFixed(4)})`
      logo.style.visibility = 'visible'
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
  }, [heroSlotRef, navSlotRef, logoRef, distance])

  return progress
}
