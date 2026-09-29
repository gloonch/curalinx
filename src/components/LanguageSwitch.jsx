import cx from '../lib/cx'
import { LANGS, useLang } from '../i18n'

/** EN | IT segmented switch. */
export default function LanguageSwitch({ className }) {
  const { lang, setLang, t } = useLang()
  return (
    <div role="group" aria-label={t.lang.label} className={cx('glass-subtle inline-flex rounded-full p-0.5', className)}>
      {LANGS.map((l) => (
        <button
          key={l}
          type="button"
          lang={l}
          aria-pressed={lang === l}
          aria-label={t.lang[l]}
          title={t.lang[l]}
          onClick={() => setLang(l)}
          className={cx(
            'h-8 min-w-9 rounded-full px-2.5 text-[12px] font-bold tracking-[0.06em] uppercase transition-colors duration-180 ease-standard',
            lang === l ? 'bg-navy-900 text-white shadow-[0_2px_8px_rgb(0_0_100/0.25)]' : 'text-navy-900 hover:bg-white/70',
          )}
        >
          {l}
        </button>
      ))}
    </div>
  )
}
