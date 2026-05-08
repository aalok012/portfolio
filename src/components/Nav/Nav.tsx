import { useState, useEffect } from 'react';

const LINKS = [
  { label: 'Home',     href: '#hero' },
  { label: 'About',    href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey',  href: '#journey' },
  { label: 'Skills',   href: '#skills' },
];

export default function Nav() {
  const [active, setActive] = useState('#hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const ids = LINKS.map((l) => l.href.slice(1));
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActive(LINKS[i].href);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="fixed top-5 left-1/2 z-[9000] -translate-x-1/2">
      <div
        className="flex gap-0.5 p-1.5 rounded-full"
        style={{
          background: scrolled ? 'rgba(27,27,27,0.95)' : 'rgba(27,27,27,0.7)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(248,180,0,0.16)',
          boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.5)' : 'none',
          transition: 'background 0.3s, box-shadow 0.3s',
        }}
      >
        {LINKS.map(({ label, href }) => {
          const isActive = active === href;
          return (
            <a
              key={href}
              href={href}
              className="px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                background: isActive ? 'rgba(248,180,0,0.15)' : 'transparent',
                color: isActive ? '#F8B400' : '#888888',
                border: isActive ? '1px solid rgba(248,180,0,0.3)' : '1px solid transparent',
                textDecoration: 'none',
              }}
              onClick={() => setActive(href)}
            >
              {label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
