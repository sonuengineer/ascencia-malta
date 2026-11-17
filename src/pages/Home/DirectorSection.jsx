import SectionHeading from '../../components/ui/SectionHeading';
import Icon from '../../components/ui/Icon';
import { director, leadership } from '../../data/home';

export default function DirectorSection() {
  return (
    <section className="section">
      <div className="container director">
        <figure className="director__portrait">
          <img src={director.image} alt={`Portrait of ${director.name}`} loading="lazy" width="400" height="400" />
          <figcaption>
            <strong>{director.name}</strong>
            <span>{director.role}</span>
          </figcaption>
        </figure>

        <div className="director__message">
          <SectionHeading eyebrow="A word from our Director" title={director.title} />
          <Icon name="quote" size={36} className="director__quote-icon" />
          {director.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
          <p className="director__signoff">{director.signoff}</p>

          <ul className="leadership">
            {leadership.map((person) => (
              <li className="leadership__item" key={person.name}>
                <img src={person.image} alt="" loading="lazy" width="56" height="56" />
                <div>
                  <strong>{person.name}</strong>
                  <span>{person.role}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
