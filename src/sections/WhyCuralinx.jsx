import { useRef, useState } from 'react'
import AudienceTabs from '../components/AudienceTabs'
import Card from '../components/Card'
import DataFlow from '../components/DataFlow'
import PricingCard from '../components/PricingCard'
import Reveal from '../components/Reveal'
import useResetWhenLeftAbove from '../hooks/useResetWhenLeftAbove'
import cx from '../lib/cx'
import { scrollToSection } from '../lib/scroll'
import logo from '../assets/logo.png'
import { useContent } from '../i18n'

/**
 * Why Curalinx: the problem and how curalinX answers it, then the
 * patient / doctor choice. The chosen side shows its features and, at the
 * end, its plans. No tab is selected on entry; the choice persists while the
 * visitor scrolls down and resets once the section is left through its top.
 * "#plans" points at the plans when a side is open, otherwise at the tabs.
 */
export default function WhyCuralinx() {
  const { why: WHY } = useContent()
  const ref = useRef(null)
  const [audience, setAudience] = useState(null)
  useResetWhenLeftAbove(ref, () => setAudience(null))
  const data = audience ? WHY[audience] : null
  const { story } = WHY

  return (
    <section ref={ref} id="why-curalinx" className="scroll-mt-nav py-20 md:py-24 xl:py-32">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        {/* "why curalinX?" with the logo as the word; logo height ≈ cap height, on the baseline */}
        <Reveal className="mx-auto max-w-[760px] text-center">
          <h2 className="type-h1 m-0 text-navy-900">
            {WHY.titleBefore} <img src={logo} alt="curalinX" className="inline-block h-[0.74em] w-auto align-baseline" />
            {WHY.titleAfter}
          </h2>
        </Reveal>

        {/* The gap (left) and how curalinX bridges it (right) */}
        <div className="mx-auto mt-10 grid max-w-[1040px] grid-cols-1 items-start gap-8 md:mt-14 lg:grid-cols-2 lg:gap-12">
          <Reveal className="flex flex-col gap-5 text-[17px] leading-relaxed text-gray-900">
            <p className="m-0">{story.problem[0]}</p>
            <blockquote className="m-0 border-l-[3px] border-teal-500 pl-5 text-xl leading-snug font-semibold text-navy-900 md:text-2xl">
              {story.quote}
            </blockquote>
            {story.problem.slice(1).map((t) => (
              <p key={t} className="m-0">{t}</p>
            ))}
          </Reveal>
          <Reveal delay={80} className="glass glass-gradient-border rounded-2xl p-6 md:p-8">
            <h3 className="type-h3 m-0 text-navy-900">{story.answerTitle}</h3>
            {story.answer.map((t) => (
              <p key={t} className="mt-4 mb-0 text-base leading-relaxed text-gray-700">{t}</p>
            ))}
          </Reveal>
        </div>

        <div id={data ? undefined : 'plans'}>
          <Reveal className="mt-14 flex flex-col items-center gap-6 md:mt-20">
            <p className="type-body-lg m-0 max-w-[40ch] text-center font-semibold text-navy-900">{WHY.prompt}</p>
            <AudienceTabs value={audience} onChange={setAudience} idBase="why" hint={null} />
          </Reveal>
        </div>

        {data ? (
          <div
            key={audience}
            id="why-panel"
            role="tabpanel"
            aria-labelledby={`why-tab-${audience}`}
            className={cx('glass mt-10 animate-panel-in rounded-2xl p-6 md:p-12', audience === 'patient' ? 'bg-teal-100/60!' : 'bg-blue-100/60!')}
          >
            <div className="mx-auto mb-9 flex max-w-[720px] flex-col items-center gap-3.5 text-center">
              <h3 className="type-h2 m-0 text-navy-900">{data.title}</h3>
              {data.intro.map((t) => (
                <p key={t} className="m-0 text-base leading-relaxed text-gray-700 md:text-[17px]">{t}</p>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {data.cards.map((c, i) => (
                <Card
                  key={c.title}
                  icon={c.icon}
                  title={c.title}
                  description={c.text}
                  accent={audience === 'patient' ? 'teal' : 'blue'}
                  interactive
                  className="animate-panel-in"
                  style={{ animationDelay: `${i * 60}ms` }}
                />
              ))}
            </div>

            {/* Plans for this side */}
            <div id="plans" className="mt-14 md:mt-20">
              <div className="mb-8 text-center md:mb-10">
                <p className={cx('type-eyebrow eyebrow-pill mt-0 mb-4', audience === 'patient' ? 'text-teal-800' : 'text-blue-700')}>
                  <span className={cx('size-1.5 rounded-full', audience === 'patient' ? 'bg-teal-500' : 'bg-blue-600')} aria-hidden="true" />
                  {WHY.plansEyebrow}
                </p>
                <h3 className="type-h2 m-0 text-navy-900">{WHY.plansTitle}</h3>
                <p className="mt-2 mb-0 text-base text-gray-700">{data.plansFor}</p>
              </div>
              <div className="mx-auto grid max-w-[880px] grid-cols-1 items-stretch gap-6 md:grid-cols-2">
                {data.plans.map((plan, i) => (
                  <div key={plan.name} className="flex animate-panel-in" style={{ animationDelay: `${i * 60}ms` }}>
                    <PricingCard {...plan} onCta={() => scrollToSection(plan.ctaSection)} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-10 grid justify-items-center gap-4 glass-subtle rounded-2xl border-dashed! border-navy-900/15! p-6 text-center md:p-12">
            <DataFlow labels={WHY.flow} className="hidden w-full max-w-[760px] md:block" />
            <p className="m-0 max-w-[44ch] text-sm leading-relaxed text-gray-900">{WHY.empty}</p>
          </div>
        )}
      </div>
    </section>
  )
}
