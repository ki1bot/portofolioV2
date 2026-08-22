import {
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  ExternalLink,
  MapPin,
} from "lucide-react";
import { Reveal } from "../animations/Reveal";
import { ImageWithFallback } from "../common/ImageWithFallback";
import { ASSET_BASE_URL, PERSONAL_INFO, TECH_STACK } from "../../lib/portfolio";
import { scrollToSection } from "../../lib/navigation";

const CAPABILITIES = [
  {
    icon: Code2,
    title: "Frontend Development",
    text: "Mengembangkan antarmuka website yang responsif, modern, dan mudah digunakan dengan React, Next.js, Tailwind CSS, dan framework lainnya.",
  },
  {
    icon: Database,
    title: "Database Integration",
    text: "Mengintegrasikan aplikasi dengan database untuk menyimpan, mengelola, dan menampilkan project, sertifikat, komentar, dan data pendukung lainnya.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Clean Code Structure",
    text: "Menata struktur folder, komponen, dan kode secara terorganisir agar mudah dipahami, dipelihara, dan dikembangkan.",
  },
];

export function AboutSection({ projectCount, certificateCount }) {
  return (
    <section id="about" className="content-section about-section">
      <Reveal className="section-heading align-left">
        <span className="section-kicker">About Me</span>

        <h2>
          Saya membangun website dengan tampilan yang rapi, responsif, dan
          nyaman digunakan di berbagai perangkat.
        </h2>

        <p>
          Saya adalah mahasiswa Sistem Informasi yang berfokus pada pengembangan
          website modern. Saya menggunakan React, Next.js, Tailwind CSS, dan
          framework lainnya untuk membangun antarmuka yang responsif, mengelola
          data aplikasi, serta menghadirkan pengalaman pengguna yang nyaman di
          berbagai perangkat.
        </p>
      </Reveal>

      <div className="about-grid">
        <div className="capability-grid">
          {CAPABILITIES.map(({ icon: Icon, title, text }) => (
            <Reveal key={title} className="capability-card glass-card">
              <div className="icon-box">
                <Icon size={22} />
              </div>

              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="profile-card glass-card">
          <div className="profile-image-wrap">
            <ImageWithFallback
              src={PERSONAL_INFO.profileImage}
              alt="Rifqi"
              className="profile-image"
              initials="RF"
            />
          </div>

          <h3>{PERSONAL_INFO.name}</h3>

          <p className="profile-role">{PERSONAL_INFO.role}</p>

          <p className="profile-location">
            <MapPin size={16} />
            {PERSONAL_INFO.location}
          </p>

          <div className="profile-stats">
            <div>
              <strong>{projectCount}</strong>
              <span>Projects</span>
            </div>

            <div>
              <strong>{certificateCount}</strong>
              <span>Certificates</span>
            </div>

            <div>
              <strong>{TECH_STACK.length}</strong>
              <span>Tech Stack</span>
            </div>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="github-card"
          >
            <img
              src={`${ASSET_BASE_URL}/media/github.png`}
              alt=""
              className="github-card-icon"
            />

            <div>
              <strong>GitHub Contributions</strong>
              <span>View on GitHub</span>
            </div>

            <ExternalLink size={16} />
          </a>

          <div className="profile-actions">
            <a
              className="secondary-button"
              href="https://drive.google.com/drive/folders/1SmhgvKkpRICHDnnvEH3dTHS-72bmsp16?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <Download size={17} />
              Download CV
            </a>

            <button
              className="primary-button"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
