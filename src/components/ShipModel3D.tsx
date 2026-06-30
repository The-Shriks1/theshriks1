"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Bounds, useGLTF, useAnimations } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";

const LOKI_MODEL_SRC = "/models/lokiai-ship.glb";
const WARSHIP_MODEL_SRC = "/models/space-warship.glb";

function HullLoki({ rotate, scale }: { rotate: boolean; scale: number }) {
  const g = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(LOKI_MODEL_SRC);
  const { actions } = useAnimations(animations, g);

  useEffect(() => {
    Object.values(actions).forEach((action) => {
      if (action) action.play();
    });
  }, [actions]);

  useFrame((s) => {
    if (!g.current) return;
    if (rotate) {
      g.current.rotation.y = Math.sin(s.clock.elapsedTime * 0.4) * 0.3 + s.clock.elapsedTime * 0.38;
    }
    g.current.position.y = Math.sin(s.clock.elapsedTime * 0.6) * 0.05;
  });

  return (
    <Bounds fit observe margin={1.2}>
      <group ref={g}>
        <primitive object={scene} />
        <pointLight position={[0, -0.6, 0.4]} color="#2a8a5a" intensity={0.6} distance={2.5} />
      </group>
    </Bounds>
  );
}

function HullClassified({ rotate, scale }: { rotate: boolean; scale: number }) {
  const g = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(WARSHIP_MODEL_SRC);
  const { actions } = useAnimations(animations, g);

  useEffect(() => {
    Object.values(actions).forEach((action) => {
      if (action) action.play();
    });
  }, [actions]);

  useFrame((s) => {
    if (!g.current) return;
    if (rotate) {
      g.current.rotation.y = s.clock.elapsedTime * 0.18;
    } else {
      // Force it to be straight and centered facing the front
      g.current.rotation.set(0, -Math.PI / 2, 0);
    }
  });

  return (
    <Bounds fit observe margin={1.2}>
      <group ref={g}>
        <primitive object={scene} />
      </group>
    </Bounds>
  );
}

useGLTF.preload(LOKI_MODEL_SRC);
useGLTF.preload(WARSHIP_MODEL_SRC);

export function ShipModel3D({ slug, rotate = true, scale = 1 }: { slug: string; rotate?: boolean; scale?: number }) {
  const isLoki = slug === "lokiai";
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0.4, 4.2], fov: 32 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.45} />
      <directionalLight position={[2.5, 3, 4]} intensity={1.2} castShadow shadow-mapSize={[1024, 1024]} />
      <directionalLight position={[-3, -1, 2]} intensity={0.45} color="#9ab" />
      <Suspense fallback={null}>
        {isLoki ? <HullLoki rotate={rotate} scale={scale} /> : <HullClassified rotate={rotate} scale={scale} />}
        <ContactShadows position={[0, -1.6, 0]} opacity={0.55} blur={3.2} far={5} resolution={512} color="#000" />
      </Suspense>
    </Canvas>
  );
}
