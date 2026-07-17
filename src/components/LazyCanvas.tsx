"use client";

import { useRef, useState, useEffect } from "react";

export function LazyCanvas({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasMounted, setHasMounted] = useState(false);
  const [appLoaded, setAppLoaded] = useState(false);

  useEffect(() => {
    const handleLoaded = () => setAppLoaded(true);
    window.addEventListener("appLoaded", handleLoaded);
    
    // Fallback if the event already fired
    const timeout = setTimeout(() => setAppLoaded(true), 3000);

    return () => {
      window.removeEventListener("appLoaded", handleLoaded);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (appLoaded) {
      // Stagger the WebGL compilation in the background so it doesn't freeze the browser all at once.
      // This ensures they are fully loaded and waiting long before the user scrolls to them.
      const staggerDelay = Math.random() * 1500;
      const t = setTimeout(() => setHasMounted(true), staggerDelay);
      return () => clearTimeout(t);
    }
  }, [appLoaded]);

  return (
    <div ref={containerRef} className={`w-full h-full ${className}`}>
      {hasMounted && children}
    </div>
  );
}
