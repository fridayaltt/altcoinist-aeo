"use client";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      {items.map((item, i) => (
        <details
          key={i}
          style={{
            background: "#111111",
            border: "1px solid #1e1e1e",
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          <summary
            style={{
              padding: "1rem 1.25rem",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: "0.95rem",
              color: "#ffffff",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              userSelect: "none",
              listStyle: "none",
            }}
          >
            <span>{item.question}</span>
            <span className="faq-icon" style={{ color: "#00ff88", fontSize: "1.25rem", lineHeight: 1, flexShrink: 0, marginLeft: "1rem" }}>+</span>
          </summary>
          <div
            style={{
              padding: "0 1.25rem 1rem",
              color: "#999999",
              fontSize: "0.9rem",
              lineHeight: 1.7,
              borderTop: "1px solid #1a1a1a",
              paddingTop: "0.75rem",
            }}
          >
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
