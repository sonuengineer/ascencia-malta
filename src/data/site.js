// Content shared across pages (header, footer, stats, CTA).
// Text is taken from the live Ascencia Malta website.

export const LIVE_SITE = 'https://www.ascenciamalta.edu.mt';

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export const contactInfo = {
  phone: '+356 7965 0480',
  phoneHref: 'tel:+35679650480',
  hours: 'Mon-Fri from 8:00 to 17:00',
  email: 'info@ascenciamalta.mt',
  erasmusEmail: 'erasmus@ascenciamalta.mt',
  address: '23 Vincenzo Dimech Rd, Floriana, FRN 1502, Malta',
  mapEmbed:
    'https://maps.google.com/maps?width=600&height=400&hl=en&q=Ascencia%20Malta&t=&z=15&ie=UTF8&iwloc=B&output=embed',
};

export const socialLinks = [
  { label: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/ascencia.malta' },
  { label: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/ascenciamalta' },
  {
    label: 'LinkedIn',
    icon: 'linkedin',
    href: 'https://www.linkedin.com/company/ascencia-malta-business-school/',
  },
  { label: 'YouTube', icon: 'youtube', href: 'https://www.youtube.com/@ascenciamalta' },
];

export const footerColumns = [
  {
    title: 'Programmes',
    links: [
      'Doctorate of Business Administration (DBA)',
      'MBA Degrees',
      'Master Degrees',
      'Postgraduate Diploma Programmes',
      'Bachelor Degree',
      'Undergraduate Diploma Programmes',
      'Award Certificates',
    ],
  },
  {
    title: 'English Language Courses',
    links: [
      'English for Specific Purposes (ESP)',
      'General English',
      'Business English',
      'IELTS Preparation',
      'CAE Preparation',
      'FCE Preparation',
    ],
  },
];

export const stats = [
  { value: '150+', label: 'Courses & programmes available' },
  { value: '26+', label: 'Nationalities on campus' },
  { value: '3 in 1', label: 'Schools: Higher Education, English Language & Digital Campus' },
  { value: '70%', label: 'Of students find employment in Malta' },
  { value: '5-8', label: 'MQF levels of Higher Education programmes' },
  { value: '100%', label: 'Accredited programmes (MFHEA & ATHE)' },
];

export const joinCta = {
  title: 'Join us!',
  text: 'Do you wish to join the Ascencia Malta Community? The registration and admission procedure is simple and totally free. Our team can get back to you for any questions!',
};
