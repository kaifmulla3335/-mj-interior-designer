import { PROJECT_PILLS } from "../data/data";

export default function ProjectsMarquee() {
  // Duplicate 4x so the strip always fills the viewport from edge to edge
  const pills = [...PROJECT_PILLS, ...PROJECT_PILLS, ...PROJECT_PILLS, ...PROJECT_PILLS];

  return (
    <div
      style={{
        background: "var(--surface)",
        padding: "28px 0",
        borderTop: "0.5px solid var(--border)",
        borderBottom: "0.5px solid var(--border)",
        overflow: "hidden",
      }}
    >
      {/* Label */}
      <p
        style={{
          fontSize: 10,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "var(--muted)",
          textAlign: "center",
          marginBottom: 16,
        }}
      >
        Design Styles We Cover
      </p>

      {/* Marquee wrapper — no whitespace:nowrap on wrapper; track handles it */}
      <div style={{ overflow: "hidden", width: "100%" }}>
        <div
          style={{
            display: "flex",
            width: "max-content",          /* shrink-wraps all pills */
            animation: "marquee 20s linear infinite",
            willChange: "transform",
          }}
        >
          {pills.map((name, i) => (
            <div
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                flexShrink: 0,
                margin: "0 6px",
                padding: "7px 18px",
                background: "var(--card)",
                border: "0.5px solid var(--accent)",
                borderRadius: 24,
                fontSize: 12,
                color: "var(--text)",
                fontWeight: 400,
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ color: "var(--accent)", marginRight: 8, fontSize: 8 }}>◆</span>
              {name}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}