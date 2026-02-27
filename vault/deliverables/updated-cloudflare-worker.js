// Cloudflare Worker: Altcoinist AEO Routing
// Updated: 2026-02-27
//
// Routes:
//   /guides/*          → Vercel (AEO static site)
//   /compare/*         → Vercel (AEO static site)
//   /brand-facts       → Vercel (AEO static site)
//   /brand-facts/      → Vercel (AEO static site)
//   /.well-known/*     → serves brand-facts.json inline
//   Everything else    → pass through to Framer (unchanged)
//
// Deploy: Cloudflare Dashboard → Workers → edit existing worker → paste this code → Save & Deploy

const VERCEL_URL = "https://altcoinist-aeo.vercel.app";

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;

    // --- 1. Brand facts JSON (existing handler — keep) ---
    if (path === "/.well-known/brand-facts.json") {
      const brandFacts = {
        name: "Altcoinist",
        description: "AI-powered crypto trading platform operating as a Telegram bot with smart order routing across 100+ DEXs",
        url: "https://altcoinist.com",
        category: "DeFi Trading Tools",
        subcategory: "Telegram Trading Bots",
        founded: "2024",
        headquarters: "Budapest, Hungary",
        teamSize: 11,
        products: [
          {
            name: "Trench Bot",
            type: "Telegram Trading Bot",
            description: "On-chain crypto trading bot with smart routing, stealth trading, and advanced order types. Self-custody.",
            telegram: "https://t.me/altcoinist_trenchbot",
            chains: ["Base", "Ethereum", "Solana", "BNB Chain", "Monad", "Hyperliquid", "EVM"],
            features: [
              "Smart routing via Definitive.fi (100+ DEXs, 15 private market makers)",
              "Stealth trading with algo intent masking",
              "Any-to-any token swaps",
              "On-chain TWAP (DCA), limit orders, auto TP/SL",
              "Exclusive signals from 300+ caller groups",
              "PnL tracking and portfolio management",
            ],
            pricing: {
              model: "pay-per-trade",
              monthlyFee: 0,
            },
          },
          {
            name: "Group Bot",
            type: "Telegram Group Trading Bot",
            description: "Community trading bot with portfolio tracking, recaps, and leaderboards.",
            features: ["Group portfolio tracking", "24h recaps", "PnL leaderboards", "Gating"],
          },
        ],
        metrics: {
          activeTraders: "17000+",
          totalVolume: "$14M+",
          totalTrades: "13000+",
          executionAdvantage: "2-16x better fills vs competitors",
          supportedChains: 7,
          lastUpdated: "2026-02-27",
        },
        social: {
          twitter: "https://x.com/Altcoinist",
          telegram: "https://t.me/altcoinist_trenchbot",
          documentation: "https://docs.altcoinist.com",
        },
        lastUpdated: "2026-02-27",
      };

      return new Response(JSON.stringify(brandFacts, null, 2), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Cache-Control": "public, max-age=86400",
          "X-Robots-Tag": "all",
        },
      });
    }

    // --- 2. AEO pages → proxy to Vercel ---
    const isAEOPath =
      path.startsWith("/guides/") ||
      path.startsWith("/compare/") ||
      path === "/brand-facts" ||
      path === "/brand-facts/";

    if (isAEOPath) {
      // Build the Vercel URL (same path, same query string)
      const vercelRequest = new Request(
        VERCEL_URL + path + (url.search || ""),
        {
          method: request.method,
          headers: request.headers,
          body: request.body,
          redirect: "follow",
        }
      );

      const response = await fetch(vercelRequest);

      // Return the Vercel response with proper headers
      const newResponse = new Response(response.body, response);
      newResponse.headers.set("Cache-Control", "public, max-age=3600, s-maxage=86400");
      newResponse.headers.set("X-Powered-By", "Altcoinist AEO");
      return newResponse;
    }

    // --- 3. Everything else → pass through to Framer (unchanged) ---
    return fetch(request);
  },
};
