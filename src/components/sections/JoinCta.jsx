import Button from '../ui/Button';
import { joinCta } from '../../data/site';
import './JoinCta.css';

/** "Join us!" call-to-action strip shown above the footer. */
export default function JoinCta({ showContactButton = true }) {
  return (
    <section className="join-cta">
      <div className="container">
        <div className="join-cta__card">
          <div>
            <h2 className="join-cta__title">{joinCta.title}</h2>
            <p className="join-cta__text">{joinCta.text}</p>
          </div>
          <div className="join-cta__actions">
            {showContactButton && (
              <Button to="/contact" variant="light" withArrow>
                Get in touch
              </Button>
            )}
            <Button href="https://www.ascenciamalta.edu.mt/enrol-form" variant="ghost-light">
              Apply now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
