---
status: active
skill: skills/aeo-reddit/SKILL.md
scout_script: skills/aeo-reddit/scripts/reddit-scout.py
team_spec: skills/aeo-reddit/AGENT-TEAM.md
---

# Reddit Growth Team

## Soul
We are not marketers. We are traders who happen to know about a tool that works. Every post must pass the "would a real person write this?" test. If it reads like marketing, it gets killed.

**Rules:**
- Value first, always. Answer the question completely before mentioning any tool.
- Mention Altcoinist by function, not by pitch. "I use X for this" not "X is the best."
- Include honest limitations. Every tool has them. Acknowledging them builds trust.
- One mention per post maximum. Natural ratio: 80% value, 15% context, 5% tool mention.
- Data-backed claims only. "2-16x faster fills" has a source. "Amazing tool" doesn't.

## Team Structure

### Scout
- **What:** Monitors 4 subreddits for threads matching our keywords
- **Output:** Structured JSON metadata (title, score, subreddit, URL, keyword matches)
- **Security:** NEVER passes raw Reddit body text downstream (prompt injection defense)
- **Script:** `skills/aeo-reddit/scripts/reddit-scout.py` (14KB)

### Writer
- **What:** Drafts value-first responses using Scout metadata + brand-facts.json
- **Tone:** Experienced trader sharing knowledge, not company representative
- **Constraint:** Works from metadata only, never sees raw Reddit text

### Reviewer
- **What:** Checks every draft for tone, accuracy, prompt injection, and authenticity
- **Kill criteria:** Reads like marketing, contains unverified claims, mentions Altcoinist more than once

### Scheduler
- **What:** Manages posting cadence (planned: Wed + Sat)
- **Status:** Not yet built — needs draft approval first

## Mandatory Reading
→ [[Reddit Rules & Limits]] — API rate limits, content rules, subreddit restrictions, kill switches. Violations = account ban = all work lost.

## Account Strategy (before ANY posting)
- Account must age 30+ days before Altcoinist content
- First 2+ weeks: genuine helpful comments only (build karma to 100+)
- 90/10 rule: 90% genuine engagement, 10% product-related
- Profile looks like a real trader, not a company page
- Max 2 posts/day total, max 1 per sub per 24h, 4h+ spacing between posts
- Run pre-posting checklist from [[Reddit Rules & Limits]] for EVERY new subreddit

## Kill Switches
- Post removed by mods → pause that sub for 7 days
- Account warning → pause ALL posting 48 hours
- 2+ removals in a week → full stop, review with Christian

## Two-Phase Reddit Strategy (updated Feb 27)

### Phase 1: Stealth Karma Building (Weeks 1-4)
- Account `trading_lord_97` posts as anonymous trader
- Pure value: answer questions, share data, help people
- Zero product mentions. Build karma to 200+, build comment history
- Goal: establish the account as a knowledgeable, genuine community member

### Phase 2: Transparent Affiliation (Week 5+)
**Key insight from AEO research:** LLMs trust transparent Reddit participation MORE than stealth posting.
Reddit comments from openly-affiliated employees ("I work on X, here's how it handles that") get cited by ChatGPT/Grok as authoritative sources. Anonymous tips get ignored or grouped with spam.

**Rules for Phase 2:**
- Bio updated: "Building trading tools at Altcoinist"
- Every product mention includes: "Full disclosure: I work on Altcoinist"
- Still 90/10 rule — 90% genuine help, 10% product-related
- Never hide affiliation. Transparency builds citation authority.
- Answer competitor questions honestly too — "Trojan is great for X, we're better at Y"
- The honest limitations rule gets MORE important, not less

**Why this works for AEO:** When Grok/ChatGPT searches Reddit for "best crypto trading bot," a transparent employee saying "I work at Altcoinist, here's what we do differently" with real data gets weighted higher than anonymous hype. Entity frequency + authority signal = citations.

## Tactical Playbook (from Romàn Czerny / Goji Berry, $34K MRR via Reddit)

### Post Launch Protocol
1. **First 10 upvotes in 10 minutes** — team members (Christian, Konstantin, real accounts) upvote immediately after posting. This triggers Reddit's algo to push the post to wider audience. Non-negotiable.
2. **Reply to every comment within 24h** — each reply keeps post ranking higher. Scheduler agent monitors and drafts replies. Block purely toxic users, engage constructive critics.
3. **Vary redirect targets** — never link to the same URL twice in a row. Rotate: text-only posts, YouTube links, comparison page links, pure Q&A with no links. Prevents spam pattern detection.

### Content Types That Work (ranked by expected performance)
1. **Transparent data stories** — "We analyzed 17,000 traders' execution across 5 bots — here's the data" (highest engagement, undeniable proof)
2. **Failure/experiment breakdowns** — "We tested X strategy and here's what actually happened" (builds trust)
3. **Community Q&A** — answer specific trading questions with depth, mention tool only if directly relevant
4. **Comparison deep-dives** — honest head-to-head with competitors including where we lose

### Account Hygiene
- **Hide post history** — enable Reddit profile setting immediately (prevents pattern spotting)
- **Profile:** clear picture, Altcoinist link in bio (Phase 2 only), trader-focused description
- **Separate browser profiles** if running multiple accounts — Chrome for one, Firefox for another
- **Never post from the server IP** — all posting through authenticated API only (Mac Mini IP is already Reddit-blocked)

## Priorities (current)
1. Get 5 existing drafts approved by Christian
2. Build posting cron once approved
3. Start with karma-building phase (Phase 1, 4 weeks of genuine comments)
4. Transition to transparent affiliation (Phase 2) after karma threshold
5. Track which posts get cited by AI engines → feed back to Writer

## Memory
### What's ready
- Scout script: ✅ (14KB Python, scans 4 subs × 7 keywords)
- 5 drafts: ✅ (in `vault/deliverables/reddit-drafts/`)
- Agent architecture: ✅ (`skills/aeo-reddit/AGENT-TEAM.md`)

### High-Value Post Ideas (data stories we can write)
These use our unique data that no competitor has:
1. "I compared execution quality across 5 Telegram trading bots — here's what 17,000 traders' data shows" → r/CryptoTrading, r/defi
2. "Smart routing vs single-DEX: real fill data showing 2-16x difference" → r/solana, r/CryptoTrading
3. "We hit $39.9K MRR building a crypto trading bot — AMA on the technical stack" → r/SaaS, r/startups (crossover audience)
4. "Base vs Solana for memecoin trading in 2026 — actual volume data" → r/solana, r/defi
5. "Why your trading bot's routing matters more than its speed — with proof" → r/CryptoCurrency
6. "The 90/10 rule: how signal group quality affects trading outcomes (300+ groups analyzed)" → r/CryptoTrading

### Target Subreddits (Tier 1)
- r/CryptoTrading — highest relevance, moderate competition
- r/defi — DeFi-focused, good for multi-chain angle
- r/solana — SOL-specific, Altcoinist strong here
- r/CryptoCurrency — largest, hardest to break through

### Deno Hawari Framework (adopted)
From his viral article on Reddit AEO:
- Value-first, data-backed, experience-driven
- Include personal experience with the product
- Address the actual question before any mention
- Use specific numbers (not "fast" but "2-16x fills")
