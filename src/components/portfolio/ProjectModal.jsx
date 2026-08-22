import { useEffect } from "react";
import { CheckCircle2, Code2, Download, ExternalLink, X } from "lucide-react";
import { ImageWithFallback } from "../common/ImageWithFallback";

export function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;

      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, project]);

  if (!project) {
    return null;
  }

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <div
        className="project-modal glass-card"
        role="dialog"
        aria-modal="true"
        aria-label={`Detail ${project.title}`}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Tutup detail"
        >
          <X size={22} />
        </button>

        <ImageWithFallback
          src={project.img}
          alt={project.title}
          className="modal-image"
          initials={project.title}
        />

        <div className="modal-content">
          <span className="section-kicker">Project Detail</span>

          <h2>{project.title}</h2>

          <p>{project.description}</p>

          {project.features?.length > 0 && (
            <div className="modal-block">
              <h3>Fitur Utama</h3>

              <ul>
                {project.features.map((feature) => (
                  <li key={feature}>
                    <CheckCircle2 size={17} />

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.tech_stack?.length > 0 && (
            <div className="modal-block">
              <h3>Tech Stack</h3>

              <div className="chip-list">
                {project.tech_stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          )}

          <div className="modal-actions">
            {project.link && (
              <a
                className="primary-button"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
                <ExternalLink size={16} />
              </a>
            )}

            {project.github && (
              <a
                className="secondary-button"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <Code2 size={17} />
                GitHub
              </a>
            )}

            {project.pdf && (
              <a
                className="secondary-button"
                href={project.pdf}
                target="_blank"
                rel="noreferrer"
              >
                <Download size={17} />
                PDF
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
