import { describe, it, expect } from 'vitest';
import {
  QUICK,
  RULES,
  routeMessage,
  escapeHtml,
  buildAnswers,
} from '../src/scripts/chatbot.js';

describe('routeMessage', () => {
  it.each([
    ['How much to seal my lot?', 'quote'],
    ['can I get a quote', 'quote'],
    ['do you sealcoat', 'sealcoat'],
    ['need my lines re-striped', 'stripe'],
    ['power wash the storefront', 'wash'],
    ['theres a pothole', 'crack'],
    ['do you handle ADA compliance', 'ada'],
    ['is the lot handicap accessible', 'ada'],
    ['can you inspect the condition', 'report'],
    ['do you offer a maintenance plan', 'plan'],
    ['what are your rates', 'pricing'],
    ['do you serve Owasso', 'area'],
    ['what hours are you open', 'hours'],
    ['can I talk to a human', 'call'],
  ])('routes %j to the %s answer', (input, key) => {
    expect(routeMessage(input)).toBe(key);
  });

  it('falls back when nothing matches', () => {
    expect(routeMessage('asdfghjkl')).toBe('fallback');
    expect(routeMessage('')).toBe('fallback');
  });

  it('prefers the earlier rule when several could match', () => {
    // "how much ... my lot" hits the quote rule, which precedes the price rule.
    expect(routeMessage('how much for my lot pricing')).toBe('quote');
  });

  it('routes ADA-worded stall questions to ADA, not striping', () => {
    // The ADA rule precedes the striping rule, so "ADA stalls" answers with
    // compliance info despite the striping rule also matching "stall".
    expect(routeMessage('how many ADA stalls do I need')).toBe('ada');
  });

  it('still routes plain stall/striping questions to striping', () => {
    // Bare "stall" wording (no ADA keywords) falls through to the striping rule.
    expect(routeMessage('how many stalls can you stripe')).toBe('stripe');
    expect(routeMessage('repaint the stall lines')).toBe('stripe');
  });
});

describe('escapeHtml', () => {
  it('escapes angle brackets and ampersands', () => {
    expect(escapeHtml('<script>alert(1)</script>')).toBe(
      '&lt;script&gt;alert(1)&lt;/script&gt;'
    );
    expect(escapeHtml('Tom & Jerry')).toBe('Tom &amp; Jerry');
  });

  it('leaves plain text untouched', () => {
    expect(escapeHtml('just a question')).toBe('just a question');
  });
});

describe('buildAnswers', () => {
  const phone = '(580) 304-7225';
  const phoneHref = 'tel:+15803047225';
  const answers = buildAnswers(phone, phoneHref);

  it('provides an answer for every key a rule can return', () => {
    for (const [, key] of RULES) {
      expect(answers[key], `missing answer for rule key "${key}"`).toBeTruthy();
    }
  });

  it('provides an answer for every quick-reply key', () => {
    for (const [, key] of QUICK) {
      expect(answers[key], `missing answer for quick key "${key}"`).toBeTruthy();
    }
  });

  it('always provides a fallback answer', () => {
    expect(answers.fallback).toBeTruthy();
  });

  it('weaves the live phone number into call-to-action answers', () => {
    expect(answers.call).toContain(phone);
    expect(answers.call).toContain(phoneHref);
    expect(answers.fallback).toContain(phoneHref);
  });
});
