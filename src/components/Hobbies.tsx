import { hobbies } from "../data/content";
import { useLightbox } from "../context/LightboxContext";

export default function Hobbies() {
  const { open } = useLightbox();

  return (
    <section id="hobbies" className="section reveal">
      <h2 className="section__title">Beyond Code</h2>
      <div className="hobby-feature">
        <div className="hobby-feature__text">
          <h3 className="hobby-feature__title">{hobbies.yoga.title}</h3>
          <p className="hobby-feature__description">{hobbies.yoga.description}</p>
        </div>
        <div className="hobby-gallery">
          {hobbies.yoga.images.map((image, i) => (
            <button
              key={image.src}
              type="button"
              className="hobby-gallery__item"
              onClick={() => open(hobbies.yoga.images, i)}
              aria-label={`View larger image: ${image.alt}`}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
            </button>
          ))}
        </div>
      </div>
      <div className="hobby-other">
        {hobbies.other.map((item) => (
          <span key={item} className="tag tag--large">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
