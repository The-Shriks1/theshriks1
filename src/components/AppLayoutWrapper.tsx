"use client";

import { useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { HyperspaceLoader } from "./HyperspaceLoader";

export function AppLayoutWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="fixed inset-0 bg-[#0a0a0a] z-[99999]" />;
  }

  return (
    <>
      {loading && (
        <HyperspaceLoader 
          onComplete={() => {
            setLoading(false);
            window.dispatchEvent(new Event("appLoaded"));
          }} 
        />
      )}
      {/* The Global WebGL Engine */}
      {mounted && (
        <Canvas
          eventSource={containerRef as React.RefObject<HTMLElement>}
          className="pointer-events-none"
          style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 10 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 2]}
          shadows
        >
          <View.Port />
        </Canvas>
      )}
      <div 
        ref={containerRef}
        style={{ 
          opacity: loading ? 0 : 1,
          transition: "opacity 1.5s cubic-bezier(0.16, 1, 0.3, 1)",
          pointerEvents: loading ? "none" : "auto",
          height: loading ? "100vh" : "auto",
          overflow: loading ? "hidden" : "visible",
          position: "relative",
          zIndex: 1
        }}
      >
        {children}
      </div>
    </>
  );
}
