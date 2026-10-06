import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import HomePage from '@/app/page';
import { PendingBackendList } from '@/features/backend-pending/pending-backend-list';
import { BACKEND_PENDING } from '@/features/backend-pending/items';

describe('backend pending catalog', () => {
  it('keeps stable unique ids', () => {
    const ids = BACKEND_PENDING.map((item) => item.id);
    expect(ids).toEqual([
      'supabase-schema',
      'ipo-api',
      'bursa-scraper',
      'prospectus-rag',
      'crypto-poller',
      'catalyst-agent',
      'waitlist-store',
      'affiliate-clicks',
    ]);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('renders every id', () => {
    const html = renderToStaticMarkup(<PendingBackendList />);
    for (const item of BACKEND_PENDING) {
      expect(html).toContain(item.id);
    }
  });

  it('shows every id on the dashboard', () => {
    const html = renderToStaticMarkup(
      <QueryClientProvider client={new QueryClient()}>
        <HomePage />
      </QueryClientProvider>,
    );
    for (const item of BACKEND_PENDING) {
      expect(html).toContain(item.id);
    }
  });
});
