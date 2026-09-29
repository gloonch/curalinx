import { useEffect } from 'react'
import Reveal from '../components/Reveal'
import Ribbon from '../components/Ribbon'
import TeamMemberCard from '../components/TeamMemberCard'
import { useContent } from '../i18n'

/** About Us: no logo animation, the logo sits in the navbar from the start. */
export default function About() {
  const { about: ABOUT } = useContent()
  const TEAM = ABOUT.team

  useEffect(() => {
    document.title = `${ABOUT.docTitle} · Curalinx`
  }, [ABOUT.docTitle])

  const firstRow = TEAM.slice(0, 2)
  const secondRow = TEAM.slice(2)

  return (
    <>
      <section className="relative overflow-hidden pt-16 pb-8 md:pt-28 md:pb-16">
        <Ribbon width={1400} height={360} turns={1.25} opacity={0.08} strokeWidth={2.5} className="pointer-events-none absolute top-10 left-1/2 w-[max(1400px,120vw)] -translate-x-1/2" />
        <div className="relative mx-auto max-w-[1200px] px-4 text-center md:px-8">
          <Reveal>
            <p className="type-eyebrow eyebrow-pill mt-0 mb-4 text-blue-700">
              <span className="size-1.5 rounded-full bg-blue-600" aria-hidden="true" />
              {ABOUT.eyebrow}
            </p>
            <h1 className="type-display mx-auto my-0 max-w-[14ch] text-navy-900">{ABOUT.title}</h1>
            <p className="type-body-lg mx-auto mt-6 mb-0 max-w-[64ch] text-pretty text-gray-900">{ABOUT.lead}</p>
          </Reveal>
          <Reveal className="mx-auto mt-14 grid max-w-[980px] grid-cols-1 gap-6 text-left md:grid-cols-3 md:gap-8">
            {ABOUT.pillars.map((p) => (
              <div key={p.title} className="glass glass-gradient-border rounded-lg p-6">
                <h2 className="mt-0 mb-2 text-lg font-bold text-navy-900">{p.title}</h2>
                <p className="m-0 text-sm leading-relaxed text-gray-700">{p.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section aria-label={ABOUT.teamLabel} className="pt-12 pb-20 md:pb-24 xl:pb-32">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-4 md:gap-16 md:px-8">
          {/* Row 1: two members, centred, same card width as row 2 */}
          <div className="mx-auto grid w-full grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-8 lg:w-[calc((100%_-_64px)/3*2_+_32px)]">
            {firstRow.map((m, i) => (
              <Reveal key={m.name} delay={i * 60}>
                <TeamMemberCard {...m} />
              </Reveal>
            ))}
          </div>
          {/* Row 2: three members */}
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {secondRow.map((m, i) => (
              <Reveal
                key={m.name}
                delay={i * 60}
                className={i === 2 ? 'sm:col-span-2 sm:mx-auto sm:w-[calc(50%_-_16px)] lg:col-span-1 lg:mx-0 lg:w-auto' : undefined}
              >
                <TeamMemberCard {...m} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
