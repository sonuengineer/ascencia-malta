import Button from '../../components/ui/Button';
import Icon from '../../components/ui/Icon';
import { hero } from '../../data/home';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__eyebrow">{hero.eyebrow}</p>
          <h1 className="hero__title">
            Think global, <em>study</em> at Ascencia Malta
          </h1>
          <p className="hero__text">{hero.text}</p>

          <div className="hero__actions">
            <Button href="https://www.ascenciamalta.edu.mt/enrol-form" withArrow>
              Apply now
            </Button>
            <Button to="/contact" variant="outline">
              Talk with a teacher
            </Button>
          </div>

          <ul className="hero__highlights">
            {hero.highlights.map((item) => (
              <li key={item}>
                <Icon name="check" size={16} /> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__media">
          <img src={hero.image} alt={hero.imageAlt} width="1920" height="790" fetchpriority="high" />
          <div className="hero__badge">
            <span className="hero__badge-value">26+</span>
            <span className="hero__badge-label">nationalities on one Mediterranean campus</span>
          </div>
        </div>
      </div>
    </section>
  );
}
