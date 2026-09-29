import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'
import Button from './Button'
import Icon from './Icon'
import SectionLink from './SectionLink'
import cx from '../lib/cx'
import { scrollToSection, scrollToTop } from '../lib/scroll'
import LanguageSwitch from './LanguageSwitch'
import { useContent } from '../i18n'

const LINK =
  "relative inline-flex h-10 items-center rounded-sm px-3.5 text-[15px] font-semibold text-navy-900 no-underline after:absolute after:inset-x-3.5 after:bottom-1.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-brand-gradient after:transition-transform after:duration-240 after:ease-standard after:content-[''] hover:after:scale-x-100"

/**
 * Sticky site header: logo slot (left), links (centre), EN/IT switch and
 * Request a Demo (right). Below 900px the language switch lives in the menu sheet.
 * Below 900px: logo + compact CTA + hamburger sheet.
 * On the landing page the logo slot stays empty (`logoHidden`) because the
 * Hero logo travels into it (see hooks/useScrollMorph), and `glass` follows
 * the same scroll progress so the blur builds up with the move. Elsewhere
 * `glass` is 0/1 and `animated` eases the change.
 */
export default function Navbar({ logoHidden = false, logoSlotRef, glass = 0, animated = false }) {
  const { nav, lang } = useContent()
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const onLogoClick = (e) => {
    if (pathname === '/') {
      e.preventDefault()
      scrollToTop()
    }
  }
  const onDemoClick = (e) => {
    setOpen(false)
    if (pathname === '/' && scrollToSection('request-demo')) e.preventDefault()
  }

  const renderLink = (item, className, extra) =>
    item.to ? (
      <NavLink
        to={item.to}
        className={({ isActive }) => cx(className, isActive && 'after:scale-x-100')}
        onClick={() => setOpen(false)}
        {...extra}
      >
        {item.label}
        {extra?.children}
      </NavLink>
    ) : (
      <SectionLink id={item.section} className={className} onClick={() => setOpen(false)} {...extra}>
        {item.label}
        {extra?.children}
      </SectionLink>
    )

  // No white fill: the header only gains blur (and a hairline) as `glass` goes 0 → 1.
  const g = open ? 1 : glass
  const backdrop = `blur(${(g * 24).toFixed(1)}px) saturate(${Math.round(100 + g * 60)}%)`

  return (
    <header
      data-site-header
      className={cx(
        'sticky top-[env(safe-area-inset-top,0px)] z-[100] h-(--nav-h) border-b bg-transparent',
        animated && 'transition-[backdrop-filter,-webkit-backdrop-filter,border-color] duration-300 ease-standard',
      )}
      style={{
        backdropFilter: backdrop,
        WebkitBackdropFilter: backdrop,
        borderBottomColor: `rgb(0 0 100 / ${(g * 0.06).toFixed(3)})`,
      }}
    >
      <div className="mx-auto grid h-full max-w-[1200px] grid-cols-[1fr_auto] items-center gap-6 px-4 nav:grid-cols-[1fr_auto_1fr] nav:px-8">
        <Link
          to="/"
          ref={logoSlotRef}
          onClick={onLogoClick}
          aria-label={nav.home}
          className="flex h-10 w-[112px] items-center nav:w-[132px]"
        >
          <img src={logo} alt="Curalinx" className={cx('block h-auto w-full', logoHidden && 'invisible')} />
        </Link>

        <nav aria-label={nav.main} className="hidden nav:block">
          <ul className="m-0 flex list-none items-center gap-1 p-0">
            {nav.links.map((item) => (
              <li key={item.label}>{renderLink(item, LINK)}</li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-end gap-2">
          <div className="mr-1 hidden nav:block">
            <LanguageSwitch />
          </div>
          <Button
            to="/#request-demo"
            size="sm"
            onClick={onDemoClick}
            className="h-9 px-3 text-[13px] max-[359px]:hidden nav:h-10 nav:px-4 nav:text-sm"
          >
            {nav.cta}
          </Button>
          <button
            type="button"
            aria-label={open ? nav.closeMenu : nav.openMenu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 place-items-center rounded-sm text-navy-900 hover:bg-white/60 nav:hidden"
          >
            <Icon name={open ? 'x' : 'menu'} size={24} />
          </button>
        </div>
      </div>

      {/* Mobile sheet: portalled to <body> so it stacks above the travelling logo and number */}
      {createPortal(
        <div
          id="mobile-menu"
          aria-hidden={!open}
          inert={!open}
          className={cx(
            'glass-strong fixed inset-x-3 top-[calc(env(safe-area-inset-top,0px)_+_var(--nav-h)_+_4px)] z-[200] rounded-xl p-3 transition-[opacity,transform] duration-250 ease-standard nav:hidden',
            open ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0',
          )}
        >
          {nav.links.map((item) =>
            <div key={item.label}>
              {renderLink(
                item,
                'flex min-h-[52px] items-center justify-between rounded-md px-3 text-[17px] font-semibold text-navy-900 no-underline hover:bg-white/70',
                { children: <Icon name="arrow-right" size={18} /> },
              )}
            </div>,
          )}
          <div className="flex min-h-[52px] items-center justify-between px-3">
            <span className="text-[17px] font-semibold text-navy-900">{lang.label}</span>
            <LanguageSwitch />
          </div>
          <Button to="/#request-demo" size="lg" fullWidth onClick={onDemoClick} className="mt-2">
            {nav.cta}
          </Button>
        </div>,
        document.body,
      )}
    </header>
  )
}
