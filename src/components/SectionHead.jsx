import Reveal from './Reveal'
import cx from '../lib/cx'

export default function SectionHead({ eyebrow, title, intro, align = 'center', accent = 'blue', className }) {
  return (
    <Reveal className={cx('max-w-[760px]', align === 'center' ? 'mx-auto text-center' : 'text-left', className)}>
      {eyebrow && (
        <p className={cx('type-eyebrow eyebrow-pill mt-0 mb-4', accent === 'teal' ? 'text-teal-800' : 'text-blue-700')}>
          <span className={cx('size-1.5 rounded-full', accent === 'teal' ? 'bg-teal-500' : 'bg-blue-600')} aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <h2 className="type-h1 m-0 text-navy-900">{title}</h2>
      {intro && <p className="type-body-lg mt-4 mb-0 text-pretty text-gray-900">{intro}</p>}
    </Reveal>
  )
}
