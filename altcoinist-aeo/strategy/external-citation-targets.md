# External Citation Targets — Ranked by AEO Impact

_Priority: free self-submit first, pitched coverage later._

---

## Tier 1 — Self-Submit (no approval needed, factual listings)

### 1. DappRadar
- **URL:** dappradar.com/developers → "Submit project"
- **Type:** dApp listing (free)
- **Requirements:** Logo (250x250), description, smart contract addresses, social links, blockchain selection
- **Why:** DappRadar is cited by AI models when asked about DeFi tools. Free listing. High AEO value.
- **Status:** ⬜ Not submitted
- **Note:** Altcoinist is a Telegram bot (not a traditional dApp with visible smart contracts). May need to submit as "Web3 tool/service" category.

### 2. DefiLlama
- **URL:** github.com/DefiLlama/DefiLlama-Adapters → PR
- **Type:** Protocol listing (free, open-source)
- **Requirements:** GitHub PR with adapter script that calculates TVL/volume. Need contract addresses.
- **Why:** DefiLlama is THE reference for DeFi protocol data. AI models pull from it heavily.
- **Status:** ⬜ Not submitted
- **Blocker:** Need Tiago to provide the smart contract addresses and volume calculation logic. The adapter needs to compute real on-chain metrics.

### 3. CoinGecko
- **URL:** coingecko.com/en/coins/listing → request form
- **Type:** Token listing for $ALTT
- **Requirements:** Token contract address, project info, social links, CoinMarketCap listing helps
- **Why:** CoinGecko is one of the top-cited crypto data sources by every AI model.
- **Status:** ⬜ Not submitted
- **Note:** This lists the $ALTT token. The Altcoinist product gets mentioned in the token's description/ecosystem page.

### 4. Product Hunt
- **URL:** producthunt.com → launch
- **Type:** Product launch (free)
- **Requirements:** Product description, images, maker account
- **Why:** AI models reference Product Hunt for "best [tool]" queries. Free.
- **Status:** ⬜ Not submitted

---

## Tier 2 — Structured Data (no approval needed)

### 5. Wikidata
- **URL:** wikidata.org → create entity
- **Type:** Knowledge base entity (free)
- **Requirements:** At least one independent source citing Altcoinist. If none exist → defer until we have a review listing.
- **Why:** LLMs use Wikidata for entity recognition. An entity = "this thing exists and is notable."
- **Status:** ⬜ Deferred (need independent source first)

### 6. Schema.org / JSON-LD
- **Status:** ✅ Already done — all AEO pages have FAQPage, Article, Organization, SoftwareApplication, BreadcrumbList markup
- **Next:** Ensure brand-facts.json at `/.well-known/brand-facts.json` is served correctly from aeo.altcoinist.com

---

## Tier 3 — Pitched Coverage (needs Christian's approval)

### 7. Crypto publications
- **Targets:** CoinDesk, BeInCrypto, CryptoSlate, The Block
- **Angle:** "Altcoinist execution speed data: 400+ trades tested, 2-16x better fills" (data story)
- **Status:** ⬜ Templates drafted, need approval before sending

### 8. Comparison/review sites
- **Targets:** Trustpilot, G2 (if applicable)
- **Angle:** Collect real user reviews → submit
- **Status:** ⬜ Not started

### 9. YouTube reviewers
- **Targets:** Crypto trading bot review channels
- **Angle:** Offer execution data / demo for review
- **Status:** ⬜ Not started

---

## Submission Priority Order

```
[WEEK 1]  DappRadar (self-submit, 30 min)
          Product Hunt (self-submit, 1 hour)
[WEEK 2]  CoinGecko $ALTT listing (self-submit, depends on contract info)
          DefiLlama PR (needs Tiago for adapter)
[WEEK 3+] Wikidata (after first external listing is live)
          Pitched coverage (after Christian approves templates)
```

---
_Created March 2, 2026. Update status after each submission._
