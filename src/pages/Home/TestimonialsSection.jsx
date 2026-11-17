import SectionHeading from '../../components/ui/SectionHeading';
import Icon from '../../components/ui/Icon';
import { testimonials } from '../../data/home';

export default function TestimonialsSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Student voices"
          title="Success stories"
          text="Real students. Real transformations."
          align="center"
        />
        <div className="testimonials__grid">
          {testimonials.map((item) => (
            <figure className="testimonial" key={item.name}>
              <Icon name="quote" size={28} className="testimonial__icon" />
              <blockquote>
                <p>{item.quote}</p>
              </blockquote>
              <figcaption>
                <strong>{item.name}</strong>
                <span>{item.programme}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
