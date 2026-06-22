import { useEffect, useState } from "react";

export default function Loader({ onFinish }) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Total visible time before starting exit animation
    const exitTimer = setTimeout(() => setExiting(true), 1600);
    // Remove from DOM after exit animation completes
    const removeTimer = setTimeout(() => onFinish(), 2100);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, [onFinish]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#0C0B09",
        opacity: exiting ? 0 : 1,
        transition: "opacity 0.5s ease",
        pointerEvents: exiting ? "none" : "auto",
      }}
    >
      {/* Subtle gold glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(212,175,55,0.08), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Logo circle */}
      <div
        style={{
          width: 72,
          height: 72,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #D4AF37, #B8962E)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 22,
          boxShadow: "0 0 40px rgba(212,175,55,0.35)",
          animation: "loaderPulse 1.8s ease-in-out infinite",
        }}
      >
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 700,
            fontSize: 30,
            color: "#0C0B09",
          }}
        >
          MJ
        </span>
      </div>

      {/* Brand name */}
      <div
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 600,
          fontSize: "clamp(20px, 4vw, 28px)",
          color: "#E8E0CC",
          letterSpacing: "0.01em",
          marginBottom: 8,
          opacity: 0,
          animation: "loaderFadeIn 0.6s ease 0.3s forwards",
        }}
      >
        MJ Interior Designer
      </div>

      {/* Tagline */}
      <div
        style={{
          fontSize: 10,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#D4AF37",
          fontWeight: 500,
          opacity: 0,
          animation: "loaderFadeIn 0.6s ease 0.5s forwards",
        }}
      >
        Crafting Spaces
      </div>

      {/* Loading bar */}
      <div
        style={{
          width: 160,
          height: 2,
          background: "rgba(212,175,55,0.15)",
          borderRadius: 2,
          marginTop: 32,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            background: "linear-gradient(90deg, #D4AF37, #F0D060)",
            borderRadius: 2,
            animation: "loaderBar 1.4s ease forwards",
          }}
        />
      </div>

      <style>{`
        @keyframes loaderPulse {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.06); }
        }
        @keyframes loaderFadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes loaderBar {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  );
}