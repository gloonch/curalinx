export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

/** `msgs`: { emailRequired, emailInvalid } from the current language (content form.*). */
export function validateEmail(value, msgs) {
  const v = (value || '').trim()
  if (!v) return msgs.emailRequired
  if (!EMAIL_RE.test(v)) return msgs.emailInvalid
  return null
}
