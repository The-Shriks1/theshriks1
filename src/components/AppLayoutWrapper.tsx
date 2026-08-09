"use client";

import { useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { HyperspaceLoader } from "./HyperspaceLoader";

import { useCinematicRuntime } from "@/lib/CinematicRuntime";

export function AppLayoutWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { documentHidden } = useCinematicRuntime();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

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
      {/* The Global WebGL Engine — client-only, requires browser APIs */}
      {mounted && (
        <Canvas
          eventSource={containerRef as React.RefObject<HTMLElement>}
          className="pointer-events-none"
          style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100svh", zIndex: 10 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 2]}
          shadows
          frameloop={documentHidden ? "never" : "always"}
        >
          <View.Port />
        </Canvas>
      )}
      {/*
        Children are always rendered (including during SSR) so Googlebot can index page content.
        The opacity:0 / height:100svh style during loading keeps them visually hidden
        behind the HyperspaceLoader — the user experience is identical.
      */}
      <div
        ref={containerRef}
        style={{
          opacity: loading ? 0 : 1,
          transition: "opacity 1.5s cubic-bezier(0.16, 1, 0.3, 1)",
          pointerEvents: loading ? "none" : "auto",
          height: loading ? "100svh" : "auto",
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
