import SectionHeading from '../../components/ui/SectionHeading';
import Icon from '../../components/ui/Icon';
import { news } from '../../data/home';
import { LIVE_SITE } from '../../data/site';

export default function NewsSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="What is happening" title="Campus news" />
        <div className="news__grid">
          {news.map((item) => (
            <article className="news-card" key={item.href}>
              <a href={`${LIVE_SITE}${item.href}`} target="_blank" rel="noopener noreferrer">
                <div className="news-card__media">
                  <img src={item.image} alt="" loading="lazy" width="590" height="558" />
                </div>
                <h3 className="news-card__title">{item.title}</h3>
                <span className="news-card__more">
                  Read story <Icon name="arrowRight" size={16} />
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
