import Nav from './components/Nav/Nav';
import HeroSection from './components/views/HeroSection';
import AboutSection from './components/views/AboutSection';
import ProjectsSection from './components/views/ProjectsSection';
import TimelineSection from './components/views/TimelineSection';
import SkillsSection from './components/views/SkillsSection';

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: '#1B1B1B' }}>
      <Nav />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <TimelineSection />
        <SkillsSection />
      </main>
      <footer className="py-8 text-center" style={{ borderTop: '1px solid rgba(248,180,0,0.08)' }}>
        <p className="text-xs" style={{ fontFamily: "'JetBrains Mono', monospace", color: '#888888' }}>
          Alok Kumar Thakur © {new Date().getFullYear()}
          <span className="mx-3 opacity-30">·</span>
          React · TypeScript · Vite
        </p>
      </footer>
    </div>
  );
}
