import { ChevronDown, ExternalLink, Mail, Sparkles } from "lucide-react";
import { Reveal } from "../animations/Reveal";
import { HERO_ROLES, SOCIAL_LINKS } from "../../data/site";
import { useTypewriter } from "../../hooks/useTypewriter";
import { HERO_STACKS, PERSONAL_INFO } from "../../lib/portfolio";
import { scrollToSection } from "../../lib/navigation";

export function HeroSection() {
  const role = useTypewriter(HERO_ROLES);

  return (
    <section id="home" className="hero-section section-shell">
      <div className="hero-grid">
        <Reveal className="hero-copy">
          <div className="eyebrow-pill">
            <Sparkles size={16} />
            Ready to Innovate
          </div>

          <h1>
            Software
            <span>Engineer</span>
          </h1>

          <div className="typewriter">
            {role}
            <span>|</span>
          </div>

          <p className="hero-description">
            Saya membangun website yang modern, fungsional, dan mudah digunakan
            untuk menjawab berbagai kebutuhan digital.
          </p>

          <div className="chip-list hero-chips">
            {HERO_STACKS.map((stack) => (
              <span key={stack}>{stack}</span>
            ))}
          </div>

          <div className="hero-actions">
            <button
              className="primary-button"
              onClick={() => scrollToSection("projects")}
            >
              Projects
              <ExternalLink size={17} />
            </button>

            <button
              className="secondary-button"
              onClick={() => scrollToSection("contact")}
            >
              Contact
              <Mail size={17} />
            </button>
          </div>

          <div className="hero-socials">
            {SOCIAL_LINKS.slice(0, 3).map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
              >
                <img src={social.image} alt="" />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal className="hero-visual">
          <div className="hero-visual-glow" />

          <img
            src={PERSONAL_INFO.heroImage}
            alt="Ilustrasi pengembangan website"
          />
        </Reveal>
      </div>

      <button
        className="scroll-indicator"
        onClick={() => scrollToSection("education")}
        aria-label="Lanjut ke bagian pendidikan"
      >
        <span>Scroll</span>
        <ChevronDown size={18} />
      </button>
    </section>
  );
}
