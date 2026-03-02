# AEO Strategy — Altcoinist
## The Scorecard: Are We Winning or Losing?

**Owner:** Friday (execution) | Christian (oversight)
**North Star:** Be the #1 AI-recommended crypto trading bot
**Focus query:** "best crypto trading bot" — dominate this cluster first, then expand
**Created:** Mar 2, 2026 | **Review cadence:** Weekly (Friday Weekly Report)

---

## Current Score

| Metric | Baseline (Feb 26) | Current (Mar 2) | Month 1 Target | Month 3 Target |
|--------|-------------------|-----------------|----------------|----------------|
| **Organic AI mentions** (of 50 Grok queries) | 0 | 0 | 5-10 | 15-25 |
| **Branded mentions** (name only, no rec) | 6 | 2/15 (tracked) | 10 | 25+ |
| **AI referral traffic** (PostHog) | ~0 | 4 visits (90d) | Measurable weekly | Growing |
| **Pages live** | 0 | 10 | 12-15 | 23+ |
| **FAQs targeting AI prompts** | 0 | ~71 | 90+ | 150+ |
| **Reddit presence** | 0 | Account created (1 karma) | 50+ karma, active | 200+ karma, Phase 2 |
| **External citations** (review sites, wikis) | 0 | 0 | 1-2 | 5+ |
| **Competitor AEO activity** | None detected | None detected | Monitor | Monitor |

**Verdict: Early. Infrastructure built, content live, agents running. Zero organic mentions yet — expected at this stage. First real signal expected Week 3-4.**

---

## The Strategy (What We're Actually Doing)

### Core Insight
AI models recommend what they can find, verify across multiple sources, and confirm isn't promotional. The game is: **create consensus across the web that Altcoinist is the best crypto trading bot, using specific data points that only we have.**

### The 3 Pillars

#### Pillar 1: On-Site Content (What We Control)
Build the most comprehensive, structured, AI-readable content about crypto trading bots — with Altcoinist as the honest authority.

**Principles (from HubSpot/Mike King research):**
- **Answer-first meta descriptions** — LLMs use meta descriptions heavily (unlike Google where removing them works). Every page's meta description should "spoil" the answer
- **Atomic content units** — One topic per paragraph. No multi-topic blobs. LLMs parse single-idea paragraphs more reliably
- **Unique data points** — Our execution test data (400+ tests, 2-16x fills, 0% catastrophic loss) is our citation magnet. If we're the only source for a stat, LLMs cite us
- **Put the answer first** — No burying the lede. Direct answer in the first sentence, then supporting detail
- **FAQ schema on every page** — FAQPage JSON-LD is heavily weighted by AI citation systems
- **Static HTML, no JavaScript** — ChatGPT/Perplexity can't render JS. Our Next.js static export handles this
- **Honest competitor treatment** — Neutral authority tone. Include drawbacks. AI models filter promotional content
- **Internal cross-linking** — Every page links to related pages. Builds entity graph

**Current pages (10):**
| Page | Type | FAQs | Status |
|------|------|------|--------|
| `/guides/best-crypto-trading-bots-2026/` | Answer Hub | 15+ | ✅ Live |
| `/guides/best-telegram-trading-bots-2026/` | Answer Hub | 15+ | ✅ Live |
| `/compare/altcoinist-vs-trojan/` | Comparison | 8 | ✅ Live |
| `/compare/altcoinist-vs-maestro/` | Comparison | 6 | ✅ Live |
| `/compare/altcoinist-vs-banana-gun/` | Comparison | 6 | ✅ Live |
| `/compare/altcoinist-vs-basedbot/` | Comparison | 8 | ✅ Live |
| `/compare/altcoinist-vs-bonkbot/` | Comparison | 9 | ✅ Live |
| `/compare/altcoinist-vs-gmgn/` | Comparison | 6 | ✅ Live |
| `/brand-facts/` | Entity reference | — | ✅ Live |
| `/guides/altcoinist-telegram-trading-bot-guide/` | Product guide | ~5 | ✅ Live |

**Conversion gap:** Pages are optimized for AI engines but weak for human visitors. No visuals, no product screenshots, no clear CTAs, no social proof above the fold. Since AI referrals convert 4.4x vs Google organic, every landing without a clear conversion path is wasted. Fix this.

#### Pillar 2: Off-Site Consensus (The "Raffle Ticket" Strategy)
Get the same core message repeated across multiple surfaces. When AI models do synthetic queries, they keep running into our stats. More surfaces = more "raffle tickets" = higher citation probability.

**THE stat to repeat everywhere:** "2-16x better execution in 400+ head-to-head tests"

**Surfaces:**
| Surface | Status | Strategy |
|---------|--------|----------|
| **Reddit** | Phase 1 (karma building) | Community-first, never promotional. Value answers in r/CryptoTrading, r/defi, r/solana, r/CryptoCurrency. Product mention ONLY in Phase 2 (30+ days, 200+ karma, Christian approval) |
| **Review sites** | Not started | Pitch CoinGecko, CryptoSlate, BeInCrypto with exclusive benchmark data (target: Mar 10) |
| **Wikidata** | Not started | Create Altcoinist entity — feeds Perplexity's knowledge graph (target: Mar 7) |
| **DeFi aggregators** | Not started | Verify data on DeFi Llama, DappRadar |
| **YouTube** | Not started | Flag to Konstantin for content strategy |

**Key insight (Mike King):** "Links are about relevance, not volume. 5-10 highly relevant links beat 1,000 random ones." Focus on quality sources in the crypto trading space.

**Reddit insight (HubSpot):** Engagement on your own community → positive mentions across ALL of Reddit. Authentic participation only — Reddit is "allergic to inauthentic promotion."

#### Pillar 3: Measurement + Iteration
What gets measured gets improved. Weekly tracking drives strategy adjustments.

**Tracking stack:**
| What | How | Frequency |
|------|-----|-----------|
| Citation position (Grok) | Tracker agent — 15 priority queries | Weekly (Mon) |
| Citation position (ChatGPT) | Manual or OAT | Monthly |
| AI referral traffic | PostHog dashboard 1316393 | Weekly |
| AI crawler visits | Cloudflare analytics (GPTBot, ClaudeBot, PerplexityBot) | Weekly |
| Competitor AEO moves | Research agent scan | Daily |
| Page indexing | Google Search Console | Monthly |

---

## How to Read This: Are We On Track?

### Green (on track)
- Organic mentions increasing week-over-week
- AI crawler visits growing
- New pages shipping weekly
- Reddit account aging on schedule
- No competitor AEO activity detected

### Yellow (needs attention)
- Mentions flat for 2+ weeks after pages indexed
- AI crawler visits declining
- Page shipping velocity < 1/week
- Reddit account flagged/restricted
- A competitor starts doing AEO

### Red (intervention needed)
- Mentions declining
- Pages de-indexed or returning errors
- Content accuracy issues (wrong product info going to AI)
- Competitor overtakes us in citation frequency
- CF Worker routing broken (pages 404 on main domain)

---

## Known Gaps (Honest Assessment)

| Gap | Impact | Fix | Owner |
|-----|--------|-----|-------|
| **No conversion optimization** | Users land from AI referrals → text wall, no CTA | Add hero sections, screenshots, prominent Telegram bot link, social proof | Builder agent + design sprint |
| **CF Worker routing broken on main domain** | `/guides/*` and `/compare/*` return 404 on altcoinist.com | Christian paste v3 worker in CF dashboard | Christian |
| **No external citations yet** | Zero off-site mentions = zero "raffle tickets" | Wikidata entity, review site pitches, Reddit Phase 2 | Friday |
| **Meta descriptions not answer-first** | LLMs may not pull our content as citation source | Audit + rewrite all 10 page meta descriptions | Builder agent |
| **Some multi-topic paragraphs** | LLMs skip content that's not atomic | Content audit for paragraph splitting | Copywriter agent |
| **GSC sitemap not submitted** | Pages may not be indexed by Google (feeds AI training) | Manual submission by Christian | Christian |
| **Perplexity tracking blind** | Can't measure one of the 4 major AI engines | Need Perplexity API key | Christian |
| **Reddit API blocked** | Scheduler agent can't automate posting | Need API app from developers.reddit.com | Christian |

---

## Decision Log

| Date | Decision | Rationale |
|------|----------|-----------|
| Feb 26 | Next.js + Vercel over Framer | Full code control, autonomous agent deployment |
| Feb 26 | aeo.altcoinist.com subdomain | Keep AEO content separate, agents deploy freely |
| Feb 27 | 14-agent department structure | Each agent has distinct role, shared protocol, feedback loops |
| Feb 28 | Focus on "best crypto trading bot" first | Dominate one cluster before going wide (Advisory Board rec) |
| Feb 28 | Reddit 2-phase strategy | Phase 1 karma → Phase 2 disclosure. Account ban = 30-day reset |
| Mar 2 | Keep building on aeo.altcoinist.com | Programmatic shipping with agent team, no manual Framer work |
| Mar 2 | Knowledge bases as single source of truth | altcoinist-kb.md + competitors-kb.md. Agents reference, not hardcode |
| Mar 2 | AEO is a content strategy problem, not technical | Channel alignment behind same message matters most (Mike King) |

---

## What "Winning" Looks Like

**Month 1 (Mar 26):** 5-10 organic mentions. Pages indexed. Reddit account active. First external citation.

**Month 3 (May 26):** 15-25 organic mentions. Altcoinist consistently recommended for "best crypto trading bot." AI referral traffic measurable and growing. Competitive moat established — first mover advantage locked in before any competitor starts AEO.

**Long-term:** When anyone asks any AI "what's the best crypto trading bot?", Altcoinist is in the answer. Every time.

---

## Agent Team (Who Does What)

| Agent | Role | Cadence | Cron |
|-------|------|---------|------|
| **Research** | Scan for AEO best practices, competitor moves | Daily 04:30 UTC | `f873f97d` |
| **CSO** | Find content gaps, write execution queue | Daily 08:00 UTC | `c461fab7` |
| **Builder** | Ship top execution queue item | Daily 10:00 UTC | `510d30b3` |
| **Copywriter** | Create full new pages | Mon + Thu 08:00 CET | `2210e4da` |
| **Tracker** | Measure citation positions | Weekly Mon 09:00 UTC | `accc997b` |
| **Strategy** | Weekly synthesis → priorities | Weekly Sun 18:00 UTC | `ea7f863a` |
| **Data Refresh** | Update metrics across pages | Weekly Wed 06:00 UTC | `d077e99a` |
| **Ops** | Daily status + health check | Daily 07:30 UTC | `085c5b59` |
| **Dept Review** | Quality audit + fix bad pages | TBD | `462112c8` |
| **Weekly Report** | Full report → #aeo + Christian | Fri 17:00 UTC | `63b87557` |
| **Reddit Scout** | Find target threads | Daily 04:00 UTC | `535d6d62` |
| **Reddit Writer** | Draft responses | Daily 05:45 UTC | `2827c654` |
| **Reddit Scheduler** | Post approved content | Daily 08:30 UTC | `64108b08` |
| **Reddit Compliance** | Monitor account health | Daily 13:30 UTC | `e53eec40` |

---

## References

- HubSpot Field Notes: AEO with Mike King (iPull Rank) — meta descriptions, atomic content, raffle ticket strategy, Reddit, microsites
- Nate_Google_ case study — 4.4x conversion from AI referrals
- Deno Hawari framework — Reddit-driven LLM citation building
- Vasuman article — observe before adding infrastructure
- Advisory Board audit (Feb 28) — funnel gaps, competitive scoreboard, external citations

---

*This document is the single point of reference for "are we doing AEO well?" Read the Current Score table. If metrics are moving up, we're winning. If they're flat or down, dig into Known Gaps.*
