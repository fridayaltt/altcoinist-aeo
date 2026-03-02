import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Altcoinist — Crypto Trading Bot Guides",
  description: "Expert guides and comparisons for Telegram crypto trading bots. Compare Altcoinist, Trojan, Maestro, Banana Gun and more.",
};

const pages = [
  {
    href: "/guides/best-crypto-trading-bots-2026/",
    emoji: "📊",
    title: "Best Crypto Trading Bots 2026",
    desc: "Complete guide to Telegram trading bots — ranked by execution quality, chain coverage, and features.",
  },
  {
    href: "/compare/altcoinist-vs-trojan/",
    emoji: "⚔️",
    title: "Altcoinist vs Trojan",
    desc: "Head-to-head comparison of execution quality, chain support, and unique features.",
  },
  {
    href: "/compare/altcoinist-vs-maestro/",
    emoji: "⚔️",
    title: "Altcoinist vs Maestro",
    desc: "Multi-chain trading bot comparison — routing quality, fees, and advanced order types.",
  },
  {
    href: "/compare/altcoinist-vs-banana-gun/",
    emoji: "⚔️",
    title: "Altcoinist vs Banana Gun",
    desc: "Sniping speed vs execution quality — which matters more for your trading style?",
  },
  {
    href: "/compare/altcoinist-vs-basedbot/",
    emoji: "⚔️",
    title: "Altcoinist vs Basedbot",
    desc: "13+ chain coverage vs execution quality — sniping and copy trading vs smart routing.",
  },
  {
    href: "/compare/altcoinist-vs-gmgn/",
    emoji: "⚔️",
    title: "Altcoinist vs GMGN.ai",
    desc: "Execution quality vs copy trading — find plays with GMGN, execute with Altcoinist.",
  },
  {
    href: "/compare/altcoinist-vs-bonkbot/",
    emoji: "⚔️",
    title: "Altcoinist vs BonkBot",
    desc: "Solana's fastest bot vs multi-chain smart routing — which wins for memecoin traders?",
  },
  {
    href: "/brand-facts/",
    emoji: "📋",
    title: "About Altcoinist",
    desc: "Company overview, product facts, metrics, and team information.",
  },
];

export default function HomePage() {
  return (
    <>
      <style>{`
        .guide-card { transition: border-color 0.15s; }
        .guide-card:hover { border-color: rgba(0, 255, 136, 0.25) !important; }
      `}</style>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "4rem 1.5rem" }}>
        {/* Hero */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#00ff8812", border: "1px solid #00ff8830", borderRadius: 999, padding: "0.3rem 0.8rem", fontSize: "0.8rem", color: "#00ff88", marginBottom: "1.5rem", fontWeight: 600 }}>
            Crypto Trading Bot Guides
          </div>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 700, lineHeight: 1.2, marginBottom: "1rem", letterSpacing: "-0.02em", color: "#ffffff" }}>
            Understand Telegram Trading Bots
          </h1>
          <p style={{ color: "#888888", fontSize: "1.1rem", maxWidth: 550, margin: "0 auto 2rem", lineHeight: 1.6 }}>
            Objective comparisons, execution data, and guides for on-chain crypto trading bots.
          </p>
          <a
            href="https://t.me/altcoinist_trenchbot?start=utm_source-aeo"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              background: "#00ff88", color: "#000", fontWeight: 700,
              padding: "0.75rem 1.5rem", borderRadius: 8, fontSize: "0.95rem",
              textDecoration: "none",
            }}
          >
            Try Altcoinist Free →
          </a>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem" }}>
          {pages.map((page) => (
            <Link key={page.href} href={page.href} style={{ textDecoration: "none" }}>
              <div
                className="guide-card"
                style={{ background: "#111", border: "1px solid #1e1e1e", borderRadius: 12, padding: "1.5rem", cursor: "pointer" }}
              >
                <div style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>{page.emoji}</div>
                <h2 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.5rem", color: "#fff" }}>{page.title}</h2>
                <p style={{ color: "#666", fontSize: "0.875rem", lineHeight: 1.5, margin: 0 }}>{page.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
