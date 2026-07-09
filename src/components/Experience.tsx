import { experience } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="section__title">Experience</h2>
      <div className="timeline">
        {experience.map((job) => (
          <article key={job.role + job.company} className="timeline__item">
            <div className="timeline__marker" aria-hidden="true" />
            <div className="timeline__content">
              <div className="timeline__header">
                <h3 className="timeline__role">{job.role}</h3>
                <span className="timeline__period">{job.period}</span>
              </div>
              <p className="timeline__company">{job.company}</p>
              <ul className="timeline__points">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="timeline__stack">
                {job.stack.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
