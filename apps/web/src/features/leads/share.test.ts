import { describe, expect, it } from 'vitest';

import { buildShareText, submitWaitlist, telegramHref, whatsappHref } from '@/features/leads/share';

describe('buildShareText', () => {
  it('includes the IPO name, sample summary, and page URL', () => {
    const text = buildShareText({
      name: 'Sample Foods Berhad',
      businessSummary: 'Sample sentence one. Sample sentence two.',
      pageUrl: 'http://localhost:3002/ipo/sample-foods',
    });

    expect(text).toBe(
      'Sample Foods Berhad\nSample sentence one. Sample sentence two.\nhttp://localhost:3002/ipo/sample-foods',
    );
  });
});

describe('share links', () => {
  it('encodes the scorecard text for WhatsApp', () => {
    expect(whatsappHref('Sample Foods Berhad\nHello')).toBe(
      'https://wa.me/?text=Sample%20Foods%20Berhad%0AHello',
    );
  });

  it('passes the page URL and text to Telegram', () => {
    const href = telegramHref('http://localhost:3002/ipo/sample-foods', 'Sample Foods Berhad');
    const url = new URL(href);
    expect(url.origin + url.pathname).toBe('https://t.me/share/url');
    expect(url.searchParams.get('url')).toBe('http://localhost:3002/ipo/sample-foods');
    expect(url.searchParams.get('text')).toBe('Sample Foods Berhad');
  });
});

describe('submitWaitlist', () => {
  it('rejects an invalid email', () => {
    expect(submitWaitlist('not-an-email')).toEqual({
      ok: false,
      message: 'Enter a valid email.',
    });
  });

  it('accepts a valid email and says it was not saved', () => {
    expect(submitWaitlist('ada@example.com')).toEqual({
      ok: true,
      message: 'Alerts are not live yet. This address was not saved.',
    });
  });
});
