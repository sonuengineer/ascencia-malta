import PageBanner from '../../components/ui/PageBanner';
import SectionHeading from '../../components/ui/SectionHeading';
import Button from '../../components/ui/Button';
import Icon from '../../components/ui/Icon';
import StatsBand from '../../components/sections/StatsBand';
import JoinCta from '../../components/sections/JoinCta';
import { quickFacts, pedagogy, mission, coreValues, lecturers, partners } from '../../data/about';
import './About.css';

export default function About() {
  return (
    <>
      <PageBanner
        crumb="About Us"
        title="We are eager to give you the best education"
        text="An MFHEA-accredited business school in Floriana, Malta, welcoming students from all over the world since 2020."
      />

      {/* Intro: pedagogy + quick facts */}
      <section className="section">
        <div className="container about-intro">
          <div>
            <SectionHeading eyebrow={pedagogy.eyebrow} title={pedagogy.title} />
            <p className="about-intro__lead">{pedagogy.lead}</p>
            <p>{pedagogy.text}</p>
          </div>

          <ul className="facts">
            {quickFacts.map((fact) => (
              <li className="facts__item" key={fact.label}>
                <span className="facts__icon">
                  <Icon name={fact.icon} size={22} />
                </span>
                <div>
                  <h3 className="facts__label">{fact.label}</h3>
                  <p>{fact.value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Mission */}
      <section className="section section--cream">
        <div className="container split">
          <div className="split__media">
            <img src={mission.image} alt={mission.imageAlt} loading="lazy" width="600" height="600" />
          </div>
          <div>
            <SectionHeading eyebrow="Mission" title={mission.title} />
            <p>{mission.text}</p>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Values"
            title={coreValues.title}
            text={coreValues.subtitle}
            align="center"
          />
          <ol className="values">
            {coreValues.items.map((value, index) => (
              <li className="values__item" key={value.title}>
                <span className="values__index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="values__title">{value.title}</h3>
                <p>{value.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Lecturers */}
      <section className="section section--cream">
        <div className="container split split--reverse">
          <div className="split__media">
            <img src={lecturers.image} alt={lecturers.imageAlt} loading="lazy" width="600" height="600" />
          </div>
          <div>
            <SectionHeading eyebrow="Faculty" title={lecturers.title} />
            <p className="about-intro__lead">{lecturers.lead}</p>
            {lecturers.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="split__para">
                {paragraph}
              </p>
            ))}
            <Button to="/contact" withArrow className="split__cta">
              Talk to our team
            </Button>
          </div>
        </div>
      </section>

      <StatsBand />

      {/* Partners */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Partners"
            title="Partner institutions"
            text="We are proud to be partnered with the following institutions!"
            align="center"
          />
          <ul className="partners">
            {partners.map((partner) => (
              <li className="partners__item" key={partner.name}>
                <img src={partner.logo} alt={`${partner.name} logo`} loading="lazy" width="180" height="180" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <JoinCta />
    </>
  );
}
