import resume from '../../data/resume';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.logo}>
        {resume.name.first} <em>{resume.name.last}</em>
      </p>
      <p className={styles.copy}>
        © 2025 · {resume.title} · {resume.contact.location}
      </p>
    </footer>
  );
}
