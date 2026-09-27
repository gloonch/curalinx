import Icon from './Icon'
import cx from '../lib/cx'

const ITEMS = [
  { value: 'patient', label: 'I’m a Patient', icon: 'user', idle: 'text-teal-700' },
  { value: 'doctor', label: 'I’m a Doctor', icon: 'user-check', idle: 'text-blue-600' },
]

/**
 * "I'm a Patient / I'm a Doctor" switch for Why Curalinx.
 * Starts with nothing selected (value === null).
 */
export default function AudienceTabs({ value, onChange, idBase = 'why', hint = 'Select one to continue.' }) {
  const onKeyDown = (e) => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return
    e.preventDefault()
    const next = value === 'patient' ? 'doctor' : 'patient'
    onChange(next)
    document.getElementById(`${idBase}-tab-${next}`)?.focus()
  }

  const indicator =
    value === 'patient'
      ? 'translate-x-0 scale-100 bg-teal-700 opacity-100'
      : value === 'doctor'
        ? 'translate-x-[calc(100%_+_6px)] scale-100 bg-blue-600 opacity-100'
        : 'translate-x-0 scale-[0.96] bg-teal-700 opacity-0'

  return (
    <div className="flex w-full flex-col items-center sm:w-auto">
      <div
        role="tablist"
        aria-label="Choose your perspective"
        onKeyDown={onKeyDown}
        className="relative grid w-full grid-cols-2 gap-1.5 rounded-lg bg-gray-100 p-1.5 sm:inline-grid sm:w-auto"
      >
        <span
          aria-hidden="true"
          className={cx(
            'absolute top-1.5 bottom-1.5 left-1.5 w-[calc(50%_-_9px)] rounded-md shadow-sm transition-[transform,background-color,opacity] duration-240 ease-standard',
            indicator,
          )}
        />
        {ITEMS.map((it, i) => {
          const selected = value === it.value
          return (
            <button
              key={it.value}
              id={`${idBase}-tab-${it.value}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${idBase}-panel`}
              tabIndex={value ? (selected ? 0 : -1) : i === 0 ? 0 : -1}
              onClick={() => onChange(it.value)}
              className={cx(
                'relative z-10 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-md px-2 text-sm font-bold whitespace-nowrap transition-colors duration-240 ease-standard sm:min-w-[188px] sm:gap-2.5 sm:px-6 sm:text-base',
                selected ? 'text-white' : 'text-navy-900 hover:bg-white/70',
              )}
            >
              <Icon name={it.icon} size={20} className={selected ? 'text-white' : it.idle} />
              {it.label}
            </button>
          )
        })}
      </div>
      {!value && hint && (
        <p className="mt-3.5 flex items-center gap-2 text-sm font-medium text-gray-600">
          <span className="size-1.5 animate-pulse-dot rounded-full bg-brand-gradient" aria-hidden="true" />
          {hint}
        </p>
      )}
    </div>
  )
}
