import { projects } from "../data/content";
import { useLightbox } from "../context/LightboxContext";
import EventDrivenMockup from "./mockups/EventDrivenMockup";
import KycMockup from "./mockups/KycMockup";
import ExplainableAiMockup from "./mockups/ExplainableAiMockup";

const mockups = {
  event: EventDrivenMockup,
  kyc: KycMockup,
  ai: ExplainableAiMockup,
};

export default function Projects() {
  const { open } = useLightbox();

  return (
    <section id="projects" className="section reveal">
      <h2 className="section__title">Projects & Highlights</h2>
      <p className="section__subtitle">
        Selected work from my roles at TIAA and Persistent Systems.
      </p>
      <div className="grid grid--projects">
        {projects.map((project) => {
          const Mockup = project.mockup ? mockups[project.mockup] : null;
          return (
            <article key={project.title} className="card">
              <div className="card__media">
                {project.image ? (
                  <button
                    type="button"
                    className="card__media-button"
                    onClick={() => open(project.image!)}
                    aria-label={`View larger image: ${project.image.alt}`}
                  >
                    <img src={project.image.src} alt={project.image.alt} loading="lazy" />
                    <span className="card__media-hint">View screenshot</span>
                  </button>
                ) : Mockup ? (
                  <Mockup />
                ) : null}
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
            </article>
          );
        })}
      </div>
    </section>
  );
}
