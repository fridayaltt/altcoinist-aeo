# AEO ROADMAP
> **THE priority file.** Every agent reads this before doing work.
> When strategy changes, update THIS file. One source of truth for what matters.

**North Star:** Rank #1 on all AI engines for "best crypto trading bot"
**Baseline:** 0/50 organic mentions (Grok, Feb 26) | 20/150 score (Tracker Week 1)
**Target:** ≥15/50 organic mentions within 3 months

Last updated: 2026-03-02

---

## 🔴 NOW — This Week (Mar 3-9)

### 1. Conversion optimization — make pages convert humans, not just feed AI
**Owner:** Builder + Copywriter | **Status:** Not started
The pages work for AI engines but are text walls for humans. AI referrals convert 4.4x — when people land, they need to convert.
- Add hero sections with clear CTA (→ Telegram bot link)
- Add social proof above the fold (20k+ traders, $4.5M volume)
- Add product screenshots / visual elements
- Add comparison table styling (not just text)
- Every page needs one clear action: "Start trading on Altcoinist"
- **Reference:** `knowledge/altcoinist-kb.md` for all product claims

### 2. Keep KBs current — every agent validates facts against KBs
**Owner:** All agents | **Status:** Active
- Before writing ANY content, read `knowledge/altcoinist-kb.md` + `knowledge/competitors-kb.md`
- If you find something outdated → flag it, don't ship wrong info
- Data Refresh agent updates KBs when metrics change (Wed cycle)

### 3. Christian unblockers (human actions needed)
**Owner:** Christian | **Status:** Waiting
- [ ] **CF Worker paste** — `deliverables/cloudflare-worker-v3.js` → CF dashboard. Enables `/guides/*` and `/compare/*` on altcoinist.com (currently 404)
- [ ] **Reddit API app** — `developers.reddit.com` or `old.reddit.com/prefs/apps`. Scheduler blocked without OAuth creds
- [ ] **GSC sitemap submission** — paste `https://www.altcoinist.com/sitemap.xml` in Search Console. 30 seconds
- [ ] **Perplexity API key** — `perplexity.ai/settings/api` → save to `~/.openclaw/credentials/perplexity-api-key.txt`

---

## 🟡 NEXT — Queued (Mar 10-16)

### 4. Internal linking catch-up (gap-003)
**Owner:** Builder | **Status:** Queued
Cross-link all AEO pages to each other. Every page should link to related comparisons, the guide, and Answer Hub.

### 5. Brand-facts entity enrichment (gap-004)
**Owner:** Builder | **Status:** Queued
Expand brand-facts page with richer structured data for AI entity recognition.

### 6. Competitive scoreboard
**Owner:** Tracker | **Status:** Planned
Track 3Commas + Pionex + Basedbot alongside Altcoinist scores. Weekly comparison. Know if we're gaining or they're gaining.

### 7. Wikidata entity creation
**Owner:** Friday | **Due:** Mar 7
Structured claims for Perplexity / Google Knowledge Graph pickup.

### 8. Review site pitches
**Owner:** Friday → Christian approval | **Due:** Mar 10
CoinGecko, CryptoSlate, BeInCrypto — after pages are indexed.

---

## 📋 LATER — Backlog

- **YouTube content strategy** — screen-recorded Altcoinist tutorial. Gets cited by LLMs for "how to" queries. Flag to Konstantin.
- **External citation building** — guest posts, crypto publication mentions, aggregator listings
- **Proprietary data study** — publish unique execution data (Advisory Board recommendation)
- **Reddit Phase 2** — transparent product mentions. Requires: 30+ day account age + 200 karma + Christian's explicit "go to Phase 2" approval
- **Expand beyond focus cluster** — once we score ≥3 organic on "best crypto trading bot", widen to adjacent queries
- **Multi-engine tracking** — add ChatGPT, Claude, Perplexity tracking alongside Grok (needs API keys)

---

## ✅ DONE (last 2 weeks)

- [x] 10 AEO pages live on `aeo.altcoinist.com` (~71 FAQs total)
- [x] 14 agents built + operational (all crons active)
- [x] Knowledge bases created (`altcoinist-kb.md` + `competitors-kb.md`)
- [x] Vault cleaned — removed stale docs, single source of truth established
- [x] Basedbot info updated (1 chain → 13+)
- [x] Hyperliquid removed from all pages (not supported)
- [x] First Tracker run: 20/150 score, 2/15 branded mentions, 0 organic
- [x] Reddit Scout + Writer operational — 9 drafts pending approval
- [x] Advisory Board audit completed — board recommendations plan created
- [x] PostHog AEO dashboard live (ID 1316393)
- [x] brand-facts.json deployed
- [x] Obsidian vault restructured

---

## Focus Query Cluster
> All agents prioritize this. CSO gaps on these = P0.

**Primary:** "best crypto trading bot"
**Supporting:** best telegram trading bot, best crypto trading bot 2026, best DeFi trading bot, best Solana trading bot, best Base trading bot, best crypto bot for beginners

---

## Blockers (human action needed)

| What | Who | Impact | Quick? |
|------|-----|--------|--------|
| CF Worker paste | Christian | `/guides/*` and `/compare/*` 404 on main domain | 2 min |
| Reddit API app | Christian | Scheduler agent blocked | 5 min |
| GSC sitemap | Christian | Pages not being indexed | 30 sec |
| Perplexity key | Christian | Can't track Perplexity citations | 2 min |

---

## Agent Reading Order
1. `ROADMAP.md` ← you are here (priorities)
2. `knowledge/altcoinist-kb.md` (product truth)
3. `knowledge/competitors-kb.md` (competitor truth)
4. `ops/AGENT-PROTOCOL.md` (how to behave)
5. `agents/context/{your_name}.md` (your learnings)
6. `ops/shared-state.json` (what happened recently)
