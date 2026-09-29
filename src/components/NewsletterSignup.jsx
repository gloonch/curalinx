import { useState } from 'react'
import Button from './Button'
import Icon from './Icon'
import { TextField } from './Field'
import { validateEmail } from '../lib/validation'

/** Lightweight email capture, separate from the demo request form. */
export default function NewsletterSignup({ title, text, emailLabel = 'Email Address', emailPlaceholder = 'Enter your email address', submitLabel = 'Subscribe', onSubscribe }) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)
  const [done, setDone] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    const err = validateEmail(email)
    setError(err)
    if (err) return
    setDone(true)
    onSubscribe?.(email.trim())
  }

  return (
    <section aria-labelledby="newsletter-title" className="relative grid grid-cols-1 items-center gap-8 overflow-hidden glass rounded-2xl px-5 py-7 md:grid-cols-[1fr_minmax(0,460px)] md:p-10">
      <div>
        <h3 id="newsletter-title" className="type-h3 mt-0 mb-1.5 text-navy-900">{title}</h3>
        <p className="m-0 text-[15px] leading-relaxed text-gray-700">{text}</p>
      </div>
      {done ? (
        <div role="status" className="flex items-center gap-2.5 text-[15px] font-semibold text-success">
          <Icon name="circle-check" size={22} />
          You’re subscribed. Check your inbox to confirm.
        </div>
      ) : (
        <form onSubmit={submit} noValidate className="flex flex-col items-stretch gap-2 md:flex-row md:items-start">
          <TextField
            id="newsletter-email"
            type="email"
            label={emailLabel}
            placeholder={emailPlaceholder}
            autoComplete="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              if (error) setError(null)
            }}
            error={error}
            className="flex-1"
          />
          <Button type="submit" className="md:mt-[29px]">{submitLabel}</Button>
        </form>
      )}
    </section>
  )
}
