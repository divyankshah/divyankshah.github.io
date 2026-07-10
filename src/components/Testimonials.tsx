import { testimonials } from "../data/content";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section reveal">
      <h2 className="section__title">What Colleagues Say</h2>
      <p className="section__subtitle">Recommendations from managers and teammates at TIAA.</p>
      <div className="grid grid--testimonials">
        {testimonials.map((t) => (
          <article key={t.name} className="testimonial-card">
            <p className="testimonial-card__quote">“{t.quote}”</p>
            <div className="testimonial-card__author">
              <span className="testimonial-card__name">{t.name}</span>
              <span className="testimonial-card__role">{t.role}</span>
              <span className="testimonial-card__relation">{t.relation}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
