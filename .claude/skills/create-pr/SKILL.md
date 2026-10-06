---
name: create-pr
description: Open a pull request for AlphaRadar after typecheck, lint, and test. Use when the user asks to create a PR, open a pull request, or ship the current branch. Triggers on "create a PR", "open a PR", "make a pull request", "ship this branch".
allowed-tools: Bash(git *), Bash(gh *), Bash(pnpm *)
---

Opening a PR means the checks run before `gh pr create`. If a check fails, report it and stop. Do not open the PR.

## 1. Pre-flight checks

1. **`git status`** — uncommitted changes should not go into a PR silently. If the tree is dirty, tell the user. Do not commit unless asked.
2. **`pnpm typecheck`** — must pass.
3. **`pnpm lint`** — must pass.
4. **`pnpm test`** — must pass.
5. **Browser** — dashboard (`/`) and an IPO page (`/ipo/[id]`) have been exercised: status filter, 15m/30m switch, scorecard, share links, waitlist dialog, and the pending-backend list. Do not mark this done without that pass.
6. **API client drift** — inactive until a Supabase schema or a route contract exists. When those files land, generated types must be in the same diff as the schema or contract change. Until then, do not add a hand-written request client.
7. **Migrations** — inactive until a database migration exists. When one is added, the PR body notes rollout and rollback.

## 2. Docs that might need updating

| Diff touches | Consider updating |
|---|---|
| `apps/web/src/features/backend-pending/items.ts` | The pending list on the dashboard and IPO page |
| A new filter, countdown, scorecard, catalyst, share, or waitlist behavior | `docs/ux-patterns.md` |
| Ports, scripts, or what `pnpm dev` starts | `README.md` and `CLAUDE.md` |

## 3. Draft and open the PR

Gather `git status`, `git diff`, `git log`, and `git diff` against the base branch for the full commit range. Draft:

- **Title** — under 70 characters, imperative mood.
- **Body** — Summary (1–3 bullets) and a Test plan checklist for the pre-flight items that applied.

```markdown
## Summary
- ...

## Test plan
- [ ] `pnpm typecheck`
- [ ] `pnpm lint`
- [ ] `pnpm test`
- [ ] Browser: dashboard filter, 15m/30m board, IPO scorecard, share, waitlist, pending-backend list
```
