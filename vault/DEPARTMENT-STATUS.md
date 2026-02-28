# AEO Department — Live Status

> **Single source of truth.** Updated by Dept Review daily + Ops Agent morning status.
> Last updated: 2026-02-28 13:00 CET (Dept Review)

---

## Agent Status

| Agent | Status | Cron ID | Schedule | Model | Last Run |
|-------|--------|---------|----------|-------|----------|
| Research | ✅ Active | `f873f97d` | Daily 06:30 CET | codex gpt-5.2 | 2026-02-28 06:30 CET ✅ |
| Tracker | ⏸️ Pending | `accc997b` | Mon 11:00 CET | codex gpt-5.2 | First run Mon Mar 3 |
| Ops | ⚠️ Fixed | `085c5b59` | Daily 09:30 CET | codex gpt-5.2 | 2026-02-28 08:30 CET (timed out → timeout 600s applied) |
| Strategy | ⏸️ Pending | `ea7f863a` | Sun 20:00 CET | sonnet 4.6 | First run Sun Mar 2 |
| CSO | ⚠️ Fixed | `c461fab7` | Daily 10:00 CET | sonnet 4.6 | 2026-02-28 09:00 CET (timed out → timeout 900s applied) |
| Builder | ✅ Active | `510d30b3` | Daily 12:00 CET | sonnet 4.6 | 2026-02-28 12:00 CET ✅ (shipped gap-001) |
| Data Refresh | ⏸️ Pending | `d077e99a` | Wed 08:00 CET | codex gpt-5.2 | First run Wed Mar 5 |
| Copywriter | ⏸️ Pending | `2210e4da` | Mon+Thu 08:00 CET | sonnet 4.6 | First run Mon Mar 3 |
| Weekly Report | ⏸️ Pending | `63b87557` | Fri 19:00 CET | codex gpt-5.2 | First run Fri Mar 7 |
| Dept Review | ✅ Active | `462112c8` | Daily 14:00 CET | sonnet 4.6 | 2026-02-28 13:00 CET ✅ |
| Reddit Scout | ⚠️ Fixed | `535d6d62` | Daily 05:00 CET | codex gpt-5.2 | 2026-02-28 05:00 CET (timed out → timeout 600s applied) |
| Reddit Writer | ✅ Active | `2827c654` | Daily 07:45 CET | sonnet 4.6 | 2026-02-28 07:45 CET ✅ (3 drafts created) |
| Reddit Scheduler | ✅ Active | `64108b08` | Daily 10:30 CET | codex gpt-5.2 | 2026-02-28 10:30 CET ✅ (blocked: no API app) |
| Reddit Compliance | ⏸️ Pending | `e53eec40` | Daily 15:30 CET | codex gpt-5.2 | Running today at 15:30 CET |

## Content Inventory

| Page | URL | FAQs | JSON-LD | Last Updated |
|------|-----|------|---------|-------------|
| Answer Hub | `/guides/best-crypto-trading-bots-2026/` | 17 | ✅ Article + FAQPage + ItemList | 2026-02-28 |
| vs Trojan | `/compare/altcoinist-vs-trojan/` | 8 | ✅ Article + FAQPage | 2026-02-27 |
| vs Banana Gun | `/compare/altcoinist-vs-banana-gun/` | 8 | ✅ Article + FAQPage | 2026-02-27 |
| vs Maestro | `/compare/altcoinist-vs-maestro/` | 7 | ✅ Article + FAQPage | 2026-02-27 |
| vs Basedbot | `/compare/altcoinist-vs-basedbot/` | 7 | ✅ Article + FAQPage | 2026-02-27 |
| Brand Facts | `/brand-facts/` | 0 | ✅ Organization | 2026-02-27 |
| brand-facts.json | `/.well-known/brand-facts.json` | — | N/A (raw JSON) | 2026-02-27 |
| Sitemap | `/sitemap.xml` | — | N/A | 2026-02-28 |

**Total: 7 pages, 47 FAQs, 8 pages with structured data**

## Citation Score

| Engine | Baseline (Feb 26) | Current | Target (3mo) |
|--------|-------------------|---------|---------------|
| Grok | 0/50 organic | _pending tracker (Mon Mar 3)_ | 15-25/50 |
| ChatGPT | 0/50 (4 visits in 90d) | _pending tracker_ | 10-15/50 |
| Perplexity | unknown | _blocked (no API key)_ | measured |
| Claude | unknown | _not tracked yet_ | measured |

## Execution Queue

| ID | Status | Description |
|----|--------|-------------|
| gap-001 | ✅ Done | Solana memecoin minimum investment FAQ (shipped 2026-02-28) |
| gap-002 | 🟡 Queued | Reddit Scout P1: AI agent risk response thread |
| gap-003 | 🟡 Queued | BonkBot comparison content |
| gap-004 | 🟡 Queued | Brand Facts structured entity claims |

## Blockers

| Blocker | Owner | Age | Status |
|---------|-------|-----|--------|
| Reddit API app creation | Christian | 1 day | Reddit `/prefs/apps` returned 500. Retry when Reddit is back up. All Reddit posting agents blocked on this. |
| Perplexity API key | Christian | 1 day | Need key from <https://www.perplexity.ai/settings/api> |
| Sitemap GSC submission | Christian | 1 day | Paste `https://www.altcoinist.com/sitemap.xml` in GSC UI (30 sec) |

## Reddit Account

- **Username:** `trading_lord_97`
- **Created:** 2026-02-27
- **Age:** 1 day (need 30+ days for product mentions)
- **Karma:** 0 (need 100+ before Phase 2)
- **Phase:** Pre-Phase 1 (API blocked)
- **API status:** No client_id/secret — app creation failed (Reddit 500)
- **Posting eligible:** ~2026-03-29 (30 days + karma threshold)
- **Pending drafts:** 3 (opp-001, opp-002, opp-003) awaiting Christian approval in #aeo

## Infrastructure

- **Site:** `altcoinist-aeo.vercel.app` → CF Worker → `altcoinist.com/guides/*`, `/compare/*`
- **Repo:** `github.com/fridayaltt/altcoinist-aeo`
- **CF Worker:** v3 (ES Module format, Framer passthrough)
- **PostHog:** Dashboard `1316393` (5 insights tracking AI referral traffic) — API ✅
- **xAI API:** ✅ grok-3-mini responding
- **Vercel:** ✅ `fridayaltcoinist020926-7754` logged in
- **Skills:** All 16 AEO/Reddit skills healthy, no broken file references

## Key Dates

| Date | Event |
|------|-------|
| 2026-02-27 | Department launched, site live, FAQ expansion |
| 2026-02-28 | Builder shipped first queue item (gap-001). Timeout fixes applied to 3 crons. |
| 2026-03-03 | First Tracker cron run (Mon) — baseline citation scores |
| 2026-03-03 | First Copywriter cron run (Mon) — new page creation begins |
| 2026-03-05 | First Data Refresh run (Wed) |
| 2026-03-07 | Create Wikidata entity (target) |
| 2026-03-10 | Pitch review sites (target) |
| ~2026-03-29 | Reddit posting eligible (30-day account age) |
