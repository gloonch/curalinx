import { useState } from 'react'
import Button from '../components/Button'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import Ribbon from '../components/Ribbon'
import RibbonLoader from '../components/RibbonLoader'
import SectionHead from '../components/SectionHead'
import { RoleSelect, TextField } from '../components/Field'
import { validateEmail } from '../lib/validation'
import { DEMO } from '../content/site'

const EMPTY = { name: '', email: '', role: null, organization: '', phone: '', message: '' }

/** The page's strongest conversion block. Separate from the newsletter. */
export default function RequestDemo() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | done

  const set = (key) => (e) => {
    const v = e && e.target ? e.target.value : e
    setValues((s) => ({ ...s, [key]: v }))
    if (errors[key]) setErrors((s) => ({ ...s, [key]: null }))
  }

  const submit = (e) => {
    e.preventDefault()
    const next = {
      name: values.name.trim() ? null : 'Enter your full name.',
      email: validateEmail(values.email),
      role: values.role ? null : 'Select Doctor or Patient.',
      message: values.message.trim() ? null : 'Tell us briefly what you would like to see.',
    }
    setErrors(next)
    const first = ['name', 'email', 'role', 'message'].find((k) => next[k])
    if (first) {
      const el = e.currentTarget.querySelector(first === 'role' ? 'input[type=radio]' : `#demo-${first}`)
      el?.focus()
      return
    }
    setStatus('sending')
    // TODO: send `values` to your backend / CRM here.
    setTimeout(() => setStatus('done'), 1100)
  }

  return (
    <section id="request-demo" className="relative scroll-mt-nav overflow-hidden bg-blue-50 py-20 md:py-24 xl:py-32">
      <Ribbon width={1400} height={300} turns={1.25} opacity={0.12} strokeWidth={2} className="pointer-events-none absolute -bottom-10 -left-[10%] w-[120%]" />
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-8 px-4 md:px-8 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <div>
          <SectionHead align="left" eyebrow={DEMO.eyebrow} title={DEMO.title} intro={DEMO.intro} />
          <Reveal as="ul" className="mt-9 mb-0 grid list-none gap-3.5 p-0">
            {DEMO.perks.map((p) => (
              <li key={p.icon} className="flex items-center gap-3 text-[15px] font-medium text-gray-900">
                <span className="grid size-10 flex-none place-items-center rounded-md border border-gray-200 bg-white text-blue-600">
                  <Icon name={p.icon} size={18} />
                </span>
                {p.text}
              </li>
            ))}
          </Reveal>
        </div>

        <Reveal className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md md:p-11">
          {status === 'done' ? (
            <div role="status" className="grid justify-items-center gap-2.5 py-10 text-center text-success">
              <Icon name="circle-check" size={44} />
              <h3 className="type-h3 mt-1.5 mb-0 text-navy-900">Request received</h3>
              <p className="mt-0 mb-3 max-w-[40ch] text-gray-700">Thank you. We will contact you within one business day to schedule your demo.</p>
              <Button variant="secondary" onClick={() => { setValues(EMPTY); setStatus('idle') }}>Send Another Request</Button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate aria-label="Request a Demo" className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <TextField id="demo-name" label="Full Name" required placeholder="Jane Cooper" autoComplete="name" value={values.name} onChange={set('name')} error={errors.name} />
              <TextField id="demo-email" type="email" label="Email Address" required placeholder="name@example.com" autoComplete="email" value={values.email} onChange={set('email')} error={errors.email} />
              <RoleSelect name="demo-role" label="I am a" required value={values.role} onChange={set('role')} error={errors.role} className="md:col-span-2" />
              <TextField id="demo-organization" label="Organization" optional placeholder="Clinic, hospital or company" autoComplete="organization" value={values.organization} onChange={set('organization')} />
              <TextField id="demo-phone" type="tel" label="Phone Number" optional placeholder="+1 000 000 0000" autoComplete="tel" value={values.phone} onChange={set('phone')} />
              <TextField id="demo-message" label="Message" required multiline rows={4} placeholder="What would you like to see in the demo?" value={values.message} onChange={set('message')} error={errors.message} className="md:col-span-2" />
              <div className="md:col-span-2">
                {status === 'sending' ? (
                  <div className="flex min-h-14 justify-center"><RibbonLoader label="Sending your request" /></div>
                ) : (
                  <Button type="submit" size="lg" fullWidth iconRight="arrow-right">Request a Demo</Button>
                )}
              </div>
              <p className="m-0 text-xs text-gray-600 md:col-span-2">By submitting you agree to our Privacy Policy.</p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
