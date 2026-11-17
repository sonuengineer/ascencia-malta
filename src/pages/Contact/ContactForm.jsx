import { useState } from 'react';
import Button from '../../components/ui/Button';
import Icon from '../../components/ui/Icon';

const EMPTY_FORM = { name: '', email: '', phone: '', message: '' };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Same rules and messages as the live site's form.
function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name';
  if (!values.email.trim()) errors.email = 'Please enter email id';
  else if (!EMAIL_PATTERN.test(values.email)) errors.email = 'Email id e.g abc@gmail.com';
  if (!values.phone.trim()) errors.phone = 'Please provide contact no.';
  if (!values.message.trim()) errors.message = 'Please enter message';
  return errors;
}

/**
 * Static UI form: validates on the client and shows a confirmation.
 * Nothing is sent anywhere; the assignment is UI only.
 */
export default function ContactForm() {
  const [values, setValues] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    // Clear a field's error as soon as the user edits it.
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setValues(EMPTY_FORM);
    }
  };

  if (submitted) {
    return (
      <div className="form-card form-card--success" role="status">
        <span className="form-card__success-icon">
          <Icon name="check" size={28} />
        </span>
        <h2>Thank you for your message!</h2>
        <p>Our team will get back to you as soon as possible.</p>
        <Button variant="outline" type="button" onClick={() => setSubmitted(false)}>
          Send another message
        </Button>
      </div>
    );
  }

  const field = (name, label, props = {}) => {
    const Tag = props.as || 'input';
    const errorId = `${name}-error`;
    return (
      <div className={`form-field ${errors[name] ? 'has-error' : ''}`}>
        <label htmlFor={name}>{label}</label>
        <Tag
          id={name}
          name={name}
          value={values[name]}
          onChange={handleChange}
          aria-invalid={Boolean(errors[name])}
          aria-describedby={errors[name] ? errorId : undefined}
          {...props.attrs}
        />
        {errors[name] && (
          <p className="form-field__error" id={errorId}>
            {errors[name]}
          </p>
        )}
      </div>
    );
  };

  return (
    <form className="form-card" onSubmit={handleSubmit} noValidate>
      <h2 className="form-card__title">Send us a message</h2>
      <p className="form-card__intro">
        Please fill in the form below. Our teams will get back to you as soon as possible.
      </p>

      <div className="form-card__row">
        {field('name', 'Full name', { attrs: { type: 'text', autoComplete: 'name', placeholder: 'Your full name' } })}
        {field('email', 'Your email', {
          attrs: { type: 'email', autoComplete: 'email', placeholder: 'you@example.com' },
        })}
      </div>
      {field('phone', 'Your phone', { attrs: { type: 'tel', autoComplete: 'tel', placeholder: '+356 0000 0000' } })}
      {field('message', 'Message', {
        as: 'textarea',
        attrs: { rows: 5, placeholder: 'How can we help you?' },
      })}

      <Button type="submit" withArrow className="form-card__submit">
        Send message
      </Button>
    </form>
  );
}
