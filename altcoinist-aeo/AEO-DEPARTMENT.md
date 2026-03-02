# AEO Department

**Owner:** Friday (department head)
**Reports to:** Christian (oversight + unblocking)
**Mission:** Rank Altcoinist #1 on all AI search engines for crypto trading bot queries
**Created:** Feb 27, 2026

---

## Org Chart

```
                         ┌─────────────┐
                         │   FRIDAY    │
                         │ Dept Head   │
                         │ (Opus 4.6)  │
                         └──────┬──────┘
                                │
                 ┌──────────────┼──────────────┐
                 │              │              │
          ┌──────┴──────┐ ┌────┴────┐  ┌──────┴──────┐
          │ INTELLIGENCE│ │ CONTENT │  │  OPERATIONS │
          └──────┬──────┘ └────┬────┘  └──────┬──────┘
                 │              │              │
         ┌───────┼───────┐   ┌─┴──┐    ┌──────┼───────┐
         │       │       │   │    │    │      │       │
     Research Tracker Strategy Copy Builder  CSO    Ops
                               writer
                                       Data    Dept   Weekly
                                       Refresh Review Report
```

**14 agents. 14 crons. Zero per-token cost.** All flat-rate (Codex + Sonnet OAT).

---

## Agent Roster

### Intelligence Division
_Gather data, measure progress, set direction._

| Agent | Model | Cron ID | Schedule | Job |
|-------|-------|---------|----------|-----|
| **Research** | Codex 5.2 | `f873f97d` | Daily 06:30 CET | Scans Reddit + RSS for AEO-relevant findings |
| **Tracker** | Codex 5.2 | `accc997b` | Mon 11:00 CET | Runs 50 queries against Grok, scores brand citations |
| **Strategy** | Sonnet 4.6 | `ea7f863a` | Sun 20:00 CET | Weekly synthesis → sets priorities for CSO + Copywriter |

### Content Division
_Create and improve pages that AI models will cite._

| Agent | Model | Cron ID | Schedule | Job |
|-------|-------|---------|----------|-----|
| **Copywriter** | Sonnet 4.6 | `2210e4da` | Mon+Thu 08:00 CET | Creates full new pages (comparisons, guides) |
| **Builder** | Sonnet 4.6 | `510d30b3` | Daily 12:00 CET | Tactical fixes — FAQs, stats, schema updates |

### Operations Division
_Keep the department running, find gaps, fix issues._

| Agent | Model | Cron ID | Schedule | Job |
|-------|-------|---------|----------|-----|
| **CSO** | Sonnet 4.6 | `c461fab7` | Daily 10:00 CET | Finds content gaps → writes execution queue for Builder |
| **Ops** | Codex 5.2 | `085c5b59` | Daily 09:30 CET | Morning status report to #aeo |
| **Dept Review** | Sonnet 4.6 | `462112c8` | Daily 14:00 CET | Audits all agents + quality-gates latest content → fixes issues |
| **Data Refresh** | Codex 5.2 | `d077e99a` | Wed 08:00 CET | Pulls PostHog metrics → updates product stats across all pages |
| **Weekly Report** | Codex 5.2 | `63b87557` | Fri 19:00 CET | Compiles everything → DMs Christian the summary |

### Reddit Growth Division
_Build Reddit presence that AI models cite as authority._

```
                    ┌──────────┐
                    │  FRIDAY  │
                    │ Oversight│
                    └────┬─────┘
                         │
          ┌──────────────┼──────────────┐
          │              │              │
      ┌───┴───┐    ┌────┴────┐   ┌─────┴─────┐
      │ Scout │    │ Writer  │   │ Compliance │
      │       │    │         │   │  Monitor   │
      └───┬───┘    └────┬────┘   └─────┬─────┘
          │              │              │
          └──────┬───────┘              │
                 ▼                      │
          ┌──────────┐                  │
          │ Scheduler│◄─────────────────┘
          └──────────┘
```

| Agent | Model | Cron ID | Schedule | Job |
|-------|-------|---------|----------|-----|
| **Reddit Scout** | Codex 5.2 | `535d6d62` | Daily 06:00 CET | Scans target subs for high-value threads |
| **Reddit Writer** | Sonnet 4.6 | `2827c654` | Daily 07:45 CET | Writes draft responses for Christian's approval |
| **Reddit Scheduler** | Codex 5.2 | `64108b08` | Daily 10:30 CET | Posts approved drafts respecting rate limits |
| **Reddit Compliance** | Codex 5.2 | `e53eec40` | Daily 15:30 CET | Checks account health, triggers kill switches |

**Account:** `trading_lord_97` | **Phase:** 1 (karma building) | **Created:** Feb 27, 2026
**Blocker:** Reddit API app (needs Christian's browser — server IP blocked)

**Phase transition:** Automatic eligibility check when age ≥ 30d + karma ≥ 200. Christian must explicitly approve "go to Phase 2."

### Approval Flow
1. Scout finds opportunities → `vault/ops/reddit/scout-latest.json`
2. Writer reads opportunities → creates drafts → posts to #aeo for review
3. Christian replies "approve 1" / "reject 1" / "revise 1: feedback"
4. Scheduler picks up approved drafts → posts respecting rate limits
5. Compliance checks account health → triggers kill switches if needed

---

## Daily Flow (all times CET)

```
05:00  ┌─ Reddit Scout scans target subs ──→ opportunities JSON
       │
06:30  ├─ Research scans Reddit + RSS ──→ AEO findings JSON
       │
07:45  ├─ Reddit Writer reads opportunities ──→ drafts for Christian's approval
       │
09:30  ├─ Ops reads all agent states ──→ posts morning status to #aeo
       │
10:00  ├─ CSO reads Research + Tracker data ──→ identifies gaps ──→ writes execution queue
       │
10:30  ├─ Reddit Scheduler posts approved drafts ──→ respects rate limits
       │
12:00  ├─ Builder picks top queue item ──→ ships tactical fix ──→ tags deploy in event log
       │
14:00  ├─ Dept Review audits all agents + quality-checks latest content ──→ fixes issues
       │
15:30  └─ Reddit Compliance checks account health ──→ kill switches if needed
```

## Weekly Flow

```
Mon 08:00   Copywriter creates new page #1
Mon 11:00   Tracker scores 50 queries against Grok (weekly measurement)
Wed 08:00   Data Refresh pulls PostHog → updates product stats everywhere
Thu 08:00   Copywriter creates new page #2
Fri 19:00   Weekly Report compiles everything → DMs Christian
Sun 20:00   Strategy synthesizes the week → sets next week's priorities
```

## Information Flow

```
                         ┌─ Reddit Scout ──opportunities──→ Reddit Writer ──drafts──→ Christian ──approved──→ Reddit Scheduler
                         │                                                                                        │
Research ──findings──→ CSO ──queue──→ Builder ──deploys──→ Tracker                                                │
    │                   ↑                                    │                                                     │
    └───────────────────┴────────────────────────────────────┘                                                     │
                    (feedback loop via shared-state.json) ◄────────────────────────────────────────────────────────┘
                                                                                          Reddit posts feed back into AEO metrics

Strategy ──priorities──→ CSO + Copywriter + Reddit Writer
Dept Review ──fixes──→ any broken agent (AEO + Reddit)
Reddit Compliance ──kill switches──→ Reddit Scheduler
All agents ──read/write──→ shared-state.json + event log
All agents ──read──→ own context file (soul + learnings)
```

---

## Architecture

### Shared State (`vault/ops/shared-state.json`)
Every agent reads this at start and writes back at end. Contains:
- Each agent's last run time, status, and key metrics
- Event log (append-only, last 50 events)
- Canonical product stats
- Canonical file paths

### Agent Protocol (`vault/ops/AGENT-PROTOCOL.md`)
Mandatory read before every skill file. Defines:
- Step 0a: Load identity + learnings from `vault/agents/context/{name}.md`
- Step 0b: Load shared state
- Step 1: Check event log for relevant cross-agent events
- Step 2: Do your work (follow skill)
- Step 3: Write state back (update status + append event)
- Step 4: Error recovery (stuck items, retries)

### Agent Identity (`vault/agents/context/{name}.md`)
Each agent has:
- **Soul** — 3-4 sentences defining personality and operating style
- **Learnings** — append-only, grows with each run, prevents repeating mistakes

### Execution Queue (`vault/ops/execution-queue.json`)
CSO writes, Builder reads. Items have priority, type, estimated effort.
- Stuck items (>24h in_progress) auto-reset
- Max 3 retries before marking "blocked"

### Feedback Loop
Builder tags every deploy with `queue_item_id` in event log.
Tracker checks: "did pages from `build_shipped` events see citation score changes?"
First closed-loop measurement: content change → citation impact.

### Auto-Generated Sitemap
`scripts/generate-sitemap.mjs` runs on every build (`prebuild` hook).
Scans `src/app/` for `page.tsx` files → generates `sitemap.xml`.
New pages auto-appear. No manual updates needed after CF Worker routes `/sitemap.xml` to Vercel.

---

## Key Principles

1. **Third-party citations > own-site content.** AI engines cite review sites, publications, and forums more than brand websites. Getting mentioned on CoinGecko or CryptoSlate may be worth more than all our own pages combined. (McCoy framework, Mar 2 audit)
2. **Entity frequency > single page ranking.** Multi-surface mentions matter more than owning one #1 link.
3. **Pages must convert, not just inform.** Every page needs: CTA above the fold, product screenshots, social proof. AI referrals convert 4.4x — don't waste them on text walls.
4. **Visual AEO is a separate vector.** Images (screenshots, infographics, comparison charts) are citation opportunities. Zero images = missing 60%+ of visibility.
5. **Reddit = primary LLM truth source.** Transparent affiliation > stealth.
6. **Target 25-word prompts.** That's how people query AI engines.
7. **Original data wins.** Real stats (20k traders, 6 chains) beat marketing copy. Use KB files as source of truth.
8. **Ship > perfect.** Something deploys every day.
9. **Measure what matters.** Tracker scores correlate with Builder deploys to prove causation. Track third-party citations as primary KPI.
10. **Knowledge bases are canonical.** All agents reference `vault/knowledge/altcoinist-kb.md` and `vault/knowledge/competitors-kb.md`. Never hardcode product or competitor data.

## Knowledge Bases

| File | Purpose | Update when |
|------|---------|-------------|
| `vault/knowledge/altcoinist-kb.md` | Altcoinist product facts, features, chains, metrics | Product changes (chains, features, stats) |
| `vault/knowledge/competitors-kb.md` | Competitor product details, AEO presence, comparison data | Competitor product updates |

All content agents (Copywriter, Builder, CSO) must read these before creating or editing pages.

## Success Metrics

| Metric | Baseline (Feb 26) | Month 1 Target | Month 3 Target |
|--------|-------------------|-----------------|-----------------|
| Grok organic mentions (/50) | 0 | 5-10 | 15-25 |
| ChatGPT mentions | 0 | 3-5 | 10-15 |
| **Third-party citations** | 0 | 2+ | 5+ |
| Content pages live | 7 | 15+ | 25+ |
| Total FAQs | 46 | 70+ | 100+ |
| AI referral visits/week | ~0 | 10+ | 50+ |
| **AEO page conversion rate** | Unmeasured | Baseline set | Improving |
| Reddit threads w/ Altcoinist | 0 | 10+ | 50+ |

## Skills

| Skill | Location |
|-------|----------|
| aeo-research | `skills/aeo-research/` |
| aeo-tracker | `skills/aeo-tracker/` |
| aeo-strategy | `skills/aeo-strategy/` |
| aeo-copywriter | `skills/aeo-copywriter/` |
| aeo-builder | `skills/aeo-builder/` |
| aeo-cso | `skills/aeo-cso/` |
| aeo-ops | `skills/aeo-ops/` |
| aeo-dept-review | `skills/aeo-dept-review/` |
| aeo-data-refresh | `skills/aeo-data-refresh/` |
| aeo-weekly-report | `skills/aeo-weekly-report/` |
| aeo-content | `skills/aeo-content/` |
| aeo-reddit | `skills/aeo-reddit/` |
| reddit-scout | `skills/reddit-scout/` |
| reddit-writer | `skills/reddit-writer/` |
| reddit-scheduler | `skills/reddit-scheduler/` |
| reddit-compliance | `skills/reddit-compliance/` |

---

_Last updated: Mar 2, 2026 — McCoy framework audit integrated, Pillar 0 (third-party authority) added, knowledge bases created_
