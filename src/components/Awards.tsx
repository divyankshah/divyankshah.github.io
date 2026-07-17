import { awards, awardsPhoto } from "../data/content";
import { useLightbox } from "../context/LightboxContext";

function TrophyIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" />
      <path d="M17 5h2a2 2 0 0 1 2 2v1a3 3 0 0 1-3 3" />
      <path d="M7 5H5a2 2 0 0 0-2 2v1a3 3 0 0 0 3 3" />
    </svg>
  );
}

export default function Awards() {
  const { open } = useLightbox();

  return (
    <section id="awards" className="section reveal">
      <h2 className="section__title">Awards & Recognition</h2>
      <div className="award-panel">
        <button
          type="button"
          className="award-panel__photo"
          onClick={() => open([awardsPhoto])}
          aria-label={`View larger image: ${awardsPhoto.alt}`}
        >
          <img src={awardsPhoto.src} alt={awardsPhoto.alt} />
        </button>
        <ul className="award-panel__list">
          {awards.map((award) => (
            <li key={award.title} className="award-panel__item">
              <span className="award-panel__icon">
                <TrophyIcon />
              </span>
              <div>
                <h3 className="award-panel__title">{award.title}</h3>
                <p className="award-panel__org">{award.org}</p>
              </div>
              <span className="award-panel__year">{award.year}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
