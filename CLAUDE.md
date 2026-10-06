# AlphaRadar

Bursa IPO pipeline and 15–30 minute crypto volatility for Malaysian retail investors. This pass is the web app only. Live data, Supabase, the scraper, and the LLM jobs are listed in the UI and are not built yet.

## Layout

- `apps/web` — Next.js App Router on port **3002** (`next dev -p 3002`)
- `packages/` — empty, reserved for a later shared package
- API port **3003** is reserved. Nothing listens there yet. When the API exists it reads `PORT` and falls back to 3003.

`pnpm dev` at the repo root is the only start command. It runs Turbo, which starts the web app.

## Frontend

Feature folders under `apps/web/src/features/` own the screen and the schema:

- `ipo` — pipeline, countdown, timeline, sample scorecard
- `crypto` — volatility board. `fetchVolatility` returns fixtures and is the function a later route handler replaces
- `leads` — affiliate links, WhatsApp/Telegram share, waitlist check
- `backend-pending` — the checklist of backend jobs still open

IPO pages are server-rendered. The crypto board is a client component using TanStack Query with `staleTime` 60 seconds and `refetchInterval` 30 seconds.

## Checks

Creating a pull request means the checks run first: `pnpm typecheck`, `pnpm lint`, and `pnpm test`, plus a browser pass on the dashboard and an IPO page. API-client drift and migration checks stay inactive until a Supabase schema or route contract exists. Do not hand-write a request client in the meantime.

## Not in this repo yet

Nest, Prisma, Orval, recruitment tables, role checks, and database backup workflows do not belong here. Backend work is one checklist item at a time, starting from `apps/web/src/features/backend-pending/items.ts`.
