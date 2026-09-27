import PricingCard from '../components/PricingCard'
import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'
import cx from '../lib/cx'
import { scrollToSection } from '../lib/scroll'
import { PLANS } from '../content/site'

export default function Plans() {
  return (
    <section id="plans" className="scroll-mt-nav py-20 md:py-24 xl:py-32">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        <SectionHead eyebrow={PLANS.eyebrow} title={PLANS.title} intro={PLANS.intro} className="mb-10 md:mb-14" />
        {/* Desktop: 3 in a row. Below 1100px: one centred column, featured plan first. */}
        <div className="mx-auto grid max-w-[520px] grid-cols-1 items-stretch gap-6 min-[1100px]:max-w-none min-[1100px]:grid-cols-3">
          {PLANS.items.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 60} className={cx('flex', plan.featured && 'order-first min-[1100px]:order-none')}>
              <PricingCard {...plan} onCta={() => scrollToSection(plan.ctaSection)} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
