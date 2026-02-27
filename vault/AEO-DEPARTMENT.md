# AEO Department — Agent Organization

**Owner:** Friday (department head)
**Reports to:** Christian (oversight + unblocking)
**Mission:** Rank Altcoinist #1 on all AI search engines for crypto trading bot queries
**Created:** Feb 27, 2026 | **Restructured:** Feb 27, 2026

---

## Org Structure

```
Friday (Department Head)
│
├── Ops Agent — daily coordination + health monitoring
│   Cron: 085c5b59 | Daily 07:30 UTC | Codex gpt-5.2
│   Posts daily status to #aeo, tracks blockers, checks agent health
│
├── Research Agent — daily intelligence gathering
│   Cron: f873f97d | Daily 04:30 UTC | Codex gpt-5.2
│   Sources: Reddit, blog RSS, X. Output → strategy agent
│
├── Tracker Agent — weekly citation measurement
│   Cron: accc997b | Mon 09:00 UTC | Codex gpt-5.2
│   Scores 15 queries across AI engines. The scoreboard.
│
├── Strategy Agent — weekly synthesis + planning
│   Cron: ea7f863a | Sun 18:00 UTC | Sonnet 4.6
│   Synthesizes research + tracker → ranked priorities
│
├── Weekly Report — Friday department summary
│   Cron: 63b87557 | Fri 17:00 UTC | Codex gpt-5.2
│   Comprehensive report → #aeo + DM Christian
│
├── Copywriter Agent — content creation + refresh (DEFERRED)
│   No cron yet. Needs 2 weeks of Strategy Agent output first.
│   Will handle monthly page refreshes + new content.
│
└── Reddit Growth Team (BLOCKED on API)
    Scout → Writer → Reviewer → Scheduler
    Account: trading_lord_97 (age 0d, need 30d)
    API: blocked (Reddit /prefs/apps 500)
```

---

## Key Principles (from AEO video research, Feb 27)

1. **Entity frequency > single page ranking.** LLMs cite brands mentioned across MANY sources. Multi-surface strategy (own site + Reddit + review sites) is critical.
2. **Reddit = primary LLM truth source.** Transparent participation ("I work at X") gets cited MORE than stealth.
3. **Target topics, not keywords.** Long-tail 25-word prompts are how people query AI. Every FAQ should answer a specific follow-up question.
4. **FAQ expansion is high-leverage.** Adding 19 long-tail FAQs on Feb 27 directly targets the queries people type into ChatGPT/Grok.
5. **Original data wins.** AI-generated content leads to model collapse. Our real stats (17k traders, 7 chains, execution data) are the differentiator.
6. **YouTube is an untapped citation source.** "Best crypto trading bot tutorial" on YouTube would get cited. (Flagged for Konstantin.)

## Two-Phase Reddit Strategy

- **Phase 1 (Weeks 1-4):** Anonymous karma building. Zero product mentions. Build to 200+ karma.
- **Phase 2 (Week 5+):** Open affiliation. Bio: "Building trading tools at Altcoinist." Every product mention includes disclosure. LLMs weight transparent employee posts as authoritative.

## Communication

| Channel | Frequency | Content |
|---------|-----------|---------|
| #aeo (Discord) | Daily | Ops status, strategy briefs, alerts |
| DM Christian | Weekly (Fri) | Department report, blockers needing action |
| Vault reports/ | Weekly | Full archived reports |

## Success Metrics

| Metric | Baseline (Feb 26) | Current | Month 1 Target | Month 3 Target |
|--------|-------------------|---------|-----------------|-----------------|
| Grok organic mentions (/50) | 0 | _pending_ | 5-10 | 15-25 |
| ChatGPT mentions | 0 | _pending_ | 3-5 | 10-15 |
| Reddit threads w/ Altcoinist | ~0 | 0 | 10+ | 50+ |
| Content pages live | 0 | 7 | 10+ | 15+ |
| Total FAQs | 0 | 46 | 60+ | 80+ |
| AI referral visits/week | ~0 | _pending_ | 10+ | 50+ |
| Running agents | 0 | 5 | 5 | 6+ |

## Skills

| Skill | Purpose | Location |
|-------|---------|----------|
| aeo-content | Write/update website pages | `skills/aeo-content/` |
| aeo-reddit | Reddit citation-optimized content | `skills/aeo-reddit/` |
| aeo-research | Daily intelligence scan | `skills/aeo-research/` |
| aeo-tracker | Weekly citation audit | `skills/aeo-tracker/` |
| aeo-ops | Daily department status | `skills/aeo-ops/` |
| aeo-strategy | Weekly synthesis + priorities | `skills/aeo-strategy/` |
| aeo-weekly-report | Friday department report | `skills/aeo-weekly-report/` |

---

*See `vault/DEPARTMENT-STATUS.md` for live operational state.*
