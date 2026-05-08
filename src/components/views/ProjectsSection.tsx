import { useState } from 'react';
import resume from '../../data/resume';
import { SiGithub } from 'react-icons/si';

type Category = 'All' | 'AI' | 'Web' | 'Backend' | 'ML';

const PROJECT_CATS: Record<string, Category[]> = {
  'Personal Finance Platform':       ['Web', 'Backend'],
  'Scalable Video Streaming Backend':['Backend'],
  'Diabetes Risk Predictor':         ['ML', 'AI'],
  'Chat with Docs – RAG System':     ['AI', 'Backend'],
};

const PROJECT_TAGS: Record<string, string> = {
  'Personal Finance Platform':       'Full-Stack',
  'Scalable Video Streaming Backend':'Backend',
  'Diabetes Risk Predictor':         'ML / AI',
  'Chat with Docs – RAG System':     'AI / RAG',
};

const FILTERS: Category[] = ['All', 'AI', 'ML', 'Web', 'Backend'];

export default function ProjectsSection() {
  const [active, setActive] = useState<Category>('All');
  const filtered = resume.projects.filter(
    (p) => active === 'All' || PROJECT_CATS[p.title]?.includes(active),
  );

  return (
    <section id="projects" className="py-28 px-6 md:px-12 lg:px-20" style={{ background: '#1B1B1B' }}>
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-14">
          <div>
            <p
              className="text-xs tracking-[0.25em] uppercase mb-2"
              style={{ fontFamily: "'JetBrains Mono', monospace", color: '#F8B400' }}
            >
              02 — Projects
            </p>
            <h2
              className="font-bold"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', color: '#FFFFFF' }}
            >
              Selected Work
            </h2>
          </div>

          <div className="flex gap-2 flex-wrap">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className="pill"
                style={{
                  cursor: 'pointer',
                  background: active === f ? 'rgba(248,180,0,0.12)' : undefined,
                  borderColor: active === f ? 'rgba(248,180,0,0.35)' : undefined,
                  color: active === f ? '#F8B400' : undefined,
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((project) => (
            <div key={project.title} className="bento-card flex flex-col overflow-hidden">

              {/* Header bar */}
              <div
                className="flex items-center justify-between px-7 py-4 border-b"
                style={{ borderColor: 'rgba(248,180,0,0.08)' }}
              >
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.65rem',
                    letterSpacing: '0.14em',
                    color: '#F8B400',
                    textTransform: 'uppercase',
                  }}
                >
                  {PROJECT_TAGS[project.title]}
                </span>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs"
                    style={{ color: '#888888', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#F8B400')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#888888')}
                  >
                    <SiGithub size={15} /> View on GitHub
                  </a>
                )}
              </div>

              {/* Body */}
              <div className="p-7 flex flex-col gap-5 flex-1">
                <div>
                  <h3
                    className="font-semibold mb-2"
                    style={{ fontSize: '1.1rem', color: '#FFFFFF' }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#888888' }}>
                    {project.description}
                  </p>
                </div>

                <ul className="flex flex-col gap-2">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-3 items-start text-sm leading-relaxed" style={{ color: '#888888' }}>
                      <span style={{ color: '#F8B400', flexShrink: 0, marginTop: 3 }}>›</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div
                  className="flex flex-wrap gap-2 pt-4 mt-auto border-t"
                  style={{ borderColor: 'rgba(248,180,0,0.06)' }}
                >
                  {project.stack.map((tech) => (
                    <span key={tech} className="pill">{tech}</span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
