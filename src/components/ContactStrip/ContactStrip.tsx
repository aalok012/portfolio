import resume from '../../data/resume';
import styles from './ContactStrip.module.css';

const items = [
  { icon: '✉', label: resume.contact.email, href: `mailto:${resume.contact.email}` },
  { icon: '✆', label: resume.contact.phone, href: `tel:${resume.contact.phone.replace(/\D/g, '')}` },
  { icon: '◎', label: resume.contact.location, href: null },
  { icon: 'in', label: 'LinkedIn', href: resume.contact.linkedin },
  { icon: 'gh', label: 'GitHub', href: resume.contact.github },
];

export default function ContactStrip() {
  return (
    <div className={styles.strip}>
      {items.map((item) => (
        <div key={item.label} className={styles.item}>
          <span className={styles.icon}>{item.icon}</span>
          {item.href ? (
            <a
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {item.label}
            </a>
          ) : (
            <span>{item.label}</span>
          )}
        </div>
      ))}
    </div>
  );
}
