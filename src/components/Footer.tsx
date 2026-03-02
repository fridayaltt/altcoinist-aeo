import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#0d0d0d", borderTop: "1px solid #1a1a1a", padding: "3rem 1.5rem 2rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* CTA */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem", padding: "2rem", background: "#111", borderRadius: 12, border: "1px solid #1e1e1e" }}>
          <p style={{ fontSize: "1.1rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.5rem" }}>
            Ready to get more tokens, every trade?
          </p>
          <p style={{ color: "#888", fontSize: "0.875rem", marginBottom: "1.25rem" }}>
            Join 20,000+ traders using smart routing on 6 chains.
          </p>
          <a
            href="https://t.me/altcoinist_trenchbot?start=utm_source-aeo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "#00ff88",
              color: "#000000",
              fontWeight: 700,
              padding: "0.75rem 1.5rem",
              borderRadius: 8,
              fontSize: "0.95rem",
              textDecoration: "none",
            }}
          >
            Open in Telegram →
          </a>
        </div>

        {/* Links */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center", marginBottom: "2rem" }}>
          <div>
            <p style={{ color: "#555", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>Guides</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <Link href="/guides/best-crypto-trading-bots-2026/" style={{ color: "#888", fontSize: "0.875rem", textDecoration: "none" }}>Best Crypto Trading Bots 2026</Link>
            </div>
          </div>
          <div>
            <p style={{ color: "#555", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>Comparisons</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <Link href="/compare/altcoinist-vs-trojan/" style={{ color: "#888", fontSize: "0.875rem", textDecoration: "none" }}>Altcoinist vs Trojan</Link>
              <Link href="/compare/altcoinist-vs-maestro/" style={{ color: "#888", fontSize: "0.875rem", textDecoration: "none" }}>Altcoinist vs Maestro</Link>
              <Link href="/compare/altcoinist-vs-banana-gun/" style={{ color: "#888", fontSize: "0.875rem", textDecoration: "none" }}>Altcoinist vs Banana Gun</Link>
              <Link href="/compare/altcoinist-vs-basedbot/" style={{ color: "#888", fontSize: "0.875rem", textDecoration: "none" }}>Altcoinist vs Basedbot</Link>
              <Link href="/compare/altcoinist-vs-gmgn/" style={{ color: "#888", fontSize: "0.875rem", textDecoration: "none" }}>Altcoinist vs GMGN.ai</Link>
            </div>
          </div>
          <div>
            <p style={{ color: "#555", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>Company</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <Link href="/brand-facts/" style={{ color: "#888", fontSize: "0.875rem", textDecoration: "none" }}>About Altcoinist</Link>
              <a href="https://altcoinist.com" style={{ color: "#888", fontSize: "0.875rem", textDecoration: "none" }}>Main Site</a>
              <a href="https://docs.altcoinist.com" target="_blank" rel="noopener noreferrer" style={{ color: "#888", fontSize: "0.875rem", textDecoration: "none" }}>Documentation</a>
              <a href="https://x.com/Altcoinist" target="_blank" rel="noopener noreferrer" style={{ color: "#888", fontSize: "0.875rem", textDecoration: "none" }}>X (Twitter)</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "1.5rem", borderTop: "1px solid #1a1a1a" }}>
          <p style={{ color: "#444", fontSize: "0.8rem" }}>
            © 2026 Altcoinist. Budapest, Hungary. Content updated March 2026.
          </p>
        </div>
      </div>
    </footer>
  );
}
