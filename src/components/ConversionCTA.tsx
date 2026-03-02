"use client";

interface ConversionCTAProps {
  page: string;
  position?: "mid-article" | "pre-faq" | "bottom";
}

export default function ConversionCTA({ page, position = "pre-faq" }: ConversionCTAProps) {
  const handleClick = () => {
    if (typeof window !== "undefined" && (window as any).posthog) {
      (window as any).posthog.capture("aeo_cta_click", {
        page,
        position,
        referrer: document.referrer || "direct",
        url: window.location.pathname,
      });
    }
  };

  return (
    <div
      style={{
        margin: "3rem 0",
        background: "linear-gradient(135deg, rgba(0, 255, 136, 0.04) 0%, var(--surface) 50%, rgba(0, 100, 60, 0.03) 100%)",
        border: "1px solid rgba(0, 255, 136, 0.12)",
        borderRadius: 14,
        padding: "2rem 1.75rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.85rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle glow */}
      <div
        style={{
          position: "absolute",
          top: "-30px",
          right: "-30px",
          width: "150px",
          height: "150px",
          background: "radial-gradient(circle, rgba(0, 255, 136, 0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", position: "relative" }}>
        <span style={{ fontSize: "1.15rem" }}>⚡</span>
        <p
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            color: "var(--text)",
            fontWeight: 700,
            fontSize: "1.05rem",
            margin: 0,
            letterSpacing: "-0.01em",
          }}
        >
          Try it yourself — no deposit needed
        </p>
      </div>
      <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.65, margin: 0, position: "relative" }}>
        Smart routing across 100+ DEXs and 15 private market makers.
        Up to 45% cashback on every trade. 20,000+ traders already in.
      </p>
      <a
        href="https://t.me/altcoinist_trenchbot?start=utm_source-aeo"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="btn-primary"
        style={{
          alignSelf: "flex-start",
          position: "relative",
          padding: "0.65rem 1.25rem",
          fontSize: "0.875rem",
        }}
      >
        Start Trading on Telegram →
      </a>
    </div>
  );
}
