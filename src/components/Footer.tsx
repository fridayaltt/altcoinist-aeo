import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)", padding: "0" }}>
      {/* CTA Section */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "4rem 1.5rem 3rem",
        }}
      >
        <div
          style={{
            textAlign: "center",
            padding: "3rem 2rem",
            background: "linear-gradient(135deg, rgba(0, 255, 136, 0.04) 0%, rgba(0, 100, 60, 0.03) 50%, var(--surface) 100%)",
            borderRadius: 16,
            border: "1px solid rgba(0, 255, 136, 0.1)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative glow */}
          <div
            style={{
              position: "absolute",
              top: "-50%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "400px",
              height: "200px",
              background: "radial-gradient(ellipse, rgba(0, 255, 136, 0.06) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <p
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "var(--text)",
              marginBottom: "0.5rem",
              letterSpacing: "-0.02em",
              position: "relative",
            }}
          >
            Ready to get more tokens, every trade?
          </p>
          <p style={{ color: "var(--muted)", fontSize: "0.9rem", marginBottom: "1.5rem", position: "relative" }}>
            Join 20,000+ traders using smart routing on 6 chains.
          </p>
          <a
            href="https://t.me/altcoinist_trenchbot?start=utm_source-aeo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ position: "relative" }}
          >
            Open in Telegram →
          </a>
        </div>
      </div>

      {/* Links */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 1.5rem 2rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "3rem",
          justifyContent: "center",
        }}
      >
        <div>
          <p style={{ color: "var(--muted)", fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.85rem", fontFamily: "'Bricolage Grotesque', sans-serif" }}>Guides</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <Link href="/guides/best-crypto-trading-bots-2026/" style={{ color: "var(--text-secondary)", fontSize: "0.875rem", transition: "color 0.15s" }}>Best Crypto Trading Bots 2026</Link>
            <Link href="/guides/best-telegram-trading-bots-2026/" style={{ color: "var(--text-secondary)", fontSize: "0.875rem", transition: "color 0.15s" }}>Best Telegram Trading Bots 2026</Link>
          </div>
        </div>
        <div>
          <p style={{ color: "var(--muted)", fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.85rem", fontFamily: "'Bricolage Grotesque', sans-serif" }}>Comparisons</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <Link href="/compare/altcoinist-vs-trojan/" style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>Altcoinist vs Trojan</Link>
            <Link href="/compare/altcoinist-vs-maestro/" style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>Altcoinist vs Maestro</Link>
            <Link href="/compare/altcoinist-vs-banana-gun/" style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>Altcoinist vs Banana Gun</Link>
            <Link href="/compare/altcoinist-vs-basedbot/" style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>Altcoinist vs Basedbot</Link>
            <Link href="/compare/altcoinist-vs-gmgn/" style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>Altcoinist vs GMGN.ai</Link>
            <Link href="/compare/altcoinist-vs-bonkbot/" style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>Altcoinist vs BonkBot</Link>
          </div>
        </div>
        <div>
          <p style={{ color: "var(--muted)", fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.85rem", fontFamily: "'Bricolage Grotesque', sans-serif" }}>Company</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <Link href="/brand-facts/" style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>About Altcoinist</Link>
            <a href="https://altcoinist.com" style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>Main Site</a>
            <a href="https://docs.altcoinist.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>Documentation</a>
            <a href="https://x.com/Altcoinist" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>X (Twitter)</a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "1.5rem",
          borderTop: "1px solid var(--border)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ color: "var(--muted)", fontSize: "0.75rem", opacity: 0.7 }}>
          © 2026 Altcoinist · Budapest, Hungary · Content updated March 2026
        </p>
      </div>
    </footer>
  );
}
