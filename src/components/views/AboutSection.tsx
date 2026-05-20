import resume from '../../data/resume';
import { SiGithub } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';

export default function AboutSection() {
  return (
    <section id="about" className="py-28 px-6 md:px-12 lg:px-20" style={{ background: '#1F1F1F' }}>
      <div className="max-w-6xl mx-auto">

        <p
          className="text-xs tracking-[0.25em] uppercase mb-14"
          style={{ fontFamily: "'JetBrains Mono', monospace", color: '#F8B400' }}
        >
          01 — About
        </p>

        {/* TOP ROW — photo + bio */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">

          {/* PHOTO card */}
          <div className="bento-card p-8 flex flex-col items-center justify-center gap-6">
            <div
              style={{
                width: 220,
                height: 220,
                borderRadius: '50%',
                border: '2px solid rgba(248,180,0,0.3)',
                padding: 5,
                background: 'rgba(36,36,36,0.8)',
                flexShrink: 0,
              }}
            >
              <img
                src="/alok.jpg"
                alt={`${resume.name.first} ${resume.name.last}`}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  objectPosition: 'top',
                  display: 'block',
                }}
              />
            </div>

            <div className="text-center">
              <p className="font-semibold text-lg" style={{ color: '#FFFFFF' }}>
                {resume.name.first} {resume.name.last}
              </p>
              <p className="text-sm mt-1" style={{ fontFamily: "'JetBrains Mono', monospace", color: '#F8B400' }}>
                {resume.title}
              </p>
              <p className="text-xs mt-1" style={{ color: '#888888' }}>{resume.contact.location}</p>
            </div>

            <div className="flex gap-6">
              {[
                { val: '4',  label: 'Projects' },
              ].map(({ val, label }) => (
                <div key={label} className="text-center">
                  <p className="text-xl font-bold" style={{ color: '#F8B400' }}>{val}</p>
                  <p className="text-xs mt-0.5" style={{ fontFamily: "'JetBrains Mono', monospace", color: '#888888' }}>{label}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <a
                href={resume.contact.github}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm"
                style={{ border: '1px solid rgba(248,180,0,0.25)', color: '#888888', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#F8B400')}
                onMouseLeave={e => (e.currentTarget.style.color = '#888888')}
              >
                <SiGithub size={14} /> GitHub
              </a>
              <a
                href={resume.contact.linkedin}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm"
                style={{ border: '1px solid rgba(248,180,0,0.25)', color: '#888888', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#F8B400')}
                onMouseLeave={e => (e.currentTarget.style.color = '#888888')}
              >
                <FaLinkedinIn size={14} /> LinkedIn
              </a>
            </div>
          </div>

          {/* BIO card */}
          <div className="lg:col-span-2 bento-card p-8 md:p-10 flex flex-col gap-7">
            <h2
              className="font-semibold leading-snug"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)', color: '#FFFFFF' }}
            >
              I build things that{' '}
              <span style={{ color: '#F8B400' }}>work</span>{' '}
              and get done.
            </h2>

            <div className="flex flex-col gap-4 text-base leading-relaxed" style={{ color: '#888888' }}>
              <p>
                I'm a <strong style={{ color: '#FFFFFF' }}>Software Engineer</strong> and{' '}
                <strong style={{ color: '#FFFFFF' }}>CS student at Texas State</strong>{' '}
                (with minors in Applied Math and Economics).{' '}
                I mostly work on backend systems, APIs, and apps powered by AI.
              </p>
              <p>
                I like solving hard problems, writing clean code, and learning how things work under the hood.
              </p>
            </div>

            <div
              className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-5 py-7 border-y"
              style={{ borderColor: 'rgba(248,180,0,0.1)' }}
            >
              {[
                { label: 'Location',     value: resume.contact.location },
                { label: 'University',   value: 'Texas State University' },
                { label: 'Degree',       value: 'B.S. Computer Science' },
                { label: 'Email',        value: resume.contact.email },
                { label: 'Availability', value: 'Open to opportunities' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-xs mb-1.5" style={{ fontFamily: "'JetBrains Mono', monospace", color: '#888888' }}>{label}</p>
                  <p className="text-sm font-medium" style={{ color: '#FFFFFF' }}>{value}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-3 flex-wrap">
              <a
                href={`mailto:${resume.contact.email}`}
                className="px-6 py-3 rounded-full text-sm font-semibold"
                style={{ background: '#F8B400', color: '#1B1B1B' }}
              >
                Contact Me
              </a>
              <a
                href={resume.contact.github}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium"
                style={{ border: '1px solid rgba(248,180,0,0.3)', color: '#F8B400', textDecoration: 'none' }}
              >
                <SiGithub size={14} /> GitHub
              </a>
              <a
                href={resume.contact.linkedin}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium"
                style={{ border: '1px solid rgba(248,180,0,0.3)', color: '#F8B400', textDecoration: 'none' }}
              >
                <FaLinkedinIn size={14} /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW — education + coursework */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="bento-card p-8 flex flex-col gap-5">
            <p className="text-xs tracking-widest uppercase" style={{ fontFamily: "'JetBrains Mono', monospace", color: '#F8B400' }}>
              Education
            </p>
            <div>
              <p className="font-semibold text-base" style={{ color: '#FFFFFF' }}>{resume.education.school}</p>
              <p className="text-sm mt-1" style={{ color: '#888888' }}>{resume.education.degree}</p>
              <p className="text-sm" style={{ color: '#888888' }}>Minor in Applied Mathematics & Economics · San Marcos, TX</p>
            </div>
            <div
              className="flex items-center gap-8 pt-4 border-t"
              style={{ borderColor: 'rgba(248,180,0,0.1)' }}
            >
              <div>
                <p className="text-2xl font-bold" style={{ color: '#F8B400' }}>Aug '24</p>
                <p className="text-xs mt-0.5" style={{ fontFamily: "'JetBrains Mono', monospace", color: '#888888' }}>Enrolled</p>
              </div>
              <div>
                <p className="text-2xl font-bold" style={{ color: '#F8B400' }}>May '28</p>
                <p className="text-xs mt-0.5" style={{ fontFamily: "'JetBrains Mono', monospace", color: '#888888' }}>Expected</p>
              </div>
            </div>
          </div>

          <div className="bento-card p-8 flex flex-col gap-5">
            <p className="text-xs tracking-widest uppercase" style={{ fontFamily: "'JetBrains Mono', monospace", color: '#F8B400' }}>
              Relevant Coursework
            </p>
            <div className="flex flex-wrap gap-2">
              {resume.education.courses.map((course) => (
                <span key={course} className="pill" style={{ fontSize: '0.75rem', padding: '0.35rem 0.85rem' }}>{course}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
