import { useEffect, useState } from "react";
import heroBg from "../assets/HeroPage.png";

const ROTATING_TEXTS = [
  "PREMIUM QUALITY",
  "LUXURY LIVING",
  "TIMELESS ELEGANCE",
  "BESPOKE DESIGNS",
];

export default function Hero() {
  const [animatedTextIndex, setAnimatedTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedTextIndex((prev) => (prev + 1) % ROTATING_TEXTS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "#0C0B09",
      }}
    >
      {/* ── Background Image ── */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center 30%",
        backgroundRepeat: "no-repeat",
      }} />

      {/* Left dark gradient */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(105deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.60) 45%, rgba(0,0,0,0.15) 70%, transparent 100%)",
      }} />

      {/* Bottom fade */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "35%",
        background: "linear-gradient(to top, rgba(12,11,9,0.95), transparent)",
        pointerEvents: "none",
      }} />

      {/* Gold glow */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 70% 60% at 20% 50%, rgba(212,175,55,0.07), transparent 65%)",
      }} />

      {/* ── Content ── */}
      <div style={{
        position: "relative", zIndex: 10,
        width: "100%",
        padding: "calc(90px + env(safe-area-inset-top)) clamp(20px, 6vw, 80px) clamp(60px, 10vh, 100px)",
        opacity: 0,
        animation: "heroContentFadeIn 0.8s ease forwards",
        maxWidth: 800,
      }}>

        {/* ── Eyebrow badge ── */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          padding: "6px 18px",
          background: "rgba(0,0,0,0.65)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(212,175,55,0.4)",
          borderRadius: 99,
          marginBottom: 28,
          animation: "fadeSlideUp 0.6s ease 0.1s both",
        }}>
          <span style={{ color: "#D4AF37", fontSize: 9 }}>✦</span>
          <span style={{
            color: "#D4AF37",
            fontSize: 10,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}>
            {ROTATING_TEXTS[animatedTextIndex]}
          </span>
          <span style={{ color: "#D4AF37", fontSize: 9 }}>✦</span>
        </div>

        {/* ── H1: tagline is now the hero headline ── */}
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(34px, 5.5vw, 64px)",
          fontWeight: 600,
          color: "#FFFFFF",
          letterSpacing: "-0.01em",
          lineHeight: 1.15,
          marginBottom: "clamp(14px, 2.5vw, 22px)",
          textShadow: "0 2px 12px rgba(0,0,0,0.4)",
          animation: "fadeSlideUp 0.6s ease 0.2s both",
        }}>
          We Design Spaces{" "}
          <span style={{
            color: "#D4AF37",
            fontStyle: "italic",
            position: "relative",
            display: "inline-block",
          }}>
            That Tell Your Story
            <span style={{
              position: "absolute", bottom: -3, left: 0, right: 0,
              height: 2,
              background: "linear-gradient(90deg, transparent, #D4AF37, transparent)",
              transformOrigin: "center",
              animation: "underlinePulse 2.5s ease-in-out infinite",
            }} />
          </span>
        </h1>

        {/* ── Description ── */}
        <p style={{
          fontSize: "clamp(13px, 1.8vw, 15px)",
          color: "rgba(232,224,204,0.78)",
          lineHeight: 1.75,
          maxWidth: 560,
          marginBottom: 0,
          textShadow: "0 1px 4px rgba(0,0,0,0.2)",
          animation: "fadeSlideUp 0.6s ease 0.35s both",
        }}>
          Luxury residential and commercial interior design in Kolhapur.
          From concept to execution — functional, elegant and timeless
          spaces tailored to your lifestyle.
        </p>

        {/* ── CTA Buttons — stack on mobile, side-by-side from sm up ── */}
        <div
          className="flex flex-col sm:flex-row sm:flex-wrap"
          style={{
            gap: 14, alignItems: "stretch",
            marginTop: "clamp(28px, 5vw, 40px)",
            animation: "fadeSlideUp 0.6s ease 0.4s both",
          }}
        >
          {/* Primary — gold */}
          <a
            href="#contact"
            className="w-full sm:w-auto"
            style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10,
              padding: "15px 28px",
              background: "linear-gradient(135deg, #D4AF37, #B8962E)",
              color: "#0C0B09",
              borderRadius: 8,
              fontSize: "clamp(13px, 1.5vw, 14px)",
              fontWeight: 700, letterSpacing: "0.04em",
              textDecoration: "none",
              boxShadow: "0 4px 24px rgba(212,175,55,0.35)",
              transition: "opacity 0.2s, box-shadow 0.2s, transform 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(212,175,55,0.5)"; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(212,175,55,0.35)"; }}
          >
            Book Consultation
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M5 12H19M19 12L12 5M19 12L12 19"/>
            </svg>
          </a>

          {/* Secondary — glass */}
          <a
            href="#work"
            className="w-full sm:w-auto"
            style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10,
              padding: "14px 26px",
              background: "rgba(0,0,0,0.45)",
              backdropFilter: "blur(10px)",
              border: "1.5px solid rgba(212,175,55,0.6)",
              color: "#D4AF37",
              borderRadius: 8,
              fontSize: "clamp(12px, 1.5vw, 13px)",
              fontWeight: 600, letterSpacing: "0.04em",
              textDecoration: "none",
              transition: "background 0.2s, transform 0.2s, box-shadow 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(212,175,55,0.12)"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(212,175,55,0.2)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(0,0,0,0.45)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M10 8l6 4-6 4V8z" fill="currentColor" stroke="none"/>
            </svg>
            View Our Work
          </a>
        </div>
      </div>

      {/* ── Scroll indicator — hidden on mobile to avoid clutter ── */}
      <div className="hidden sm:flex" style={{
        position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)",
        flexDirection: "column", alignItems: "center", gap: 8,
        zIndex: 10, opacity: 0.6,
      }}>
        <span style={{ fontSize: 8, letterSpacing: "0.22em", textTransform: "uppercase", color: "#A89880" }}>
          DISCOVER MORE
        </span>
        <div style={{
          width: 1.5, height: 32,
          background: "linear-gradient(to bottom, #D4AF37, transparent)",
          borderRadius: 2,
          animation: "scrollFade 2s ease-in-out infinite",
        }} />
      </div>

      <style>{`
        @keyframes heroContentFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes underlinePulse {
          0%, 100% { opacity: 0.2; transform: scaleX(0.2); }
          50%       { opacity: 1;   transform: scaleX(1); }
        }
        @keyframes scrollFade {
          0%, 100% { opacity: 0.15; }
          50%       { opacity: 0.8; }
        }
        @media (max-width: 640px) {
          #hero > div:first-child {
            background-position: 65% center !important;
          }
        }
      `}</style>
    </section>
  );
}