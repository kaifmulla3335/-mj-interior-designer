import { useState, useEffect, useRef } from "react";
import { STEPS } from "../data/data";

export default function Process() {
  const [activeStep, setActiveStep] = useState(-1);
  const stepRefs = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const idx = Number(e.target.dataset.idx);
          setActiveStep((prev) => Math.max(prev, idx));
        }
      });
    }, { threshold: 0.5 });
    stepRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="process" style={{ padding: "80px clamp(20px, 6vw, 80px)", background: "var(--bg)" }}>

      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <div className="reveal" style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 14 }}>
          How We Work
        </div>
        <h2 className="reveal" data-delay="1" style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(34px, 5.5vw, 60px)", fontWeight: 600, color: "var(--text)",
        }}>Our Process</h2>
      </div>

      {/* ── Desktop horizontal stepper ── */}
      <div className="hide-mobile" style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Dashed connector line */}
        <div style={{ position: "relative" }}>
          <div style={{
            position: "absolute", top: 20, left: "10%", right: "10%", height: 1,
            background: "repeating-linear-gradient(to right, var(--accent) 0px, var(--accent) 8px, transparent 8px, transparent 16px)",
            opacity: 0.3,
          }} />

          <div style={{ display: "flex", alignItems: "flex-start", gap: 0 }}>
            {STEPS.map((step, i) => {
              const isActive = i <= activeStep;
              return (
                <div key={step.num}
                  ref={(el) => (stepRefs.current[i] = el)}
                  data-idx={i}
                  className="reveal" data-delay={i}
                  style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "0 12px" }}
                >
                  {/* Circle */}
                  <div style={{
                    width: 42, height: 42, borderRadius: "50%",
                    border: `2px solid ${isActive ? "var(--accent)" : "var(--border)"}`,
                    background: isActive ? "var(--accent)" : "var(--card)",
                    color: isActive ? "#0C0B09" : "var(--muted)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "'Cormorant Garamond', serif", fontSize: 15, fontWeight: 600,
                    transition: "all 0.5s ease", zIndex: 1, position: "relative",
                    boxShadow: isActive ? "0 0 0 6px rgba(212,175,55,0.15)" : "none",
                    marginBottom: 16,
                  }}>{step.num}</div>

                  <div style={{ fontSize: 14, fontWeight: 500, color: isActive ? "var(--text)" : "var(--muted)", marginBottom: 6, transition: "color 0.3s" }}>
                    {step.title}
                  </div>
                  <div style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.6 }}>
                    {step.desc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Mobile vertical stepper ── */}
      <div className="hide-desktop" style={{ maxWidth: 480, margin: "0 auto" }}>
        {STEPS.map((step, i) => {
          const isActive = i <= activeStep;
          return (
            <div key={step.num}
              ref={(el) => (stepRefs.current[i] = el)}
              data-idx={i}
              style={{ display: "flex", gap: 16, marginBottom: 28 }}
            >
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{
                  width: 38, height: 38, borderRadius: "50%",
                  border: `2px solid ${isActive ? "var(--accent)" : "var(--border)"}`,
                  background: isActive ? "var(--accent)" : "var(--card)",
                  color: isActive ? "#0C0B09" : "var(--muted)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'Cormorant Garamond', serif", fontSize: 13, fontWeight: 600,
                  transition: "all 0.5s", flexShrink: 0,
                }}>{step.num}</div>
                {i < STEPS.length - 1 && (
                  <div style={{
                    width: 1, flex: 1, minHeight: 28,
                    background: isActive ? "var(--accent)" : "var(--border)",
                    opacity: 0.4, marginTop: 6,
                  }} />
                )}
              </div>
              <div style={{ paddingTop: 6, paddingBottom: 16 }}>
                <div style={{ fontSize: 15, fontWeight: 500, color: "var(--text)", marginBottom: 4 }}>{step.title}</div>
                <div style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>{step.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}