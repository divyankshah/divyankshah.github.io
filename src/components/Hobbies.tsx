import { hobbies } from "../data/content";

export default function Hobbies() {
  return (
    <section id="hobbies" className="section">
      <h2 className="section__title">Beyond Code</h2>
      <div className="hobby-feature">
        <div className="hobby-feature__text">
          <h3 className="hobby-feature__title">{hobbies.yoga.title}</h3>
          <p className="hobby-feature__description">{hobbies.yoga.description}</p>
        </div>
        <div className="hobby-gallery">
          {hobbies.yoga.images.map((image) => (
            <div key={image.src} className="hobby-gallery__item">
              <img src={image.src} alt={image.alt} loading="lazy" />
            </div>
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
