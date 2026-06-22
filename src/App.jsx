import { useEffect, useState } from "react";
import "./style.css";

import Loader           from "./components/Loader";
import Navbar          from "./components/Navbar";
import Hero            from "./components/Hero";
import TrustMarquee    from "./components/TrustMarquee";
import Carousel        from "./components/Carousel";
import About           from "./components/About";
import Services        from "./components/Services";
import Process         from "./components/Process";
import ProjectsMarquee from "./components/ProjectsMarquee";
import Contact         from "./components/Contact";
import Footer          from "./components/Footer";
import WhatsAppFloat   from "./components/WhatsAppFloat";

export default function App() {
  const [loading, setLoading] = useState(true);

  // Lock to dark mode permanently
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  // Lock scroll while loader is visible
  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [loading]);

  // Scroll reveal — opacity only, threshold low so it triggers early
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const delay = Number(e.target.dataset.delay || 0) * 80;
            setTimeout(() => e.target.classList.add("visible"), delay);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}
      <div
        style={{
          minHeight: "100vh",
          opacity: loading ? 0 : 1,
          transition: "opacity 0.6s ease",
        }}
      >
        <Navbar />
        <Hero />
        <TrustMarquee />
        <About />
        <Carousel />
        <Services />
        <Process />
        <ProjectsMarquee />
        <Contact />
        <Footer />
        <WhatsAppFloat />
      </div>
    </>
  );
}