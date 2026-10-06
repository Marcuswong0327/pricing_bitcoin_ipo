# AlphaRadar

Bursa IPO pipeline and 15–30 minute crypto volatility. The web app runs on sample data. Backend jobs are named in the UI so they can be built one at a time.

## Run

Requires Node 20 (see `.nvmrc`) and pnpm 9.15.0.

```bash
pnpm install
pnpm dev
```

- Web: http://localhost:3002
- API: http://localhost:3003 (reserved, not started)

Do not install or start the apps by hand. `pnpm dev` runs the workspace through Turbo.

## Checks

```bash
pnpm build
pnpm lint
pnpm typecheck
pnpm test
```

## Not built yet

The dashboard lists these backend jobs: Supabase schema, IPO API, Bursa scraper, prospectus RAG, crypto poller, catalyst agent, waitlist storage, and affiliate click tracking. WhatsApp and Telegram share links are part of the web app.
