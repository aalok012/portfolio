import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function useCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;

    const xTo = gsap.quickTo(el, 'x', { duration: 0.35, ease: 'power3.out' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.35, ease: 'power3.out' });

    // Start offscreen
    gsap.set(el, { x: -100, y: -100 });

    const onMove = (e: MouseEvent) => {
      // Center the 28px cursor on the pointer
      xTo(e.clientX - 14);
      yTo(e.clientY - 14);
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return { cursorRef };
}
