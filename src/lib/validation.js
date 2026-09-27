export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function validateEmail(value) {
  const v = (value || '').trim()
  if (!v) return 'Email address is required.'
  if (!EMAIL_RE.test(v)) return 'Enter a valid email address, like name@example.com.'
  return null
}
