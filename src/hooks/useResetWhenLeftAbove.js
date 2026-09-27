import { useEffect, useRef } from 'react'

/**
 * Calls onReset when the element leaves the viewport through its TOP boundary,
 * i.e. the visitor scrolled back up above the section. Leaving downward keeps state.
 */
export default function useResetWhenLeftAbove(ref, onReset) {
  const cb = useRef(onReset)
  cb.current = onReset

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) continue
          const viewportBottom = entry.rootBounds ? entry.rootBounds.bottom : window.innerHeight
          // Section is entirely below the viewport → visitor went back up above it.
          if (entry.boundingClientRect.top >= viewportBottom - 1) cb.current()
        }
      },
      { threshold: 0 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [ref])
}
