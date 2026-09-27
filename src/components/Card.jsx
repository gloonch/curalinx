import Icon from './Icon'
import cx from '../lib/cx'

const ICON_TILE = {
  blue: 'bg-blue-100 text-blue-600',
  teal: 'bg-teal-100 text-teal-700',
  navy: 'bg-navy-100 text-navy-900',
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
        'relative flex flex-col gap-3 rounded-lg border border-gray-200 bg-white p-7 shadow-sm transition-[transform,border-color,box-shadow] duration-250 ease-standard',
        interactive && cx('hover:-translate-y-[3px] hover:shadow-md', HOVER_BORDER[accent]),
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
