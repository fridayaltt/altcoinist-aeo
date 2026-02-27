// Cloudflare Worker: Altcoinist AEO Routing
// Updated: 2026-02-27 (v2 — fixed passthrough + compatibility)
//
// Routes:
//   /guides/*          → Vercel (AEO static site)
//   /compare/*         → Vercel (AEO static site)
//   /brand-facts       → Vercel (AEO static site)
//   /.well-known/*     → serves brand-facts.json inline
//   Everything else    → pass through to Framer origin

const VERCEL_URL = "https://altcoinist-aeo.vercel.app";
const FRAMER_ORIGIN = "https://altcoinist.framer.website";

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  const path = url.pathname;

  // --- 1. Brand facts JSON ---
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
            "PnL tracking and portfolio management"
          ],
          pricing: { model: "pay-per-trade", monthlyFee: 0 }
        },
        {
          name: "Group Bot",
          type: "Telegram Group Trading Bot",
          description: "Community trading bot with portfolio tracking, recaps, and leaderboards.",
          features: ["Group portfolio tracking", "24h recaps", "PnL leaderboards", "Gating"]
        }
      ],
      metrics: {
        activeTraders: "17000+",
        totalVolume: "$14M+",
        totalTrades: "13000+",
        executionAdvantage: "2-16x better fills vs competitors",
        supportedChains: 7,
        lastUpdated: "2026-02-27"
      },
      social: {
        twitter: "https://x.com/Altcoinist",
        telegram: "https://t.me/altcoinist_trenchbot",
        documentation: "https://docs.altcoinist.com"
      },
      lastUpdated: "2026-02-27"
    };

    return new Response(JSON.stringify(brandFacts, null, 2), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "public, max-age=86400",
        "X-Robots-Tag": "all"
      }
    });
  }

  // --- 2. AEO pages → proxy to Vercel ---
  const isAEOPath =
    path.startsWith("/guides/") ||
    path.startsWith("/compare/") ||
    path === "/brand-facts" ||
    path === "/brand-facts/";

  if (isAEOPath) {
    const vercelURL = VERCEL_URL + path + (url.search || "");
    const response = await fetch(vercelURL, {
      method: request.method,
      headers: {
        "User-Agent": request.headers.get("User-Agent") || "",
        "Accept": request.headers.get("Accept") || "*/*",
        "Accept-Language": request.headers.get("Accept-Language") || ""
      },
      redirect: "follow"
    });

    const newHeaders = new Headers(response.headers);
    newHeaders.set("Cache-Control", "public, max-age=3600, s-maxage=86400");
    newHeaders.set("X-Powered-By", "Altcoinist AEO");

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders
    });
  }

  // --- 3. Everything else → Framer origin (NOT fetch(request) which loops) ---
  const framerURL = FRAMER_ORIGIN + path + (url.search || "");
  const framerResponse = await fetch(framerURL, {
    method: request.method,
    headers: request.headers,
    body: request.body,
    redirect: "follow"
  });

  return new Response(framerResponse.body, {
    status: framerResponse.status,
    statusText: framerResponse.statusText,
    headers: framerResponse.headers
  });
}
