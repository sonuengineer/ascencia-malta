import { Link } from 'react-router-dom';
import Icon from './Icon';
import './Button.css';

/**
 * One button component for all calls to action.
 * - `to`   -> internal route (react-router Link)
 * - `href` -> external URL (opens in a new tab)
 * - neither -> a real <button> (e.g. form submit)
 */
export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  withArrow = false,
  className = '',
  ...rest
}) {
  const classes = `btn btn--${variant} ${className}`.trim();
  const content = (
    <>
      <span>{children}</span>
      {withArrow && <Icon name="arrowRight" size={18} className="btn__icon" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  );
}
