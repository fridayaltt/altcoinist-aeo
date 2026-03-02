"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      style={{
        background: "rgba(6, 8, 8, 0.85)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(16px) saturate(180%)",
        WebkitBackdropFilter: "blur(16px) saturate(180%)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        {/* Logo */}
        <Link
          href="https://www.altcoinist.com/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
          }}
        >
          <span
            style={{
              fontSize: "1.2rem",
              fontWeight: 800,
              fontFamily: "'Bricolage Grotesque', sans-serif",
              color: "#ffffff",
              letterSpacing: "-0.03em",
            }}
          >
            Altcoinist
          </span>
          <span
            style={{
              fontSize: "0.65rem",
              background: "rgba(0, 255, 136, 0.1)",
              color: "var(--accent)",
              padding: "3px 8px",
              borderRadius: 6,
              border: "1px solid rgba(0, 255, 136, 0.15)",
              fontWeight: 700,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Guides
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            fontSize: "0.875rem",
          }}
        >
          {[
            { href: "/guides/best-crypto-trading-bots-2026/", label: "Bot Rankings" },
            { href: "/compare/altcoinist-vs-trojan/", label: "Comparisons" },
            { href: "/brand-facts/", label: "About" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                color: "var(--muted)",
                transition: "color 0.2s",
                fontWeight: 500,
                position: "relative",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseOut={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              {item.label}
            </Link>
          ))}

          <a
            href="https://t.me/altcoinist_trenchbot?start=utm_source-aeo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              padding: "0.45rem 1.1rem",
              fontSize: "0.8rem",
              borderRadius: 8,
            }}
          >
            Start Trading →
          </a>
        </nav>
      </div>
    </header>
  );
}
