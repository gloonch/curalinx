import Ribbon from './Ribbon'

/** Team member with a dominant 4:5 photo, name, role and short bio. */
export default function TeamMemberCard({ name, role, bio, photo, tone = 'brand' }) {
  const initials = name.split(/\s+/).map((w) => w[0]).join('').slice(0, 2).toUpperCase()
  return (
    <article className="group flex flex-col gap-[18px]">
      <div className="relative aspect-[4/5] max-w-full overflow-hidden rounded-xl bg-blue-50">
        {photo ? (
          <img src={photo} alt={`Portrait of ${name}`} loading="lazy" className="block size-full object-cover transition-transform duration-600 ease-standard group-hover:scale-[1.03]" />
        ) : (
          <div role="img" aria-label={`Photo placeholder for ${name}`} className="absolute inset-0 grid place-items-center">
            <Ribbon tone={tone} width={400} height={500} turns={1} amplitude={120} opacity={0.35} preserveAspectRatio="none" className="absolute inset-0 size-full" />
            <b className="relative text-[56px] leading-none font-extrabold tracking-[-0.03em] text-navy-900/90">{initials}</b>
          </div>
        )}
      </div>
      <div>
        <h3 className="m-0 text-xl leading-snug font-bold tracking-[-0.01em] text-navy-900">{name}</h3>
        <p className="type-eyebrow mt-1 mb-0 text-blue-600">{role}</p>
        {bio && <p className="mt-2.5 mb-0 text-[15px] leading-relaxed text-gray-700">{bio}</p>}
      </div>
    </article>
  )
}
