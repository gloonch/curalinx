/** Loading indicator: two crossing strands in navy and teal. */
export default function RibbonLoader({ size = 40, label = 'Loading' }) {
  return (
    <div role="status" aria-live="polite" className="inline-flex flex-col items-center gap-3 text-[13px] font-medium text-gray-700">
      <svg width={size * 1.6} height={size} viewBox="0 0 64 40" aria-hidden="true" className="overflow-visible">
        <path d="M4 8 C 24 8, 40 32, 60 32" fill="none" stroke="var(--color-navy-900)" strokeWidth="3" strokeLinecap="round" className="origin-center animate-helix [transform-box:fill-box]" />
        <path d="M4 32 C 24 32, 40 8, 60 8" fill="none" stroke="var(--color-teal-500)" strokeWidth="3" strokeLinecap="round" className="origin-center animate-helix [animation-direction:reverse] [transform-box:fill-box]" />
      </svg>
      <span>{label}</span>
    </div>
  )
}
