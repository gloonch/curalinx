import Icon from './Icon'
import cx from '../lib/cx'

const TONES = {
  neutral: 'bg-gray-100 text-gray-700',
  brand: 'bg-navy-100 text-navy-900',
  patient: 'bg-teal-100 text-teal-700',
  doctor: 'bg-blue-100 text-blue-700',
  success: 'bg-success-soft text-success',
  warning: 'bg-warning-soft text-warning',
  critical: 'bg-critical-soft text-critical',
  featured: 'bg-brand-gradient text-white',
}

/** Small label / status chip. Status tones always carry an icon or a word. */
export default function Badge({ tone = 'neutral', dot, icon, className, children }) {
  return (
    <span className={cx('inline-flex h-[26px] items-center gap-1.5 rounded-xs px-2.5 text-xs font-semibold tracking-[0.01em] whitespace-nowrap', TONES[tone], className)}>
      {dot && <span className="size-1.5 rounded-full bg-current" aria-hidden="true" />}
      {icon && <Icon name={icon} size={14} />}
      {children}
    </span>
  )
}
