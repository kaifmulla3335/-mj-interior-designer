import { useState, useEffect } from "react";

const NAV_LINKS = [
  { name: "About",    href: "#about",    id: "about"    },
  { name: "Work",     href: "#work",     id: "work"     },
  { name: "Services", href: "#services", id: "services" },
  { name: "Process",  href: "#process",  id: "process"  },
  { name: "Contact",  href: "#contact",  id: "contact"  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = NAV_LINKS.map(link => link.id);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (href, id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out
          ${scrolled 
            ? "bg-[var(--nav-blur-bg)] backdrop-blur-xl border-b border-[rgba(212,175,55,0.15)] shadow-lg" 
            : "bg-transparent"
          }
          ${mobileMenuOpen ? "opacity-0 invisible md:opacity-100 md:visible" : "opacity-100 visible"}`}
        style={{
          padding: scrolled ? "12px clamp(16px, 5vw, 60px)" : "20px clamp(16px, 5vw, 60px)",
          transition: "opacity 0.3s ease, visibility 0.3s ease, padding 0.5s ease, background 0.5s ease",
        }}
      >
        <div className="flex items-center justify-between max-w-[1400px] mx-auto">
          
          {/* Logo Section - Premium Design */}
          <a 
            href="#top" 
            className="group relative flex items-center gap-2.5 sm:gap-3 transition-all duration-300 hover:scale-105 min-w-0"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            {/* Animated Gold Ring */}
            <div className="relative shrink-0">
              <div className="absolute inset-0 rounded-full bg-[var(--accent)] opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-300" />
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-hover)] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="text-[#0C0B09] font-['Cormorant_Garamond',serif] font-bold text-lg sm:text-xl md:text-2xl">
                  MJ
                </span>
              </div>
            </div>
            
            {/* Logo Text — compact on mobile, hidden on tablet (avoids nav-link collision), full from lg */}
            <div className="block md:hidden">
              <div className="font-['Cormorant_Garamond',serif] font-bold text-sm text-[var(--text)] leading-tight tracking-wide whitespace-nowrap">
                Muaaj Jamadar
              </div>
              <div className="text-[7px] tracking-[0.15em] uppercase text-[var(--accent)] font-medium whitespace-nowrap">
                Interior Designer
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="font-['Cormorant_Garamond',serif] font-bold text-base md:text-lg text-[var(--text)] leading-tight tracking-wide whitespace-nowrap">
                Muaaj Jamadar
              </div>
              <div className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-[var(--accent)] font-medium whitespace-nowrap">
                Interior Designer
              </div>
            </div>

            {/* Animated Gold Line under logo on hover */}
            <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 scale-x-0 group-hover:scale-x-100" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-5 lg:gap-10 xl:gap-12">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href, link.id);
                }}
                className="relative group py-2 shrink-0"
              >
                <span className={`text-sm lg:text-base font-medium transition-all duration-300
                  ${activeSection === link.id 
                    ? "text-[var(--accent)]" 
                    : "text-[var(--muted)] group-hover:text-[var(--text)]"
                  }`}
                >
                  {link.name}
                </span>
                
                {/* Active Indicator */}
                {activeSection === link.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[var(--accent)] rounded-full animate-slideIn" />
                )}
                
                {/* Hover Underline */}
                <span className={`absolute -bottom-1 left-0 right-0 h-[2px] bg-[var(--accent)] rounded-full transition-all duration-300 scale-x-0 group-hover:scale-x-100
                  ${activeSection === link.id ? "opacity-0" : "opacity-100"}`}
                />
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3 md:gap-4">

            {/* Desktop CTA Button */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.querySelector("#contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
                setMobileMenuOpen(false);
              }}
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r 
                from-[var(--accent)] to-[var(--accent-hover)] text-[#0C0B09] rounded-lg
                text-sm font-semibold tracking-wide transition-all duration-300 
                hover:scale-105 hover:shadow-lg hover:shadow-[rgba(212,175,55,0.3)]
                active:scale-95"
            >
              <span>Book Consultation</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            {/* Compact CTA — tablet only (md to lg) */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.querySelector("#contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
                setMobileMenuOpen(false);
              }}
              aria-label="Book Consultation"
              className="hidden md:flex lg:hidden items-center justify-center w-11 h-11 rounded-lg
                bg-gradient-to-r from-[var(--accent)] to-[var(--accent-hover)] text-[#0C0B09]
                transition-all duration-300 hover:scale-105 active:scale-95 shrink-0"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            {/* Mobile Menu Button - Premium Animated Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative w-10 h-10 rounded-lg border border-[rgba(212,175,55,0.3)] 
                bg-[var(--card)] hover:border-[var(--accent)] transition-all duration-300
                flex flex-col items-center justify-center gap-1.5 group"
              aria-label="Menu"
            >
              <span className={`w-5 h-0.5 bg-[var(--accent)] rounded-full transition-all duration-300
                ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span className={`w-5 h-0.5 bg-[var(--accent)] rounded-full transition-all duration-300
                ${mobileMenuOpen ? "opacity-0" : ""}`}
              />
              <span className={`w-5 h-0.5 bg-[var(--accent)] rounded-full transition-all duration-300
                ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Premium Animated */}
      <div 
        className={`fixed inset-0 z-40 transition-all duration-500 ease-out
          ${mobileMenuOpen 
            ? "opacity-100 visible" 
            : "opacity-0 invisible delay-300"}`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-[var(--overlay)] backdrop-blur-md transition-opacity duration-500
            ${mobileMenuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div 
          className={`absolute right-0 top-0 h-full w-full max-w-sm bg-[var(--surface)] 
            border-l border-[rgba(212,175,55,0.15)] shadow-2xl
            transition-transform duration-500 ease-out transform
            ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between gap-3 p-6 border-b border-[rgba(212,175,55,0.1)]">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 shrink-0 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-hover)] rounded-full flex items-center justify-center">
                <span className="text-[#0C0B09] font-['Cormorant_Garamond',serif] font-bold text-lg">MJ</span>
              </div>
              <div className="min-w-0">
                <div className="font-['Cormorant_Garamond',serif] font-bold text-[var(--text)] whitespace-nowrap">Muaaj Jamadar</div>
                <div className="text-[8px] tracking-[0.15em] uppercase text-[var(--accent)] whitespace-nowrap">Interior Designer</div>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-8 h-8 shrink-0 rounded-full border border-[rgba(212,175,55,0.3)] 
                flex items-center justify-center hover:border-[var(--accent)] transition-all duration-300"
            >
              <svg className="w-4 h-4 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col p-6 gap-4">
            {NAV_LINKS.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href, link.id);
                }}
                className={`group relative py-3 px-4 rounded-lg transition-all duration-300
                  transform translate-x-0 hover:translate-x-2
                  ${activeSection === link.id 
                    ? "bg-[rgba(212,175,55,0.1)] border-l-2 border-[var(--accent)]" 
                    : "hover:bg-[rgba(212,175,55,0.05)]"
                  }`}
                style={{
                  animation: mobileMenuOpen ? `slideInFromRight 0.4s ease-out ${index * 0.05}s forwards` : "none",
                  opacity: 0,
                  transform: "translateX(20px)"
                }}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-lg font-medium transition-colors duration-300
                    ${activeSection === link.id 
                      ? "text-[var(--accent)]" 
                      : "text-[var(--text)] group-hover:text-[var(--accent)]"
                    }`}
                  >
                    {link.name}
                  </span>
                  {activeSection === link.id && (
                    <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              </a>
            ))}
          </div>

          {/* Mobile CTA Button */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-[rgba(212,175,55,0.1)] bg-[var(--surface)]">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.querySelector("#contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-3 w-full py-3.5 
                bg-gradient-to-r from-[var(--accent)] to-[var(--accent-hover)] 
                text-[#0C0B09] rounded-lg font-semibold tracking-wide
                transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>Book Free Consultation</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Add Animation Keyframes to style.css if not present */}
      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideIn {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        
        .animate-slideIn {
          animation: slideIn 0.3s ease forwards;
        }
      `}</style>
    </>
  );
}