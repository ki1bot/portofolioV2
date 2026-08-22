import { ExternalLink } from "lucide-react";
import { ImageWithFallback } from "../common/ImageWithFallback";

export function ProjectCard({ project, onDetails }) {
  return (
    <article className="project-card glass-card">
      <div className="project-image-wrap">
        <ImageWithFallback
          src={project.img}
          alt={project.title}
          className="project-image"
          initials={project.title}
        />
      </div>

      <div className="project-body">
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-tech-preview">
          {(project.tech_stack || []).slice(0, 4).map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-actions">
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="secondary-button small-button"
            >
              Live Demo
              <ExternalLink size={15} />
            </a>
          ) : (
            <span className="disabled-button">No Demo</span>
          )}

          <button
            className="primary-button small-button"
            onClick={() => onDetails(project)}
          >
            Details
          </button>
        </div>
      </div>
    </article>
  );
}
