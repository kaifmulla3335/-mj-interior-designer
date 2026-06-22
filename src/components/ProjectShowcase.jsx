import { useState, useEffect, useCallback, useRef } from "react";


/* ── Icons ── */
const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M18 6L6 18M6 6l12 12"/>
  </svg>
);
const ChevronLeft = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M15 18l-6-6 6-6"/>
  </svg>
);
const ChevronRight = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M9 18l6-6-6-6"/>
  </svg>
);

export default function ProjectShowcase({ title, images, onClose }) {
  const [current,   setCurrent]   = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState(1);
  const touchStart = useRef(null);
  const total = images.length;

  /* lock body scroll */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const go = useCallback((dir) => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(c => (c + dir + total) % total);
      setAnimating(false);
    }, 280);
  }, [animating, total]);

  /* keyboard nav */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft")  go(-1);
      if (e.key === "Escape")     onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [go, onClose]);

  const onTouchStart = (e) => { touchStart.current = e.touches[0].clientX; };
  const onTouchEnd   = (e) => {
    if (!touchStart.current) return;
    const delta = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) go(delta > 0 ? 1 : -1);
    touchStart.current = null;
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(6,5,4,0.97)",
        backdropFilter: "blur(14px)",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "flex-start",
        padding: "clamp(12px, 3vh, 28px) 16px",
        overflowY: "auto",
        animation: "showcaseFadeIn 0.25s ease forwards",
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: 1080,
          display: "flex", flexDirection: "column",
          gap: 12,
          margin: "auto",
        }}
      >
        {/* ── Header ── */}
        <div style={{
          display: "flex", alignItems: "center",
          justifyContent: "space-between",
          gap: 12, flexWrap: "nowrap", minWidth: 0,
        }}>
          {/* Left: label + title — truncates if too narrow */}
          <div style={{ minWidth: 0, flex: 1 }}>
            <p style={{
              fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase",
              color: "#D4AF37", marginBottom: 3, opacity: 0.75,
              whiteSpace: "nowrap",
            }}>
              Portfolio
            </p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(18px, 3.5vw, 34px)",
              fontWeight: 700, color: "#E8E0CC",
              letterSpacing: "-0.01em", lineHeight: 1.1,
              whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
            }}>
              {title}
            </h2>
          </div>

          {/* Right: counter + close — never shrinks */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
            <span style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 14, color: "#6B5E4A", whiteSpace: "nowrap",
            }}>
              <span style={{ color: "#D4AF37", fontWeight: 700 }}>{String(current + 1).padStart(2, "0")}</span>
              &nbsp;/&nbsp;
              {String(total).padStart(2, "0")}
            </span>
            <button onClick={onClose} style={{
              width: 38, height: 38, borderRadius: "50%", flexShrink: 0,
              border: "1px solid #2E2820", background: "#1A1610",
              color: "#6B5E4A", display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", transition: "border-color 0.2s, color 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#D4AF37"; e.currentTarget.style.color = "#D4AF37"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#2E2820"; e.currentTarget.style.color = "#6B5E4A"; }}
            ><CloseIcon /></button>
          </div>
        </div>

        {/* Gold line */}
        <div style={{ height: 1, background: "linear-gradient(to right, transparent, #D4AF3750, transparent)" }} />

        {/* ── Main image ── */}
        <div
          style={{ position: "relative", borderRadius: 14, overflow: "hidden", background: "#111" }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div style={{ width: "100%", aspectRatio: "16/9", position: "relative", overflow: "hidden" }}>
            <img
              key={current}
              src={images[current]}
              alt={`${title} ${current + 1}`}
              style={{
                width: "100%", height: "100%", objectFit: "cover", display: "block",
                opacity: animating ? 0 : 1,
                transform: animating ? `translateX(${direction * 48}px)` : "translateX(0)",
                transition: "opacity 0.28s ease, transform 0.28s ease",
              }}
            />
            {/* Bottom gradient */}
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0, height: "30%",
              background: "linear-gradient(to top, rgba(6,5,4,0.75), transparent)",
              pointerEvents: "none",
            }} />
            {/* Label */}
            <div style={{
              position: "absolute", bottom: 14, left: 18,
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 12, color: "rgba(232,224,204,0.65)", letterSpacing: "0.06em",
            }}>
              {title} — {String(current + 1).padStart(2, "0")}
            </div>
          </div>

          {/* Prev */}
          <button onClick={() => go(-1)} style={{
            position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)",
            width: 42, height: 42, borderRadius: "50%",
            border: "1px solid rgba(212,175,55,0.3)",
            background: "rgba(8,7,5,0.8)", backdropFilter: "blur(8px)",
            color: "#D4AF37", display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", zIndex: 2, transition: "background 0.2s, border-color 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(212,175,55,0.18)"; e.currentTarget.style.borderColor = "#D4AF37"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(8,7,5,0.8)"; e.currentTarget.style.borderColor = "rgba(212,175,55,0.3)"; }}
          ><ChevronLeft /></button>

          {/* Next */}
          <button onClick={() => go(1)} style={{
            position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)",
            width: 42, height: 42, borderRadius: "50%",
            border: "1px solid rgba(212,175,55,0.3)",
            background: "rgba(8,7,5,0.8)", backdropFilter: "blur(8px)",
            color: "#D4AF37", display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", zIndex: 2, transition: "background 0.2s, border-color 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(212,175,55,0.18)"; e.currentTarget.style.borderColor = "#D4AF37"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(8,7,5,0.8)"; e.currentTarget.style.borderColor = "rgba(212,175,55,0.3)"; }}
          ><ChevronRight /></button>
        </div>

        {/* ── Thumbnails ── */}
        <div style={{
          display: "flex", gap: 6, overflowX: "auto", paddingBottom: 4,
          scrollbarWidth: "none",
        }}>
          {images.map((img, i) => (
            <button key={i} onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              style={{
                flexShrink: 0,
                width: "clamp(44px, 7vw, 72px)", aspectRatio: "1",
                borderRadius: 7, overflow: "hidden", padding: 0, background: "none",
                border: i === current ? "2px solid #D4AF37" : "2px solid transparent",
                opacity: i === current ? 1 : 0.45,
                transform: i === current ? "scale(1.06)" : "scale(1)",
                cursor: "pointer", transition: "all 0.2s ease",
              }}
              onMouseEnter={e => { if (i !== current) e.currentTarget.style.opacity = "0.8"; }}
              onMouseLeave={e => { if (i !== current) e.currentTarget.style.opacity = "0.45"; }}
            >
              <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </button>
          ))}
        </div>

        {/* ── Dot indicators ── */}
        <div style={{ display: "flex", gap: 5, justifyContent: "center" }}>
          {images.map((_, i) => (
            <div key={i} onClick={() => setCurrent(i)} style={{
              width: i === current ? 20 : 6, height: 6, borderRadius: 3,
              background: i === current ? "#D4AF37" : "#2E2820",
              transition: "all 0.3s ease", cursor: "pointer",
            }} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes showcaseFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        /* hide scrollbar on thumbnails */
        ::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}