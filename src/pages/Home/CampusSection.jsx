import SectionHeading from '../../components/ui/SectionHeading';
import { campusPhotos } from '../../data/home';

export default function CampusSection() {
  return (
    <section className="section section--cream">
      <div className="container">
        <SectionHeading
          eyebrow="Student life"
          title="Our campus life"
          text="Cultural experiences, company visits, festivals and celebrations. Learning at Ascencia Malta goes well beyond the classroom."
        />
        <div className="campus__grid">
          {campusPhotos.map((photo) => (
            <figure className="campus__item" key={photo.src}>
              <img src={photo.src} alt={photo.alt} loading="lazy" width="600" height="450" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
