# Architecture Requirements Document (ARD) & Technical Spec

## 1. System Overview & Architecture Flow

```text
[ External Validation & Data Sources ]
  ├── Bursa Malaysia IPO Summary (Ground truth for closing dates & Prospectus PDFs)
  ├── iSaham IPO Dashboard (Reference benchmark for analytical data layering)
  └── Binance Public API / CoinGecko API (15m/30m OHLCV)
         │
         ▼
[ Background Workers (Cron / Cloud Run) ]
  ├── Playwright Scraper (Targets official Bursa portals for accuracy)
  ├── Crypto Poller Cron (Next.js Route Handler / Supabase Edge Worker)
  └── RAG Ingestion Pipeline (PDF Parse ➔ Embeddings ➔ LLM Summarizer)
         │
         ▼
[ Database & Storage: Supabase (PostgreSQL + pgvector) ]
  ├── Tables: ipos, crypto_snapshots, ai_summaries, affiliate_clicks
  └── Storage: Raw prospectus PDFs
         │
         ▼
[ Frontend Application: Next.js (App Router) ]
  ├── Server Components (SEO-optimized IPO pages)
  ├── Client Components (TanStack Query for 15-30m Crypto Heatboard)
  └── UI Framework (Tailwind CSS + shadcn/ui)