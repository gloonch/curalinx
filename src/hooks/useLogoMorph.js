import { useEffect, useState } from 'react'
import { prefersReducedMotion } from '../lib/scroll'

export const LOGO_ASPECT = 1089 / 209

/**
 * Hero → Navbar logo transformation.
 * ONE logo element travels: it is measured against an empty slot in the Hero
 * and an empty slot in the Navbar, and scroll progress drives translate + scale.
 * Scrolling back to the top reverses it exactly. Returns progress (0 → 1).
 */
export default function useLogoMorph({ heroSlotRef, navSlotRef, logoRef, distance = 300 }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let raf = 0

    const measure = () => {
      const logo = logoRef.current
      const heroSlot = heroSlotRef.current
      const navSlot = navSlotRef.current
      if (!logo || !heroSlot || !navSlot) return

      let t = Math.min(1, Math.max(0, window.scrollY / distance))
      if (prefersReducedMotion()) t = t > 0.02 ? 1 : 0

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

    const schedule = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(measure)
    }

    measure()
    // Re-measure once web fonts settle (the navbar layout can shift slightly).
    document.fonts?.ready?.then(schedule)
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [heroSlotRef, navSlotRef, logoRef, distance])

  return progress
}
