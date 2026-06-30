"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars, Sparkles } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function ParallaxRig({ children }: { children: React.ReactNode }) {
  const ref = useRef<THREE.Group>(null);
  const { mouse } = useThree();
  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.x += (mouse.y * 0.18 - ref.current.rotation.x) * 0.04;
    ref.current.rotation.y += (mouse.x * 0.28 - ref.current.rotation.y) * 0.04;
  });
  return <group ref={ref}>{children}</group>;
}

function Dust() {
  const ref = useRef<THREE.Points>(null);
  useFrame((s, dt) => {
    if (ref.current) ref.current.rotation.z += dt * 0.02;
  });
  const geom = new THREE.BufferGeometry();
  const count = 700;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = 8 + Math.random() * 14;
    const a = Math.random() * Math.PI * 2;
    const b = (Math.random() - 0.5) * 0.7;
    positions[i * 3] = Math.cos(a) * r;
    positions[i * 3 + 1] = b * r;
    positions[i * 3 + 2] = Math.sin(a) * r * 0.5 - 4;
  }
  geom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  return (
    <points ref={ref} geometry={geom}>
      <pointsMaterial color="#f2f2f2" size={0.04} sizeAttenuation transparent opacity={0.65} depthWrite={false} />
    </points>
  );
}

export function StarField({ density = 1 }: { density?: number }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 55 }}
      gl={{ antialias: true, alpha: true }}
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      dpr={[1, 2]}
    >
      <Suspense fallback={null}>
        <ParallaxRig>
          <Stars radius={120} depth={70} count={Math.round(2400 * density)} factor={3.2} saturation={0} fade speed={0.4} />
          <Dust />
          <Sparkles count={60} scale={[16, 8, 6]} size={1.6} speed={0.4} opacity={0.55} color="#ffffff" />
        </ParallaxRig>
      </Suspense>
    </Canvas>
  );
}
