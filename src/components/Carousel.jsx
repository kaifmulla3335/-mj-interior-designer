import { useState, useEffect, useRef, useCallback } from "react";
import { PROJECTS } from "../data/data";

// Import images from assets folder
import ArtDecoPenthouse from "../assets/Art-DecoPenthouse.jpg";
// Add more imports as you add images to your assets folder
// Example naming convention for consistency:
import SkylineRestaurant from "../assets/SkylineRestaurant.jpg";
import ArchitectsOffice from "../assets/ArchitectsOffice.jpg";
import Contemporary2BHK from "../assets/Contemporary2BHK.jpg";
import GirlsBedroomSuite from "../assets/GirlsBedroomSuite.jpg";
import WalkInWardrobe from "../assets/WalkInWardrobe.jpg";
import ModularKitchen from "../assets/ModularKitchen.jpg";
import ReceptionCounter from "../assets/ReceptionCounter.jpg";
import DuplexPenthouse from "../assets/DuplexPenthouse.jpg";
import BoutiqueCafe from "../assets/BoutiqueCafe.jpg";
import CorporateLobby from "../assets/CorporateLobby.jpg";
import MinimalistVilla from "../assets/MinimalistVilla.jpg";

// Map project IDs to their respective images
const projectImages = {
  1: ArtDecoPenthouse,
  2: SkylineRestaurant, // Placeholder - replace with SkylineRestaurant when available
  3: ArchitectsOffice, // Placeholder - replace with ArchitectsOffice when available
  4: Contemporary2BHK, // Placeholder - replace with Contemporary2BHK when available
  5: GirlsBedroomSuite, // Placeholder - replace with GirlsBedroomSuite when available
  6: WalkInWardrobe, // Placeholder - replace with WalkInWardrobe when available
  7: ModularKitchen, // Placeholder - replace with ModularKitchen when available
  8: ReceptionCounter, // Placeholder - replace with ReceptionCounter when available
  9: DuplexPenthouse, // Placeholder - replace with DuplexPenthouse when available
  10: BoutiqueCafe, // Placeholder - replace with BoutiqueCafe when available
  11: CorporateLobby, // Placeholder - replace with CorporateLobby when available
  12: MinimalistVilla, // Placeholder - replace with MinimalistVilla when available
};

// Gradient backgrounds shown while a project image is loading or missing.
// Includes a few spare entries (7-12) so new PROJECTS can be added in
// data.js without needing a matching gradient added here every time.
const fallbackGradients = {
  1: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
  2: "linear-gradient(135deg, #2c1810 0%, #3e2723 50%, #4e342e 100%)",
  3: "linear-gradient(135deg, #1b1b2f 0%, #1a1a2e 50%, #16213e 100%)",
  4: "linear-gradient(135deg, #1e3c32 0%, #2d4a3e 50%, #3a5a4a 100%)",
  5: "linear-gradient(135deg, #3d2b2b 0%, #5c3a3a 50%, #7a4a4a 100%)",
  6: "linear-gradient(135deg, #2d2d2d 0%, #3d3d3d 50%, #4d4d4d 100%)",
  7: "linear-gradient(135deg, #2a3b2a 0%, #3a4f3a 50%, #4a634a 100%)",
  8: "linear-gradient(135deg, #2a2a3e 0%, #353550 50%, #404063 100%)",
  9: "linear-gradient(135deg, #2a1f1a 0%, #3d2e26 50%, #4f3d33 100%)",
  10: "linear-gradient(135deg, #3d2a1f 0%, #5c3a2a 50%, #7a4e38 100%)",
  11: "linear-gradient(135deg, #1a2a3a 0%, #1e3d5c 50%, #24507a 100%)",
  12: "linear-gradient(135deg, #2a2a2a 0%, #3a3a3a 50%, #4a4a4a 100%)",
};

export default function Carousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 768 && window.innerWidth < 1024);
  const timerRef = useRef(null);
  const total = PROJECTS.length;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = useCallback(() => setActive((a) => (a + 1) % total), [total]);
  const prev = useCallback(() => setActive((a) => (a - 1 + total) % total), [total]);

  useEffect(() => {
    if (!paused) timerRef.current = setInterval(next, 3500);
    return () => clearInterval(timerRef.current);
  }, [paused, next]);

  // Touch swipe support
  const touchStart = useRef(null);
  const onTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (!touchStart.current) return;
    const delta = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) delta > 0 ? next() : prev();
    touchStart.current = null;
  };

  const getCardProps = (idx) => {
    const diff = ((idx - active) % total + total) % total;
    const normalized = diff > total / 2 ? diff - total : diff;
    const cardW = isMobile ? 260 : isTablet ? 240 : 280;
    const cardH = isMobile ? 340 : isTablet ? 320 : 360;

    let tx = 0, tz = 0, scale = 1, opacity = 1, ry = 0, zIndex = 1, visible = true;

    if (isMobile) {
      if (normalized !== 0) visible = false;
      zIndex = 10;
    } else if (isTablet) {
      const map = { "0": [0, 0, 1.05, 1, 0, 10], "1": [220, -90, 0.85, 0.65, -18, 5], "-1": [-220, -90, 0.85, 0.65, 18, 5] };
      const k = String(normalized);
      if (map[k]) [tx, tz, scale, opacity, ry, zIndex] = map[k];
      else visible = false;
    } else {
      const map = {
        "0": [0, 0, 1.08, 1, 0, 10],
        "1": [260, -120, 0.88, 0.7, -18, 6],
        "-1": [-260, -120, 0.88, 0.7, 18, 6],
        "2": [460, -240, 0.72, 0.4, -30, 3],
        "-2": [-460, -240, 0.72, 0.4, 30, 3],
      };
      const k = String(normalized);
      if (map[k]) [tx, tz, scale, opacity, ry, zIndex] = map[k];
      else visible = false;
    }

    return { cardW, cardH, tx, tz, scale, opacity, ry, zIndex, visible };
  };

  return (
    <section id="work" style={{ padding: "80px 0 60px", background: "var(--bg)" }}>

      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: 56, padding: "0 20px" }}>
        <div className="reveal" style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 14 }}>
          Design Capabilities
        </div>
        <h2 className="reveal" data-delay="1" style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(28px, 7vw, 64px)", fontWeight: 600, color: "var(--text)",
          whiteSpace: "nowrap",
        }}>What We Can Create</h2>
      </div>

      {/* Stage */}
      <div
        style={{
          position: "relative", width: "100%",
          height: isMobile ? 380 : 440,
          perspective: "1200px", transformStyle: "preserve-3d",
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {PROJECTS.map((project, idx) => {
          const { cardW, cardH, tx, tz, scale, opacity, ry, zIndex, visible } = getCardProps(idx);
          if (!visible) return null;
          const isCenter = ((idx - active + total) % total) === 0;
          
          // Get the image for this project, or use fallback gradient
          const projectImage = projectImages[project.id];
          const backgroundImage = projectImage ? `url(${projectImage})` : fallbackGradients[project.id];
          const bgStyle = projectImage 
            ? { backgroundImage, backgroundSize: "cover", backgroundPosition: "center" }
            : { background: fallbackGradients[project.id] };

          return (
            <div key={project.id} onClick={() => setActive(idx)} style={{
              position: "absolute", left: "50%", top: "50%",
              width: cardW, height: cardH,
              marginLeft: -cardW / 2, marginTop: -cardH / 2,
              transform: `translateX(${tx}px) translateZ(${tz}px) scale(${scale}) rotateY(${ry}deg)`,
              opacity, zIndex,
              transition: "all 0.6s cubic-bezier(0.25,0.46,0.45,0.94)",
              borderRadius: 12, overflow: "hidden",
              cursor: isCenter ? "default" : "pointer",
              border: isCenter ? `1.5px solid ${project.accent || "#D4AF37"}55` : "0.5px solid var(--border)",
              boxShadow: isCenter
                ? `0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px ${project.accent || "#D4AF37"}22`
                : "0 8px 24px rgba(0,0,0,0.3)",
              ...bgStyle,
            }}>
              {/* Dark overlay for better text readability */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.1) 100%)",
                pointerEvents: "none",
              }} />

              {/* Concept badge — clarifies these are style references, not completed client projects */}
              <div style={{
                position: "absolute", top: 14, left: 14, zIndex: 2,
                padding: "4px 10px", borderRadius: 20, fontSize: 10, fontWeight: 500,
                background: "rgba(0,0,0,0.6)",
                border: "0.5px solid rgba(255,255,255,0.2)",
                color: "#E8E0CC", letterSpacing: "0.08em", textTransform: "uppercase",
              }}>Concept</div>

              {/* Type pill */}
              <div style={{
                position: "absolute", top: 14, right: 14, zIndex: 2,
                padding: "4px 10px", borderRadius: 20, fontSize: 10, fontWeight: 500,
                background: "rgba(212,175,55,0.15)",
                border: "0.5px solid rgba(212,175,55,0.4)",
                color: "#D4AF37", letterSpacing: "0.08em", textTransform: "uppercase",
              }}>{project.type}</div>

              {/* Bottom info */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 2,
                padding: "20px 18px 18px",
                background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)",
              }}>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 20, fontWeight: 600, color: "#E8E0CC",
                  lineHeight: 1.2, marginBottom: 4,
                }}>{project.title}</div>
                <div style={{ fontSize: 11, color: "rgba(232,224,204,0.6)" }}>Design Concept</div>
              </div>

              {/* Glow overlay - subtle on images */}
              <div style={{
                position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1,
                background: `radial-gradient(ellipse at 30% 30%, ${project.accent || "#D4AF37"}15 0%, transparent 70%)`,
              }} />
            </div>
          );
        })}

        {/* Arrows */}
        {["prev", "next"].map((dir) => (
          <button key={dir} onClick={dir === "prev" ? prev : next} style={{
            position: "absolute", top: "50%", transform: "translateY(-50%)",
            [dir === "prev" ? "left" : "right"]: isMobile ? 8 : 24,
            width: isMobile ? 36 : 44, height: isMobile ? 36 : 44,
            borderRadius: "50%", border: "0.5px solid var(--border)",
            background: "var(--card)", color: "var(--text)", fontSize: 18,
            display: "flex", alignItems: "center", justifyContent: "center",
            zIndex: 20, transition: "border-color 0.2s, background 0.2s", cursor: "pointer",
          }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.background = "var(--accent-tint)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.background = "var(--card)"; }}
          >{dir === "prev" ? "‹" : "›"}</button>
        ))}
      </div>

      {/* Dot indicators */}
      <div style={{ display: "flex", gap: 6, justifyContent: "center", marginTop: 28 }}>
        {PROJECTS.map((_, i) => (
          <button key={i} onClick={() => setActive(i)} style={{
            width: i === active ? 24 : 7, height: 7, borderRadius: 4, border: "none",
            background: i === active ? "var(--accent)" : "var(--border)",
            transition: "all 0.3s ease", cursor: "pointer",
          }} />
        ))}
      </div>
    </section>
  );
}