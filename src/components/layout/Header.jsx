import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import { navLinks, contactInfo } from '../../data/site';
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock page scroll behind the open mobile menu.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container topbar__inner">
          <p className="topbar__note">MFHEA-accredited | Licence No. 2021-018</p>
          <div className="topbar__contacts">
            <a href={contactInfo.phoneHref}>
              <Icon name="phone" size={14} /> {contactInfo.phone}
            </a>
            <a href={`mailto:${contactInfo.email}`}>
              <Icon name="mail" size={14} /> {contactInfo.email}
            </a>
          </div>
        </div>
      </div>

      <div className="navbar">
        <div className="container navbar__inner">
          <Link to="/" className="navbar__logo" aria-label="Ascencia Malta home">
            <img src="/images/brand/logo.svg" alt="Ascencia Malta" width="150" height="55" />
          </Link>

          <nav
            id="main-nav"
            className={`navbar__nav ${menuOpen ? 'is-open' : ''}`}
            aria-label="Main navigation"
          >
            <ul className="navbar__links">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} end className="navbar__link">
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Button href="https://www.ascenciamalta.edu.mt/enrol-form" className="navbar__cta">
              Study with us
            </Button>
          </nav>

          <button
            type="button"
            className="navbar__toggle"
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
