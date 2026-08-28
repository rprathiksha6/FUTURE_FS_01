// Deliberately simple: good enough to catch obvious typos without pretending
// to fully validate RFC 5322 email addresses (nothing does that reliably).
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value) {
  return EMAIL_PATTERN.test(value.trim());
}
