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
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[300] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:shadow-lg">
        Skip to content
      </a>
      <Navbar
        logoHidden={isHome}
        logoSlotRef={navSlotRef}
        scrolled={isHome ? morphProgress > 0.98 : scrolled}
      />
      <main id="main">
        <Outlet context={{ navSlotRef, setMorphProgress }} />
      </main>
      <Footer />
    </>
  )
}
