export function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
}

/**
 * Smooth-scroll to a section so its top lands just below the sticky navbar
 * (header offset). Returns false if the section is not on the current page.
 */
export function scrollToSection(id, { gap = 16 } = {}) {
  const target = document.getElementById(id.replace(/^#/, ''))
  if (!target) return false
  const header = document.querySelector('[data-site-header]')
  const navH = header ? header.getBoundingClientRect().height : 0
  const top = target.getBoundingClientRect().top + window.scrollY - navH - gap
  window.scrollTo({ top: Math.max(0, top), behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
  return true
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
}
