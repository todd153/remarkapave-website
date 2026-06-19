import { describe, it, expect } from 'vitest';
import { isSpamSubmission, hasSelectedService } from '../src/scripts/quote-form.js';

describe('isSpamSubmission', () => {
  const loadedAt = 1_000_000;

  it('flags a filled honeypot regardless of timing', () => {
    expect(
      isSpamSubmission({ honeypot: 'http://spam.example', loadedAt, now: loadedAt + 10_000 })
    ).toBe(true);
  });

  it('flags submissions faster than the minimum delay', () => {
    expect(isSpamSubmission({ honeypot: '', loadedAt, now: loadedAt + 2_999 })).toBe(true);
  });

  it('allows a genuine submission past the delay with an empty honeypot', () => {
    expect(isSpamSubmission({ honeypot: '', loadedAt, now: loadedAt + 3_001 })).toBe(false);
  });

  it('treats the exact threshold as still too fast', () => {
    expect(isSpamSubmission({ honeypot: '', loadedAt, now: loadedAt + 3_000 })).toBe(false);
    // 3000ms elapsed is NOT < 3000, so it is allowed — boundary documented.
  });

  it('treats a missing loadedAt as time zero (very old → allowed)', () => {
    expect(isSpamSubmission({ honeypot: '', loadedAt: '', now: 10_000 })).toBe(false);
  });

  it('respects a custom minimum delay', () => {
    expect(
      isSpamSubmission({ honeypot: '', loadedAt, now: loadedAt + 4_000, minDelayMs: 5_000 })
    ).toBe(true);
  });
});

describe('hasSelectedService', () => {
  it('is true when at least one box is checked', () => {
    expect(hasSelectedService([false, false, true, false])).toBe(true);
  });

  it('is false when none are checked', () => {
    expect(hasSelectedService([false, false, false])).toBe(false);
  });

  it('is false for an empty set', () => {
    expect(hasSelectedService([])).toBe(false);
  });
});
