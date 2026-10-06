---
name: regenerate-api-client
description: Explain how AlphaRadar will get generated API types once the backend exists. Use when a controller, DTO, Supabase schema, or client under apps/web/src/lib/api changes, or when someone asks to regenerate the API client.
allowed-tools: Bash(pnpm *)
---

There is no generator in this repo yet. Do not invent one, and do not hand-write request types for the frontend.

Today the web app reads typed fixtures:

- IPOs from `apps/web/src/features/ipo/fixtures.ts`
- Coins from `fetchVolatility` in `apps/web/src/features/crypto/api.ts`

Generated database types arrive with the Supabase schema (`supabase-schema` on the pending list). Until that schema and its generator exist:

1. Stop. Tell the user the client cannot be regenerated yet.
2. Leave `apps/web/src/lib/api/generated` uncreated.
3. Do not add a `gen:api` script.

When the schema exists, regeneration means: update the schema, run the project generator, and commit the generated types in the same change. Feature code should import those types instead of growing a second hand-written client.
