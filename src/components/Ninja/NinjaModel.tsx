import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

/* ── Olive Garden Feast palette ── */
const C = {
  cloth:      '#0A0D06',   // near-black cloth
  armorDark:  '#1A2410',   // dark olive lacquer
  armorMid:   '#2E3D18',   // medium olive armor
  armorTrim:  '#4A5C22',   // lighter olive trim/edges
  gold:       '#C49A1E',   // warm gold accents
  goldBright: '#D4B030',   // bright gold highlight
  eyeGlow:    '#F8B400',   // yellow eyes
  blade:      '#D0E4F0',   // cool silver blade
  bladeEdge:  '#F0F8FF',   // bright edge shimmer
  burgundy:   '#0E7490',   // teal detail
  rope:       '#1E3A5F',   // dark navy cord wrap
};

/* Reusable material shorthand */
function M({
  color, emissive = '#000', emissiveIntensity = 0,
  roughness = 0.72, metalness = 0.08,
}: {
  color: string; emissive?: string; emissiveIntensity?: number;
  roughness?: number; metalness?: number;
}) {
  return (
    <meshStandardMaterial
      color={color}
      emissive={emissive}
      emissiveIntensity={emissiveIntensity}
      roughness={roughness}
      metalness={metalness}
    />
  );
}

/* ── Tabi boot (split-toe silhouette) ── */
function Boot({ x }: { x: number }) {
  return (
    <group position={[x, -0.96, 0]}>
      <mesh position={[0, 0.06, 0.02]}>
        <boxGeometry args={[0.155, 0.14, 0.28]} />
        <M color={C.cloth} roughness={0.9} />
      </mesh>
      {/* toe cap raise */}
      <mesh position={[0, 0.09, 0.1]}>
        <boxGeometry args={[0.14, 0.07, 0.1]} />
        <M color={C.armorDark} roughness={0.5} metalness={0.2} />
      </mesh>
      {/* heel block */}
      <mesh position={[0, -0.01, -0.06]}>
        <boxGeometry args={[0.13, 0.06, 0.08]} />
        <M color={C.armorMid} roughness={0.45} metalness={0.3} />
      </mesh>
      {/* gold ankle trim */}
      <mesh position={[0, 0.13, 0]}>
        <torusGeometry args={[0.078, 0.012, 6, 18]} />
        <M color={C.gold} emissive={C.gold} emissiveIntensity={0.35} roughness={0.25} metalness={0.8} />
      </mesh>
    </group>
  );
}

/* ── Leg (thigh → knee → shin → wrap) ── */
function Leg({ x }: { x: number }) {
  return (
    <group position={[x, 0, 0]}>
      {/* Thigh */}
      <mesh position={[0, -0.28, 0]}>
        <cylinderGeometry args={[0.1, 0.09, 0.5, 10]} />
        <M color={C.cloth} roughness={0.88} />
      </mesh>
      {/* Knee pad */}
      <mesh position={[0, -0.54, 0.04]}>
        <sphereGeometry args={[0.072, 10, 10]} />
        <M color={C.armorDark} roughness={0.38} metalness={0.45} />
      </mesh>
      {/* Knee gold ring */}
      <mesh position={[0, -0.52, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.092, 0.012, 6, 18]} />
        <M color={C.gold} emissive={C.gold} emissiveIntensity={0.3} roughness={0.2} metalness={0.85} />
      </mesh>
      {/* Shin */}
      <mesh position={[0, -0.75, 0]}>
        <cylinderGeometry args={[0.085, 0.075, 0.42, 10]} />
        <M color={C.cloth} roughness={0.88} />
      </mesh>
      {/* Shin guard plate */}
      <mesh position={[0, -0.72, 0.075]}>
        <boxGeometry args={[0.1, 0.3, 0.028]} />
        <M color={C.armorMid} roughness={0.35} metalness={0.5} />
      </mesh>
      {/* Shin guard ridge */}
      <mesh position={[0, -0.72, 0.09]}>
        <boxGeometry args={[0.018, 0.28, 0.01]} />
        <M color={C.armorTrim} roughness={0.25} metalness={0.7} />
      </mesh>
    </group>
  );
}

/* ── Arm (shoulder → elbow → bracer → hand) ── */
function Arm({ x, flip, rotZ }: { x: number; flip: number; rotZ: number }) {
  return (
    <group position={[x, 0.22, 0]} rotation={[0, 0, rotZ]}>
      {/* Upper arm */}
      <mesh position={[0, -0.22, 0]}>
        <cylinderGeometry args={[0.076, 0.068, 0.42, 9]} />
        <M color={C.cloth} roughness={0.86} />
      </mesh>
      {/* Elbow guard */}
      <mesh position={[0, -0.44, 0.02]}>
        <sphereGeometry args={[0.065, 10, 10]} />
        <M color={C.armorDark} roughness={0.35} metalness={0.5} />
      </mesh>
      {/* Forearm */}
      <mesh position={[0, -0.62, 0]}>
        <cylinderGeometry args={[0.068, 0.06, 0.36, 9]} />
        <M color={C.cloth} roughness={0.86} />
      </mesh>
      {/* Bracer armor */}
      <mesh position={[0, -0.6, flip * 0.06]}>
        <boxGeometry args={[0.1, 0.24, 0.03]} />
        <M color={C.armorMid} roughness={0.3} metalness={0.55} />
      </mesh>
      {/* Bracer gold stripe */}
      <mesh position={[0, -0.6, flip * 0.075]}>
        <boxGeometry args={[0.016, 0.22, 0.008]} />
        <M color={C.gold} emissive={C.gold} emissiveIntensity={0.4} roughness={0.2} metalness={0.9} />
      </mesh>
      {/* Hand glove */}
      <mesh position={[0, -0.85, 0]}>
        <sphereGeometry args={[0.058, 10, 10]} />
        <M color={C.cloth} roughness={0.85} />
      </mesh>
      {/* Knuckle guard */}
      <mesh position={[0, -0.85, flip * 0.044]}>
        <boxGeometry args={[0.09, 0.045, 0.018]} />
        <M color={C.armorTrim} roughness={0.25} metalness={0.7} />
      </mesh>
    </group>
  );
}

/* ── Shoulder pauldron ── */
function Pauldron({ x, flip }: { x: number; flip: number }) {
  return (
    <group position={[x, 0.74, 0]}>
      {/* Base cap */}
      <mesh>
        <sphereGeometry args={[0.1, 12, 12, 0, Math.PI * 2, 0, Math.PI * 0.6]} />
        <M color={C.armorDark} roughness={0.3} metalness={0.5} />
      </mesh>
      {/* Rim ring */}
      <mesh position={[0, -0.05, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.1, 0.014, 6, 20]} />
        <M color={C.gold} emissive={C.gold} emissiveIntensity={0.45} roughness={0.2} metalness={0.9} />
      </mesh>
      {/* Plate fin */}
      <mesh position={[flip * 0.04, -0.02, 0]} rotation={[0, 0, flip * 0.25]}>
        <boxGeometry args={[0.06, 0.12, 0.025]} />
        <M color={C.armorMid} roughness={0.3} metalness={0.55} />
      </mesh>
    </group>
  );
}

/* ── Torso + chest armor ── */
function Torso({ breathRef }: { breathRef: React.RefObject<THREE.Mesh> }) {
  return (
    <group position={[0, 0.42, 0]}>
      {/* Body */}
      <mesh ref={breathRef}>
        <cylinderGeometry args={[0.23, 0.2, 0.72, 14]} />
        <M color={C.cloth} roughness={0.88} />
      </mesh>

      {/* Chest armor plate */}
      <mesh position={[0, 0.1, 0.16]}>
        <boxGeometry args={[0.35, 0.38, 0.05]} />
        <M color={C.armorDark} roughness={0.28} metalness={0.55} />
      </mesh>
      {/* Chest center ridge */}
      <mesh position={[0, 0.1, 0.195]}>
        <boxGeometry args={[0.022, 0.34, 0.01]} />
        <M color={C.armorTrim} roughness={0.2} metalness={0.75} />
      </mesh>
      {/* Chest horizontal banding (3 lines) */}
      {[-0.06, 0.06, 0.18].map((y, i) => (
        <mesh key={i} position={[0, y, 0.198]}>
          <boxGeometry args={[0.32, 0.012, 0.008]} />
          <M color={C.gold} emissive={C.gold} emissiveIntensity={0.3} roughness={0.18} metalness={0.92} />
        </mesh>
      ))}

      {/* Back plate */}
      <mesh position={[0, 0.08, -0.16]}>
        <boxGeometry args={[0.32, 0.36, 0.04]} />
        <M color={C.armorMid} roughness={0.32} metalness={0.45} />
      </mesh>

      {/* Collar ring */}
      <mesh position={[0, 0.37, 0]}>
        <torusGeometry args={[0.14, 0.028, 8, 24]} />
        <M color={C.armorDark} roughness={0.28} metalness={0.6} />
      </mesh>
      <mesh position={[0, 0.37, 0]}>
        <torusGeometry args={[0.14, 0.01, 6, 24]} />
        <M color={C.gold} emissive={C.gold} emissiveIntensity={0.5} roughness={0.15} metalness={0.95} />
      </mesh>
    </group>
  );
}

/* ── Belt / sash ── */
function Belt() {
  return (
    <group position={[0, 0.1, 0]}>
      {/* Main belt */}
      <mesh>
        <torusGeometry args={[0.215, 0.045, 8, 28]} />
        <M color={C.armorDark} roughness={0.35} metalness={0.4} />
      </mesh>
      {/* Gold buckle center */}
      <mesh position={[0, 0, 0.22]}>
        <boxGeometry args={[0.085, 0.065, 0.022]} />
        <M color={C.gold} emissive={C.gold} emissiveIntensity={0.6} roughness={0.15} metalness={0.95} />
      </mesh>
      {/* Sash cloth strips hanging */}
      {[-0.05, 0.05].map((x, i) => (
        <mesh key={i} position={[x, -0.12, 0.14]}>
          <boxGeometry args={[0.06, 0.22, 0.008]} />
          <M color={C.burgundy} roughness={0.7} />
        </mesh>
      ))}
    </group>
  );
}

/* ── Head + mask + glowing eyes ── */
function Head({ eyePulse }: { eyePulse: React.RefObject<THREE.MeshStandardMaterial> }) {
  return (
    <group position={[0, 1.06, 0]}>
      {/* Skull base */}
      <mesh>
        <sphereGeometry args={[0.22, 20, 20]} />
        <M color={C.cloth} roughness={0.82} />
      </mesh>
      {/* Hood outer layer (slightly larger, darker) */}
      <mesh scale={[1.06, 1.05, 1.04]}>
        <sphereGeometry args={[0.22, 18, 18]} />
        <M color={C.armorDark} roughness={0.78} metalness={0.04} />
      </mesh>

      {/* Forehead armor crest */}
      <mesh position={[0, 0.16, 0.18]}>
        <boxGeometry args={[0.19, 0.06, 0.025]} />
        <M color={C.armorDark} roughness={0.28} metalness={0.6} />
      </mesh>
      {/* Crest gold line */}
      <mesh position={[0, 0.16, 0.198]}>
        <boxGeometry args={[0.17, 0.014, 0.008]} />
        <M color={C.goldBright} emissive={C.goldBright} emissiveIntensity={0.8} roughness={0.1} metalness={1} />
      </mesh>

      {/* Face mask (lower half) */}
      <mesh position={[0, -0.06, 0.175]}>
        <boxGeometry args={[0.27, 0.15, 0.04]} />
        <M color={C.armorMid} roughness={0.32} metalness={0.45} />
      </mesh>
      <mesh position={[0, -0.06, 0.198]}>
        <boxGeometry args={[0.25, 0.13, 0.01]} />
        <M color={C.armorTrim} roughness={0.22} metalness={0.65} />
      </mesh>

      {/* Eye slit recess */}
      <mesh position={[0, 0.055, 0.2]}>
        <boxGeometry args={[0.27, 0.056, 0.01]} />
        <M color={C.cloth} roughness={0.95} />
      </mesh>

      {/* Left eye — elongated diamond slit, amber glow */}
      <mesh position={[-0.076, 0.055, 0.215]} rotation={[0, 0, 0.22]}>
        <boxGeometry args={[0.068, 0.022, 0.01]} />
        <meshStandardMaterial
          ref={eyePulse}
          color={C.eyeGlow}
          emissive={C.eyeGlow}
          emissiveIntensity={3.0}
          roughness={0}
          metalness={0}
        />
      </mesh>
      {/* Right eye */}
      <mesh position={[0.076, 0.055, 0.215]} rotation={[0, 0, -0.22]}>
        <boxGeometry args={[0.068, 0.022, 0.01]} />
        <M color={C.eyeGlow} emissive={C.eyeGlow} emissiveIntensity={3.0} roughness={0} metalness={0} />
      </mesh>
      {/* Eye inner pupils (brighter center) */}
      <mesh position={[-0.076, 0.055, 0.222]}>
        <boxGeometry args={[0.028, 0.014, 0.008]} />
        <M color={C.goldBright} emissive={C.goldBright} emissiveIntensity={5} roughness={0} metalness={0} />
      </mesh>
      <mesh position={[0.076, 0.055, 0.222]}>
        <boxGeometry args={[0.028, 0.014, 0.008]} />
        <M color={C.goldBright} emissive={C.goldBright} emissiveIntensity={5} roughness={0} metalness={0} />
      </mesh>

      {/* Ear guards */}
      {([-1, 1] as const).map((side, i) => (
        <mesh key={i} position={[side * 0.225, 0.02, 0]}>
          <boxGeometry args={[0.025, 0.1, 0.09]} />
          <M color={C.armorDark} roughness={0.3} metalness={0.55} />
        </mesh>
      ))}

      {/* Headband wrap (thin ring over hood) */}
      <mesh position={[0, 0.1, 0]} rotation={[0.1, 0, 0]}>
        <torusGeometry args={[0.225, 0.018, 8, 34]} />
        <M color={C.gold} emissive={C.gold} emissiveIntensity={0.65} roughness={0.18} metalness={0.9} />
      </mesh>
      {/* Headband front plate */}
      <mesh position={[0, 0.1, 0.228]}>
        <boxGeometry args={[0.1, 0.055, 0.016]} />
        <M color={C.armorDark} roughness={0.22} metalness={0.7} />
      </mesh>
      <mesh position={[0, 0.1, 0.238]}>
        <boxGeometry args={[0.086, 0.042, 0.008]} />
        <M color={C.gold} emissive={C.gold} emissiveIntensity={0.55} roughness={0.15} metalness={0.95} />
      </mesh>
      {/* Headband trailing ribbons */}
      <mesh position={[-0.04, -0.05, -0.24]} rotation={[0.28, 0.08, 0.06]}>
        <boxGeometry args={[0.038, 0.2, 0.008]} />
        <M color={C.gold} roughness={0.55} metalness={0.3} />
      </mesh>
      <mesh position={[0.055, -0.09, -0.22]} rotation={[0.2, -0.1, -0.04]}>
        <boxGeometry args={[0.034, 0.15, 0.008]} />
        <M color={C.gold} roughness={0.55} metalness={0.3} />
      </mesh>
    </group>
  );
}

/* ── Neck ── */
function Neck() {
  return (
    <mesh position={[0, 0.83, 0]}>
      <cylinderGeometry args={[0.085, 0.1, 0.12, 10]} />
      <M color={C.cloth} roughness={0.88} />
    </mesh>
  );
}

/* ── Katana on back ── */
function Katana() {
  return (
    <group position={[0.08, 0.45, -0.24]} rotation={[0.14, 0, -0.28]}>
      {/* Scabbard */}
      <mesh position={[0, -0.25, 0]}>
        <cylinderGeometry args={[0.026, 0.022, 0.82, 8]} />
        <M color={C.armorDark} roughness={0.32} metalness={0.4} />
      </mesh>
      {/* Scabbard gold bands */}
      {[-0.1, 0.06, -0.32].map((y, i) => (
        <mesh key={i} position={[0, y, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 0.025, 8]} />
          <M color={C.gold} emissive={C.gold} emissiveIntensity={0.4} roughness={0.18} metalness={0.92} />
        </mesh>
      ))}
      {/* Tsuba (guard) */}
      <mesh position={[0, 0.24, 0]}>
        <boxGeometry args={[0.155, 0.024, 0.044]} />
        <M color={C.armorMid} roughness={0.25} metalness={0.72} />
      </mesh>
      {/* Tsuba detail notch */}
      <mesh position={[0, 0.24, 0]}>
        <torusGeometry args={[0.06, 0.01, 6, 18]} />
        <M color={C.gold} roughness={0.2} metalness={0.9} />
      </mesh>
      {/* Handle with cord wrap */}
      <mesh position={[0, 0.4, 0]}>
        <cylinderGeometry args={[0.024, 0.026, 0.26, 8]} />
        <M color={C.rope} roughness={0.78} metalness={0.04} />
      </mesh>
      {/* Handle diamond wraps */}
      {[0.32, 0.38, 0.44, 0.5].map((y, i) => (
        <mesh key={i} position={[0, y, 0]} rotation={[0, 0, 0.7]}>
          <torusGeometry args={[0.026, 0.007, 4, 12]} />
          <M color={C.gold} roughness={0.25} metalness={0.85} />
        </mesh>
      ))}
      {/* Pommel */}
      <mesh position={[0, 0.55, 0]}>
        <sphereGeometry args={[0.032, 8, 8]} />
        <M color={C.gold} emissive={C.gold} emissiveIntensity={0.5} roughness={0.15} metalness={1} />
      </mesh>
      {/* Blade — exposed above scabbard */}
      <mesh position={[0, -0.68, 0]}>
        <boxGeometry args={[0.036, 0.5, 0.009]} />
        <M color={C.blade} emissive={'#6B8C6B'} emissiveIntensity={0.15} roughness={0.04} metalness={0.97} />
      </mesh>
      {/* Blade edge shimmer */}
      <mesh position={[0.02, -0.68, 0]}>
        <boxGeometry args={[0.007, 0.5, 0.005]} />
        <M color={C.bladeEdge} emissive={C.bladeEdge} emissiveIntensity={0.7} roughness={0} metalness={1} />
      </mesh>
    </group>
  );
}

/* ── Floating golden shuriken ── */
function Shuriken() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.z += dt * 3.8;
  });
  return (
    <group ref={ref}>
      {[0, 1, 2, 3].map((i) => (
        <mesh key={i} rotation={[0, 0, (Math.PI / 4) * i]}>
          <boxGeometry args={[0.28, 0.055, 0.016]} />
          <M color={C.goldBright} emissive={C.gold} emissiveIntensity={1.1} roughness={0.05} metalness={0.95} />
        </mesh>
      ))}
      <mesh>
        <cylinderGeometry args={[0.042, 0.042, 0.02, 8]} />
        <M color={C.armorDark} emissive={C.eyeGlow} emissiveIntensity={0.8} roughness={0.2} metalness={0.7} />
      </mesh>
    </group>
  );
}

/* ════════════════════════════════════
   MAIN EXPORT
   ════════════════════════════════════ */
export default function NinjaModel() {
  const breathRef = useRef<THREE.Mesh>(null);
  const eyeRef    = useRef<THREE.MeshStandardMaterial>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    /* breathing */
    if (breathRef.current) {
      const s = 1 + Math.sin(t * 1.1) * 0.012;
      breathRef.current.scale.set(s, s, s);
    }
    /* eye pulse */
    if (eyeRef.current) {
      eyeRef.current.emissiveIntensity = 2.8 + Math.sin(t * 2.4) * 0.9;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.45}>
      <group position={[0, -1.08, 0]}>

        {/* Boots */}
        <Boot x={-0.185} />
        <Boot x={ 0.185} />

        {/* Legs */}
        <Leg x={-0.185} />
        <Leg x={ 0.185} />

        {/* Belt / sash */}
        <Belt />

        {/* Torso */}
        <Torso breathRef={breathRef} />

        {/* Pauldrons */}
        <Pauldron x={-0.285} flip={-1} />
        <Pauldron x={ 0.285} flip={1} />

        {/* Arms */}
        <Arm x={-0.29} flip={-1} rotZ={ 0.35} />
        <Arm x={ 0.29} flip={ 1} rotZ={-0.35} />

        {/* Neck */}
        <Neck />

        {/* Katana on back */}
        <Katana />

        {/* Head */}
        <Head eyePulse={eyeRef} />

        {/* Floating shuriken */}
        <group position={[0.78, 0.32, 0.3]}>
          <Shuriken />
        </group>

      </group>
    </Float>
  );
}
