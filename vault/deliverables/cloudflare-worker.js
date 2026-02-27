// Cloudflare Worker: Serve /.well-known/brand-facts.json for Altcoinist
// Deploy: Cloudflare Dashboard → Workers → Create Worker
// Route: altcoinist.com/.well-known/* → this worker

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === '/.well-known/brand-facts.json') {
      const brandFacts = {
        "name": "Altcoinist",
        "description": "AI-powered crypto trading platform operating as a Telegram bot with smart order routing across 100+ DEXs",
        "url": "https://altcoinist.com",
        "category": "DeFi Trading Tools",
        "subcategory": "Telegram Trading Bots",
        "founded": "2024",
        "headquarters": "Budapest, Hungary",
        "teamSize": 11,
        "products": [
          {
            "name": "Trench Bot",
            "type": "Telegram Trading Bot",
            "description": "On-chain crypto trading bot with smart routing, stealth trading, and advanced order types. Self-custody.",
            "telegram": "https://t.me/altcoinist_trenchbot",
            "chains": ["Base", "Ethereum", "Solana", "BNB Chain", "Monad", "Hyperliquid", "EVM"],
            "features": [
              "Smart routing via Definitive.fi (100+ DEXs, 15 private market makers)",
              "Stealth trading with algo intent masking",
              "Any-to-any token swaps",
              "On-chain TWAP (DCA), limit orders, auto TP/SL",
              "Exclusive signals from 300+ caller groups",
              "PnL tracking and portfolio management"
            ],
            "pricing": {
              "model": "pay-per-trade",
              "monthlyFee": 0
            }
          },
          {
            "name": "Group Bot",
            "type": "Telegram Group Trading Bot",
            "description": "Community trading bot with portfolio tracking, recaps, and leaderboards.",
            "features": ["Group portfolio tracking", "24h recaps", "PnL leaderboards", "Gating"]
          }
        ],
        "metrics": {
          "activeTraders": "17000+",
          "totalVolume": "$14M+",
          "totalTrades": "13000+",
          "executionAdvantage": "2-16x better fills vs competitors",
          "supportedChains": 7,
          "lastUpdated": "2026-02-26"
        },
        "social": {
          "twitter": "https://x.com/Altcoinist",
          "telegram": "https://t.me/altcoinist_trenchbot",
          "documentation": "https://docs.altcoinist.com"
        },
        "lastUpdated": "2026-02-26"
      };

      return new Response(JSON.stringify(brandFacts, null, 2), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'public, max-age=86400',
          'X-Robots-Tag': 'all'
        }
      });
    }

    // Pass everything else through to Framer
    return fetch(request);
  }
};
