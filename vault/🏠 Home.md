# AEO Department — Mission Control

> **North Star:** Rank Altcoinist #1 on all AI search engines for crypto trading bot queries.
> **Baseline (Feb 26):** 0/50 organic Grok mentions. 3Commas leads at 14/50.
> **Target:** 15-25/50 within 3 months.

---

## Quick Navigation

### 📋 Work
- [[Task Board]] — current tasks, status, blockers
- [[Content Registry]] — all AEO pages tracked

### 🤖 Agents
- [[Research Agent]] — daily intelligence scan
- [[Tracker Agent]] — weekly citation audit
- [[Reddit Growth Team]] — subreddit engagement
- [[Strategy Agent]] — *(planned)*
- [[Ops Agent]] — *(planned)*
- [[Copywriter Agent]] — *(planned)*

### 📁 Reference
- [[decisions/]] — architecture decision records
- [[research/Daily Findings]] — rolling research log

---

## Links

| What | Where |
|------|-------|
| Vercel site | [altcoinist-aeo.vercel.app](https://altcoinist-aeo.vercel.app) |
| GitHub repo | [fridayaltt/altcoinist-aeo](https://github.com/fridayaltt/altcoinist-aeo) |
| brand-facts.json | [altcoinist.com/.well-known/brand-facts.json](https://www.altcoinist.com/.well-known/brand-facts.json) |
| Discord | #seo channel |
| Master Plan | `deliverables/aeo/AEO-MASTER-PLAN.md` |
| Dept Org | `deliverables/aeo/AEO-DEPARTMENT.md` |
| Notion Task Board | [Notion](https://www.notion.so/314b35d7874880e2b7b1c69774992bed) *(secondary)* |

---

## Architecture Decisions (evergreen)

- **Next.js static export on Vercel** — full code control, autonomous building, no manual editor
- **Cloudflare Worker path-based routing** — Framer untouched, selective paths to Vercel
- **Reddit agent data isolation** — structured metadata only, never raw Reddit text
- **All agents read live knowledge bases** — brand-facts.json + ALTCOINIST_PRODUCT.md
- **Neutral authority tone** — include competitors honestly, never superlatives without data
- **Cost:** $0-5/mo marginal (Framer plan + CF free + Vercel free)
