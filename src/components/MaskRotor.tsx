"use client";

import { Canvas } from "@react-three/fiber";
import { Bounds, useGLTF, useAnimations } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";

const MASK_MODEL_SRC = "/models/mask-duo.glb";

function MaskMesh() {
  const { scene, animations } = useGLTF(MASK_MODEL_SRC);
  const groupRef = useRef<THREE.Group>(null);
  const { actions } = useAnimations(animations, groupRef);

  useEffect(() => {
    // Automatically play all embedded animations in the GLB file
    Object.values(actions).forEach((action) => {
      if (action) action.play();
    });
  }, [actions]);

  return (
    <Bounds fit clip observe margin={1.2}>
      <group ref={groupRef} rotation={[0, -Math.PI / 2, 0]}>
        <primitive object={scene} />
      </group>
    </Bounds>
  );
}

useGLTF.preload(MASK_MODEL_SRC);

export function MaskRotor() {
  return (
    <Canvas camera={{ position: [0, 0, 5.4], fov: 32 }} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 4, 5]} intensity={1.3} />
      <directionalLight position={[-3, -2, 4]} intensity={0.55} color="#88a" />
      <Suspense fallback={null}>
        <MaskMesh />
      </Suspense>
    </Canvas>
  );
}
