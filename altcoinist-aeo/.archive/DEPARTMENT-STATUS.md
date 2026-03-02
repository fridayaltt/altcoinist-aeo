# AEO Department — Live Status

> **Single source of truth.** Updated by Dept Review daily + Ops Agent morning status.
> Last updated: 2026-03-02 14:00 CET (Dept Review)

---

## Agent Status

| Agent | Status | Cron ID | Schedule | Model | Last Run |
|-------|--------|---------|----------|-------|----------|
| Research | ✅ Active | `f873f97d` | Daily 06:30 CET | codex gpt-5.2 | 2026-03-02 05:30 CET ✅ |
| Tracker | ✅ Active | `accc997b` | Mon 11:00 CET | codex gpt-5.2 | 2026-03-02 11:00 CET ✅ (first run complete: 2/15 Grok; timeout fixed 300s→1200s) |
| Ops | ✅ Active | `085c5b59` | Daily 09:30 CET | codex gpt-5.2 | 2026-03-02 08:33 CET ✅ (running now) |
| Strategy | ✅ Active | `ea7f863a` | Sun 20:00 CET | sonnet 4.6 | 2026-03-01 21:00 CET ✅ (brief posted) |
| CSO | ✅ Active | `c461fab7` | Daily 10:00 CET | sonnet 4.6 | 2026-03-02 10:00 CET ✅ (gap-003 updated; untracked Telegram guide found) |
| Builder | ✅ Active | `510d30b3` | Daily 12:00 CET | sonnet 4.6 | 2026-03-02 11:00 CET ✅ (shipped gap-005) |
| Data Refresh | ⏸️ Pending | `d077e99a` | Wed 08:00 CET | codex gpt-5.2 | First run Wed Mar 4 |
| Copywriter | ✅ Active | `2210e4da` | Mon+Thu 08:00 CET | sonnet 4.6 | 2026-03-02 08:00 CET ✅ (shipped /compare/altcoinist-vs-bonkbot/) |
| Weekly Report | ⏸️ Pending | `63b87557` | Fri 19:00 CET | codex gpt-5.2 | First run Fri Mar 6 |
| Dept Review | ✅ Active | `462112c8` | Daily 14:00 CET | sonnet 4.6 | 2026-03-02 14:00 CET ✅ (fixed tracker timeout; delivered first Tracker results; all APIs OK) |
| Reddit Scout | ✅ Active | `535d6d62` | Daily 05:00 CET | codex gpt-5.2 | 2026-03-02 06:00 CET ✅ (7 P3 opps) |
| Reddit Writer | ✅ Active | `2827c654` | Daily 07:45 CET | sonnet 4.6 | 2026-03-02 07:45 CET ✅ (3 more drafts; 9 total pending) |
| Reddit Scheduler | ✅ Active | `64108b08` | Daily 10:30 CET | codex gpt-5.2 | 2026-03-01 10:30 CET ✅ (blocked: no API app) |
| Reddit Compliance | ✅ Active | `e53eec40` | Daily 15:30 CET | codex gpt-5.2 | 2026-03-01 15:30 CET ✅ (karma 1, no violations) |

## Content Inventory

| Page | URL | FAQs | JSON-LD | Last Updated |
|------|-----|------|---------|-------------|
| Answer Hub | `/guides/best-crypto-trading-bots-2026/` | 20 | ✅ Article + FAQPage + ItemList | 2026-03-02 |
| vs Trojan | `/compare/altcoinist-vs-trojan/` | 8 | ✅ Article + FAQPage | 2026-02-27 |
| vs Banana Gun | `/compare/altcoinist-vs-banana-gun/` | 8 | ✅ Article + FAQPage | 2026-02-27 |
| vs Maestro | `/compare/altcoinist-vs-maestro/` | 7 | ✅ Article + FAQPage | 2026-02-27 |
| vs Basedbot | `/compare/altcoinist-vs-basedbot/` | 7 | ✅ Article + FAQPage | 2026-02-27 |
| vs BonkBot | `/compare/altcoinist-vs-bonkbot/` | 9 | ✅ Article + FAQPage | 2026-03-02 🆕 |
| Telegram Guide | `/guides/best-telegram-trading-bots-2026/` | 12 | ✅ Article + FAQPage | 2026-03-02 🆕 |
| Brand Facts | `/brand-facts/` | 0 | ✅ Organization | 2026-02-27 |
| brand-facts.json | `/.well-known/brand-facts.json` | — | N/A (raw JSON) | 2026-02-27 |
| Sitemap | `/sitemap.xml` | — | N/A | 2026-03-02 |

**Total: 10 pages, 71 FAQs, 10 pages with structured data**

## Citation Score

| Engine | Baseline (Feb 26) | Current | Target (3mo) |
|--------|-------------------|---------|---------------|
| Grok | 0/15 organic | **2/15 mentions (20/150 score)** — branded queries only; 0 organic | 15-25/50 |
| ChatGPT | 0/50 (4 visits in 90d) | _pending tracker_ | 10-15/50 |
| Perplexity | unknown | _blocked (no API key)_ | measured |
| Claude | unknown | _not tracked yet_ | measured |

## Execution Queue

| ID | Status | Description |
|----|--------|-------------|
| gap-001 | ✅ Done | Solana memecoin minimum investment FAQ (shipped 2026-02-28) |
| gap-002 | ✅ Done | AI trading bot risk/loss FAQs (shipped 2026-03-01) |
| gap-003 | 🟡 Queued | Internal linking catch-up: Answer Hub + Telegram guide → BonkBot page |
| gap-004 | 🟡 Queued | Brand Facts structured entity claims |
| gap-005 | ✅ Done | Standalone supported-chains FAQ (shipped 2026-03-02) |

## Blockers

| Blocker | Owner | Age | Status |
|---------|-------|-----|--------|
| Reddit API app creation | Christian | **3 days ⚠️** | Reddit `/prefs/apps` 500 — must create from Christian's browser (Mac Mini IP blocked). All Reddit posting blocked. |
| Perplexity API key | Christian | **3 days ⚠️** | Need key from <https://www.perplexity.ai/settings/api> → save to `~/.openclaw/credentials/perplexity-api-key.txt` |
| CF Worker routing | Christian | **3 days ⚠️** | altcoinist.com `/guides/` `/compare/` `/brand-facts/` returning 404. Fix: paste `vault/deliverables/cloudflare-worker-v3.js` in CF dashboard. Escalated Mar 1 — still open. |
| Sitemap GSC submission | Christian | 3 days | Paste `https://www.altcoinist.com/sitemap.xml` in GSC UI (30 sec) |

## Reddit Account

- **Username:** `trading_lord_97`
- **Created:** 2026-02-27
- **Age:** 3 days (need 30+ days for product mentions)
- **Karma:** 1 (need 100+ before Phase 2)
- **Phase:** 1 (karma building — API still blocked)
- **API status:** No client_id/secret — app creation blocked (Mac Mini IP blocked by Reddit)
- **Posting eligible:** ~2026-03-29 (30 days + karma threshold)
- **Pending drafts:** 9 awaiting Christian approval in #aeo | 0 posted | Oldest drafts aging (Feb 28)

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
| 2026-02-28 | Builder shipped gap-001. Timeout fixes applied to 3 crons. |
| 2026-03-01 | Builder shipped gap-002. Strategy Agent first run. CF Worker routing 404s detected. |
| 2026-03-02 | Copywriter shipped /compare/altcoinist-vs-bonkbot/ + /guides/best-telegram-trading-bots-2026/ (untracked, now registered). Tracker first run: 2/15 Grok mentions (20/150), timeout fixed 300s→1200s. Builder shipped gap-005 (chains FAQ, 20 FAQs on Answer Hub). |
| 2026-03-04 | First Data Refresh run (Wed) |
| 2026-03-07 | Create Wikidata entity (target) |
| 2026-03-10 | Pitch review sites (target) |
| ~2026-03-29 | Reddit posting eligible (30-day account age) |
