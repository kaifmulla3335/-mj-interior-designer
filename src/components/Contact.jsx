import { useState } from "react";
import { PhoneIcon, EmailIcon, LocationIcon, WhatsAppIcon, ArrowIcon, ChevronIcon } from "./icons";

const contactRows = [
  { Icon: PhoneIcon,    label: "Phone",    value: "+91 91195 10459",         href: "tel:+919119510459"              },
  { Icon: EmailIcon,    label: "Email",    value: "muaajjamadar3@gmail.com", href: "mailto:muaajjamadar3@gmail.com" },
  { Icon: LocationIcon, label: "Location", value: "Kolhapur, Maharashtra",   href: null                             },
];

const inputBase =
  "w-full px-4 py-3 rounded-xl text-sm font-['DM_Sans',sans-serif] outline-none transition-all duration-200 " +
  "bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] " +
  "focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(212,175,55,0.12)] " +
  "placeholder:text-[var(--muted)]";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", type: "", message: "" });

  const handleSubmit = () => {
    const subject = encodeURIComponent(`Interior Design Enquiry — ${form.type || "General"}`);
    const body = encodeURIComponent(`Hi Muaaj,\n\nName: ${form.name}\nPhone: ${form.phone}\nProject Type: ${form.type}\n\n${form.message}`);
    window.location.href = `mailto:muaajjamadar3@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[var(--surface)] py-20 sm:py-24 px-5 sm:px-8 md:px-12 lg:px-20"
    >
      {/* Background decorative glows */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 0% 100%, rgba(212,175,55,0.07), transparent 60%), radial-gradient(ellipse 50% 40% at 100% 0%, rgba(212,175,55,0.05), transparent 55%)" }}
      />

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-30"
        style={{ backgroundImage: "radial-gradient(circle, var(--border) 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />

      {/* Watermark */}
      <div className="absolute top-0 right-4 sm:right-8 md:right-16 select-none pointer-events-none font-['Cormorant_Garamond',serif] font-bold leading-none text-[var(--accent)]"
        style={{ fontSize: "clamp(100px, 18vw, 200px)", opacity: 0.04, letterSpacing: "-0.05em" }}
      >MJ</div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-[var(--accent)] opacity-60" />
          <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--accent)] font-semibold">
            Get In Touch
          </span>
          <div className="w-8 h-px bg-[var(--accent)] opacity-60" />
        </div>

        {/* Two-column grid — stacks on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-start">

          {/* ── LEFT ── */}
          <div>
            <h2 className="font-['Cormorant_Garamond',serif] font-bold leading-[1.0] text-[var(--text)] mb-5"
              style={{ fontSize: "clamp(38px, 6vw, 72px)", letterSpacing: "-0.02em" }}
            >
              Let's Work<br/>
              <em className="not-italic text-[var(--accent)] italic">Together</em>
            </h2>

            {/* Gold rule */}
            <div className="flex items-center gap-2 mb-6">
              <div className="h-0.5 w-12 rounded-full bg-gradient-to-r from-[var(--accent)] to-transparent" />
              <span className="text-[var(--accent)] text-[9px]">◆</span>
            </div>

            <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed max-w-sm mb-8">
              Whether it's a room makeover or a complete build, we'd love to hear about your vision. Let's design something extraordinary.
            </p>

            {/* Contact cards */}
            <div className="flex flex-col gap-3 mb-8">
              {contactRows.map(({ Icon, label, value, href }) => {
                const card = (
                  <div className="group flex items-center gap-4 p-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] transition-all duration-200 hover:border-[var(--accent)] hover:shadow-[0_4px_20px_rgba(212,175,55,0.10)]">
                    {/* Icon circle */}
                    <div className="w-11 h-11 shrink-0 rounded-full flex items-center justify-center text-[var(--accent)] border border-[rgba(212,175,55,0.3)]"
                      style={{ background: "linear-gradient(135deg, rgba(212,175,55,0.15), rgba(212,175,55,0.04))" }}
                    >
                      <Icon />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[9px] tracking-[0.14em] uppercase text-[var(--muted)] font-semibold mb-0.5">{label}</p>
                      <p className="text-sm font-medium text-[var(--text)] truncate">{value}</p>
                    </div>
                  </div>
                );
                return href
                  ? <a key={label} href={href} className="no-underline">{card}</a>
                  : <div key={label}>{card}</div>;
              })}
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919119510459?text=Hi%2C%20can%20you%20share%20details%20about%20your%20interior%20design%20services%20and%20consultation%3F"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl text-white text-sm font-semibold tracking-wide no-underline transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #25D366, #1ebe5d)",
                boxShadow: "0 8px 24px rgba(37,211,102,0.28)",
              }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 12px 32px rgba(37,211,102,0.4)")}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 8px 24px rgba(37,211,102,0.28)")}
            >
              <WhatsAppIcon /> Chat on WhatsApp
            </a>
          </div>

          {/* ── RIGHT: Form ── */}
          <div className="relative rounded-3xl border border-[var(--border)] bg-[var(--card)] overflow-hidden"
            style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.06)", padding: "clamp(24px, 4vw, 40px)" }}
          >
            {/* Top gold accent bar */}
            <div className="absolute top-0 left-0 right-0 h-[3px]"
              style={{ background: "linear-gradient(to right, transparent, var(--accent), transparent)" }}
            />

            {/* Form header */}
            <div className="mb-6">
              <p className="text-[10px] tracking-[0.16em] uppercase text-[var(--accent)] font-semibold mb-1">
                Start Your Project
              </p>
              <h3 className="font-['Cormorant_Garamond',serif] font-semibold text-[var(--text)]"
                style={{ fontSize: "clamp(20px, 3vw, 28px)", letterSpacing: "-0.01em" }}
              >
                Tell Us Your Vision
              </h3>
            </div>

            <div className="flex flex-col gap-4">

              {/* Name */}
              <div>
                <label className="block text-[10px] tracking-[0.12em] uppercase text-[var(--muted)] font-semibold mb-2">
                  Your Name
                </label>
                <input
                  className={inputBase}
                  placeholder="e.g. Rajesh Sharma"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-[10px] tracking-[0.12em] uppercase text-[var(--muted)] font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  className={inputBase}
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                />
              </div>

              {/* Project type */}
              <div>
                <label className="block text-[10px] tracking-[0.12em] uppercase text-[var(--muted)] font-semibold mb-2">
                  Project Type
                </label>
                <div className="relative">
                  <select
                    className={inputBase + " appearance-none cursor-pointer pr-10"}
                    value={form.type}
                    onChange={e => setForm({ ...form, type: e.target.value })}
                  >
                    <option value="">Select project type…</option>
                    <option>Residential Design</option>
                    <option>Commercial Space</option>
                    <option>Restaurant &amp; Hospitality</option>
                    <option>Custom Furniture</option>
                    <option>3D Visualization</option>
                    <option>AutoCAD Drawings</option>
                    <option>Other</option>
                  </select>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--muted)]">
                    <ChevronIcon />
                  </span>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[10px] tracking-[0.12em] uppercase text-[var(--muted)] font-semibold mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className={inputBase + " resize-y min-h-[100px]"}
                  placeholder="Tell us about your space, budget and timeline…"
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                />
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                className="flex items-center justify-center gap-2.5 w-full py-4 rounded-xl text-sm font-bold tracking-wide text-[#0C0B09] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                style={{
                  background: "linear-gradient(135deg, var(--accent), var(--accent-hover))",
                  boxShadow: "0 8px 24px rgba(212,175,55,0.30)",
                }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 12px 32px rgba(212,175,55,0.45)")}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 8px 24px rgba(212,175,55,0.30)")}
              >
                Send Enquiry <ArrowIcon />
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}