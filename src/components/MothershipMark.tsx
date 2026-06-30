"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Bounds, useGLTF, useAnimations } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";

const WARSHIP_MODEL_SRC = "/models/space-warship.glb";

function Hull() {
  const g = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(WARSHIP_MODEL_SRC);
  const { actions } = useAnimations(animations, g);

  useEffect(() => {
    Object.values(actions).forEach((action) => {
      if (action) action.play();
    });
  }, [actions]);

  useFrame((s) => {
    if (g.current) g.current.rotation.y = s.clock.elapsedTime * 0.25;
  });

  return (
    <Bounds fit clip observe margin={1.2}>
      <group ref={g}>
        <primitive object={scene} />
      </group>
    </Bounds>
  );
}

useGLTF.preload(WARSHIP_MODEL_SRC);

export function MothershipMark() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0.4, 4.2], fov: 36 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[2, 3, 4]} intensity={1.1} />
        <directionalLight position={[-3, -1, 2]} intensity={0.3} color="#9ab" />
        <Suspense fallback={null}>
          <Hull />
        </Suspense>
      </Canvas>
    </div>
  );
}
