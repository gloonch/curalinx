import Icon from './Icon'
import cx from '../lib/cx'

const ICON_TILE = {
  blue: 'bg-blue-100/80 text-blue-700 ring-1 ring-white/70',
  teal: 'bg-teal-100/80 text-teal-800 ring-1 ring-white/70',
  navy: 'bg-navy-100/80 text-navy-900 ring-1 ring-white/70',
}
const HOVER_BORDER = {
  blue: 'hover:border-blue-200',
  teal: 'hover:border-teal-300',
  navy: 'hover:border-navy-200',
}

/** Flat white surface with a hairline border. `interactive` adds the lift-on-hover. */
export default function Card({ icon, title, description, accent = 'blue', interactive = false, className, style, children }) {
  return (
    <div
      style={style}
      className={cx(
        'glass relative flex flex-col gap-3 rounded-lg p-7',
        interactive && cx('glass-hover', HOVER_BORDER[accent]),
        className,
      )}
    >
      {icon && (
        <div className={cx('mb-2 grid size-11 place-items-center rounded-md', ICON_TILE[accent])}>
          <Icon name={icon} size={22} />
        </div>
      )}
      {title && <h3 className="m-0 text-xl leading-snug font-bold tracking-[-0.01em] text-navy-900">{title}</h3>}
      {description && <p className="m-0 text-[15px] leading-relaxed text-gray-700">{description}</p>}
      {children}
    </div>
  )
}
