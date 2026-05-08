import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Stars } from '@react-three/drei';
import NinjaModel from './NinjaModel';

export default function NinjaCanvas() {
  return (
    <Canvas
      gl={{ alpha: true, antialias: true }}
      camera={{ position: [0, 0.3, 3.8], fov: 46 }}
      dpr={[1, 1.5]}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.3} color="#1B1B1B" />
      {/* Key — warm yellow from upper left */}
      <directionalLight position={[-3, 6, 4]} intensity={1.8} color="#FFD060" castShadow />
      {/* Fill — white from right */}
      <directionalLight position={[4, 1, 3]} intensity={0.7} color="#FFFFFF" />
      {/* Rim — red back-kick for depth */}
      <pointLight position={[0, 2, -4]} intensity={2.2} color="#E63946" distance={10} />
      {/* Ground bounce — warm amber */}
      <pointLight position={[0, -2, 2]} intensity={1.0} color="#F8B400" distance={7} />
      {/* Eye fill — tight yellow front */}
      <pointLight position={[0, 1.1, 3]} intensity={1.6} color="#F8B400" distance={5} />

      <Stars radius={70} depth={35} count={400} factor={2} fade speed={0.4} />
      <NinjaModel />
      <ContactShadows position={[0, -1.28, 0]} opacity={0.4} blur={3.5} far={3} color="#F8B400" />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1.0}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.85}
      />
    </Canvas>
  );
}
