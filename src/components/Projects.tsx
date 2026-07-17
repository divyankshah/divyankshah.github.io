import { projects } from "../data/content";
import { useProjectModal } from "../context/ProjectModalContext";
import EventDrivenMockup from "./mockups/EventDrivenMockup";
import KycMockup from "./mockups/KycMockup";
import ExplainableAiMockup from "./mockups/ExplainableAiMockup";

const mockups = {
  event: EventDrivenMockup,
  kyc: KycMockup,
  ai: ExplainableAiMockup,
};

export default function Projects() {
  const { open } = useProjectModal();

  return (
    <section id="projects" className="section reveal">
      <h2 className="section__title">Projects & Highlights</h2>
      <p className="section__subtitle">
        Selected work from my roles at TIAA and Persistent Systems. Click a project for the full write-up.
      </p>
      <div className="grid grid--projects">
        {projects.map((project) => {
          const Mockup = project.mockup ? mockups[project.mockup] : null;
          return (
            <button
              key={project.title}
              type="button"
              className="card"
              onClick={() => open(project)}
              aria-haspopup="dialog"
              aria-label={`View project details: ${project.title}`}
            >
              <div className="card__media">
                {project.image ? (
                  <img src={project.image.src} alt={project.image.alt} />
                ) : Mockup ? (
                  <Mockup />
                ) : null}
                <span className="card__media-hint">View project details</span>
              </div>
              <div className="card__body">
                <h3 className="card__title">{project.title}</h3>
                <p className="card__description">{project.description}</p>
                <div className="card__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
