import { useState } from 'react'
import Button from '../components/Button'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import RibbonLoader from '../components/RibbonLoader'
import SectionHead from '../components/SectionHead'
import { Select, TextField } from '../components/Field'
import { validateEmail } from '../lib/validation'
import { useContent } from '../i18n'

export default function Contact() {
  const { contact: CONTACT, form: copy } = useContent()
  const [errors, setErrors] = useState({})
  const [emailOk, setEmailOk] = useState(null)
  const [status, setStatus] = useState('idle')

  const onEmailBlur = (e) => {
    const err = validateEmail(e.target.value, copy)
    setErrors((s) => ({ ...s, email: err }))
    setEmailOk(err ? null : CONTACT.emailOk)
  }

  const submit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const next = {
      email: validateEmail(form.email.value, copy),
      message: form.message.value.trim() ? null : CONTACT.errors.message,
    }
    setErrors(next)
    if (next.email) return form.email.focus()
    if (next.message) return form.message.focus()
    setStatus('sending')
    // TODO: send the form data to your backend here.
    setTimeout(() => setStatus('done'), 1000)
  }

  const info = [
    { icon: 'mail', text: CONTACT.email },
    { icon: 'phone', text: CONTACT.phone },
    { icon: 'map-pin', text: CONTACT.address },
  ]

  return (
    <section id="contact" className="scroll-mt-nav py-20 md:py-24 xl:py-32">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-8 px-4 md:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <SectionHead align="left" accent="teal" title={CONTACT.title} intro={CONTACT.intro} />
          <Reveal as="ul" className="mt-9 mb-0 grid list-none gap-3.5 p-0">
            {info.map((i) => (
              <li key={i.icon} className="flex items-center gap-3">
                <span className="grid size-10 flex-none place-items-center glass-subtle rounded-md text-teal-800">
                  <Icon name={i.icon} size={18} />
                </span>
                <span className="text-[15px] font-medium text-gray-900 select-all">{i.text}</span>
              </li>
            ))}
          </Reveal>
        </div>

        <Reveal className="glass-strong rounded-2xl p-6 md:p-11">
          {status === 'done' ? (
            <div role="status" className="grid justify-items-center gap-2.5 py-10 text-center text-success">
              <Icon name="circle-check" size={44} />
              <h3 className="type-h3 mt-1.5 mb-0 text-navy-900">{CONTACT.done.title}</h3>
              <p className="mt-0 mb-3 max-w-[40ch] text-gray-700">{CONTACT.done.text}</p>
              <Button variant="secondary" onClick={() => { setStatus('idle'); setEmailOk(null) }}>{CONTACT.done.again}</Button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate aria-label={CONTACT.formLabel} className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <TextField id="contact-name" name="name" label={CONTACT.fields.name} autoComplete="name" />
              <TextField
                id="contact-email"
                name="email"
                type="email"
                label={CONTACT.fields.email}
                required
                placeholder={CONTACT.fields.emailPlaceholder}
                autoComplete="email"
                error={errors.email}
                success={!errors.email ? emailOk : null}
                onBlur={onEmailBlur}
              />
              <TextField id="contact-phone" name="phone" type="tel" label={CONTACT.fields.phone} optional placeholder={CONTACT.fields.phonePlaceholder} autoComplete="tel" />
              <Select id="contact-subject" name="subject" label={CONTACT.fields.subject} placeholder={CONTACT.fields.subjectPlaceholder} options={CONTACT.subjects} />
              <TextField
                id="contact-message"
                name="message"
                label={CONTACT.fields.message}
                required
                multiline
                rows={5}
                error={errors.message}
                onChange={() => errors.message && setErrors((s) => ({ ...s, message: null }))}
                className="md:col-span-2"
              />
              <div className="flex justify-end md:col-span-2">
                {status === 'sending' ? <RibbonLoader label={CONTACT.sending} /> : <Button type="submit" iconRight="send" className="w-full md:w-auto">{CONTACT.fields.submit}</Button>}
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
