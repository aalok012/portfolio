import resume from '../../data/resume';
import type { WorkExperience } from '../../types';
import SectionHeader from '../SectionHeader/SectionHeader';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Experience.module.css';

function TimelineItem({ job, delay }: { job: WorkExperience; delay: number }) {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`${styles.item} reveal`} style={{ transitionDelay: `${delay}s` }}>
      <div className={styles.dot}>💼</div>
      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles.role}>{job.role}</span>
          <span className={styles.period}>{job.period}</span>
        </div>
        <p className={styles.company}>{job.company}</p>
        <ul className={styles.list}>
          {job.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-wrap">
        <SectionHeader label="02 — Career" title="Work" em="Experience" />
        <div className={styles.timeline}>
          {resume.experience.map((job, i) => (
            <TimelineItem key={job.company} job={job} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
}
