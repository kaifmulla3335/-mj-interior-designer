import { useState } from "react";
import { SERVICES } from "../data/data";
import ProjectShowcase from "./ProjectShowcase";
import { SHOWCASE_IMAGES } from "../data/showcaseImages";

const Icons = {
  residential: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9L12 3l9 6v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
      <path d="M9 21V12h6v9"/>
    </svg>
  ),
  commercial: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="7" width="18" height="14" rx="2"/>
      <path d="M8 7V5a1 1 0 011-1h6a1 1 0 011 1v2"/>
      <path d="M12 12v4M10 14h4"/>
    </svg>
  ),
  spaceplanning: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <path d="M3 9h18M9 3v18"/>
      <path d="M14 14h4M14 17h2"/>
    </svg>
  ),
  furniture: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="7" rx="2"/>
      <path d="M7 11V8a2 2 0 012-2h6a2 2 0 012 2v3"/>
      <path d="M5 18v2M19 18v2"/>
    </svg>
  ),
  visualization: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <path d="M8 21h8M12 17v4"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  autocad: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/>
      <path d="M14 2v6h6"/>
      <path d="M9 13h6M9 17h4"/>
    </svg>
  ),
  kitchen: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 3v4M8 11v10"/>
      <path d="M5 7h6a1 1 0 001-1V4a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"/>
      <path d="M17 3c0 0-3 2-3 6s3 6 3 6M17 3c0 0 3 2 3 6s-3 6-3 6"/>
      <path d="M17 15v6"/>
    </svg>
  ),
};

const iconMap = {
  "Residential Design":     "residential",
  "Commercial Design":      "commercial",
  "Space Planning":         "spaceplanning",
  "Custom Furniture":       "furniture",
  "3D Visualization":       "visualization",
  "AutoCAD Drawings":       "autocad",
  "Modular Kitchen Design": "kitchen",
};

/* All 7 services have galleries ready */
const HAS_SHOWCASE = [
  "Residential Design",
  "Commercial Design",
  "Space Planning",
  "Custom Furniture",
  "Modular Kitchen Design",
  "3D Visualization",
  "AutoCAD Drawings",
];

export default function Services() {
  const [hovered,  setHovered]  = useState(null);
  const [showcase, setShowcase] = useState(null);

  const row1     = SERVICES.slice(0, 3);
  const row2     = SERVICES.slice(3, 6);
  const lastCard = SERVICES[6];

  const renderCard = (service, isWide = false) => {
    const icon       = Icons[iconMap[service.title] || "residential"];
    const active     = hovered === service.num;
    const hasGallery = HAS_SHOWCASE.includes(service.title);

    return (
      <div
        key={service.num}
        onMouseEnter={() => setHovered(service.num)}
        onMouseLeave={() => setHovered(null)}
        className={isWide ? "flex flex-col sm:flex-row sm:gap-8 sm:items-start" : ""}
        style={{
          background: "var(--card)",
          border: `1px solid ${active ? "var(--accent)" : "var(--border)"}`,
          borderRadius: 16,
          padding: "28px 24px",
          position: "relative",
          overflow: "hidden",
          transition: "transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",
          transform: active ? "translateY(-6px)" : "translateY(0)",
          boxShadow: active ? "0 16px 40px rgba(0,0,0,0.3)" : "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        {/* Hover glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(circle at 30% 20%, rgba(212,175,55,0.08), transparent 70%)",
          opacity: active ? 1 : 0, transition: "opacity 0.35s ease",
        }} />

        {/* Number */}
        <span className="absolute top-5 right-5 font-['Cormorant_Garamond',serif] text-[13px] font-semibold tracking-wider"
          style={{ color: "var(--accent)", opacity: active ? 1 : 0.35, transition: "opacity 0.3s" }}>
          {service.num}
        </span>

        {/* Icon */}
        <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 shrink-0" style={{
          background: active ? "var(--accent)" : "var(--surface)",
          color: active ? "#0C0B09" : "var(--accent)",
          transform: active ? "scale(1.05) rotate(4deg)" : "scale(1) rotate(0deg)",
          transition: "all 0.3s ease",
        }}>
          {icon}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl font-semibold mb-2 leading-snug"
            style={{ color: "var(--text)" }}>
            {service.title}
          </h3>

          <div className="h-0.5 rounded-full mb-4" style={{
            background: "var(--accent)",
            width: active ? 48 : 24,
            transition: "width 0.3s ease",
          }} />

          <p className="text-[13px] leading-relaxed mb-5"
            style={{ color: "var(--muted)", minHeight: isWide ? 0 : 60 }}>
            {service.desc}
          </p>

          {service.features && (
            <div className="border-t pt-4 flex flex-col gap-2" style={{
              borderColor: active ? "var(--accent)" : "var(--border)",
              transition: "border-color 0.3s",
            }}>
              {service.features.slice(0, isWide ? 4 : 3).map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-[12px]" style={{ color: "var(--muted)" }}>
                  <span className="text-[11px] inline-block shrink-0" style={{
                    color: "var(--accent)",
                    transform: active ? "translateX(2px)" : "translateX(0)",
                    transition: "transform 0.3s",
                  }}>✦</span>
                  {f}
                </div>
              ))}
            </div>
          )}

          {/* CTA row */}
          <div className="flex items-center gap-3 mt-5 flex-wrap">
            {/* Enquire Now */}
            <a href="#contact"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium rounded-lg px-3 py-1.5"
              style={{
                background: active ? "var(--accent)" : "transparent",
                color: active ? "#0C0B09" : "var(--accent)",
                transition: "all 0.3s ease",
              }}
            >
              Enquire Now
              <span className="inline-block"
                style={{ transform: active ? "translateX(3px)" : "translateX(0)", transition: "transform 0.3s" }}>→</span>
            </a>

            {/* View Projects */}
            {hasGallery && (
              <button
                onClick={() => setShowcase(service.title)}
                className="inline-flex items-center gap-1.5 text-[12px] font-medium rounded-lg px-3 py-1.5"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(212,175,55,0.35)",
                  color: "var(--accent)",
                  cursor: "pointer",
                  fontFamily: "'DM Sans', sans-serif",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(212,175,55,0.08)"; e.currentTarget.style.borderColor = "var(--accent)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(212,175,55,0.35)"; }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M3 9h18M9 3v18"/>
                </svg>
                View Examples
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <section id="services" className="py-20 px-4 sm:px-8 lg:px-16 bg-[var(--surface)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle,rgba(212,175,55,0.05),transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[radial-gradient(circle,rgba(212,175,55,0.05),transparent_70%)] pointer-events-none" />

        <div className="text-center mb-14">
          <div className="reveal text-[11px] tracking-[0.18em] uppercase text-[var(--accent)] mb-3 flex items-center justify-center gap-3">
            <span className="w-6 h-px bg-[var(--accent)] opacity-50 inline-block" />
            What We Do
            <span className="w-6 h-px bg-[var(--accent)] opacity-50 inline-block" />
          </div>
          <h2 className="reveal font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl lg:text-6xl font-semibold text-[var(--text)] tracking-tight" data-delay="1">
            Our Services
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[var(--muted)] max-w-xl mx-auto leading-relaxed">
            Comprehensive interior design solutions tailored to your unique vision
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {row1.map(s => renderCard(s))}
          </div>
          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {row2.map(s => renderCard(s))}
          </div>
          {/* Row 3 — 07 centred, same card style as others */}
          {lastCard && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="sm:col-start-1 lg:col-start-2">
                {renderCard(lastCard, false)}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Showcase modal */}
      {showcase && (
        <ProjectShowcase
          title={showcase}
          images={SHOWCASE_IMAGES[showcase] || []}
          onClose={() => setShowcase(null)}
        />
      )}
    </>
  );
}