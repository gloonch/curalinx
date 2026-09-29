import { useEffect } from 'react'
import Button from '../components/Button'
import { useContent } from '../i18n'

/** Placeholder page for Privacy Policy, Terms of Service and Not Found (`page`: privacy | terms | notFound). */
export default function SimplePage({ page }) {
  const { pages } = useContent()
  const { eyebrow = pages.legal, title, text } = pages[page]
  useEffect(() => {
    document.title = `${title} · Curalinx`
  }, [title])
  return (
    <section className="mx-auto max-w-[760px] px-4 py-20 text-center md:py-32">
      <p className="type-eyebrow eyebrow-pill mt-0 mb-4 text-blue-700">{eyebrow}</p>
      <h1 className="type-h1 m-0 text-navy-900">{title}</h1>
      <p className="type-body-lg mt-4 mb-8 text-gray-900">{text}</p>
      <Button to="/" variant="secondary">{pages.back}</Button>
    </section>
  )
}
