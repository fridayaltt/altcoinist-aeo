"use client";
import Link from "next/link";

const guides = [
  {
    href: "/guides/best-crypto-trading-bots-2026/",
    title: "Best Crypto Trading Bots 2026",
    desc: "Complete guide to Telegram trading bots — ranked by execution quality, chain coverage, and features.",
    tag: "Guide",
  },
  {
    href: "/guides/best-telegram-trading-bots-2026/",
    title: "Best Telegram Trading Bots 2026",
    desc: "Answer hub for the most-asked questions about Telegram trading bots in 2026.",
    tag: "Guide",
  },
];

const comparisons = [
  { href: "/compare/altcoinist-vs-trojan/", title: "vs Trojan", desc: "Multi-chain spot execution vs Solana depth + Hyperliquid perps.", verdict: "Different strengths" },
  { href: "/compare/altcoinist-vs-maestro/", title: "vs Maestro", desc: "Smart routing quality vs established multi-chain presence.", verdict: "Altcoinist wins on execution" },
  { href: "/compare/altcoinist-vs-banana-gun/", title: "vs Banana Gun", desc: "Sniping speed vs execution quality — 16x fill difference.", verdict: "Speed vs quality" },
  { href: "/compare/altcoinist-vs-basedbot/", title: "vs Basedbot", desc: "13+ chains & copy trading vs smart routing on 6 chains.", verdict: "Breadth vs depth" },
  { href: "/compare/altcoinist-vs-gmgn/", title: "vs GMGN.ai", desc: "Token discovery & copy trading vs execution quality.", verdict: "Find with GMGN, execute with Altcoinist" },
  { href: "/compare/altcoinist-vs-bonkbot/", title: "vs BonkBot", desc: "Solana's #1 bot (387K users) vs multi-chain smart routing.", verdict: "SOL specialist vs multi-chain" },
];

const stats = [
  { value: "20,000+", label: "Traders" },
  { value: "100+", label: "DEXs Routed" },
  { value: "6", label: "Chains" },
  { value: "2-16×", label: "Better Fills" },
];

function HoverCard({ children, accent, className, style }: { children: React.ReactNode; accent?: boolean; className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={className}
      style={{
        background: accent ? "linear-gradient(135deg, rgba(0, 255, 136, 0.03) 0%, var(--card) 100%)" : "var(--card)",
        border: accent ? "1px solid rgba(0, 255, 136, 0.12)" : "1px solid var(--border)",
        borderRadius: accent ? 14 : 12,
        padding: accent ? "1.75rem" : "1.25rem 1.5rem",
        cursor: "pointer",
        transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
        ...style,
      }}
      onMouseOver={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = accent ? "rgba(0, 255, 136, 0.3)" : "var(--border-hover)";
        el.style.transform = "translateY(-2px)";
        if (accent) el.style.boxShadow = "0 8px 30px rgba(0, 255, 136, 0.06)";
        else el.style.background = "var(--card-hover)";
      }}
      onMouseOut={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = accent ? "rgba(0, 255, 136, 0.12)" : "var(--border)";
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
        if (!accent) el.style.background = "var(--card)";
      }}
    >
      {children}
    </div>
  );
}

export default function HomeContent() {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem" }}>

      {/* ===== HERO ===== */}
      <section style={{ paddingTop: "5rem", paddingBottom: "4rem", textAlign: "center", position: "relative" }}>
        <div style={{ position: "absolute", top: "-10%", left: "50%", transform: "translateX(-50%)", width: "600px", height: "300px", background: "radial-gradient(ellipse, rgba(0, 255, 136, 0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div className="animate-fade-up">
          <span className="tag tag-green" style={{ marginBottom: "1.5rem", display: "inline-flex" }}>
            ⚡ Crypto Trading Bot Intelligence
          </span>
        </div>

        <h1
          className="animate-fade-up delay-1"
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontSize: "3.25rem",
            fontWeight: 800,
            lineHeight: 1.08,
            marginBottom: "1.25rem",
            letterSpacing: "-0.035em",
            color: "var(--text)",
            maxWidth: 700,
            marginLeft: "auto",
            marginRight: "auto",
            position: "relative",
          }}
        >
          Compare Trading Bots.
          <br />
          <span style={{ color: "var(--accent)" }}>Get Better Fills.</span>
        </h1>

        <p className="animate-fade-up delay-2" style={{ color: "var(--text-secondary)", fontSize: "1.1rem", maxWidth: 520, margin: "0 auto 2rem", lineHeight: 1.65, position: "relative" }}>
          Data-driven comparisons and execution analysis for Telegram crypto trading bots. No fluff — just the numbers that matter.
        </p>

        <div className="animate-fade-up delay-3" style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap", position: "relative" }}>
          <a href="https://t.me/altcoinist_trenchbot?start=utm_source-aeo" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Try Altcoinist Free →
          </a>
          <Link href="/guides/best-crypto-trading-bots-2026/" className="btn-secondary">
            Read the Rankings
          </Link>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="animate-fade-up delay-4" style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "5rem" }}>
        {stats.map((stat) => (
          <div key={stat.label} className="stat-badge">
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </section>

      {/* ===== GUIDES ===== */}
      <section style={{ marginBottom: "4rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "1.5rem", fontWeight: 800, color: "var(--text)", letterSpacing: "-0.02em" }}>
            Guides
          </h2>
          <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "1rem" }}>
          {guides.map((guide, i) => (
            <Link key={guide.href} href={guide.href} style={{ textDecoration: "none" }}>
              <HoverCard accent className={`animate-fade-up delay-${i + 1}`}>
                <span className="tag tag-green" style={{ marginBottom: "0.85rem" }}>📊 {guide.tag}</span>
                <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--text)", letterSpacing: "-0.01em" }}>
                  {guide.title}
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.55, margin: 0 }}>{guide.desc}</p>
              </HoverCard>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== COMPARISONS ===== */}
      <section style={{ marginBottom: "4rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "1.5rem", fontWeight: 800, color: "var(--text)", letterSpacing: "-0.02em" }}>
            Head-to-Head Comparisons
          </h2>
          <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "0.85rem" }}>
          {comparisons.map((comp, i) => (
            <Link key={comp.href} href={comp.href} style={{ textDecoration: "none" }}>
              <HoverCard className={`animate-fade-up delay-${i + 1}`} style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "1.05rem", fontWeight: 700, color: "var(--text)", margin: 0 }}>
                    Altcoinist {comp.title}
                  </h3>
                  <span style={{ color: "var(--muted)", fontSize: "0.8rem" }}>→</span>
                </div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.825rem", lineHeight: 1.5, margin: 0 }}>{comp.desc}</p>
                <span style={{ fontSize: "0.7rem", fontWeight: 600, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.04em", marginTop: "0.25rem" }}>
                  {comp.verdict}
                </span>
              </HoverCard>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== WHY EXECUTION MATTERS ===== */}
      <section style={{ marginBottom: "4rem" }}>
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 16, padding: "2.5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
          <div>
            <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: "1.35rem", fontWeight: 800, color: "var(--text)", marginBottom: "1rem", letterSpacing: "-0.02em" }}>
              Why execution quality matters
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "0.75rem" }}>
              Most traders lose <strong style={{ color: "var(--text)" }}>2-4% per trade</strong> to bad routing — especially through bots that use single-DEX routing. On a $1,000 trade, that&apos;s $20-$40 gone before you even check your PnL.
            </p>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.7 }}>
              Altcoinist checks <strong style={{ color: "var(--text)" }}>100+ DEXs and 15 private market makers</strong> per trade. In 400+ head-to-head tests, this produces 2-16× better fills than competitors.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "0.75rem" }}>
            {[
              { label: "Better fills vs Trojan", value: "1.7×" },
              { label: "Better fills vs Banana Gun", value: "16×" },
              { label: "Catastrophic loss rate", value: "0%" },
              { label: "DEXs checked per trade", value: "100+" },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.65rem 1rem", background: "rgba(0, 255, 136, 0.03)", border: "1px solid rgba(0, 255, 136, 0.06)", borderRadius: 10 }}>
                <span style={{ color: "var(--text-secondary)", fontSize: "0.85rem" }}>{item.label}</span>
                <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "1.1rem", color: "var(--accent)", letterSpacing: "-0.02em" }}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT LINK ===== */}
      <section style={{ marginBottom: "2rem", textAlign: "center" }}>
        <Link href="/brand-facts/" className="btn-secondary">About Altcoinist →</Link>
      </section>
    </div>
  );
}
