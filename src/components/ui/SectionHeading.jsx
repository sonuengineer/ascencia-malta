import './SectionHeading.css';

/** Eyebrow + title + optional intro text. Used at the top of most sections. */
export default function SectionHeading({ eyebrow, title, text, align = 'left', as: Tag = 'h2' }) {
  return (
    <header className={`section-heading section-heading--${align}`}>
      {eyebrow && <p className="section-heading__eyebrow">{eyebrow}</p>}
      <Tag className="section-heading__title">{title}</Tag>
      {text && <p className="section-heading__text">{text}</p>}
    </header>
  );
}
