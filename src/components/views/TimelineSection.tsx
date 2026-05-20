import resume from '../../data/resume';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

interface Entry { date: string; title: string; org: string; bullets: string[]; type: 'work' | 'edu'; }

const entries: Entry[] = [
  ...resume.experience.map((e) => ({
    date: e.period,
    title: e.role,
    org: e.company,
    bullets: e.bullets,
    type: 'work' as const,
  })),
  {
    date: 'Aug 2024 – Present',
    title: resume.education.degree,
    org: resume.education.school,
    bullets: [`Courses: ${resume.education.courses.join(', ')}`],
    type: 'edu' as const,
  },
];

export default function TimelineSection() {
  return (
    <section id="journey" className="py-28 px-6 md:px-12 lg:px-20" style={{ background: '#1F1F1F' }}>
      <div className="max-w-4xl mx-auto">

        <p
          className="text-xs tracking-[0.25em] uppercase mb-2"
          style={{ fontFamily: "'JetBrains Mono', monospace", color: '#F8B400' }}
        >
          03 — Journey
        </p>
        <h2
          className="font-bold mb-14"
          style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', color: '#FFFFFF' }}
        >
          Experience & Education
        </h2>

        <div className="flex flex-col">
          {entries.map((entry, i) => (
            <div key={i} className="grid gap-5" style={{ gridTemplateColumns: '100px 1fr' }}>

              <div className="text-right pt-1.5">
                <p className="text-xs leading-relaxed" style={{ fontFamily: "'JetBrains Mono', monospace", color: '#888888' }}>
                  {entry.date.split(' – ').map((part, idx, arr) => (
                    <span key={idx} className="block">{part}{idx < arr.length - 1 && ' –'}</span>
                  ))}
                </p>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className="flex items-center justify-center rounded-full"
                    style={{
                      width: 34, height: 34,
                      background: 'rgba(248,180,0,0.1)',
                      border: '1px solid rgba(248,180,0,0.28)',
                      color: '#F8B400',
                    }}
                  >
                    {entry.type === 'work' ? <FaBriefcase size={13} /> : <FaGraduationCap size={14} />}
                  </div>
                  {i < entries.length - 1 && (
                    <div style={{ width: 1, flex: 1, minHeight: 32, background: 'rgba(248,180,0,0.15)', marginTop: 6 }} />
                  )}
                </div>

                <div className="bento-card p-5 mb-5 flex-1">
                  <h3 className="font-semibold text-sm mb-0.5" style={{ color: '#FFFFFF' }}>{entry.title}</h3>
                  <p className="text-xs mb-3" style={{ fontFamily: "'JetBrains Mono', monospace", color: '#F8B400' }}>
                    {entry.org}
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {entry.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-2 items-start text-xs leading-relaxed" style={{ color: '#888888' }}>
                        <span style={{ color: '#F8B400', flexShrink: 0, marginTop: 2 }}>›</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
