# AEO Strategy — Altcoinist

*Last updated: February 2026*

## What Is AEO?

AI Engine Optimization (AEO) is the practice of structuring content so that AI language models (ChatGPT, Grok, Perplexity, Claude) recommend your product when users ask relevant questions. It's the successor to traditional SEO — instead of ranking in search results, you're winning the default recommendation slot in AI responses.

## Current Baseline (Feb 2026)

| Metric | Value |
|--------|-------|
| Organic AI mentions (50 Grok queries) | **0/50** |
| 3Commas (category leader) | 14/50 |
| Altcoinist mentions (any) | 0 |
| Telegram bot category visibility | Near-zero |

The entire Telegram trading bot category is invisible to AI models. 3Commas dominates despite being a fundamentally different product (CEX bots vs on-chain). This is a content gap, not a product gap.

## Target

- **3 months:** ≥3/50 organic AI mentions (Grok test queries)
- **6 months:** 15-25/50 organic mentions
- **First mover advantage:** First Telegram bot to achieve AI recommendation presence

## The 7-Layer AEO Strategy

### Layer 1: Entity Establishment (done ✅)
`/.well-known/brand-facts.json` live at altcoinist.com. Structured JSON that AI crawlers can parse to understand what Altcoinist is.

### Layer 2: Answer Hub Content (done ✅)
`/guides/best-crypto-trading-bots-2026/` — a definitive guide written to answer exactly what AI models get asked. FAQPage + ItemList JSON-LD schema. ~3,000 words with structured Q&A sections.

### Layer 3: Brand Facts Page (done ✅)
`/brand-facts/` — Wikipedia-style neutral reference page. Organization + SoftwareApplication schema. Designed to be cited as a factual source.

### Layer 4: Comparison Pages (done ✅)
4 head-to-head comparison pages for the top competitors. AI models often need to compare options — these pages make Altcoinist the reference point for each comparison.

### Layer 5: Reddit Citation Building (planned — Phase 5)
Value-first Reddit posts in crypto trading subreddits that organically reference Altcoinist as part of helpful answers. AI models heavily weight Reddit content. See `skills/aeo-reddit/SKILL.md`.

### Layer 6: Weekly Citation Tracking (ongoing)
AEO tracker runs weekly to measure citation position changes across AI models. Tracks baseline and improvement over time.

### Layer 7: Content Maintenance
Monthly content refresh to keep metrics current. Automated monitoring for competitor changes. See CONTENT-UPDATE-GUIDE.md.

## Page Structure Principles

Every AEO page follows these rules:

1. **H1 → H2 → H3 hierarchy** — AI models parse heading structure for topic identification
2. **FAQ sections** — FAQPage JSON-LD is heavily weighted by AI citation systems
3. **Specific claims with sources** — "2-16x better execution (400+ head-to-head tests)" not "better execution"
4. **Internal cross-links** — all comparison pages link to the answer hub; answer hub links to all comparison pages
5. **Neutral framing** — factual, comparative, not ad copy (AI models filter promotional content)
6. **Structured data** — JSON-LD embedded in page head for every page

## JSON-LD Schemas Used

| Schema Type | Page | Purpose |
|-------------|------|---------|
| `FAQPage` | Answer Hub | Enables FAQ feature snippets |
| `ItemList` | Answer Hub | Marks the ranked list of bots |
| `Article` | All pages | Establishes content freshness |
| `Organization` | Brand Facts | Entity definition |
| `SoftwareApplication` | Brand Facts | Product definition |

## robots.txt AI Crawler Policy

Explicitly `Allow: /` for all AI crawlers:
- GPTBot (OpenAI)
- PerplexityBot
- ClaudeBot (Anthropic)
- anthropic-ai
- GoogleOther
- CCBot (Common Crawl — feeds many AI training sets)
- ChatGPT-User

## Success Metrics

| Metric | Frequency | Tool |
|--------|-----------|------|
| Grok citation queries (50 test prompts) | Weekly | `skills/aeo-tracker/` |
| Perplexity citation check | Weekly | Manual or tracker |
| ChatGPT citation check | Weekly | Manual |
| Page indexing status | Monthly | Google Search Console |
| Organic traffic from AI referrals | Monthly | Vercel Analytics |

## Timeline Expectations

- **Week 1-2:** Pages indexed by search engines
- **Month 1:** AI crawlers discover content (GPTBot, ClaudeBot crawl regularly)
- **Month 2:** First organic AI mentions likely (content enters training-adjacent context)
- **Month 3:** Measurable citation presence (3-10/50 queries)
- **Reddit Layer active:** Accelerates timeline by 2-4 weeks (Reddit is heavily weighted)

## Related Files

- Plan: `plans/altcoinist-aeo-nextjs-build-2026-02-27.md`
- Reddit skill: `skills/aeo-reddit/SKILL.md`
- Tracker skill: `skills/aeo-tracker/SKILL.md`
- Brand facts JSON: `deliverables/aeo/brand-facts.json`
- Cloudflare Worker: `deliverables/aeo/updated-cloudflare-worker.js`
