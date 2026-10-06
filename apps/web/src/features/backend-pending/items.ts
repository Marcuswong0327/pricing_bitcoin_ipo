export const BACKEND_PENDING = [
  {
    id: 'supabase-schema',
    summary:
      'Tables ipos, crypto_snapshots, ai_summaries, affiliate_clicks, prospectus storage, and pgvector chunks, plus generated DB types.',
  },
  {
    id: 'ipo-api',
    summary: 'GET /api/ipos and GET /api/ipos/[id] on port 3003, replacing IPO fixtures.',
  },
  {
    id: 'bursa-scraper',
    summary:
      'Playwright worker against the official Bursa IPO summary URL, synced 4 times each business day, including prospectus PDF links.',
  },
  {
    id: 'prospectus-rag',
    summary:
      'PDF parse, embeddings, and the LLM scorecard (business summary, peer P/E, proceeds split, three Chapter 5 risks).',
  },
  {
    id: 'crypto-poller',
    summary:
      'Top 200 liquid coins from Binance or CoinGecko every 5 minutes, with 15m and 30m deltas, behind GET /api/crypto/volatility and POST /api/cron/sync-crypto.',
  },
  {
    id: 'catalyst-agent',
    summary: 'One-sentence catalyst tag when the absolute move exceeds 8%.',
  },
  {
    id: 'waitlist-store',
    summary: 'Persist the volatility-alert email.',
  },
  {
    id: 'affiliate-clicks',
    summary: 'Record Moomoo, Rakuten Trade, and Luno clicks.',
  },
] as const;

export type BackendPendingId = (typeof BACKEND_PENDING)[number]['id'];

export const PANEL_PENDING = {
  ipo: ['supabase-schema', 'ipo-api', 'bursa-scraper'],
  scorecard: ['prospectus-rag'],
  crypto: ['crypto-poller', 'catalyst-agent'],
  waitlist: ['waitlist-store'],
  affiliate: ['affiliate-clicks'],
} as const satisfies Record<string, readonly BackendPendingId[]>;
