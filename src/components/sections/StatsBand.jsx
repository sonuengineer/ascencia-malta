import SectionHeading from '../ui/SectionHeading';
import { stats } from '../../data/site';
import './StatsBand.css';

/** "Ascencia Malta in Numbers" section, shared by Home and About. */
export default function StatsBand() {
  return (
    <section className="section section--dark stats">
      <div className="container">
        <SectionHeading eyebrow="At a glance" title="Ascencia Malta in numbers" align="center" />
        <dl className="stats__grid">
          {stats.map((stat) => (
            <div className="stats__item" key={stat.label}>
              <dt className="stats__label">{stat.label}</dt>
              <dd className="stats__value">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
