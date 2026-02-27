# Content Update Guide

How to maintain the AEO site when metrics or products change.

## Updating Metrics

When Altcoinist metrics change, update them across all page files. Use search-and-replace:

| Metric | Current Value | Search Term |
|--------|---------------|-------------|
| Active traders | 17,000+ | `17,000` or `17k+` |
| Total volume | $14M+ | `14M` |
| Total trades | 13,000+ | `13,000` |
| Execution tests | 400+ | `400+` |
| Routing advantage | 2-16x | `2-16x` |
| Signal hit rate | 72.8% | `72.8` |
| Supported chains | 7 | Check chain list |
| X followers | 103,000+ | `103,000` |

**After updating:**
1. Run `npm run build` — must exit 0
2. Commit: `git add -A && git commit -m "Update metrics: [what changed]" && git push`
3. Vercel auto-deploys within 2 minutes

## Adding a New Comparison Page

1. **Create the page file:**
   ```
   src/app/compare/altcoinist-vs-{competitor}/page.tsx
   ```
   
2. **Copy template** from an existing page (e.g., `altcoinist-vs-trojan/page.tsx`)

3. **Update these fields:**
   - `metadata.title` — "Altcoinist vs {Competitor}: ..."
   - `metadata.description`
   - `metadata.alternates.canonical`
   - `rows` array — feature comparison data
   - `faqItems` array — relevant Q&A pairs
   - `jsonLd.headline` — article title
   - All text content — TL;DR, section content, verdict

4. **Add to sitemap:** `public/sitemap.xml` — add new `<url>` block

5. **Add nav links:**
   - `src/app/page.tsx` — add card to the grid
   - `src/components/Footer.tsx` — add link to Comparisons section
   - Link from Answer Hub's "Related Comparisons" section
   - Link from all other comparison pages' "Related Comparisons" section

6. **Source content:** Write the markdown in `deliverables/aeo/compare-altcoinist-vs-{competitor}.md` first, then convert to TSX

## Updating brand-facts.json

The JSON file at `deliverables/aeo/brand-facts.json` is served at `altcoinist.com/.well-known/brand-facts.json` via the Cloudflare Worker. The Worker serves it inline (not from a file), so to update it:

1. Update `deliverables/aeo/brand-facts.json`
2. Update the same data in `deliverables/aeo/updated-cloudflare-worker.js` (the `brandFacts` object in the worker)
3. Redeploy the Cloudflare Worker

Both files should stay in sync.

## Monthly Content Refresh

Run monthly, typically when metrics update:

1. Check if active trader count has changed → update across pages
2. Check if new chains were added → update chain list in all pages + brand facts
3. Check if any competitor info changed → update comparison pages
4. Update `lastmod` dates in `public/sitemap.xml`
5. Update `dateModified` in JSON-LD schemas in all pages
6. Update "Last updated: February 2026" text in page headers

## Adding New Schema Types

When adding schema to a page, add it to the `jsonLd` object and ensure it's properly nested. Always include:
- `@context: "https://schema.org"`
- `@type` 
- All required fields for that type

Validate at: <https://validator.schema.org/>

## Content Quality Rules

All AEO pages must:
- Use specific numbers, not vague claims ("2-16x better" not "much better")
- Cite the source of claims ("based on 400+ head-to-head tests")
- Include honest limitations (AI models distrust one-sided content)
- Not read like ad copy — factual, comparative, neutral-ish tone
- Have internal links to at least 2 other AEO pages
- Have a FAQ section (critical for AI citation systems)

## Testing After Changes

```bash
# Local development
npm run dev

# Production build test
npm run build
# Must exit 0, all routes listed

# Manual URL check (after deploy)
# Test: https://altcoinist-aeo.vercel.app/guides/best-crypto-trading-bots-2026/
# Test: https://www.altcoinist.com/guides/best-crypto-trading-bots-2026/ (after CF Worker update)
```
