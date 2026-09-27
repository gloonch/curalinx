import { Link, useLocation } from 'react-router-dom'
import { scrollToSection } from '../lib/scroll'

/**
 * Link to a section of the landing page (e.g. id="plans").
 * On the landing page it smooth-scrolls with the header offset; from any other
 * page it routes to "/#id" and the landing page scrolls on arrival.
 */
export default function SectionLink({ id, onClick, children, ...rest }) {
  const { pathname } = useLocation()
  const handleClick = (e) => {
    onClick?.(e)
    if (pathname === '/' && scrollToSection(id)) e.preventDefault()
  }
  return (
    <Link to={{ pathname: '/', hash: `#${id}` }} onClick={handleClick} {...rest}>
      {children}
    </Link>
  )
}
