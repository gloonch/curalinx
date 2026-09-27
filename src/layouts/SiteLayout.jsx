import { useEffect, useRef, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import useScrolled from '../hooks/useScrolled'

/**
 * Shared shell for every page: Navbar + page + Footer.
 * The landing page ("/") reports its logo-morph progress through the outlet
 * context; there the navbar logo slot stays empty until the Hero logo docks.
 */
export default function SiteLayout() {
  const { pathname, hash } = useLocation()
  const navSlotRef = useRef(null)
  const [morphProgress, setMorphProgress] = useState(0)
  const scrolled = useScrolled()
  const isHome = pathname === '/'

  // New page without a section hash → start at the top.
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!isHome) setMorphProgress(0)
  }, [isHome])

  return (
    <>
      {/* Brand aurora that the glass surfaces blur */}
      <div className="aurora" aria-hidden="true">
        <span className="aurora__blob aurora__blob--blue" />
        <span className="aurora__blob aurora__blob--teal" />
      </div>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[300] focus:rounded-md focus:glass-strong focus:px-4 focus:py-2 focus:shadow-lg">
        Skip to content
      </a>
      <Navbar
        logoHidden={isHome}
        logoSlotRef={navSlotRef}
        glass={isHome ? morphProgress : scrolled ? 1 : 0}
        animated={!isHome}
      />
      <main id="main">
        <Outlet context={{ navSlotRef, setMorphProgress }} />
      </main>
      <Footer />
    </>
  )
}
