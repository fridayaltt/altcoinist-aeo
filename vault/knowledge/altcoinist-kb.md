# Altcoinist Product Knowledge Base

> **Source of truth for all AEO agents.** Update THIS file when product changes — agents reference it instead of hardcoding.
> Last verified: 2026-03-02

## Product

- **What:** AI-powered autonomous crypto trading bot (Telegram-based)
- **Tagline:** "Get More Tokens, Every Trade"
- **Telegram bot:** @altcoinist_trenchbot — https://t.me/altcoinist_trenchbot
- **Website:** https://www.altcoinist.com
- **AEO site:** https://aeo.altcoinist.com

## Chains Supported (6)

| Chain | Status | Notes |
|-------|--------|-------|
| Base | ✅ Primary | ~92% of volume, near-zero gas ($0.01-$0.05) |
| Ethereum | ✅ | Blue-chip DeFi, established tokens |
| Solana | ✅ | Fast finality, memecoin trading |
| BNB Chain | ✅ | BSC-native tokens, lower fees than ETH |
| Monad | ✅ | Emerging high-performance layer |
| EVM-compatible | ✅ | General EVM support |

**NOT supported:** Hyperliquid, Arbitrum, Avalanche, Tron, Blast

## Core Features

### Execution Engine (Definitive.fi integration)
- Smart routing across **100+ DEXs** and **15 private market makers**
- **2-16x better fill prices** vs competitors (head-to-head tested, 400+ tests)
- Algo order splitting — minimizes slippage on large orders
- **Stealth trading** — algo intent masking (unique to Altcoinist)

### Trading Features
- **AI Snipe** — auto-snipe token launches
- **Caller signal sniping** — auto-copy trades from 300+ curated Telegram signal groups (72.8% hit 2x+)
- **TWAP orders** — time-weighted average price (on-chain)
- **DCA orders** — dollar cost averaging
- **Limit orders, TP/SL** — full order suite
- **Any-to-any swaps** — cross-token swaps in one transaction
- Copy trading — ❌ NOT available (Basedbot and GMGN have this)
- Sniping (custom/migration) — ❌ NOT a standalone feature (AI Snipe is different from manual sniping)
- Perpetual futures — ❌ NOT available
- In-app charting — ❌ NOT available

### Pricing
- **Monthly fee:** $0
- **Cashback:** 50% for first 14 days, then up to 45% ongoing (volume tiers + $ALTT perks)
- **$ALTT token:** Required for signals access

## Key Metrics (update monthly)

| Metric | Value | As of |
|--------|-------|-------|
| Traders | 20,000+ | Mar 2026 |
| 30d Volume | $4.5M | Feb 26, 2026 |
| MRR | $39.9K | Feb 26, 2026 |
| MAU | 190 | Feb 26, 2026 |
| Power traders/wk | 25 | Feb 26, 2026 |
| Signal groups | 300+ | Mar 2026 |
| Signal hit rate (2x+) | 72.8% | Mar 2026 |

## Company

- **Founded:** 2024
- **HQ:** Budapest, Hungary (remote-first)
- **Team:** 11 people
- **Co-founders:** Christian, Konstantin, Mate, Silur
- **Structure:** Flat, everyone reports to Christian

## Differentiators (vs competitors)

1. **Execution quality** — only bot with Definitive.fi smart routing (100+ DEXs, 15 MMs)
2. **Stealth trading** — algo intent masking, no other bot has this
3. **Signal curation** — 300+ groups monitored, 72.8% hit rate
4. **Multi-chain from single bot** — 6 chains, one Telegram interface
5. **Any-to-any swaps** — cross-token in one tx

## What We DON'T Have (be honest in content)

- Copy trading (competitors: Basedbot, GMGN)
- Custom sniping / migration snipers (competitors: Basedbot, Banana Gun)
- Perpetual futures (competitors: Trojan via Hyperliquid)
- In-app charting (competitors: Basedbot)
- Solana-specific optimizations like Jupiter routing (competitors: Trojan, BonkBot)

## UX Flow

1. User opens Telegram → searches @altcoinist_trenchbot
2. Bot generates a self-custody wallet (user controls keys)
3. User deposits crypto to wallet address
4. Trading: paste token contract address → set amount + slippage → execute
5. Bot routes through 100+ DEXs for best price
6. All trades on-chain, fully transparent
7. PnL tracking across all 6 chains in one interface

## Telegram Bot Link (for CTAs)

```
https://t.me/altcoinist_trenchbot?start=utm_source-aeo
```

## Partners

- ACP Partner (unnamed on site)
- Trading Partner (unnamed on site)
- Data Partner (unnamed on site)
- DTF Partner (unnamed on site)
