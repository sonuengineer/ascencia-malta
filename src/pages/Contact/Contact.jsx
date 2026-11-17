import PageBanner from '../../components/ui/PageBanner';
import Icon from '../../components/ui/Icon';
import JoinCta from '../../components/sections/JoinCta';
import ContactForm from './ContactForm';
import { contactInfo } from '../../data/site';
import './Contact.css';

const channels = [
  {
    icon: 'phone',
    title: 'Call us on',
    note: contactInfo.hours,
    value: contactInfo.phone,
    href: contactInfo.phoneHref,
  },
  {
    icon: 'mail',
    title: 'Email us',
    note: 'Speak to our friendly team.',
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
  {
    icon: 'location',
    title: 'Our location',
    note: 'Visit our Floriana campus.',
    value: contactInfo.address,
  },
];

export default function Contact() {
  return (
    <>
      <PageBanner
        crumb="Contact"
        title="Let us know how we can help"
        text="For any question related to our campus, our programmes or any other subject concerning Ascencia Malta, our teams will get back to you as soon as possible."
      />

      <section className="section">
        <div className="container contact">
          <aside className="contact__channels" aria-label="Contact details">
            {channels.map((channel) => (
              <div className="channel" key={channel.title}>
                <span className="channel__icon">
                  <Icon name={channel.icon} size={22} />
                </span>
                <div>
                  <h2 className="channel__title">{channel.title}</h2>
                  <p className="channel__note">{channel.note}</p>
                  {channel.href ? (
                    <a className="channel__value" href={channel.href}>
                      {channel.value}
                    </a>
                  ) : (
                    <p className="channel__value">{channel.value}</p>
                  )}
                </div>
              </div>
            ))}
          </aside>

          <ContactForm />
        </div>
      </section>

      <section className="contact-map" aria-label="Map">
        <div className="container">
          <iframe
            title="Ascencia Malta campus location on Google Maps"
            src={contactInfo.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <JoinCta showContactButton={false} />
    </>
  );
}
