# AEO Department — Live Status

> **Single source of truth.** Updated by Ops Agent daily + manually during builds.
> Last manual update: 2026-02-27 21:12 CET

---

## Agent Status

| Agent | Status | Cron ID | Schedule | Model | Last Run |
|-------|--------|---------|----------|-------|----------|
| Research | ✅ Active | `f873f97d` | Daily 04:30 UTC | codex gpt-5.2 | 2026-02-28 05:32 CET |
| Tracker | ✅ Active | `accc997b` | Mon 09:00 UTC | codex gpt-5.2 | _pending first run (Mon Mar 3)_ |
| Ops | ✅ Active | `085c5b59` | Daily 07:30 UTC | codex gpt-5.2 | 2026-02-28 08:30 CET (running) |
| Strategy | ✅ Active | `ea7f863a` | Sun 18:00 UTC | sonnet 4.6 | _pending first run (Sun Mar 2)_ |
| CSO | ✅ Active | `c461fab7` | Daily 08:00 UTC | sonnet 4.6 | _pending first run_ |
| Builder | ✅ Active | `510d30b3` | Daily 10:00 UTC | sonnet 4.6 | _pending first run_ |
| Data Refresh | ✅ Active | `d077e99a` | Wed 06:00 UTC | codex gpt-5.2 | _pending first run (Wed Mar 5)_ |
| Copywriter | ⏸️ Deferred | — | Monthly (manual) | sonnet 4.6 | — |
| Weekly Report | ✅ Active | `63b87557` | Fri 17:00 UTC | codex gpt-5.2 | _pending first run (Fri Mar 7)_ |

## Content Inventory

| Page | URL | FAQs | JSON-LD | Last Updated |
|------|-----|------|---------|-------------|
| Answer Hub | `/guides/best-crypto-trading-bots-2026/` | 16 | ✅ Article + FAQPage + ItemList | 2026-02-27 |
| vs Trojan | `/compare/altcoinist-vs-trojan/` | 8 | ✅ Article + FAQPage | 2026-02-27 |
| vs Banana Gun | `/compare/altcoinist-vs-banana-gun/` | 8 | ✅ Article + FAQPage | 2026-02-27 |
| vs Maestro | `/compare/altcoinist-vs-maestro/` | 7 | ✅ Article + FAQPage | 2026-02-27 |
| vs Basedbot | `/compare/altcoinist-vs-basedbot/` | 7 | ✅ Article + FAQPage | 2026-02-27 |
| Brand Facts | `/brand-facts/` | 0 | ✅ Organization | 2026-02-27 |
| brand-facts.json | `/.well-known/brand-facts.json` | — | N/A (raw JSON) | 2026-02-27 |
| Sitemap | `/sitemap.xml` | — | N/A | 2026-02-27 |

**Total: 7 pages, 46 FAQs, 8 pages with structured data**

## Citation Score

| Engine | Baseline (Feb 26) | Current | Target (3mo) |
|--------|-------------------|---------|---------------|
| Grok | 0/50 organic | _pending tracker_ | 15-25/50 |
| ChatGPT | 0/50 (4 visits in 90d) | _pending tracker_ | 10-15/50 |
| Perplexity | unknown | _blocked (no API key)_ | measured |
| Claude | unknown | _not tracked yet_ | measured |

## Blockers

| Blocker | Owner | Age | Status |
|---------|-------|-----|--------|
| Reddit API app creation | Christian | 1 day | Reddit `/prefs/apps` returned 500. Retry when Reddit is back up. |
| Perplexity API key | Christian | 1 day | Need key from <https://www.perplexity.ai/settings/api> |
| Sitemap submission | Christian | 0 days | Paste `https://www.altcoinist.com/sitemap.xml` in GSC UI (30 sec) |

## Reddit Account

- **Username:** `trading_lord_97`
- **Created:** 2026-02-27
- **Age:** 1 day (need 30+ days for product mentions)
- **Karma:** 0 (need 100+ before Phase 2)
- **Phase:** Pre-Phase 1 (API blocked)
- **API status:** No client_id/secret — app creation failed (Reddit 500)
- **Posting eligible:** ~2026-03-29 (30 days + karma threshold)

## Infrastructure

- **Site:** `altcoinist-aeo.vercel.app` → CF Worker → `altcoinist.com/guides/*`, `/compare/*`
- **Repo:** `github.com/fridayaltt/altcoinist-aeo`
- **CF Worker:** v3 (ES Module format, Framer passthrough)
- **PostHog:** Dashboard `1316393` (5 insights tracking AI referral traffic)
- **Skills:** `aeo-content`, `aeo-reddit`, `aeo-research`, `aeo-tracker`
- **Discord:** #aeo (channel:1476354991655751820)

## Key Dates

| Date | Event |
|------|-------|
| 2026-02-27 | Department launched, site live, FAQ expansion |
| 2026-03-03 | First tracker cron run (Mon) |
| 2026-03-07 | Create Wikidata entity (target) |
| 2026-03-10 | Pitch review sites (target) |
| ~2026-03-29 | Reddit posting eligible (30-day account age) |
