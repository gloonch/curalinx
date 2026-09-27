import { useId } from 'react'
import cx from '../lib/cx'

const TONES = {
  brand: ['var(--color-navy-900)', 'var(--color-blue-600)', 'var(--color-teal-500)'],
  patient: ['var(--color-teal-700)', 'var(--color-teal-500)', 'var(--color-teal-300)'],
  doctor: ['var(--color-navy-900)', 'var(--color-blue-600)', 'var(--color-blue-400)'],
  inverse: ['var(--color-blue-400)', 'var(--color-teal-300)', '#ffffff'],
}

function strand(w, h, phase, amp, turns) {
  const n = 64
  let d = ''
  for (let i = 0; i <= n; i++) {
    const x = (i / n) * w
    const y = h / 2 + Math.sin((i / n) * Math.PI * 2 * turns + phase) * amp
    d += `${i ? ' L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`
  }
  return d
}

/**
 * The Curalinx Ribbon: two crossing strands abstracted from the logo's DNA "X".
 * Decorative only (aria-hidden). Hero background 3–6% opacity, dividers ~12%.
 */
export default function Ribbon({ width = 960, height = 240, turns = 1.5, amplitude, tone = 'brand', opacity = 1, strokeWidth = 3, animated = false, preserveAspectRatio = 'xMidYMid meet', className, style }) {
  const gid = `rb${useId().replace(/[^a-zA-Z0-9]/g, '')}`
  const amp = amplitude ?? height * 0.36
  const [a, b, c] = TONES[tone]
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio={preserveAspectRatio}
      aria-hidden="true"
      className={cx('block h-auto overflow-visible', animated && 'ribbon-animated', className)}
      style={{ opacity, ...style }}
    >
      <defs>
        <linearGradient id={gid} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor={a} />
          <stop offset="0.55" stopColor={b} />
          <stop offset="1" stopColor={c} />
        </linearGradient>
      </defs>
      <path d={strand(width, height, 0, amp, turns)} fill="none" stroke={`url(#${gid})`} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d={strand(width, height, Math.PI, amp, turns)} fill="none" stroke={`url(#${gid})`} strokeWidth={strokeWidth} strokeLinecap="round" opacity={0.55} />
    </svg>
  )
}
