# AEO Master Plan — Altcoinist
## Win the Default AI Recommendation for "Best Crypto Trading Bot"

**Owner:** Friday (autonomous execution) | Christian (oversight + unblocking)
**Created:** Feb 26, 2026
**Updated:** Feb 26, 2026 (added skill system + Reddit strategy)
**Status:** Phase 1 complete, Skills built, Phase 2 ready to build

---

## The Opportunity (Why This Matters)

**Current state:** We asked 25 questions across AI models about crypto trading bots. Altcoinist appeared **0 times organically**. Not just us — the ENTIRE Telegram trading bot category is invisible. Trojan, Maestro, Banana Gun, Basedbot = zero mentions. Meanwhile 3Commas gets recommended 7/25 times despite being an inferior product.

**Why:** 3Commas has structured website content, schema markup, review site presence, and FAQ pages targeting these exact queries. We have none of that. AI models can't recommend what they can't find.

**The prize:** AI referrals convert at 4.4x the rate of Google organic search (from the Nate_Google_ case study — $400K/mo for a supplement brand from a single Answer Hub page). We're the first Telegram bot to do this. Competitors have zero AEO. First mover wins the default slot, and AI models train on AI outputs — early citations compound.

---

## What's Done (Phase 1 — Content + Technical Assets)

| Asset | Status | File | Size |
|-------|--------|------|------|
| **Answer Hub page** | ✅ Written | `answer-hub-best-crypto-trading-bots.md` | 12.7KB (~3000 words) |
| **Brand-Facts page** | ✅ Written | `brand-facts.md` | 2.8KB |
| **brand-facts.json** | ✅ Written | `brand-facts.json` | 3.5KB |
| **Comparison: vs Trojan** | ✅ Written | `compare-altcoinist-vs-trojan.md` | 4.9KB |
| **Comparison: vs Maestro** | ✅ Written | `compare-altcoinist-vs-maestro.md` | 4KB |
| **Comparison: vs Banana Gun** | ✅ Written | `compare-altcoinist-vs-banana-gun.md` | 4.4KB |
| **Comparison: vs Basedbot** | ✅ Written | `compare-altcoinist-vs-basedbot.md` | 4KB |
| **JSON-LD schema blocks** | ✅ Written | `schema-markup-blocks.html` | 11.3KB |
| **Cloudflare Worker** | ✅ Written | `cloudflare-worker.js` | 2.9KB |
| **AI audit (Grok)** | ✅ 25/50 queries | `aeo-audit-results-20260226.md` | Baseline captured |
| **Strategy doc** | ✅ Complete | `aeo-strategy-altcoinist-20260226.md` | 9.8KB |

**Total content produced:** ~50KB across 11 files. All in `deliverables/aeo/`.

---

## Skill System (keeps everything up-to-date automatically)

Three skills power this system. Each reads from live knowledge bases so content stays current:

| Skill | Purpose | Knowledge Sources |
|-------|---------|-------------------|
| `aeo-content` | Write/update website pages, schema, brand-facts | `brand-facts.json`, `ALTCOINIST_PRODUCT.md`, `COMPETITIVE_LANDSCAPE.md` |
| `aeo-reddit` | Generate citation-optimized Reddit posts/comments | Same + `GROWTH_DATA.md` for real metrics |
| `aeo-tracker` | Weekly citation monitoring, position tracking, competitor detection | Audit results + xAI API |

**Why skills matter:** When Altcoinist ships a new feature or adds a chain, the knowledge base files
get updated. The skills automatically pull fresh data — no manual content rewrites needed. This is
what makes the system self-maintaining.

**Tracker script:** `skills/aeo-tracker/scripts/run-audit.py` — runs 15 priority queries against Grok,
scores each result, outputs JSON for week-over-week comparison. Ready for cron automation.

---

## What's Next — Execution Phases

### Phase 2: Build Pages in Framer ⏳
**Who:** Friday (via Framer MCP)
**Blocked on:** Christian connecting Framer MCP
**Time:** 2-3 hours once unblocked

Pages to create:
1. `/guides/best-crypto-trading-bots-2026` — Answer Hub (THE critical page)
2. `/brand-facts` — Wikipedia-style entity page
3. `/compare/altcoinist-vs-trojan` — Comparison page
4. `/compare/altcoinist-vs-maestro` — Comparison page
5. `/compare/altcoinist-vs-banana-gun` — Comparison page
6. `/compare/altcoinist-vs-basedbot` — Comparison page

For each page I will:
- Create the page with proper heading hierarchy (H1 → H2 → H3)
- Set the URL slug, meta title, meta description, OG tags
- Build FAQ sections (accordion format ideal for AI scraping)
- Inject the correct JSON-LD schema block into the page's `<head>` custom code
- Link pages to each other for internal authority

**What I need from you:**
- Connect Framer MCP so I can build pages directly
- Or: give me Framer edit access so I can work through the browser tool
- Or: if neither works, I'll hand off polished page specs to Zsofi to build manually (slowest path)

---

### Phase 3: Deploy Cloudflare Worker ⏳
**Who:** Christian (5 minutes)
**Blocked on:** Christian doing the steps
**Time:** 5 minutes

Steps:
1. Cloudflare dashboard → Workers & Pages → Create Worker
2. Paste the code from `cloudflare-worker.js` (I'll send it to you directly)
3. Go to Workers Routes → Add route: `altcoinist.com/.well-known/*` → select the worker
4. Test: `curl https://altcoinist.com/.well-known/brand-facts.json`

This makes Altcoinist's structured data available at a standard path that AI crawlers check automatically. Same pattern Google uses for `robots.txt` — but for AI models.

---

### Phase 4: Expand Audit + Set Up Weekly Tracker ⏳
**Who:** Friday (autonomous, no blockers)
**Time:** Ongoing

- Complete remaining 25 audit queries (Q26-Q50)
- Test ChatGPT via gateway (Codex Pro)
- Set up weekly cron: re-run top 15 priority queries every Monday
- Track position changes week-over-week
- Alert when Altcoinist starts appearing (or when competitors make moves)
- Monitor AI crawler visits via Cloudflare analytics (GPTBot, PerplexityBot, ClaudeBot)

---

### Phase 5: Citation Building — Reddit Strategy 🔮
**Who:** Friday (drafts all content via `aeo-reddit` skill) + team/community (posts)
**Time:** Starts Week 2 after pages live, ongoing
**Source:** Deno Hawari framework ("How To Rank #1 On ChatGPT using Reddit")

Reddit is the #1 third-party citation source for AI models — they prioritize specific data points, community-validated recommendations, and comparative discussions.

**5a. Target subreddits (Tier 1):**
r/CryptoTrading, r/defi, r/solana, r/CryptoCurrency

**5b. Weekly content cadence:**
- 3-5 thread responses/week — data-backed answers to "best bot?" threads
- 1 structured comparison post/week — "I tested N bots, here's what matters"
- Problem/solution answers as threads appear

**5c. Citation optimization rules:**
- Lead with experience, not recommendation
- Include specific metrics from knowledge bases (100+ DEXs, 2-16x execution)
- Mention product max ONCE per post, by function not pitch
- Always include honest limitation or tradeoff
- End with discussion question (engagement = AI citation signal)
- NO: link dropping, corporate tone, vague advice, superlatives without data

**5d. Review/comparison site pitches:**
CoinGecko guides, CryptoSlate, BeInCrypto — pitch with exclusive execution benchmark data

**5e. Wikidata entity (one-time, 30 min):**
Create Altcoinist entity with structured claims → feeds Perplexity's knowledge graph

**5f. DeFi aggregator listings:**
Verify data on DeFi Llama, DappRadar — ensure all 7 chains listed correctly

---

## Blockers — What I Need From Christian

| # | What | Why | Time | Priority |
|---|------|-----|------|----------|
| 1 | **Connect Framer MCP** | Lets me build all 6 pages directly without handoffs | 10 min setup | 🔴 Critical |
| 2 | **Deploy Cloudflare Worker** | Serves brand-facts.json at standard AI-readable path | 5 min | 🟡 High (after pages live) |
| 3 | **Review Answer Hub content** | Verify claims, pricing accuracy, feature descriptions | 15 min read | 🟡 High |
| 4 | **Share any existing SEO docs** | You mentioned previous SEO strategy — I'll consume and upgrade the plan | When ready | 🟠 Medium |

**That's it.** Once Framer MCP is connected, I run Phase 2 through 4 autonomously. Phase 5 I'll draft the specific Reddit/outreach plan and bring it back for approval.

---

## How I'll Run This Autonomously

Once unblocked, here's what happens without you needing to do anything:

**Daily:**
- Monitor AI crawler visits (Cloudflare analytics)
- Track any new competitor AEO moves

**Weekly (Monday cron):**
- Re-run 15 priority queries across Grok + ChatGPT
- Log position changes
- Post citation tracker report to #seo

**Monthly:**
- Update Answer Hub with new features/stats
- Update brand-facts.json when metrics change
- Add FAQ items based on new query patterns
- Refresh comparison pages if competitors ship new features

**I'll flag you for:**
- Content accuracy questions (new feature claims, pricing changes)
- Outreach strategy approval (before we start Reddit/review site pitches)
- Competitor AEO alerts (if Trojan/Maestro start doing this)
- Page performance data once we have traffic

---

## Timeline

| Week | What Happens | Who |
|------|-------------|-----|
| **This week** | ✅ Skills built + content written. Connect Framer MCP → build 6 pages → deploy CF Worker | Christian (unblock) → Friday (build) |
| **Week 2** | Pages indexed → weekly tracker cron live → first Reddit drafts ready | Friday |
| **Week 3** | First citation report → Reddit posts going out → pitch review sites → Wikidata entity | Friday |
| **Week 4** | Measure: how many of 50 queries now mention Altcoinist? Adjust strategy based on data. | Friday |
| **Month 2-3** | Optimize: expand content, scale Reddit, add comparison pages, monthly refreshes | Friday |

---

## Success Metrics

| Metric | Now | Month 1 Target | Month 3 Target |
|--------|-----|----------------|----------------|
| Queries mentioning Altcoinist (of 50) | 0 | 5-10 | 15-25 |
| AI referral traffic to site | ~0 | Measurable | Growing |
| brand-facts.json crawler hits/week | 0 | 10+ | 50+ |
| Comparison pages indexed by AI | 0 | All 6 | All 6 + new ones |

---

## Cost

| Item | Cost |
|------|------|
| Framer (existing plan) | $0 additional |
| Cloudflare Worker | Free tier |
| Friday's time | $0 (flat-rate) |
| Reddit/community (organic) | $0 |
| Review site pitches | $0 |
| Perplexity API (optional) | ~$5/mo |
| **Total** | **$0-5/mo marginal** |

---

## Full Asset Inventory

**Content (deliverables/aeo/):**
- Answer Hub page (12.7KB) — the #1 citation asset
- Brand-Facts page (2.8KB) + JSON (3.5KB)
- 4 comparison pages (~17KB total)
- JSON-LD schema blocks (11.3KB)
- Cloudflare Worker script (2.9KB)
- This master plan (updated live)

**Skills (skills/):**
- `aeo-content` — page writing templates, tone rules, schema generation
- `aeo-reddit` — Reddit citation strategy, post templates, subreddit targeting
- `aeo-tracker` — monitoring, scoring, weekly reporting + `scripts/run-audit.py`

**Data:**
- Audit baseline: 25 queries, 0/25 organic mentions (Grok)
- Knowledge sources: `brand-facts.json`, `ALTCOINIST_PRODUCT.md`, `COMPETITIVE_LANDSCAPE.md`

---

*All deliverables in `deliverables/aeo/`. Skills in `skills/aeo-*/`. This plan updates as we learn from the data.*
