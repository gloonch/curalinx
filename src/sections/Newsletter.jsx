import NewsletterSignup from '../components/NewsletterSignup'
import Reveal from '../components/Reveal'
import { useContent } from '../i18n'

export default function Newsletter() {
  const { newsletter } = useContent()
  return (
    <section aria-label={newsletter.label} className="pt-16 md:pt-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        <Reveal>
          <NewsletterSignup />
        </Reveal>
      </div>
    </section>
  )
}
