import { Link } from 'react-router-dom'
import logoReversed from '../assets/logo-reversed.png'
import Icon from './Icon'
import Ribbon from './Ribbon'
import SectionLink from './SectionLink'
import { CONTACT, SOCIAL } from '../content/site'

const LINK = 'inline-flex items-center gap-2.5 text-[15px] font-medium text-muted-inverse no-underline transition-colors duration-180 ease-standard hover:text-white'
const HEAD = 'mb-4 text-[13px] font-bold tracking-[0.12em] text-white uppercase'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-900 text-white">
      <Ribbon tone="inverse" width={620} height={220} turns={1.25} opacity={0.12} strokeWidth={2} className="pointer-events-none absolute top-6 -right-20 w-[620px]" />
      <div className="relative mx-auto max-w-[1200px] px-4 pt-16 pb-6 nav:px-8 nav:pt-20 nav:pb-8">
        <div className="grid grid-cols-1 gap-10 min-[481px]:grid-cols-2 nav:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="min-[481px]:col-span-2 nav:col-span-1">
            <img src={logoReversed} alt="Curalinx" className="mb-5 block w-[150px]" />
            <p className="mb-5 max-w-[320px] text-[15px] leading-relaxed text-muted-inverse">Connecting patients, health data and doctors, securely.</p>
            <div className="flex gap-2">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Curalinx on ${s.label}`}
                  className="grid size-10 place-items-center rounded-md border border-white/20 text-muted-inverse transition-colors duration-180 hover:border-teal-300 hover:text-teal-300"
                >
                  <Icon name={s.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className={HEAD}>Company</h4>
            <ul className="m-0 grid list-none gap-3 p-0">
              <li><Link to="/about" className={LINK}>About Us</Link></li>
              <li><SectionLink id="contact" className={LINK}>Contact Us</SectionLink></li>
              <li><SectionLink id="request-demo" className={LINK}>Request a Demo</SectionLink></li>
            </ul>
          </div>

          <div>
            <h4 className={HEAD}>Product</h4>
            <ul className="m-0 grid list-none gap-3 p-0">
              <li><SectionLink id="why-curalinx" className={LINK}>Why Curalinx</SectionLink></li>
              <li><SectionLink id="plans" className={LINK}>Plans</SectionLink></li>
            </ul>
          </div>

          <div>
            <h4 className={HEAD}>Contact</h4>
            <ul className="m-0 grid list-none gap-3 p-0">
              <li><a href={`mailto:${CONTACT.email}`} className={LINK}><Icon name="mail" size={18} />{CONTACT.email}</a></li>
              <li><a href={`tel:${CONTACT.phone.replace(/[^+\d]/g, '')}`} className={LINK}><Icon name="phone" size={18} />{CONTACT.phone}</a></li>
              <li><span className={LINK}><Icon name="map-pin" size={18} />{CONTACT.address}</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/15 pt-6 text-[13px] font-medium text-muted-inverse min-[481px]:flex-row min-[481px]:flex-wrap min-[481px]:justify-between">
          <span>© {new Date().getFullYear()} Curalinx. All rights reserved.</span>
          <nav aria-label="Legal" className="flex gap-6">
            <Link to="/privacy" className="text-muted-inverse no-underline hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="text-muted-inverse no-underline hover:text-white">Terms of Service</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
