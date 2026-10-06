import { describe, expect, it } from 'vitest';

import { countdownLabel } from '@/features/ipo/countdown';

describe('countdownLabel', () => {
  const now = new Date('2026-10-06T08:00:00Z');

  it('says balloting has closed when the closing date is in the past', () => {
    expect(countdownLabel('2026-10-05', now)).toBe('Balloting closed');
  });

  it('says the offer closes today', () => {
    expect(countdownLabel('2026-10-06', now)).toBe('Closes today');
  });

  it('uses a singular day', () => {
    expect(countdownLabel('2026-10-07', now)).toBe('Closes in 1 day');
  });

  it('counts whole days until close', () => {
    expect(countdownLabel('2026-10-12', now)).toBe('Closes in 6 days');
  });
});
