import { type IconType } from 'react-icons';
import {
  SiPython, SiJavascript, SiCplusplus, SiHtml5, SiMysql,
  SiFastapi, SiReact, SiNodedotjs, SiExpress, SiScikitlearn,
  SiNumpy, SiTensorflow, SiMongodb, SiPostgresql, SiRedis,
  SiNginx, SiDocker, SiGit, SiGithub,
  SiPostman, SiJira, SiJupyter, SiLangchain,
} from 'react-icons/si';
import { VscTerminalLinux } from 'react-icons/vsc';
import { FaServer, FaDatabase, FaAws, FaInfinity } from 'react-icons/fa';
import resume from '../../data/resume';

type IconEntry = { icon: IconType; color: string };

const techIconMap: Record<string, IconEntry> = {
  'Python':            { icon: SiPython,          color: '#3776AB' },
  'JavaScript ES6+':   { icon: SiJavascript,       color: '#F7DF1E' },
  'C++':               { icon: SiCplusplus,         color: '#00599C' },
  'SQL':               { icon: SiMysql,            color: '#4479A1' },
  'HTML/CSS':          { icon: SiHtml5,            color: '#E34F26' },
  'FastAPI':           { icon: SiFastapi,          color: '#009688' },
  'REST API':          { icon: FaServer,           color: '#888888' },
  'React':             { icon: SiReact,            color: '#61DAFB' },
  'LangChain':         { icon: SiLangchain,        color: '#4B8B6A' },
  'Node.js':           { icon: SiNodedotjs,        color: '#339933' },
  'Express.js':        { icon: SiExpress,          color: '#888888' },
  'scikit-learn':      { icon: SiScikitlearn,      color: '#F7931E' },
  'NumPy':             { icon: SiNumpy,            color: '#4DABCF' },
  'TensorFlow/Keras':  { icon: SiTensorflow,       color: '#FF6F00' },
  'Matplotlib':        { icon: FaDatabase,         color: '#11557C' },
  'MongoDB':           { icon: SiMongodb,          color: '#47A248' },
  'PostgreSQL':        { icon: SiPostgresql,       color: '#336791' },
  'Redis':             { icon: SiRedis,            color: '#DC382D' },
  'Qdrant (Vector DB)':{ icon: FaDatabase,         color: '#8B5CF6' },
  'AWS EC2':           { icon: FaAws,              color: '#FF9900' },
  'Nginx':             { icon: SiNginx,            color: '#009639' },
  'PM2':               { icon: FaServer,           color: '#888888' },
  'Linux (Ubuntu)':    { icon: VscTerminalLinux,   color: '#E95420' },
  'Docker':            { icon: SiDocker,           color: '#2496ED' },
  'Git':               { icon: SiGit,              color: '#F05032' },
  'GitHub':            { icon: SiGithub,           color: '#CCCCCC' },
  'CI/CD':             { icon: FaInfinity,         color: '#22C55E' },
  'Postman':           { icon: SiPostman,          color: '#FF6C37' },
  'Jira':              { icon: SiJira,             color: '#0052CC' },
  'Jupyter Notebook':  { icon: SiJupyter,          color: '#F37626' },
};

function TechPill({ item }: { item: string }) {
  const entry = techIconMap[item];
  const Icon = entry?.icon;
  return (
    <span className="pill">
      {Icon && <Icon style={{ color: entry.color, width: 12, height: 12, flexShrink: 0 }} />}
      {item}
    </span>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-28 px-6 md:px-12 lg:px-20" style={{ background: '#1B1B1B' }}>
      <div className="max-w-6xl mx-auto">

        <p
          className="text-xs tracking-[0.25em] uppercase mb-2"
          style={{ fontFamily: "'JetBrains Mono', monospace", color: '#F8B400' }}
        >
          04 — Toolbox
        </p>
        <h2
          className="font-bold mb-12"
          style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', color: '#FFFFFF' }}
        >
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {resume.skills.map((group) => (
            <div key={group.title} className="bento-card p-6">
              <h3
                className="text-xs font-medium tracking-widest uppercase mb-4"
                style={{ fontFamily: "'JetBrains Mono', monospace", color: '#F8B400' }}
              >
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <TechPill key={item} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bento-card p-8 md:p-10 text-center">
          <p
            className="font-semibold mb-2"
            style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', color: '#FFFFFF' }}
          >
            Open to full-time roles, internships, and freelance projects.
          </p>
          <p className="text-sm mb-7" style={{ color: '#888888' }}>
            Let's build something meaningful together.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${resume.contact.email}`}
              className="px-7 py-2.5 rounded-full text-sm font-semibold"
              style={{ background: '#F8B400', color: '#1B1B1B' }}
            >
              {resume.contact.email}
            </a>
            <a
              href={resume.contact.linkedin}
              target="_blank" rel="noopener noreferrer"
              className="px-7 py-2.5 rounded-full text-sm font-medium"
              style={{ border: '1px solid rgba(248,180,0,0.3)', color: '#F8B400', textDecoration: 'none' }}
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
