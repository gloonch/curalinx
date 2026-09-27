import Reveal from './Reveal'
import cx from '../lib/cx'

export default function SectionHead({ eyebrow, title, intro, align = 'center', accent = 'blue', className }) {
  return (
    <Reveal className={cx('max-w-[760px]', align === 'center' ? 'mx-auto text-center' : 'text-left', className)}>
      <p className={cx('type-eyebrow mb-3', accent === 'teal' ? 'text-teal-700' : 'text-blue-600')}>{eyebrow}</p>
      <h2 className="type-h1 m-0 text-navy-900">{title}</h2>
      {intro && <p className="type-body-lg mt-4 mb-0 text-pretty text-gray-700">{intro}</p>}
    </Reveal>
  )
}
