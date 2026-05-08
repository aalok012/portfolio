import resume from '../../data/resume';
import type { Project } from '../../types';
import SectionHeader from '../SectionHeader/SectionHeader';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Projects.module.css';

function ProjectCard({ project, index, delay }: { project: Project; index: number; delay: number }) {
  const ref = useScrollReveal<HTMLDivElement>();
  const num = String(index + 1).padStart(2, '0');

  return (
    <div ref={ref} className={`${styles.card} reveal`} style={{ transitionDelay: `${delay}s` }}>
      <span className={styles.num}>{num}</span>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.desc}>{project.description}</p>
      <ul className={styles.highlights}>
        {project.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
      <div className={styles.stack}>
        {project.stack.map((t) => (
          <span key={t} className={styles.stackTag}>
            {t}
          </span>
        ))}
      </div>
      <div className={styles.links}>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub →
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.link} ${styles.linkLive}`}
          >
            Live →
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className="section-wrap">
        <SectionHeader label="03 — Work" title="Featured" em="Projects" />
        <div className={styles.grid}>
          {resume.projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
