# AEO Audit: McCoy 6-Step Framework vs Our Implementation

> Source: Julia McCoy / First Movers — "Answer Engine Optimization" (YouTube, ~24min)
> Audit date: 2026-03-02
> Auditor: Friday

---

## Framework Summary

McCoy's 6-step AEO system (based on analysis of 300,000 keywords):

1. **Target long-tail conversational keywords** (4+ words, natural language)
2. **Target low competition keywords** (KD < 30)
3. **Master informational intent** (99.2% of AIO keywords are informational → educate → convert)
4. **Optimize for multi-feature visibility** (AI Overviews + People Also Ask + Featured Snippets + Images)
5. **Build brand authority across the web** (third-party citations > own-site optimization)
6. **Execute systematic gap analysis** (find where competitors appear but you don't)

Key stat from video: 40% of AI overview citations rank beyond position 10. AEO is the "express elevator" for page-two content.

---

## Step-by-Step Audit

### Step 1: Long-tail Conversational Keywords ✅ STRONG

**What McCoy says:** Target 4+ word natural language queries. AI engines handle conversational queries.

**What we're doing:**
- 71 FAQs across 10 pages targeting 25-word prompts
- FAQPage JSON-LD schema on all 8 content pages
- Questions match how users ask AI ("what is the best crypto trading bot for beginners?")
- Long-tail targeting in comparison pages ("Altcoinist vs Basedbot for Base chain trading")

**Score: 8/10** — Strong foundation. Could expand to more question-based H2 headers (currently only 2 across all guides). McCoy specifically recommends question-based H2s that match People Also Ask queries exactly.

### Step 2: Low Competition Keywords ✅ STRONG

**What McCoy says:** 71% of AI overview keywords have KD < 30. Need ~13 referring domains vs 41 for traditional SEO.

**What we're doing:**
- Crypto Telegram bot AEO space has ZERO competition
- No competitor has any AEO presence
- We're the literal first mover
- 3Commas dominates AI results but has no AEO strategy — it's pure brand momentum

**Score: 9/10** — Best possible situation. The window McCoy describes ("early adopter phase, land grab happening now") is exactly where we are. No one is competing for these keywords with AEO.

### Step 3: Informational Intent with Conversion ⚠️ PARTIAL

**What McCoy says:** 99.2% of AI overview keywords are informational. Strategy: "Educate through the answer engine → build trust → guide to conversion through strategic CTAs."

**What we're doing:**
- ✅ Strong informational content (comprehensive guides, honest comparisons)
- ✅ Each comparison page has 1 CTA button to Telegram bot
- ✅ Guides have 2-3 CTA placements
- ❌ No above-fold CTA on ANY page
- ❌ No social proof above the fold (trader count, volume stats)
- ❌ No product screenshots or demo visuals
- ❌ No "obvious next click" — CTAs are buried in text walls
- ❌ No conversion-optimized landing section per page

**Score: 4/10** — Content educates well but does almost nothing to convert. A high-intent user from ChatGPT lands on our comparison page and sees a wall of text. No screenshot of the product. No "Start trading in 30 seconds" CTA above the fold. No social proof. We're building the top of the funnel but the bottom leaks entirely.

**This is the #1 thing Christian flagged.**

### Step 4: Multi-Feature AEO Visibility ⚠️ PARTIAL

**What McCoy says:** AI overviews trigger an average of 3 other features simultaneously. Optimize for the "triple crown": PAA (60%+ overlap), Featured Snippets (50%+ overlap), Image thumbnails.

**What we're doing:**
- ✅ FAQPage schema (targets PAA)
- ✅ Comprehensive long-form content (targets AI overview citations)
- ❌ **ZERO images** on any content page (no product screenshots, no comparison charts as images, no infographics)
- ❌ **No OpenGraph images** for social sharing / AI crawling
- ❌ Only 2 question-based H2 headers across all guides (should be 10+)
- ❌ No "concise quotable answer" pattern — McCoy says first 2-3 sentences of each section should be standalone Featured Snippet candidates
- ❌ No image alt text opportunities (because no images)

**Score: 3/10** — We're optimizing for ONE feature (AI overviews via content depth) and ignoring the other three (PAA formatting, Featured Snippets, Images). McCoy's data says these features co-occur — we're leaving 60%+ of the visibility on the table.

**Images are the biggest miss.** Visual AEO is a separate vector. Product screenshots, comparison table images, infographics — each one is a citation opportunity.

### Step 5: Brand Authority Across the Web ❌ MISSING

**What McCoy says:** "Most people think AEO is about optimizing your website. **Wrong.** Answer engine optimization is about optimizing your brand's presence across the entire web." AI engines cite TechCrunch, PCMag, Capterra — NOT brand websites. Third-party citations feed AI answers.

**What we're doing:**
- ❌ 100% of effort is on our own site (aeo.altcoinist.com)
- ❌ Zero third-party mentions or citations
- ❌ No crypto publication presence (CoinGecko, CryptoSlate, BeInCrypto, Decrypt)
- ❌ No review site presence (no "best crypto trading bot" review articles on external sites)
- ❌ No Wikidata entity (planned for Mar 7, not done)
- ❌ Reddit presence blocked (API issues, account too new)
- ❌ No outreach strategy to publications / journalists
- ❌ No monitoring of what third-party sources cite about competitors

**Score: 1/10** — This is our biggest strategic gap. McCoy explicitly shows that for "best project management software," the AI overview cites TechCrunch, PCMag, Capterra — NOT the brand websites. The crypto equivalent would be CoinGecko, CryptoSlate, CoinDesk, BeInCrypto reviewing "best crypto trading bots" and mentioning Altcoinist. We have NONE of this.

**This changes our strategy.** Own-site content is necessary but not sufficient. Third-party citations may matter MORE for AI engine ranking than our own pages.

### Step 6: Systematic Gap Analysis ⚠️ PARTIAL

**What McCoy says:** Find where competitors appear in AI results but you don't. Two-pronged attack: (1) create superior content targeting gaps, (2) outreach to existing citation sources.

**What we're doing:**
- ✅ 50-query Grok audit completed (baseline established)
- ✅ Tracker runs weekly (Grok + ChatGPT)
- ✅ Competitive scores tracked (3Commas 14/50, us 0/50 organic)
- ❌ No systematic mapping of WHERE competitors appear (which third-party sites cite them?)
- ❌ No outreach to those citation sources
- ❌ Tracker only covers Grok and ChatGPT (not Perplexity — blocked by missing API key)
- ❌ No "what queries does 3Commas win that we could target?" analysis

**Score: 5/10** — We have the detection layer (Tracker) but not the response layer (outreach, gap-specific content, third-party relationship building).

---

## Overall Score: 5/10

| Step | Area | Score | Priority |
|------|------|-------|----------|
| 1 | Long-tail keywords | 8/10 | Low (maintain) |
| 2 | Low competition | 9/10 | Low (maintain) |
| 3 | Informational → Conversion | 4/10 | 🔴 HIGH |
| 4 | Multi-feature visibility | 3/10 | 🔴 HIGH |
| 5 | Brand authority (third-party) | 1/10 | 🔴 CRITICAL |
| 6 | Gap analysis | 5/10 | 🟡 MEDIUM |

---

## What This Means for Our Strategy

### We've been building half the system.

Our AEO site is solid for AI engine consumption (Steps 1-2). But we've completely neglected:

1. **Converting the traffic** (Step 3) — humans land on our pages and bounce
2. **Visual presence** (Step 4) — zero images = zero image-based citations
3. **Third-party authority** (Step 5) — this may be MORE important than own-site content

### The McCoy insight that changes everything:

> "Search 'best project management software.' The AI overview mentions Asana, Monday.com, Trello. But look at the sources. **None of them are the actual brand websites.** They're TechCrunch, PCMag, Capterra."

If this holds for crypto (and it likely does), then **getting CoinGecko or CryptoSlate to write "best crypto trading bots 2026" and mention Altcoinist is worth more than all 10 of our own pages combined.**

---

## Recommended Action Plan

### Phase A: Conversion Layer (Week 1) — addresses Steps 3 + 4

1. Add hero section to every page: product screenshot, social proof (20k+ traders), clear CTA above fold
2. Add OG images for all pages (social sharing + AI crawling)
3. Add 2-3 more CTAs per page (mid-content, after comparison table, bottom)
4. Convert H2 headers to question format where natural (PAA targeting)
5. Add "concise quotable answer" as first 2-3 sentences of each major section (Featured Snippet bait)

### Phase B: Visual AEO (Week 1-2) — addresses Step 4

1. Product screenshots (Telegram bot interface)
2. Comparison table as image (shareable, citable)
3. Infographics: "How Altcoinist Routes Your Trade" (execution advantage visual)
4. Each page gets at least 2-3 relevant images with descriptive alt text

### Phase C: Third-Party Authority (Week 2-4) — addresses Step 5

1. Create Wikidata entity for Altcoinist (immediate)
2. Submit to crypto review aggregators: CoinGecko listings, CryptoSlate, DappRadar
3. Pitch "best crypto trading bots 2026" review articles to: BeInCrypto, Decrypt, CoinTelegraph, CryptoSlate
4. Get listed on bot comparison sites / directories
5. Reddit presence (Phase 1 karma building already in progress)
6. Community mentions: crypto Telegram groups, Discord servers (organic, not spam)

### Phase D: Enhanced Gap Analysis (Week 3-4) — addresses Step 6

1. Map exactly which third-party sites feed 3Commas' AI citations
2. Target those same publications for Altcoinist mentions
3. Expand Tracker to monitor third-party citation sources, not just AI engine outputs
4. Build a "citation source database" — which publications do AI engines trust for crypto?

---

## Key Metric Shifts

**Current KPIs:** AI engine mentions, organic citation count
**Add KPIs:** Third-party citation count, conversion rate from AEO pages, image citation appearances, CTA click-through rate

---

## Bottom Line

We built a strong content foundation (Steps 1-2) on a solid technical stack (Next.js, JSON-LD, FAQ schema). But we're operating like AEO = own-site content optimization. McCoy's framework shows AEO = brand authority across the entire web, with own-site as just one input.

The conversion gap (no CTAs, no visuals, no social proof) means even when AI engines DO cite us, the humans who land don't convert. And the third-party gap means AI engines may never cite us heavily because we lack the external authority signals they weight most.

**Priority order: Phase C (third-party) > Phase A (conversion) > Phase B (visual) > Phase D (gap analysis)**

Third-party authority is the unlock. Everything else amplifies it.
