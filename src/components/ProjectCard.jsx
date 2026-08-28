import { ExternalLink, Github, Code2 } from "lucide-react";
import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  const { title, description, image, tech, githubUrl, liveUrl, details } = project;

  return (
    <article className="project-card card">
      <div className="project-card-media">
        {image ? (
          <img src={image} alt={`Screenshot of ${title}`} loading="lazy" />
        ) : (
          <div className="project-card-placeholder" aria-hidden="true">
            <Code2 size={28} />
          </div>
        )}
      </div>

      <div className="project-card-body">
        <h3>{title}</h3>
        <p>{description}</p>

        {tech?.length > 0 && (
          <ul className="project-card-tech" aria-label="Technologies used">
            {tech.map((item) => (
              <li key={item} className="tag">
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="project-card-links">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noreferrer" aria-label={`${title} source code on GitHub`}>
              <Github size={16} aria-hidden="true" /> Code
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noreferrer" aria-label={`${title} live demo`}>
              <ExternalLink size={16} aria-hidden="true" /> Live demo
            </a>
          )}
          {details && (
            <a href={`#project-${project.id}-details`} aria-label={`${title} case study details`}>
              Details
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
