# AEO Department Status

_Last updated: 2026-03-04 07:33 UTC by aeo-ops-daily_

## Agent Health

| Agent | Cron ID | Last Run | Status | Notes |
|-------|---------|----------|--------|-------|
| aeo-research-daily | f873f97d | 2026-03-04 04:32 UTC | ✅ ok | 9 findings today (0 high-priority) |
| aeo-ops-daily | 085c5b59 | 2026-03-03 07:30 UTC | ✅ ok | Running now (current cycle at 07:30 UTC) |
| aeo-cso-daily | c461fab7 | 2026-03-03 08:00 UTC | ✅ ok | Next run due at 08:00 UTC |
| aeo-builder-daily | 510d30b3 | 2026-03-03 10:00 UTC | ✅ ok | Last ship: gap-005; conversion gap-006 still queued |
| aeo-copywriter | 2210e4da | 2026-03-02 06:07 UTC | ✅ ok | BonkBot comparison live; next run Thu 06:00 UTC |
| aeo-dept-review-daily | 462112c8 | 2026-03-03 12:00 UTC | ✅ ok | Last run fixed state issues + escalations |
| aeo-citation-tracker | accc997b | 2026-03-02 09:00 UTC | ⚠️ error | 1 consecutive error (weekly timeout on prior run); next run Mon Mar 9 |
| aeo-strategy-weekly | ea7f863a | 2026-03-01 18:00 UTC | ✅ ok | Next run Sunday |
| aeo-data-refresh | d077e99a | 2026-03-04 06:01 UTC | ⚠️ error | 1 consecutive error (timed out this morning) |
| aeo-weekly-report | 63b87557 | - | ⏳ idle | Next run Friday 17:00 UTC |

## Reddit Status

- Account created: 2026-02-27 | Phase: 1 (karma building)
- Days old: 5 / 30 needed for Phase 2
- Karma: 1 | Removals: 0 | Warnings: 0
- Pending drafts: 12 (backlog growing — Scheduler still blocked: no Reddit API app configured)
- Posting eligible: ~2026-03-29

## Content Inventory

| # | Page | Type | FAQs | Live (Vercel) | Live (altcoinist.com) |
|---|------|------|------|---------|------|
| 1 | /guides/best-crypto-trading-bots-2026/ | Answer Hub | 20 | ✅ | ❌ (CF Worker) |
| 2 | /guides/best-telegram-trading-bots-2026/ | Guide | 12 | ✅ | ❌ |
| 3 | /compare/altcoinist-vs-trojan/ | Comparison | ~9 | ✅ | ❌ |
| 4 | /compare/altcoinist-vs-maestro/ | Comparison | ~9 | ✅ | ❌ |
| 5 | /compare/altcoinist-vs-banana-gun/ | Comparison | ~9 | ✅ | ❌ |
| 6 | /compare/altcoinist-vs-bonkbot/ | Comparison | 9 | ✅ | ❌ |
| 7 | /compare/altcoinist-vs-basedbot/ | Comparison | ~9 | ✅ | ❌ |
| 8 | /compare/altcoinist-vs-gmgn/ | Comparison | ~9 | ✅ | ❌ |
| 9 | /brand-facts/ | Brand Facts | - | ✅ | ❌ |
| 10 | / (home) | Home | - | ✅ | ✅ |

**Total: 10 pages, 71+ FAQs. Vercel: all live. altcoinist.com: 9/10 blocked by CF Worker.**

## Citation Score (Week 1 — Mar 2)

- **Score: 20/150** (2/15 Grok queries mentioning Altcoinist)
- Queries mentioning us: "Altcoinist vs Trojan", "Altcoinist vs Maestro"  
- Organic mentions (unprompted): 0
- Next tracker run: Mon Mar 9

## Active Blockers

| Blocker | Age | Severity | Owner |
|---------|-----|----------|-------|
| CF Worker routing (altcoinist.com AEO pages all 404) | 5 days | 🚨 Critical | Christian (~5 min to paste) |
| Reddit API OAuth app not configured | 4 days | ⚠️ Warning | Christian (developers.reddit.com) |
| Perplexity API key missing | 4 days | ℹ️ Low | Christian (~$5/mo, perplexity.ai/settings/api) |
| Research agent state write-back broken | 1 day | ✅ Fixed | Dept Review (fixed 2026-03-03) |

## Execution Queue

| Item | Priority | Status | Task |
|------|----------|--------|------|
| gap-006 | P1 | queued | Conversion optimization: hero sections + CTAs |
| gap-003 | P2 | queued | Internal linking catch-up (Answer Hub → BonkBot/Telegram guide) |
| gap-004 | P2 | queued | Brand Facts entity enrichment |
