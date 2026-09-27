import { useEffect, useMemo, useRef } from 'react'
import { useLocation, useOutletContext } from 'react-router-dom'
import logo from '../assets/logo.png'
import LiveNumber from '../components/LiveNumber'
import StatStrip from '../components/StatStrip'
import useLiveEstimate from '../hooks/useLiveEstimate'
import useScrollMorph from '../hooks/useScrollMorph'
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
  const heroNumberRef = useRef(null)
  const stripNumberRef = useRef(null)
  const numberRef = useRef(null)
  const { hash, key } = useLocation()
  const live = useLiveEstimate()

  // Logo: Hero → navbar. Live number: Hero → strip under the navbar.
  const pairs = useMemo(
    () => [
      { el: logoRef, from: heroSlotRef, to: navSlotRef, fit: 'width' },
      { el: numberRef, from: heroNumberRef, to: stripNumberRef, fit: 'height', swap: true },
    ],
    [navSlotRef],
  )
  const progress = useScrollMorph({ pairs })

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
      {/* The live number while it travels between the Hero and the strip */}
      <div
        ref={numberRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[110] flex justify-center origin-top-left will-change-transform"
        style={{ visibility: 'hidden' }}
      >
        <LiveNumber value={live.value} tick={live.tick} statId={live.stat.id} className="type-stat-hero text-blue-600" />
      </div>
      <StatStrip live={live} numberRef={stripNumberRef} progress={progress} />
      <Hero slotRef={heroSlotRef} numberSlotRef={heroNumberRef} live={live} progress={progress} />
      <WhyCuralinx />
      <Plans />
      <RequestDemo />
      <Newsletter />
      <Contact />
    </>
  )
}
