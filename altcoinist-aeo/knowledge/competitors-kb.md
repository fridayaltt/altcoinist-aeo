# Competitor Knowledge Base
> Single source of truth for competitor data. AEO agents read this before writing comparisons.
> Update when competitor info changes. Include source + date for each update.

Last updated: 2026-03-02

---

## Competitor Summary

| Bot | Chains | Users | Fee | Key Strength | Key Weakness vs Altcoinist |
|-----|--------|-------|-----|-------------|---------------------------|
| Trojan | SOL + HL perps | 145K+ | 1% | Perps + Solana depth | 1.7x worse spot execution |
| GMGN.ai | 7 (SOL, ETH, Base, BNB, Tron, Monad, Blast) | Large | 1% | Discovery + copy trading | Execution quality gap |
| Maestro | 5 (ETH, Base, SOL, BNB, Arb) | Established | 1% | Longest-running multi-chain | 1.7x worse execution |
| Banana Gun | 4 (ETH, SOL, Base, BNB) | Large | 0.5-1% | Fastest sniping speed | 16x worse execution, 35.3% catastrophic loss rate |
| Basedbot | 13+ chains | Growing | ~1% | Most chains + copy trading | No smart routing, no stealth |
| BonkBot | SOL only | 387K+ | 1% | #1 Solana bot, $7B+ volume | SOL-only, no multi-chain |

---

## Detailed Profiles

### Trojan
- **Type:** Solana-first multi-asset terminal
- **Chains:** Solana (spot) + Hyperliquid (perpetual futures)
- **Users:** 145,000+
- **Fee:** ~1% per trade
- **Key features:**
  - Hyperliquid perps integration (Feb 2026) — BTC, stocks, gold, 50x leverage
  - Jupiter routing for Solana
  - Anti-MEV protection
  - DCA, limit orders, TP/SL
- **Recent:** Launched Hyperliquid perps (Feb 2026) — first Solana terminal to add perps
- **vs Altcoinist:** Trojan wins on Solana depth + perps access. Altcoinist wins on multi-chain spot execution quality (2-16x better fills). Many traders use both.
- **Source:** Public product pages, execution testing (Feb 2026)

### GMGN.ai
- **Type:** Token discovery + copy trading platform (web + Telegram)
- **Chains:** 7 — Solana, Ethereum, Base, BNB, Tron, Monad, Blast
- **Fee:** 1% per transaction
- **Key features:**
  - Token discovery engine (trending, new pairs, smart money tracking)
  - Copy trading (auto-mirror top wallets)
  - Wallet tracking and analytics
  - Web terminal (not just Telegram)
  - In-app charting
- **vs Altcoinist:** GMGN excels at finding tokens; Altcoinist excels at executing trades. Different tools for different stages. Many traders use GMGN to discover → Altcoinist to execute.
- **Source:** Public product pages (Mar 2026)

### Maestro
- **Type:** Established multi-chain Telegram trading bot
- **Chains:** 5 — Ethereum, Base, Solana, BNB, Arbitrum
- **Fee:** ~1% per trade
- **Key features:**
  - Multi-chain support (5 chains)
  - Token sniping
  - DCA, limit orders
  - Anti-MEV
  - Wallet tracking
- **vs Altcoinist:** 1.7x worse execution in head-to-head tests. Fewer chains (5 vs 6). No stealth trading.
- **Source:** Execution testing (Feb 2026)

### Banana Gun
- **Type:** Speed-optimized token sniping bot
- **Chains:** 4 — Ethereum, Solana, Base, BNB
- **Fee:** 0.5-1% per trade
- **Key features:**
  - Fastest sniping — optimized for new token launches
  - Anti-MEV bundles
  - Auto-buy/sell with configurable triggers
  - Speed > routing quality
- **Execution risk:** 35.3% catastrophic loss rate (trades with 3%+ loss) in testing. Speed-first routing sacrifices fill quality.
- **vs Altcoinist:** 16x worse execution. Banana Gun wins on raw sniping speed. Altcoinist wins on everything else — especially larger trades where routing quality matters.
- **Source:** 400+ head-to-head execution tests (Feb 2026)

### Basedbot
- **Type:** Multi-chain Telegram trading bot (originally Base-native)
- **Chains:** 13+ — ETH, Base, SOL, BNB, Arb, Avax, Monad, MegaETH, Unichain, HyperEVM, Abstract, Ink, Plasma
- **Fee:** ~1% per trade
- **Key features:**
  - Most chains of any Telegram bot (13+)
  - Copy trading (auto-mirror wallets)
  - Custom sniping + migration snipers
  - DCA with auto TP
  - In-app charting
  - $BBOT token (100% community airdrop)
  - Anti-MEV
- **Recent:** Expanded well beyond Base — added 12+ chains, copy trading, sniping, $BBOT token. Fastest at adding new chains.
- **vs Altcoinist:** Basedbot wins on chain count and feature breadth (copy trading, sniping, charting). Altcoinist wins on execution quality — no smart routing comparable to Definitive.fi integration. Different strategies: breadth vs depth.
- **Source:** Public product pages (Mar 2026)

### BonkBot
- **Type:** #1 Solana trading bot by volume
- **Chains:** Solana only
- **Users:** 387,000+
- **Volume:** $7B+ total
- **Fee:** 1% per trade
- **Key features:**
  - Native Jupiter routing (Solana-optimized)
  - Fastest Solana execution
  - Token sniping
  - Auto-buy presets
  - Referral rewards (0.5% of ref fees)
  - Min trade: 0.001 SOL
- **vs Altcoinist:** BonkBot is the Solana specialist — if you only trade Solana, it's hard to beat. Altcoinist wins for multi-chain traders and those who care about routing quality. BonkBot can't trade Base, ETH, or any non-Solana chain.
- **Source:** Public product pages, community data (Mar 2026)

---

## Market Landscape Notes

- **No competitor does serious AEO/SEO** — first-mover advantage for Altcoinist
- **3Commas dominates AI citations** (14/50 on Grok) — but they're CEX-focused, different category
- **Pionex** (4/50) and **Cryptohopper** (4/50) also cited but CEX-focused
- **Altcoinist baseline:** 0/50 organic mentions, 6/50 named-only (Grok audit Feb 2026)
- **AI referral traffic converts 4.4x** vs Google organic — high-intent visitors

## Update Log

| Date | What Changed | Source |
|------|-------------|--------|
| 2026-03-02 | Basedbot: 1 chain → 13+ chains, added copy trading/sniping/$BBOT | Product pages |
| 2026-03-02 | Removed Hyperliquid from Altcoinist (not supported) | Christian |
| 2026-03-02 | Altcoinist chains: 7 → 6 | Christian |
| 2026-02-28 | Trojan Hyperliquid perps integration confirmed | Public announcement |
| 2026-02-28 | GMGN.ai added as competitor | Research |
| 2026-02-26 | BonkBot stats: 387K users, $7B volume | Public data |
