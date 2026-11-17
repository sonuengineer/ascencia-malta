import SectionHeading from '../../components/ui/SectionHeading';
import Icon from '../../components/ui/Icon';
import { programmes } from '../../data/home';

export default function ProgrammesSection() {
  return (
    <section className="section section--cream" id="programmes">
      <div className="container">
        <SectionHeading
          eyebrow="Higher Education"
          title="Explore our programmes"
          text="Accredited qualifications from Award certificates to Doctorates, designed around the realities of corporate life."
        />

        <ul className="programmes__grid">
          {programmes.map((programme) => (
            <li className="programme-card" key={programme.name}>
              <div className="programme-card__media">
                <img src={programme.image} alt="" loading="lazy" width="400" height="300" />
                {programme.level && (
                  <span className="programme-card__level">MQF/EQF Level {programme.level}</span>
                )}
              </div>
              <div className="programme-card__body">
                <h3 className="programme-card__title">{programme.name}</h3>
                <ul className="programme-card__meta">
                  <li>
                    <Icon name="book" size={16} /> {programme.ects} ECTS
                  </li>
                  <li>
                    <Icon name="users" size={16} /> {programme.mode}
                  </li>
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
