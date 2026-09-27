import NewsletterSignup from '../components/NewsletterSignup'
import Reveal from '../components/Reveal'
import { NEWSLETTER } from '../content/site'

export default function Newsletter() {
  return (
    <section aria-label="Newsletter" className="pt-16 md:pt-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        <Reveal>
          <NewsletterSignup title={NEWSLETTER.title} text={NEWSLETTER.text} />
        </Reveal>
      </div>
    </section>
  )
}
