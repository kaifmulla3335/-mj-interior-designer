import { useState, useEffect, useRef } from "react";
import { STATS } from "../data/data";
import aboutImg from "../assets/AboutUsideimage.png";

/* ── Counter animation ── */
function AnimatedNumber({ target, suffix = "", duration = 1800 }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            let startTime = null;
            const animate = (currentTime) => {
              if (!startTime) startTime = currentTime;
              const progress = Math.min((currentTime - startTime) / duration, 1);
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              setCount(Math.floor(easeOutQuart * target));
              if (progress < 1) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* Stat icons matching reference style (calendar / heart / leaf / people) */
const statIcons = {
  "Projects Completed":  (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
    </svg>
  ),
  "Client Satisfaction": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
    </svg>
  ),
  "Months Experience": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8 6 6 9 6 13a6 6 0 0012 0c0-4-2-7-6-11z"/>
    </svg>
  ),
  "Personal Attention": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="7" r="3.5"/><path d="M2 20c0-3.5 3-6 7-6s7 2.5 7 6"/>
      <circle cx="18" cy="8" r="2.5"/><path d="M15.5 20c0-2.5 1.8-4.2 4-4.5"/>
    </svg>
  ),
};

/* Work experience companies — from work history */
const WORK_EXPERIENCE = [
  "Creative Industries",
  "Royal Mango Décor",
  "Yatharth Associates",
];

export default function About() {
  const marqueeContent = [...WORK_EXPERIENCE, ...WORK_EXPERIENCE, ...WORK_EXPERIENCE];

  return (
    <section
      id="about"
      className="relative overflow-hidden"
      style={{
        background: "var(--bg)",
        padding: "clamp(56px, 9vw, 96px) clamp(20px, 6vw, 80px)",
      }}
    >
      {/* Background dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(circle, var(--accent) 1px, transparent 1px)",
        backgroundSize: "30px 30px",
      }} />

      <div className="relative max-w-6xl mx-auto">

        {/* ── Header row: text left, image right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-12">
          {/* Left */}
          <div className="reveal">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-[var(--accent)] opacity-60" />
              <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--accent)] font-semibold">
                About Us
              </span>
            </div>

            <h2
              className="font-['Cormorant_Garamond',serif] font-bold text-[var(--text)] mb-6"
              style={{ fontSize: "clamp(30px, 4.5vw, 48px)", lineHeight: 1.15, letterSpacing: "-0.01em" }}
            >
              Designing Interiors<br />
              That{" "}
              <span style={{
                background: "linear-gradient(135deg, #D4AF37, #F0D060)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Reflect You
              </span>
            </h2>

            <p className="text-sm sm:text-[15px] text-[var(--muted)] leading-relaxed max-w-md mb-7">
              At MJ Interior Designer, we believe that every space has the
              potential to inspire. Our designs combine functionality with
              aesthetics to create beautiful, comfortable, and timeless spaces.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200"
              style={{
                border: "1.5px solid var(--accent)",
                color: "var(--accent)",
                background: "transparent",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(212,175,55,0.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
            >
              Know More About Us
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          {/* Right — image */}
          <div className="reveal relative rounded-2xl overflow-hidden" style={{
            aspectRatio: "4/3",
            border: "1px solid var(--border)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
          }}>
            <img src={aboutImg} alt="MJ Interior Designer — luxury dining space" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{
              background: "linear-gradient(to top, rgba(12,11,9,0.3), transparent 50%)",
            }} />
          </div>
        </div>

        {/* ── Stats strip ── */}
        <div
          className="reveal grid grid-cols-2 sm:grid-cols-4 mb-12"
          style={{
            border: "1px solid var(--border)",
            borderRadius: 16,
            background: "var(--card)",
            overflow: "hidden",
          }}
        >
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center"
              style={{
                padding: "clamp(22px, 3.5vw, 32px) clamp(10px, 2vw, 16px)",
                borderRight: (index + 1) % 2 !== 0 ? "1px solid var(--border)" : "none",
                borderBottom: index < 2 ? "1px solid var(--border)" : "none",
              }}
            >
              <div style={{ color: "var(--accent)", marginBottom: 12, opacity: 0.9 }}>
                {statIcons[stat.label]}
              </div>
              <div
                className="font-['Cormorant_Garamond',serif] font-bold"
                style={{ fontSize: "clamp(24px, 3.5vw, 34px)", color: "var(--text)", lineHeight: 1, marginBottom: 6 }}
              >
                <AnimatedNumber target={stat.numValue} suffix={stat.suffix || ""} />
              </div>
              <div className="text-[10px] sm:text-[11px] tracking-[0.06em] uppercase text-[var(--muted)] font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* ── Work Experience — animated running marquee ── */}
        <div className="reveal">
          <p className="text-center text-[10px] tracking-[0.22em] uppercase text-[var(--muted)] font-semibold mb-5">
            Worked With
          </p>

          <div style={{
            borderTop: "0.5px solid var(--border)",
            borderBottom: "0.5px solid var(--border)",
            padding: "16px 0",
            overflow: "hidden",
          }}>
            <div className="marquee-track">
              {marqueeContent.map((company, i) => (
                <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 20, padding: "0 24px" }}>
                  <span style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(16px, 2vw, 19px)",
                    fontWeight: 600,
                    color: "var(--text)",
                    opacity: 0.8,
                    letterSpacing: "0.01em",
                    whiteSpace: "nowrap",
                  }}>
                    {company}
                  </span>
                  <span style={{ color: "var(--accent)", fontSize: 8, opacity: 0.7 }}>◆</span>
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}