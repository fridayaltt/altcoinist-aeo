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
        margin: "2.5rem 0",
        background: "linear-gradient(135deg, #0d1f15 0%, #111 100%)",
        border: "1px solid #1e3a2a",
        borderRadius: 12,
        padding: "1.75rem 1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <span style={{ fontSize: "1.25rem" }}>⚡</span>
        <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "1rem", margin: 0 }}>
          Try it yourself — no deposit needed
        </p>
      </div>
      <p style={{ color: "#999", fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>
        Smart routing across 100+ DEXs. 50% cashback for your first 14 days.
        20,000+ traders already in.
      </p>
      <a
        href="https://t.me/altcoinist_trenchbot?start=utm_source-aeo"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          background: "#00ff88",
          color: "#000",
          fontWeight: 700,
          padding: "0.65rem 1.25rem",
          borderRadius: 8,
          fontSize: "0.875rem",
          textDecoration: "none",
          alignSelf: "flex-start",
          transition: "opacity 0.15s",
        }}
      >
        Start Trading on Telegram →
      </a>
    </div>
  );
}
