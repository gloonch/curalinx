import { useEffect, useRef, useState } from 'react'
import cx from '../lib/cx'
import { prefersReducedMotion } from '../lib/scroll'

/** Subtle fade-up (16px, 500ms) that plays once when the content enters the viewport. */
export default function Reveal({ as: Tag = 'div', delay = 0, className, style, children }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window) || prefersReducedMotion()) {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={cx('reveal', inView && 'is-in', className)} style={{ transitionDelay: `${delay}ms`, ...style }}>
      {children}
    </Tag>
  )
}
