import { Link } from 'react-router-dom';
import Icon from '../ui/Icon';
import { contactInfo, footerColumns, navLinks, socialLinks } from '../../data/site';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <img
              src="/images/brand/logo-light.svg"
              alt="Ascencia Malta"
              width="160"
              height="59"
            />
            <p>
              Floriana Campus: {contactInfo.address}
            </p>
            <ul className="site-footer__social">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <Icon name={social.icon} size={18} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="site-footer__title">{column.title}</h3>
              <ul className="site-footer__list">
                {column.links.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="site-footer__title">Get in touch</h3>
            <ul className="site-footer__list site-footer__contact">
              <li>
                <span>Email us</span>
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </li>
              <li>
                <span>Phone number</span>
                <a href={contactInfo.phoneHref}>{contactInfo.phone}</a>
              </li>
              <li>
                <span>Erasmus+ mobility</span>
                <a href={`mailto:${contactInfo.erasmusEmail}`}>{contactInfo.erasmusEmail}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>&copy; {year} Ascencia Malta - Licence No: 2021-018</p>
          <ul>
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
