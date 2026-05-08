import resume from '../../data/resume';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero">
      <div className={styles.hero}>
        <div className={styles.left}>
          <span className={styles.badge}>Available for Opportunities</span>

          <h1 className={styles.name}>
            {resume.name.first}
            <em>{resume.name.last}</em>
          </h1>

          <p className={styles.tagline}>{resume.tagline}</p>
          <p className={styles.desc}>{resume.description}</p>

          <div className={styles.actions}>
            <a
              href={resume.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              View GitHub
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
            <a href={`mailto:${resume.contact.email}`} className={styles.btnSecondary}>
              Get in touch
            </a>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.frame}>
            <div className={styles.glow} />
            <div className={styles.ring2} />
            <div className={styles.ring} />
            <img src="/alok.jpg" alt="Alok Kumar Thakur" className={styles.photo} />
          </div>
        </div>
      </div>

      <div className={styles.orb1} />
      <div className={styles.orb2} />
    </section>
  );
}
