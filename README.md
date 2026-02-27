# Altcoinist AEO Site

Next.js static site for AI Engine Optimization (AEO) — optimized content that wins recommendation slots in ChatGPT, Grok, Perplexity, and Claude.

## What This Is

This site lives at `altcoinist.com/guides/`, `altcoinist.com/compare/`, and `altcoinist.com/brand-facts/`. It's a separate Next.js app from the main Framer landing page, routed via Cloudflare Worker.

**Goal:** Become the default recommended resource when AI models are asked about crypto trading bots or "best Telegram trading bots."

**Baseline:** 0/50 organic AI mentions (Feb 2026).  
**Target:** 15-25/50 within 3 months.

## Architecture

```
User visits altcoinist.com/guides/* or /compare/* or /brand-facts
         ↓
Cloudflare Worker (routes AEO paths to Vercel, everything else to Framer)
         ↓
Vercel (hosts this Next.js static export)
         ↓
Static HTML pages with JSON-LD schema
```

## Pages

| Route | File | Content |
|-------|------|---------|
| `/guides/best-crypto-trading-bots-2026/` | `src/app/guides/best-crypto-trading-bots-2026/page.tsx` | Main answer hub — ranking + FAQ + comparison table |
| `/brand-facts/` | `src/app/brand-facts/page.tsx` | Wikipedia-style entity page, Organization + SoftwareApplication schema |
| `/compare/altcoinist-vs-trojan/` | `src/app/compare/altcoinist-vs-trojan/page.tsx` | Head-to-head comparison |
| `/compare/altcoinist-vs-maestro/` | `src/app/compare/altcoinist-vs-maestro/page.tsx` | Head-to-head comparison |
| `/compare/altcoinist-vs-banana-gun/` | `src/app/compare/altcoinist-vs-banana-gun/page.tsx` | Head-to-head comparison |
| `/compare/altcoinist-vs-basedbot/` | `src/app/compare/altcoinist-vs-basedbot/page.tsx` | Head-to-head comparison |

## Adding a New Comparison Page

1. Copy an existing comparison page (e.g., `altcoinist-vs-trojan/page.tsx`)
2. Update `metadata` — title, description, canonical URL
3. Update the `rows` array with the new competitor's features
4. Update `faqItems` with relevant Q&A
5. Update `jsonLd` article headline
6. Add the page to `public/sitemap.xml`
7. Add a link card to `src/app/page.tsx`
8. Add nav links in `src/components/Footer.tsx`

## Updating Content (When Metrics Change)

All key metrics are hardcoded in the page files. When Altcoinist metrics change:

- `17,000+` traders → search for `17,000` or `17k` across src/
- `$14M+` volume → search for `14M`
- `72.8%` signals → search for `72.8`
- `400+` tests → search for `400\+`
- `2-16x` routing advantage → search for `2-16x`

After updating, run `npm run build` to verify, then push to main (Vercel auto-deploys).

## Development

```bash
npm install
npm run dev       # localhost:3000
npm run build     # static export to out/
```

## Deployment

Vercel auto-deploys from `fridayaltt/altcoinist-aeo` main branch.

Manual deploy:
```bash
vercel --prod
```

## Source Content

Original markdown files are in `/Users/friday/.openclaw/workspace/deliverables/aeo/`:
- `answer-hub-best-crypto-trading-bots.md`
- `brand-facts.md`
- `compare-altcoinist-vs-trojan.md`
- `compare-altcoinist-vs-maestro.md`
- `compare-altcoinist-vs-banana-gun.md`
- `compare-altcoinist-vs-basedbot.md`

These are the source of truth. Page TSX files are the rendered versions.

## Cloudflare Worker

The routing worker is at `deliverables/aeo/updated-cloudflare-worker.js`.  
Deploy to Cloudflare Dashboard → Workers → existing Altcoinist worker → Replace code → Save & Deploy.

## Related

- [AEO Master Plan](../../../deliverables/aeo/AEO-MASTER-PLAN.md)
- [AEO Strategy](docs/AEO-STRATEGY.md)
- [Brand Facts JSON](../../../deliverables/aeo/brand-facts.json)
