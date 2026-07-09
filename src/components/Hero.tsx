import { profile } from "../data/content";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__decor" aria-hidden="true">
        <span className="hero__blob hero__blob--one" />
        <span className="hero__blob hero__blob--two" />
        <span className="hero__grid" />
      </div>
      <div className="hero__inner reveal">
        <p className="hero__eyebrow">Hello, I'm</p>
        <h1 className="hero__name">{profile.name}</h1>
        <h2 className="hero__tagline">{profile.tagline}</h2>
        <p className="hero__location">{profile.location}</p>
        <p className="hero__bio">{profile.bio}</p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#contact">
            Get in touch
          </a>
          <a className="btn btn--ghost" href="#projects">
            View work
          </a>
        </div>
      </div>
    </section>
  );
}
