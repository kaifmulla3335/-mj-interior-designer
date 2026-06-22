import { TRUST_ITEMS } from "../data/data";

export default function TrustMarquee() {
  const content = [...TRUST_ITEMS, ...TRUST_ITEMS];

  return (
    <div style={{
      borderTop: "0.5px solid var(--border)",
      borderBottom: "0.5px solid var(--border)",
      background: "var(--surface)",
      padding: "14px 0",
      overflow: "hidden",
    }}>
      <div className="marquee-track">
        {content.map((item, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 18, padding: "0 18px" }}>
            <span style={{
              fontSize: 13, color: "var(--muted)",
              letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 400,
            }}>{item}</span>
            <span style={{ color: "var(--accent)", fontSize: 8, opacity: 0.8 }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}