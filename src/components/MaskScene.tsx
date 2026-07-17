"use client";

import { useFrame } from "@react-three/fiber";
import { OrbitControls, View, PerspectiveCamera } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

function MaskGeometry({ x }: { x: number }) {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (group.current) {
      group.current.rotation.y = Math.sin(t * 0.25) * 0.12;
      group.current.position.y = Math.sin(t * 0.5) * 0.04;
    }
  });

  const shape = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(0, 1.5);
    s.lineTo(-0.85, 0.95);
    s.lineTo(-1.05, -0.05);
    s.lineTo(-0.7, -1.15);
    s.lineTo(0, -1.45);
    s.lineTo(0.7, -1.15);
    s.lineTo(1.05, -0.05);
    s.lineTo(0.85, 0.95);
    s.lineTo(0, 1.5);
    return s;
  }, []);

  const extrude = useMemo(
    () => ({ depth: 0.32, bevelEnabled: true, bevelThickness: 0.04, bevelSize: 0.06, bevelSegments: 4, steps: 1, curveSegments: 24 }),
    []
  );

  return (
    <group ref={group} position={[x, 0, 0]}>
      <mesh castShadow receiveShadow>
        <extrudeGeometry args={[shape, extrude]} />
        <meshStandardMaterial color="#111" metalness={0.85} roughness={0.28} envMapIntensity={1.1} />
      </mesh>
      {/* vertical split */}
      <mesh position={[0, 0, 0.34]}>
        <boxGeometry args={[0.015, 2.95, 0.02]} />
        <meshStandardMaterial color="#f2f2f2" emissive="#f2f2f2" emissiveIntensity={0.25} />
      </mesh>
      {/* eye */}
      <mesh position={[0, 0.05, 0.34]}>
        <ringGeometry args={[0.15, 0.21, 48]} />
        <meshStandardMaterial color="#f2f2f2" emissive="#f2f2f2" emissiveIntensity={0.55} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, 0.05, 0.345]}>
        <circleGeometry args={[0.07, 32]} />
        <meshStandardMaterial color="#f2f2f2" emissive="#f2f2f2" emissiveIntensity={0.9} />
      </mesh>
    </group>
  );
}

export function MaskScene() {
  return (
    <View className="absolute inset-0">
      <PerspectiveCamera makeDefault position={[0, 0, 5.5]} fov={38} />
      <color attach="background" args={["#0a0a0a"]} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[3, 4, 5]} intensity={1.2} />
      <directionalLight position={[-3, -2, 4]} intensity={0.5} color="#9aa" />
      <Suspense fallback={null}>
        <MaskGeometry x={-1.45} />
        <MaskGeometry x={1.45} />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </View>
  );
}
