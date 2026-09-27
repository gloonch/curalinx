import { useId } from 'react'
import { ICONS } from './Icon'
import { prefersReducedMotion } from '../lib/scroll'

const DEFAULT_NODES = [
  { label: 'Patient', sub: 'Shares securely', icon: 'user', tone: 'patient' },
  { label: 'Health Data', sub: 'Records · vitals', icon: 'activity', tone: 'neutral' },
  { label: 'Curalinx', sub: 'Connects & protects', icon: 'shield-check', tone: 'core' },
  { label: 'Doctor', sub: 'Acts with context', icon: 'user-check', tone: 'doctor' },
]
const ICON_COLOR = {
  patient: 'var(--color-teal-700)',
  neutral: 'var(--color-blue-600)',
  core: '#ffffff',
  doctor: 'var(--color-blue-600)',
}

/** Patient → Health Data → Curalinx → Doctor, joined by curved paths with a travelling pulse. */
export default function DataFlow({ nodes = DEFAULT_NODES, animated = true, className }) {
  const gid = `df${useId().replace(/[^a-zA-Z0-9]/g, '')}`
  const W = 960, H = 220, pad = 90, cy = 84, R = 34
  const gap = (W - pad * 2) / (nodes.length - 1)
  const motion = animated && !prefersReducedMotion()

  return (
    <div className={className} role="img" aria-label={nodes.map((n) => n.label).join(' to ')}>
      <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full overflow-visible">
        <defs>
          <linearGradient id={gid} x1="0" x2="1">
            <stop offset="0" stopColor="var(--color-teal-500)" />
            <stop offset="1" stopColor="var(--color-blue-600)" />
          </linearGradient>
        </defs>
        {nodes.slice(0, -1).map((_, i) => {
          const x1 = pad + gap * i + R + 6
          const x2 = pad + gap * (i + 1) - R - 6
          const bend = i % 2 ? 26 : -26
          const d = `M${x1} ${cy} C${x1 + gap * 0.3} ${cy + bend} ${x2 - gap * 0.3} ${cy - bend} ${x2} ${cy}`
          return (
            <g key={i}>
              <path d={d} fill="none" stroke="var(--color-gray-300)" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 7" />
              <path d={d} fill="none" stroke={`url(#${gid})`} strokeWidth="2" strokeLinecap="round" strokeDasharray="28 400" opacity="0.9">
                {motion && <animate attributeName="stroke-dashoffset" from="0" to="-428" dur="2.4s" begin={`${i * 0.5}s`} repeatCount="indefinite" />}
              </path>
            </g>
          )
        })}
        {nodes.map((n, i) => {
          const x = pad + gap * i
          const core = n.tone === 'core'
          return (
            <g key={n.label}>
              {core && <circle cx={x} cy={cy} r={R + 12} fill="none" stroke={`url(#${gid})`} strokeWidth="1.5" opacity="0.6" />}
              <circle cx={x} cy={cy} r={R} fill={core ? 'var(--color-navy-900)' : '#ffffff'} stroke={core ? 'none' : 'var(--color-gray-200)'} strokeWidth="1.5" />
              <svg
                x={x - 13}
                y={cy - 13}
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke={ICON_COLOR[n.tone]}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                dangerouslySetInnerHTML={{ __html: ICONS[n.icon] || '' }}
              />
              <text x={x} y={cy + R + 32} textAnchor="middle" fill="var(--color-navy-900)" style={{ font: '700 14px var(--font-sans)' }}>{n.label}</text>
              {n.sub && <text x={x} y={cy + R + 52} textAnchor="middle" fill="var(--color-gray-600)" style={{ font: '500 12px var(--font-sans)' }}>{n.sub}</text>}
            </g>
          )
        })}
      </svg>
    </div>
  )
}
