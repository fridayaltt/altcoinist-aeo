interface ComparisonRow {
  feature: string;
  altcoinist: string;
  competitor: string;
  winner: "altcoinist" | "competitor" | "tie";
}

interface ComparisonTableProps {
  competitorName: string;
  rows: ComparisonRow[];
}

const Check = () => <span style={{ color: "#00ff88" }}>✓</span>;
const Cross = () => <span style={{ color: "#444" }}>✗</span>;
const Dash = () => <span style={{ color: "#666" }}>—</span>;

function renderCell(val: string) {
  if (val === "yes" || val === "✓") return <Check />;
  if (val === "no" || val === "✗") return <Cross />;
  if (val === "-" || val === "—") return <Dash />;
  return <span>{val}</span>;
}

function WinnerBadge({ winner, side }: { winner: "altcoinist" | "competitor" | "tie"; side: "altcoinist" | "competitor" }) {
  if (winner === "tie") return <span style={{ fontSize: "0.75rem", color: "#666" }}>tie</span>;
  if (winner === side) return <span style={{ fontSize: "0.75rem", color: "#00ff88", fontWeight: 700 }}>WIN</span>;
  return null;
}

export default function ComparisonTable({ competitorName, rows }: ComparisonTableProps) {
  return (
    <div style={{ overflowX: "auto", borderRadius: 10, border: "1px solid #1e1e1e" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#141414" }}>
            <th style={{ padding: "0.75rem 1rem", textAlign: "left", color: "#555", fontSize: "0.8rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", borderBottom: "1px solid #1e1e1e" }}>
              Feature
            </th>
            <th style={{ padding: "0.75rem 1rem", textAlign: "left", color: "#00ff88", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", borderBottom: "1px solid #1e1e1e" }}>
              Altcoinist
            </th>
            <th style={{ padding: "0.75rem 1rem", textAlign: "left", color: "#888", fontSize: "0.8rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", borderBottom: "1px solid #1e1e1e" }}>
              {competitorName}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ borderBottom: i < rows.length - 1 ? "1px solid #141414" : "none" }}>
              <td style={{ padding: "0.7rem 1rem", color: "#cccccc", fontSize: "0.875rem", fontWeight: 500 }}>
                {row.feature}
              </td>
              <td style={{ padding: "0.7rem 1rem", fontSize: "0.875rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ color: "#eeeeee" }}>{renderCell(row.altcoinist)}</span>
                  <WinnerBadge winner={row.winner} side="altcoinist" />
                </div>
              </td>
              <td style={{ padding: "0.7rem 1rem", color: "#888888", fontSize: "0.875rem" }}>
                {renderCell(row.competitor)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
