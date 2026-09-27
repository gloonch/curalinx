import { useId } from 'react'
import Icon from './Icon'
import cx from '../lib/cx'

const CONTROL =
  'w-full min-h-12 rounded-md border-[1.5px] bg-white px-3.5 py-3 text-base leading-snug text-gray-900 shadow-xs outline-none transition-[border-color,box-shadow] duration-180 ease-standard placeholder:text-gray-600 appearance-none'

function controlState(error, success) {
  if (error) return 'border-critical focus:shadow-[0_0_0_4px_rgb(196_43_43/0.16)]'
  if (success) return 'border-success focus:border-blue-600 focus:shadow-[0_0_0_4px_rgb(41_111_225/0.18)]'
  return 'border-gray-500 hover:border-gray-700 focus:border-blue-600 focus:shadow-[0_0_0_4px_rgb(41_111_225/0.18)]'
}

export function FieldLabel({ htmlFor, id, required, optional, children }) {
  const Tag = htmlFor ? 'label' : 'span'
  return (
    <Tag htmlFor={htmlFor} id={id} className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 text-sm font-semibold leading-tight text-navy-900">
      <span>
        {children}
        {required && <span className="text-critical" aria-hidden="true"> *</span>}
      </span>
      {optional && <span className="text-xs font-medium text-gray-600">Optional</span>}
    </Tag>
  )
}

export function FieldMessage({ id, error, success, hint }) {
  const message = error || success || hint
  if (!message) return null
  const tone = error ? 'text-critical' : success ? 'text-success' : 'text-gray-600'
  return (
    <div id={id} role={error ? 'alert' : undefined} className={cx('flex items-start gap-1.5 text-[13px] font-medium leading-snug', tone)}>
      {(error || success) && <Icon name={error ? 'circle-alert' : 'circle-check'} size={16} className="mt-px" />}
      <span>{message}</span>
    </div>
  )
}

/** Labelled text input or textarea with hint, error and success states. */
export function TextField({ id, label, required, optional, hint, error, success, multiline, rows = 5, className, ...rest }) {
  const autoId = useId()
  const fieldId = id || autoId
  const msgId = `${fieldId}-msg`
  const props = {
    id: fieldId,
    required,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error || success || hint ? msgId : undefined,
    className: cx(CONTROL, controlState(error, success), multiline && 'min-h-[132px] resize-y leading-relaxed'),
    ...rest,
  }
  return (
    <div className={cx('flex min-w-0 flex-col gap-2', className)}>
      {label && <FieldLabel htmlFor={fieldId} required={required} optional={optional}>{label}</FieldLabel>}
      {multiline ? <textarea rows={rows} {...props} /> : <input type="text" {...props} />}
      <FieldMessage id={msgId} error={error} success={success} hint={hint} />
    </div>
  )
}

/** Native select styled like TextField. */
export function Select({ id, label, required, optional, hint, error, options = [], placeholder, className, ...rest }) {
  const autoId = useId()
  const fieldId = id || autoId
  const msgId = `${fieldId}-msg`
  return (
    <div className={cx('flex min-w-0 flex-col gap-2', className)}>
      {label && <FieldLabel htmlFor={fieldId} required={required} optional={optional}>{label}</FieldLabel>}
      <div className="relative">
        <select
          id={fieldId}
          defaultValue={placeholder ? '' : undefined}
          aria-invalid={error ? true : undefined}
          aria-describedby={error || hint ? msgId : undefined}
          className={cx(CONTROL, controlState(error), 'cursor-pointer pr-11')}
          {...rest}
        >
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {options.map((o) => {
            const opt = typeof o === 'string' ? { value: o, label: o } : o
            return <option key={opt.value} value={opt.value}>{opt.label}</option>
          })}
        </select>
        <Icon name="chevron-down" size={18} className="pointer-events-none absolute top-1/2 right-3.5 -translate-y-1/2 text-gray-700" />
      </div>
      <FieldMessage id={msgId} error={error} hint={hint} />
    </div>
  )
}

/** Segmented "I am a Doctor / Patient" picker (radiogroup). Nothing is preselected. */
export function RoleSelect({ name, label = 'I am a', value, onChange, required, error, className }) {
  const autoId = useId()
  const groupName = name || `role-${autoId}`
  const labelId = `${groupName}-label`
  const msgId = `${groupName}-msg`
  const options = [
    { value: 'doctor', label: 'Doctor', icon: 'user-check', accent: 'text-blue-600' },
    { value: 'patient', label: 'Patient', icon: 'user', accent: 'text-teal-700' },
  ]
  return (
    <div className={cx('flex min-w-0 flex-col gap-2', className)}>
      <FieldLabel id={labelId} required={required}>{label}</FieldLabel>
      <div
        role="radiogroup"
        aria-labelledby={labelId}
        aria-describedby={error ? msgId : undefined}
        className={cx('grid grid-cols-2 gap-1 rounded-md border-[1.5px] bg-gray-100 p-1', error ? 'border-critical' : 'border-transparent')}
      >
        {options.map((o) => {
          const checked = value === o.value
          return (
            <label key={o.value} className="relative cursor-pointer">
              <input
                type="radio"
                name={groupName}
                value={o.value}
                checked={checked}
                onChange={() => onChange?.(o.value)}
                className="peer absolute inset-0 m-0 cursor-pointer opacity-0"
              />
              <span
                className={cx(
                  'flex min-h-10 items-center justify-center gap-2 rounded-sm px-3 text-sm font-semibold transition-[background-color,color,box-shadow] duration-240 ease-standard peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-blue-600',
                  checked ? 'bg-white text-navy-900 shadow-sm' : 'text-gray-700 hover:text-navy-900',
                )}
              >
                <Icon name={o.icon} size={18} className={checked ? o.accent : undefined} />
                {o.label}
              </span>
            </label>
          )
        })}
      </div>
      <FieldMessage id={msgId} error={error} />
    </div>
  )
}
