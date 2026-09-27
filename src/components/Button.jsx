import { Link } from 'react-router-dom'
import Icon from './Icon'
import cx from '../lib/cx'

const BASE =
  'group inline-flex items-center justify-center gap-2 whitespace-nowrap border-[1.5px] border-transparent font-semibold tracking-[0.005em] no-underline select-none transition-[background-color,border-color,color,box-shadow,transform] duration-180 ease-standard active:translate-y-px disabled:pointer-events-none disabled:opacity-45'

const SIZES = {
  sm: 'h-10 rounded-sm px-4 text-sm',
  md: 'h-12 rounded-md px-[22px] text-[15px]',
  lg: 'h-14 rounded-md px-7 text-base',
}

const VARIANTS = {
  primary:
    'gloss bg-navy-900 text-white shadow-[0_6px_20px_rgb(0_0_100/0.25)] hover:bg-navy-800 hover:shadow-[0_0_0_4px_rgb(41_111_225/0.16),0_8px_24px_rgb(0_0_100/0.28)] active:bg-navy-950',
  secondary:
    'border-white/80 bg-white/55 text-navy-900 shadow-[0_4px_16px_rgb(0_0_100/0.08)] backdrop-blur-md hover:border-navy-900/40 hover:bg-white/80',
  accent: 'gloss bg-teal-700 text-white shadow-[0_6px_20px_rgb(11_124_120/0.25)] hover:bg-teal-800',
  ghost: 'bg-transparent px-3 text-navy-900 hover:bg-white/60',
  inverse: 'bg-white/90 text-navy-900 backdrop-blur-md hover:bg-white',
}

/**
 * Curalinx action button. One primary per view region.
 * Renders a router <Link> with `to`, an <a> with `href`, otherwise a <button>.
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth = false,
  to,
  href,
  type = 'button',
  className,
  children,
  ...rest
}) {
  const iconSize = size === 'sm' ? 16 : 18
  const classes = cx(BASE, SIZES[size], VARIANTS[variant], fullWidth && 'w-full', className)
  const content = (
    <>
      {iconLeft && <Icon name={iconLeft} size={iconSize} />}
      <span>{children}</span>
      {iconRight && (
        <Icon
          name={iconRight}
          size={iconSize}
          className={iconRight === 'arrow-right' ? 'transition-transform duration-180 ease-standard group-hover:translate-x-[3px]' : undefined}
        />
      )}
    </>
  )

  if (to) return <Link to={to} className={classes} {...rest}>{content}</Link>
  if (href) return <a href={href} className={classes} {...rest}>{content}</a>
  return <button type={type} className={classes} {...rest}>{content}</button>
}
