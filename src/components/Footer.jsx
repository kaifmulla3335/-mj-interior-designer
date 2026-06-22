import { PhoneIcon, EmailIcon, LocationIcon, WhatsAppIcon, InstagramIcon, LinkedInIcon } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();
  const navLinks = ["Work", "Services", "Process", "Contact"];

  // WhatsApp link with pre-filled enquiry message (social icon)
  const WA_NUMBER = "919119510459";
  const WA_MSG = encodeURIComponent("Hi, can you share details about your interior design services and consultation?");
  const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`;

  const socials = [
    {
      label: "Instagram",
      href: "https://www.instagram.com/_muaaj_585_?igsh=MWFkM2FzZDJlNWJtNg==",
      icon: <InstagramIcon size={16} />,
    },
    {
      label: "WhatsApp",
      href: WA_LINK,
      icon: <WhatsAppIcon size={16} />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/m-j-52348232a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      icon: <LinkedInIcon size={16} />,
    },
  ];

  const contactItems = [
    {
      icon: <EmailIcon size={14} />,
      label: "muaajjamadar3@gmail.com",
      href: "mailto:muaajjamadar3@gmail.com",
    },
    {
      icon: <PhoneIcon size={14} />,
      label: "+91 91195 10459",
      href: "tel:+919119510459",
    },
    {
      icon: <LocationIcon size={14} />,
      label: "Kolhapur, Maharashtra, India",
      href: null,
    },
  ];

  return (
    <footer style={{
      background: "var(--bg)",
      borderTop: "0.5px solid var(--border)",
      padding: "64px clamp(20px, 6vw, 80px) 0",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Subtle radial glow */}
      <div style={{
        position: "absolute", top: 0, right: 0,
        width: 400, height: 300,
        background: "radial-gradient(ellipse at top right, rgba(212,175,55,0.06), transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Main content grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
        gap: 40,
        maxWidth: 1100,
        margin: "0 auto",
        paddingBottom: 48,
      }}>

        {/* Brand */}
        <div style={{ maxWidth: 280 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <div style={{
              width: 38, height: 38,
              background: "linear-gradient(135deg, #D4AF37, #B8962E)",
              borderRadius: 8,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700, fontSize: 17, color: "#0C0B09", flexShrink: 0,
            }}>MJ</div>
            <div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: 17, color: "var(--text)", lineHeight: 1.2 }}>
                Muaaj Jamadar
              </div>
              <div style={{ fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#D4AF37", marginTop: 1 }}>
                Interior Designer
              </div>
            </div>
          </div>

          <p style={{ fontSize: 13, color: "var(--text)", opacity: 0.7, lineHeight: 1.75, marginBottom: 24 }}>
            Premium interior design for homes, commercial spaces and hospitality environments. Based in Kolhapur, Maharashtra.
          </p>

          <div style={{ display: "flex", gap: 10 }}>
            {socials.map(({ label, href, icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                style={{
                  width: 34, height: 34, borderRadius: 8,
                  border: "0.5px solid #2E2820", background: "#1A1610",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--text)", opacity: 0.7,
                  transition: "border-color 0.2s, color 0.2s, background 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#D4AF37"; e.currentTarget.style.color = "#D4AF37"; e.currentTarget.style.opacity = "1"; e.currentTarget.style.background = "rgba(212,175,55,0.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#2E2820"; e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.opacity = "0.7"; e.currentTarget.style.background = "#1A1610"; }}
              >{icon}</a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <p style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "#D4AF37", marginBottom: 20, fontWeight: 500 }}>
            Navigation
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {navLinks.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`}
                style={{ fontSize: 13, color: "var(--text)", opacity: 0.7, transition: "color 0.2s, transform 0.2s", display: "inline-flex", alignItems: "center", gap: 6 }}
                onMouseEnter={e => { e.currentTarget.style.color = "#D4AF37"; e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateX(4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.opacity = "0.7"; e.currentTarget.style.transform = "translateX(0)"; }}
              >
                <span style={{ color: "#D4AF37", fontSize: 8, opacity: 0.6 }}>◆</span>
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <p style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "#D4AF37", marginBottom: 20, fontWeight: 500 }}>
            Contact
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {contactItems.map(({ icon, label, href }) =>
              href ? (
                <a key={label} href={href}
                  style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "var(--text)", opacity: 0.7, textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.color = "#D4AF37"; e.currentTarget.style.opacity = "1"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.opacity = "0.7"; }}
                >
                  <span style={{ color: "#D4AF37", opacity: 0.7, flexShrink: 0 }}>{icon}</span>
                  {label}
                </a>
              ) : (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "var(--text)", opacity: 0.7 }}>
                  <span style={{ color: "#D4AF37", opacity: 0.7, flexShrink: 0 }}>{icon}</span>
                  {label}
                </div>
              )
            )}
          </div>
        </div>

        {/* CTA */}
        <div>
          <p style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "#D4AF37", marginBottom: 20, fontWeight: 500 }}>
            Start a Project
          </p>
          <p style={{ fontSize: 13, color: "var(--text)", opacity: 0.7, lineHeight: 1.7, marginBottom: 20 }}>
            Ready to transform your space? Let's craft something extraordinary together.
          </p>
          <a href="#contact"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "10px 20px",
              background: "linear-gradient(135deg, #D4AF37, #B8962E)",
              color: "#0C0B09", borderRadius: 8,
              fontSize: 12, fontWeight: 600, letterSpacing: "0.05em",
              textDecoration: "none",
              transition: "opacity 0.2s, transform 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Book Consultation
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>

      {/* ── Bottom bar — same maxWidth as grid above so everything aligns ── */}
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Divider */}
        <div style={{
          height: 1,
          background: "linear-gradient(to right, #2E2820 0%, #D4AF3799 50%, #2E2820 100%)",
        }} />

        {/* Left copyright / Right developer */}
        <div className="footer-bottom" style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "5px 24px",
          padding: "15px 0 22px",
        }}>
          <p style={{
            fontSize: 12, color: "var(--text)", opacity: 0.55,
            letterSpacing: "0.02em",
            whiteSpace: "nowrap",
            margin: 0,
          }}>
            © {year} MJ Interior Designer. All rights reserved.
          </p>
          <p style={{
            fontSize: 12, color: "var(--text)", opacity: 0.55,
            letterSpacing: "0.02em",
            whiteSpace: "nowrap",
            margin: 0, flexShrink: 0,
          }}>
            Designed &amp; Developed by{" "}
            <a href="https://wa.me/918624913335?text=Hi%20Kaif%2C%20I%20would%20like%20to%20know%20more%20about%20your%20website%20development%20services."
              target="_blank" rel="noreferrer"
              style={{
                fontWeight: 600,
                background: "linear-gradient(90deg, #D4AF37, #B8962E)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              Kaif Mulla
            </a>
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .footer-bottom {
            flex-direction: column !important;
            align-items: center !important;
            gap: 4px !important;
          }
          .footer-bottom p {
            text-align: center !important;
            font-size: 11px !important;
            white-space: nowrap !important;
          }
        }
      `}</style>

    </footer>
  );
}