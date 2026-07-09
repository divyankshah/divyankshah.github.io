import { education, skills } from "../data/content";

export default function About() {
  return (
    <section id="about" className="section">
      <h2 className="section__title">About</h2>
      <div className="about">
        <div className="about__block">
          <h3 className="about__heading">Education</h3>
          <ul className="about__list">
            {education.map((item) => (
              <li key={item.degree}>
                <div className="about__list-row">
                  <span className="about__list-title">{item.degree}</span>
                  <span className="about__list-period">{item.period}</span>
                </div>
                <span className="about__list-sub">{item.school}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="about__block">
          <h3 className="about__heading">Skills</h3>
          <div className="about__skills">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="skill-group">
                <span className="skill-group__label">{category}</span>
                <div className="skill-group__tags">
                  {items.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
