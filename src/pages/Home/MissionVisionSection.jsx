import SectionHeading from '../../components/ui/SectionHeading';
import { missionVision } from '../../data/home';

export default function MissionVisionSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="Who we are" title="Our mission and vision" align="center" />
        <div className="mv__grid">
          {missionVision.map((item, index) => (
            <article className="mv__card" key={item.title}>
              <span className="mv__number" aria-hidden="true">
                0{index + 1}
              </span>
              <h3 className="mv__title">{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
