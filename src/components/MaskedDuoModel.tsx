"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, View, PerspectiveCamera, ContactShadows, MeshReflectorMaterial } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

const MODEL_SRC = "/models/masked_duo.glb";

function DuoScene() {
  const g = useRef<THREE.Group>(null);
  const { scene } = useGLTF(MODEL_SRC);

  return (
    <group ref={g} position={[0, -1.08, 0]} rotation={[-0.02, -0.30, 0.00]} scale={1.14}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload(MODEL_SRC);

export function MaskedDuoModel({ className }: { className?: string }) {
  return (
    <div className={`relative ${className}`} style={{ pointerEvents: "none" }}>
      {/* 3D Viewport */}
      <View className="w-full h-full">
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={35} />
        <ambientLight intensity={1.5} />
        <directionalLight position={[3, 5, 4]} intensity={2.5} />
        <directionalLight position={[-3, -2, 2]} intensity={1.5} color="#9ab" />
        <Suspense fallback={null}>
          <DuoScene />
          
          {/* Grounding shadow on the floor line - Creates the illusion of a 3D floor plane */}
          <ContactShadows 
            position={[0, -1.07, 0]} 
            opacity={0.85} 
            blur={2.5} 
            far={4} 
            resolution={1024} 
            color="#000" 
          />
        </Suspense>
      </View>
    </div>
  );
}
