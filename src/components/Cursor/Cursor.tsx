import { useCursor } from '../../hooks/useCursor';

export default function Cursor() {
  const { cursorRef } = useCursor();

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none select-none"
      style={{ width: 36, height: 44 }}
    >
      {/* HEAD */}
      <div
        style={{
          position: 'absolute',
          top: 0, left: '50%',
          transform: 'translateX(-50%)',
          width: 28, height: 28,
          borderRadius: '50%',
          background: '#111111',
          boxShadow: '0 0 8px rgba(248,180,0,0.4)',
          overflow: 'hidden',
        }}
      >
        {/* Yellow headband */}
        <div style={{ position: 'absolute', top: '35%', left: 0, right: 0, height: '13%', background: 'linear-gradient(90deg, #F8B400, #E63946)' }} />
        {/* Glowing yellow eyes */}
        <div style={{ position: 'absolute', top: '52%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', gap: 4 }}>
          <div style={{ width: 5, height: 2, background: '#F8B400', boxShadow: '0 0 5px #F8B400', transform: 'skewX(-8deg)', borderRadius: 1 }} />
          <div style={{ width: 5, height: 2, background: '#F8B400', boxShadow: '0 0 5px #F8B400', transform: 'skewX(8deg)', borderRadius: 1 }} />
        </div>
        {/* Lower mask */}
        <div style={{ position: 'absolute', bottom: '10%', left: '10%', right: '10%', height: '26%', background: '#1B1B1B', borderRadius: 2, border: '1px solid rgba(248,180,0,0.2)' }} />
      </div>

      {/* BODY */}
      <div
        style={{
          position: 'absolute', top: 24, left: '50%',
          transform: 'translateX(-50%)',
          width: 18, height: 11,
          background: '#111111',
          borderRadius: '0 0 4px 4px',
          border: '1px solid rgba(248,180,0,0.15)',
          borderTop: 'none',
        }}
      >
        <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translateX(-50%)', width: '60%', height: 1, background: 'rgba(248,180,0,0.5)' }} />
      </div>

      {/* SWORD TIP */}
      <div
        style={{
          position: 'absolute', bottom: 0, right: 2,
          width: 2, height: 10,
          background: 'linear-gradient(to bottom, #FFFFFF, #F8B400)',
          borderRadius: 1,
          boxShadow: '0 0 4px rgba(248,180,0,0.6)',
          transform: 'rotate(15deg)',
          transformOrigin: 'top center',
        }}
      />
    </div>
  );
}
