// Quote-form spam + validation logic — extracted from QuoteForm.astro so it
// can be unit tested. Pure: takes primitives, no DOM.

// Bots fill the honeypot or submit almost instantly. Treat either as spam.
export function isSpamSubmission({ honeypot, loadedAt, now, minDelayMs = 3000 }) {
  if (honeypot) return true;
  const loaded = Number(loadedAt || 0);
  return now - loaded < minDelayMs;
}

// At least one service checkbox must be selected before we route a request.
export function hasSelectedService(checkedFlags) {
  return checkedFlags.some(Boolean);
}
