import { useEffect, useRef } from 'react'
import { useLocation, useOutletContext } from 'react-router-dom'
import logo from '../assets/logo.png'
import useLogoMorph from '../hooks/useLogoMorph'
import { scrollToSection } from '../lib/scroll'
import Hero from '../sections/Hero'
import WhyCuralinx from '../sections/WhyCuralinx'
import Plans from '../sections/Plans'
import RequestDemo from '../sections/RequestDemo'
import Newsletter from '../sections/Newsletter'
import Contact from '../sections/Contact'

export default function Home() {
  const { navSlotRef, setMorphProgress } = useOutletContext()
  const heroSlotRef = useRef(null)
  const logoRef = useRef(null)
  const { hash, key } = useLocation()

  const progress = useLogoMorph({ heroSlotRef, navSlotRef, logoRef })

  useEffect(() => {
    setMorphProgress(progress)
  }, [progress, setMorphProgress])

  useEffect(() => {
    document.title = 'Curalinx'
  }, [])

  // Arriving at "/#plans" (e.g. from the About page): scroll with the header offset.
  useEffect(() => {
    if (!hash) return
    const id = hash.slice(1)
    const t = setTimeout(() => scrollToSection(id), 60)
    return () => clearTimeout(t)
  }, [hash, key])

  return (
    <>
      {/* The ONE logo that travels from the Hero into the Navbar */}
      <img
        ref={logoRef}
        src={logo}
        alt=""
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[110] max-w-none origin-top-left will-change-transform"
        style={{ visibility: 'hidden' }}
      />
      <Hero slotRef={heroSlotRef} progress={progress} />
      <WhyCuralinx />
      <Plans />
      <RequestDemo />
      <Newsletter />
      <Contact />
    </>
  )
}
