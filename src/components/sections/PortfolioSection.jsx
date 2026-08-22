import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { Reveal } from "../animations/Reveal";
import { ImageWithFallback } from "../common/ImageWithFallback";
import { ProjectCard } from "../portfolio/ProjectCard";
import { ProjectModal } from "../portfolio/ProjectModal";
import { TECH_STACK } from "../../lib/portfolio";

export function PortfolioSection({ projects, certificates }) {
  const [tab, setTab] = useState("projects");

  const [expanded, setExpanded] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null);

  const initialCount = 5;

  const visibleProjects = expanded ? projects : projects.slice(0, initialCount);

  const remaining = Math.max(projects.length - initialCount, 0);

  return (
    <section id="projects" className="content-section portfolio-section">
      <Reveal className="section-heading">
        <span className="section-kicker">Portofolio Showcase</span>

        <h2>Project, sertifikat, dan teknologi</h2>

        <p>
          Jelajahi project, sertifikat, dan teknologi yang saya gunakan dalam
          proses belajar dan pengembangan portofolio ini.
        </p>
      </Reveal>

      <div className="tabs" role="tablist" aria-label="Portofolio">
        <button
          className={tab === "projects" ? "active" : ""}
          onClick={() => setTab("projects")}
        >
          Projects
        </button>

        <button
          className={tab === "certificates" ? "active" : ""}
          onClick={() => setTab("certificates")}
        >
          Certificates
        </button>

        <button
          className={tab === "tech" ? "active" : ""}
          onClick={() => setTab("tech")}
        >
          Tech Stack
        </button>
      </div>

      {tab === "projects" && (
        <>
          <div className="project-grid">
            {visibleProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onDetails={setSelectedProject}
              />
            ))}
          </div>

          {remaining > 0 && (
            <button
              className="see-more-button"
              onClick={() => setExpanded((value) => !value)}
            >
              {expanded ? "Show Less" : `See More ${remaining}`}

              <ChevronDown className={expanded ? "rotate" : ""} size={18} />
            </button>
          )}
        </>
      )}

      {tab === "certificates" && (
        <div className="certificate-grid">
          {certificates.map((certificate) => (
            <a
              key={certificate.id}
              href={certificate.pdf_url || certificate.img}
              target="_blank"
              rel="noreferrer"
              className="certificate-card glass-card"
            >
              <ImageWithFallback
                src={certificate.img}
                alt={certificate.title}
                className="certificate-image"
                initials="CT"
              />

              <div>
                <h3>{certificate.title}</h3>

                <span>
                  Open Certificate
                  <ExternalLink size={14} />
                </span>
              </div>
            </a>
          ))}
        </div>
      )}

      {tab === "tech" && (
        <div className="tech-grid">
          {TECH_STACK.map((tech, index) => (
            <div className="tech-card glass-card" key={tech}>
              <span className="tech-index">
                {String(index + 1).padStart(2, "0")}
              </span>

              <strong>{tech}</strong>
            </div>
          ))}
        </div>
      )}

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
