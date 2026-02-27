"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        background: "rgba(10,10,10,0.95)",
        borderBottom: "1px solid #1a1a1a",
        backdropFilter: "blur(12px)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
        {/* Logo */}
        <Link href="https://www.altcoinist.com/" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ fontSize: "1.15rem", fontWeight: 700, color: "#ffffff", letterSpacing: "-0.02em" }}>
            Altcoinist
          </span>
          <span style={{ fontSize: "0.75rem", background: "#00ff8822", color: "#00ff88", padding: "2px 8px", borderRadius: 999, border: "1px solid #00ff8833", fontWeight: 600 }}>
            Guides
          </span>
        </Link>

        {/* Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "1.5rem", fontSize: "0.875rem" }}>
          <Link href="/guides/best-crypto-trading-bots-2026/" style={{ color: "#888888", transition: "color 0.15s" }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#ffffff")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#888888")}>
            Bot Guide
          </Link>
          <Link href="/compare/altcoinist-vs-trojan/" style={{ color: "#888888", transition: "color 0.15s" }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#ffffff")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#888888")}>
            Comparisons
          </Link>
          <Link href="/brand-facts/" style={{ color: "#888888", transition: "color 0.15s" }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#ffffff")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#888888")}>
            About
          </Link>
          <a
            href="https://t.me/altcoinist_trenchbot"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#00ff88",
              color: "#000000",
              fontWeight: 700,
              padding: "0.4rem 1rem",
              borderRadius: 6,
              fontSize: "0.85rem",
              transition: "background 0.15s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#00cc6a")}
            onMouseOut={(e) => (e.currentTarget.style.background = "#00ff88")}
          >
            Start Trading
          </a>
        </nav>
      </div>
    </header>
  );
}
