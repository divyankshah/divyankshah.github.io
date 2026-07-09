import { profile } from "../data/content";

export default function Contact() {
  return (
    <section id="contact" className="section section--contact reveal">
      <h2 className="section__title">Get in Touch</h2>
      <p className="section__subtitle">
        Open to full-stack and backend engineering opportunities in Germany and the EU.
      </p>
      <div className="contact-links">
        <a className="btn btn--primary" href={`mailto:${profile.email}`}>
          Email
        </a>
        <a className="btn btn--ghost" href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a className="btn btn--ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </section>
  );
}
