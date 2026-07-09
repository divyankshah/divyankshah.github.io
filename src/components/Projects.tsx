import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section__title">Projects & Highlights</h2>
      <p className="section__subtitle">
        Selected work from my roles at TIAA and Persistent Systems.
      </p>
      <div className="grid grid--projects">
        {projects.map((project) => (
          <article key={project.title} className="card">
            <h3 className="card__title">{project.title}</h3>
            <p className="card__description">{project.description}</p>
            <div className="card__tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
