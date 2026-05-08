import resume from '../../data/resume';
import { SiGithub } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#1B1B1B' }}
    >
      <div
        className="absolute pointer-events-none"
        style={{
          top: 0, right: 0, width: 600, height: 600,
          background: 'radial-gradient(circle at top right, rgba(248,180,0,0.05) 0%, transparent 60%)',
        }}
      />

      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div className="flex flex-col gap-6">
          <p
            className="text-xs tracking-[0.25em] uppercase"
            style={{ fontFamily: "'JetBrains Mono', monospace", color: '#F8B400' }}
          >
            Software Engineer · CS Student
          </p>

          <div>
            <h1
              className="font-bold leading-tight"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 'clamp(2.4rem, 5vw, 4.5rem)',
                letterSpacing: '-0.02em',
                color: '#FFFFFF',
              }}
            >
              {resume.name.first}
            </h1>
            <h1
              className="font-bold leading-tight"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 'clamp(2.4rem, 5vw, 4.5rem)',
                letterSpacing: '-0.02em',
                color: '#F8B400',
              }}
            >
              {resume.name.last}
            </h1>
          </div>

          <p className="text-base leading-relaxed max-w-md" style={{ color: '#888888' }}>
            {resume.description}
          </p>

          <div className="flex gap-3 flex-wrap mt-1">
            <a
              href="#projects"
              className="px-6 py-2.5 rounded-full text-sm font-semibold"
              style={{ background: '#F8B400', color: '#1B1B1B' }}
            >
              View Projects
            </a>
            <a
              href={`mailto:${resume.contact.email}`}
              className="px-6 py-2.5 rounded-full text-sm font-medium"
              style={{ border: '1px solid rgba(248,180,0,0.35)', color: '#F8B400' }}
            >
              Get in Touch
            </a>
          </div>

          <div className="flex items-center gap-5 pt-2">
            <a
              href={resume.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm"
              style={{ color: '#888888', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#F8B400')}
              onMouseLeave={e => (e.currentTarget.style.color = '#888888')}
            >
              <SiGithub size={16} /> GitHub
            </a>
            <a
              href={resume.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm"
              style={{ color: '#888888', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#F8B400')}
              onMouseLeave={e => (e.currentTarget.style.color = '#888888')}
            >
              <FaLinkedinIn size={16} /> LinkedIn
            </a>
          </div>
        </div>

        {/* RIGHT — photo */}
        <div className="flex items-center justify-center">
          <div className="relative">
            <div
              style={{
                width: 280,
                height: 280,
                borderRadius: '50%',
                border: '1px solid rgba(248,180,0,0.25)',
                padding: 4,
                background: 'rgba(36,36,36,0.8)',
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

            <div className="flex justify-center gap-8 mt-8">
              {[
                { val: '3+',   label: 'Internships' },
                { val: '4',    label: 'Projects' },
                { val: '3.86', label: 'GPA' },
              ].map(({ val, label }) => (
                <div key={label} className="text-center">
                  <p className="text-lg font-bold" style={{ color: '#F8B400' }}>{val}</p>
                  <p className="text-xs mt-0.5" style={{ fontFamily: "'JetBrains Mono', monospace", color: '#888888' }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
