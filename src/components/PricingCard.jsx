import Badge from './Badge'
import Button from './Button'
import Icon from './Icon'
import cx from '../lib/cx'

/**
 * One plan: name, price, billing period, description, features, CTA.
 * `featured` (max one per row) adds the gradient border, badge and primary CTA.
 */
export default function PricingCard({ name, price, currency = '$', period = '/ month', description, features = [], ctaLabel = 'Get Started', onCta, featured = false, badge = 'Most popular' }) {
  return (
    <article
      aria-label={`${name} plan`}
      className={cx(
        'relative flex h-full w-full flex-col rounded-xl p-8 transition-[transform,box-shadow,border-color] duration-250 ease-standard hover:-translate-y-[3px] hover:shadow-md',
        featured ? 'gradient-border shadow-md' : 'border border-gray-200 bg-white shadow-sm hover:border-blue-200',
      )}
    >
      <div className="flex min-h-[26px] items-center justify-between gap-3">
        <h3 className="m-0 text-xl leading-snug font-bold text-navy-900">{name}</h3>
        {featured && <Badge tone="featured">{badge}</Badge>}
      </div>
      <p className="mt-2.5 mb-6 text-[15px] leading-normal text-gray-700">{description}</p>
      <div className="flex items-baseline gap-1.5 text-navy-900">
        <b className="text-5xl leading-none font-extrabold tracking-[-0.035em] tabular-nums">
          {currency}
          {price}
        </b>
        <span className="text-[15px] font-medium text-gray-600">{period}</span>
      </div>
      <hr className={cx('my-6 h-px border-0', featured ? 'bg-brand-gradient opacity-50' : 'bg-gray-200')} />
      <ul className="mb-8 grid flex-1 content-start gap-3 p-0">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-[15px] leading-normal text-gray-900">
            <span className={cx('grid size-[22px] flex-none place-items-center rounded-full', featured ? 'bg-teal-100 text-teal-700' : 'bg-blue-100 text-blue-600')}>
              <Icon name="check" size={14} strokeWidth={2.5} />
            </span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <Button variant={featured ? 'primary' : 'secondary'} fullWidth onClick={onCta} iconRight={featured ? 'arrow-right' : undefined}>
        {ctaLabel}
      </Button>
    </article>
  )
}
