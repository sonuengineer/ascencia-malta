import { Link } from 'react-router-dom';
import './PageBanner.css';

/** Title banner with breadcrumb for inner pages (About, Contact). */
export default function PageBanner({ title, text, crumb }) {
  return (
    <section className="page-banner">
      <div className="container page-banner__inner">
        <nav className="page-banner__crumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{crumb}</span>
        </nav>
        <h1 className="page-banner__title">{title}</h1>
        {text && <p className="page-banner__text">{text}</p>}
      </div>
    </section>
  );
}
