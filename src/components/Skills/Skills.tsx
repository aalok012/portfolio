import { type IconType } from 'react-icons';
import {
  SiPython, SiJavascript, SiCplusplus, SiHtml5, SiMysql,
  SiFastapi, SiReact, SiNodedotjs, SiExpress, SiScikitlearn,
  SiNumpy, SiTensorflow, SiMongodb, SiPostgresql, SiRedis,
  SiNginx, SiDocker, SiGit, SiGithub,
  SiPostman, SiJira, SiJupyter, SiLangchain,
} from 'react-icons/si';
import { VscTerminalLinux } from 'react-icons/vsc';
import { FaServer, FaCss3Alt, FaDatabase, FaAws, FaInfinity } from 'react-icons/fa';
import resume from '../../data/resume';
import type { SkillCategory } from '../../types';
import SectionHeader from '../SectionHeader/SectionHeader';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Skills.module.css';

type IconEntry = { icon: IconType; color: string; anim?: string };

const techIconMap: Record<string, IconEntry> = {
  'Python':             { icon: SiPython,         color: '#3776AB', anim: styles.iconPulse },
  'JavaScript ES6+':    { icon: SiJavascript,     color: '#F7DF1E', anim: styles.iconPulse },
  'C++':                { icon: SiCplusplus,      color: '#00599C', anim: styles.iconBounce },
  'SQL':                { icon: SiMysql,          color: '#4479A1', anim: styles.iconFloat },
  'HTML/CSS':           { icon: SiHtml5,          color: '#E34F26', anim: styles.iconPulse },
  'FastAPI':            { icon: SiFastapi,        color: '#009688', anim: styles.iconFloat },
  'REST API':           { icon: FaServer,         color: '#8B5CF6', anim: styles.iconFloat },
  'React':              { icon: SiReact,          color: '#61DAFB', anim: styles.iconSpin },
  'LangChain':          { icon: SiLangchain,      color: '#1C3C3C', anim: styles.iconPulse },
  'Node.js':            { icon: SiNodedotjs,      color: '#339933', anim: styles.iconFloat },
  'Express.js':         { icon: SiExpress,        color: '#888888', anim: styles.iconFloat },
  'scikit-learn':       { icon: SiScikitlearn,    color: '#F7931E', anim: styles.iconPulse },
  'NumPy':              { icon: SiNumpy,          color: '#013243', anim: styles.iconFloat },
  'TensorFlow/Keras':   { icon: SiTensorflow,     color: '#FF6F00', anim: styles.iconPulse },
  'Matplotlib':         { icon: FaDatabase,       color: '#11557C', anim: styles.iconFloat },
  'MongoDB':            { icon: SiMongodb,        color: '#47A248', anim: styles.iconFloat },
  'PostgreSQL':         { icon: SiPostgresql,     color: '#336791', anim: styles.iconFloat },
  'Redis':              { icon: SiRedis,          color: '#DC382D', anim: styles.iconPulse },
  'Qdrant (Vector DB)': { icon: FaDatabase,       color: '#8B5CF6', anim: styles.iconPulse },
  'AWS EC2':            { icon: FaAws,            color: '#FF9900', anim: styles.iconFloat },
  'Nginx':              { icon: SiNginx,          color: '#009639', anim: styles.iconFloat },
  'PM2':                { icon: FaServer,         color: '#2B037A', anim: styles.iconFloat },
  'Linux (Ubuntu)':     { icon: VscTerminalLinux, color: '#E95420', anim: styles.iconBounce },
  'Docker':             { icon: SiDocker,         color: '#2496ED', anim: styles.iconFloat },
  'Git':                { icon: SiGit,            color: '#F05032', anim: styles.iconBounce },
  'GitHub':             { icon: SiGithub,         color: '#cccccc', anim: styles.iconFloat },
  'CI/CD':              { icon: FaInfinity,       color: '#22C55E', anim: styles.iconSpin },
  'Postman':            { icon: SiPostman,        color: '#FF6C37', anim: styles.iconFloat },
  'Jira':               { icon: SiJira,           color: '#0052CC', anim: styles.iconFloat },
  'Jupyter Notebook':   { icon: SiJupyter,        color: '#F37626', anim: styles.iconPulse },
  'CSS':                { icon: FaCss3Alt,        color: '#1572B6', anim: styles.iconFloat },
};

const categoryIconMap: Record<string, IconType> = {
  'Languages':           SiPython,
  'Frameworks & APIs':   SiReact,
  'Databases & Cloud':   SiMongodb,
  'Developer Tools':     SiDocker,
};

function AnimatedTechTag({ item }: { item: string }) {
  const entry = techIconMap[item];
  if (!entry) return <span className={styles.tag}>{item}</span>;
  const Icon = entry.icon;
  const iconClass = [styles.tagIcon, entry.anim].filter(Boolean).join(' ');
  return (
    <span className={styles.tag}>
      <Icon className={iconClass} style={{ color: entry.color }} />
      {item}
    </span>
  );
}

function SkillCard({ cat, delay }: { cat: SkillCategory; delay: number }) {
  const ref = useScrollReveal<HTMLDivElement>();
  const CatIcon = categoryIconMap[cat.title];
  return (
    <div ref={ref} className={`${styles.card} reveal`} style={{ transitionDelay: `${delay}s` }}>
      <span className={styles.cardIcon}>
        {CatIcon ? <CatIcon className={styles.catIcon} /> : cat.icon}
      </span>
      <p className={styles.cardTitle}>{cat.title}</p>
      <div className={styles.tags}>
        {cat.items.map((item) => (
          <AnimatedTechTag key={item} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className="section-wrap">
        <SectionHeader label="01 — Craft" title="Technical" em="Skills" />
        <div className={styles.grid}>
          {resume.skills.map((cat, i) => (
            <SkillCard key={cat.title} cat={cat} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
