import { useRef, useState } from 'react'
import AudienceTabs from '../components/AudienceTabs'
import Badge from '../components/Badge'
import Card from '../components/Card'
import DataFlow from '../components/DataFlow'
import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'
import useResetWhenLeftAbove from '../hooks/useResetWhenLeftAbove'
import cx from '../lib/cx'
import { WHY } from '../content/site'

/**
 * Why Curalinx. No tab is selected on entry. The choice persists while the
 * visitor scrolls down and resets once the section is left through its top.
 */
export default function WhyCuralinx() {
  const ref = useRef(null)
  const [audience, setAudience] = useState(null)
  useResetWhenLeftAbove(ref, () => setAudience(null))
  const data = audience ? WHY[audience] : null

  return (
    <section ref={ref} id="why-curalinx" className="scroll-mt-nav bg-off-white py-20 md:py-24 xl:py-32">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        <SectionHead eyebrow={WHY.eyebrow} title={WHY.title} intro={WHY.intro} />
        <Reveal className="mt-8 flex justify-center">
          <AudienceTabs value={audience} onChange={setAudience} idBase="why" />
        </Reveal>

        {data ? (
          <div
            key={audience}
            id="why-panel"
            role="tabpanel"
            aria-labelledby={`why-tab-${audience}`}
            className={cx('mt-10 animate-panel-in rounded-2xl p-6 md:p-12', audience === 'patient' ? 'bg-teal-100' : 'bg-blue-100')}
          >
            <div className="mx-auto mb-9 flex max-w-[640px] flex-col items-center gap-3.5 text-center">
              <Badge tone={audience} dot>{data.badge}</Badge>
              <h3 className="type-h2 m-0 text-navy-900">{data.title}</h3>
              <p className="type-body-lg m-0 text-gray-700">{data.intro}</p>
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
          </div>
        ) : (
          <div className="mt-10 grid justify-items-center gap-4 rounded-2xl border-[1.5px] border-dashed border-gray-300 p-6 text-center md:p-12">
            <DataFlow className="hidden w-full max-w-[760px] md:block" />
            <p className="m-0 max-w-[44ch] text-sm leading-relaxed text-gray-600">{WHY.empty}</p>
          </div>
        )}
      </div>
    </section>
  )
}
