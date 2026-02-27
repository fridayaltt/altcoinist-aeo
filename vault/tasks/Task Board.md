# AEO Task Board

> Updated by Friday. Last sync: 2026-02-27 18:35 CET
> Source: Notion DB `314b35d7874880e2b7b1c69774992bed` + Discord #aeo conversations

---

## 🔴 Blocked (4)

- [ ] **⏳ Update CF Worker routing → Vercel** `P0` `Deploy` — Christian: paste updated Worker code into CF dashboard. Code posted in #aeo. Routes `/guides/*`, `/compare/*`, `/brand-facts` to Vercel. **#1 blocker for everything.**
- [ ] **Submit sitemap to Google Search Console** `P1` `Build` — Blocked on CF Worker. Pages must be on altcoinist.com first. Accelerates AI crawler discovery.
- [ ] **Refine site build — brand polish + images** `P1` `Build` — Blocked on Gemini API key. Hero images, OG tags, visual polish.
- [ ] **🔴 Gemini API key for images** `P2` `Blocker` — Christian to provide. Needed for nano-banana-pro image generation.

## 🟡 To Do (7)

- [ ] **Build Ops Agent** `P0` `Agent` — Daily: scan Notion task board, assign work to agents, post status to #aeo. [[agents/Ops Agent]]
- [ ] **Build Strategy Agent** `P0` `Agent` — Weekly: synthesize Research + Tracker findings → priority recommendations + content updates. [[agents/Strategy Agent]]
- [ ] **Build Copywriter Agent** `P1` `Agent` — Monthly content refresh, new comparison pages when competitors change. [[agents/Copywriter Agent]]
- [ ] **Reddit posting cron (Wed+Sat)** `P2` `Build` — Scout→Writer→Reviewer pipeline. Needs Christian to approve 5 drafts in `deliverables/aeo/reddit-drafts/` first.
- [ ] **Create Wikidata entity** `P2` `Build` — Structured claims for Perplexity/Google. Due: Mar 7.
- [ ] **Pitch review sites** `P2` `Build` — CoinGecko, CryptoSlate, BeInCrypto. After pages live on altcoinist.com. Due: Mar 10.
- [ ] **GitHub repo transfer** `P2` — `fridayaltt/altcoinist-aeo` → `christianaltt` org. Optional.

## 🟢 In Progress (0)

*(Nothing actively running right now — next session will pick up Ops + Strategy agent builds)*

## ✅ Done (18)

- [x] **Grok 50-query audit baseline** `P0` `Research` — 0/50 organic mentions. 3Commas 14/50. Full results: `memory/tmp/groups/aeo-audit-results-20260226.md`
- [x] **Build Next.js AEO site (Phases 1-4)** `P0` `Build` — 7 pages, static export, deployed to Vercel. <https://altcoinist-aeo.vercel.app>
- [x] **AEO Strategy + Implementation Plan** `P0` `Build` — Full strategy doc: `deliverables/aeo/AEO-MASTER-PLAN.md`
- [x] **AEO Department architecture doc** `P0` `Agent` — 6 agent roles defined: `deliverables/aeo/AEO-DEPARTMENT.md`
- [x] **Design AEO Department org structure** `P0` `Agent` — Friday = dept head, Christian = oversight
- [x] **Build Research Agent** `P0` `Agent` — `skills/aeo-research/SKILL.md` + `scripts/daily-scan.py`. [[agents/Research Agent]]
- [x] **brand-facts.json deployed on CF Worker** `P0` `Deploy` — Live at `altcoinist.com/.well-known/brand-facts.json` (200 OK)
- [x] **Answer Hub page (3000 words)** `P0` `Content` — Best Crypto Trading Bots 2026. [[content/Answer Hub]]
- [x] **4 Comparison pages written** `P1` `Content` — vs Trojan, Maestro, Banana Gun, Basedbot. ~1500 words each.
- [x] **Brand Facts page + JSON** `P1` `Content` — `brand-facts.md` + `brand-facts.json`. [[content/Brand Facts]]
- [x] **JSON-LD schema blocks** `P1` `Build` — ItemList, FAQPage, Organization, Product schemas
- [x] **3 AEO skills built** `P1` `Build` — `aeo-content`, `aeo-reddit`, `aeo-tracker`
- [x] **Research Agent daily cron** `P1` `Build` — `aeo-research-daily` (f873f97d), 04:30 UTC, Codex gpt-5.2
- [x] **Weekly tracker cron live** `P1` `Build` — `aeo-citation-tracker` (accc997b), Mon 09:00 UTC, Codex gpt-5.2
- [x] **Reddit monitoring script** `P1` `Build` — `skills/aeo-reddit/scripts/reddit-scout.py` (14KB)
- [x] **Build Reddit growth agent team** `P1` `Agent` — Scout/Writer/Reviewer/Scheduler. [[agents/Reddit Growth Team]]
- [x] **Generate 5 Reddit content drafts** `P1` `Content` — In `deliverables/aeo/reddit-drafts/`. Awaiting Christian review.
- [x] **ChatGPT audit via OAT** `P1` `Research` — 50 queries via OpenAI models
- [x] **Obsidian vault setup** `P0` `Build` — This vault. Feb 27.

---

## Crons

| Name | ID | Schedule | Model | What |
|------|----|----------|-------|------|
| aeo-research-daily | f873f97d | Daily 04:30 UTC | gpt-5.2 | Scans Reddit + blogs |
| aeo-citation-tracker | accc997b | Mon 09:00 UTC | gpt-5.2 | 15 queries vs Grok |

## Blocker Chain

```
CF Worker deploy (Christian, 2 min)
  → Pages live on altcoinist.com
    → Sitemap submission
    → AI crawler indexing begins
    → First citation measurements (Week 2+)
```
