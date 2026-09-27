import { useEffect } from 'react'
import Button from '../components/Button'

/** Placeholder page for Privacy Policy, Terms of Service and Not Found. */
export default function SimplePage({ eyebrow, title, text }) {
  useEffect(() => {
    document.title = `${title} · Curalinx`
  }, [title])
  return (
    <section className="mx-auto max-w-[760px] px-4 py-20 text-center md:py-32">
      <p className="type-eyebrow mb-3 text-blue-600">{eyebrow}</p>
      <h1 className="type-h1 m-0 text-navy-900">{title}</h1>
      <p className="type-body-lg mt-4 mb-8 text-gray-700">{text}</p>
      <Button to="/" variant="secondary">Back to Home</Button>
    </section>
  )
}
