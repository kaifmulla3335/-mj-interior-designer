import { WhatsAppIcon } from "./icons";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919119510459?text=Hi%2C%20can%20you%20share%20details%20about%20your%20interior%20design%20services%20and%20consultation%3F"
      target="_blank"
      rel="noreferrer"
      className="wa-float-btn"
      style={{
        position: "fixed", bottom: 24, right: 24, zIndex: 999,
        width: 52, height: 52, borderRadius: "50%",
        background: "#25D366", color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
        animation: "wa-pulse 2.5s ease infinite",
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
      onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
    >
      <WhatsAppIcon size={26} />

      <style>{`
        @media (max-width: 640px) {
          .wa-float-btn {
            bottom: 84px !important;
          }
        }
      `}</style>
    </a>
  );
}