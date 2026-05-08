import resume from '../../data/resume';
import SectionHeader from '../SectionHeader/SectionHeader';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Education.module.css';

export default function Education() {
  const ref = useScrollReveal<HTMLDivElement>();
  const { education } = resume;

  return (
    <section id="education">
      <div className="section-wrap">
        <SectionHeader label="04 — Academia" title="Education &" em="Background" />
        <div ref={ref} className={`${styles.card} reveal`}>
          <div className={styles.icon}>🎓</div>
          <div>
            <h3 className={styles.school}>{education.school}</h3>
            <p className={styles.degree}>{education.degree}</p>
            <p className={styles.minor}>{education.minor}</p>
            <p className={styles.coursesLabel}>Relevant Coursework</p>
            <div className={styles.courses}>
              {education.courses.map((c) => (
                <span key={c} className={styles.course}>
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
