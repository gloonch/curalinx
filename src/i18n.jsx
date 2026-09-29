import { createContext, useContext, useEffect, useState } from 'react'
import en from './content/en'
import it from './content/it'

const CONTENT = { en, it }
export const LANGS = ['en', 'it']
const KEY = 'curalinx-lang'

/** Saved choice first, then the browser language (Italian → it), else English. */
function initialLang() {
  try {
    const saved = localStorage.getItem(KEY)
    if (LANGS.includes(saved)) return saved
  } catch {
    // Storage can be blocked (private mode); fall through to detection.
  }
  return typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('it') ? 'it' : 'en'
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  // Only an explicit switch is remembered, so detection keeps working otherwise.
  const setLang = (next) => {
    setLangState(next)
    try {
      localStorage.setItem(KEY, next)
    } catch {
      // Not remembered; the switch still applies for this visit.
    }
  }

  return <LanguageContext.Provider value={{ lang, setLang, t: CONTENT[lang] }}>{children}</LanguageContext.Provider>
}

/** { lang, setLang, t } where `t` is the copy for the current language. */
export function useLang() {
  return useContext(LanguageContext)
}

/** The copy for the current language (content/en.js or content/it.js). */
export function useContent() {
  return useContext(LanguageContext).t
}
