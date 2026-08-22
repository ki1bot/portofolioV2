import { useEffect, useState } from "react";
import { BackToTop } from "./components/layout/BackToTop";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { AboutSection } from "./components/sections/AboutSection";
import { ContactSection } from "./components/sections/ContactSection";
import { EducationSection } from "./components/sections/EducationSection";
import { HeroSection } from "./components/sections/HeroSection";
import { PortfolioSection } from "./components/sections/PortfolioSection";
import { getPortfolioData } from "./lib/portfolio";

export default function App() {
  const [portfolio, setPortfolio] = useState({
    projects: [],
    certificates: [],
    comments: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    getPortfolioData()
      .then((data) => {
        if (active) {
          setPortfolio(data);
        }
      })
      .finally(() => {
        if (active) {
          setLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="app-shell">
      <div className="background-orb orb-one" />
      <div className="background-orb orb-two" />
      <div className="background-grid" />

      <Navbar />

      <main>
        <HeroSection />

        <EducationSection />

        <AboutSection
          projectCount={portfolio.projects.length}
          certificateCount={portfolio.certificates.length}
        />

        {loading ? (
          <section className="content-section loading-section">
            <div className="loading-card glass-card">
              Memuat data portofolio...
            </div>
          </section>
        ) : (
          <>
            <PortfolioSection
              projects={portfolio.projects}
              certificates={portfolio.certificates}
            />

            <ContactSection comments={portfolio.comments} />
          </>
        )}
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
