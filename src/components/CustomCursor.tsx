"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  
  // Fast, responsive spring physics (no lag)
  const sx = useSpring(mx, { damping: 40, stiffness: 400, mass: 0.1 });
  const sy = useSpring(my, { damping: 40, stiffness: 400, mass: 0.1 });
  
  const [isTouch, setIsTouch] = useState(true);
  
  const hovering = useRef(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hide on touch devices to prevent mobile bugs
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      setIsTouch(false);
    }

    function onMove(e: PointerEvent) {
      mx.set(e.clientX);
      my.set(e.clientY);
      if (textRef.current) {
        textRef.current.innerHTML = `X_${Math.round(e.clientX).toString().padStart(4, '0')} <br />Y_${Math.round(e.clientY).toString().padStart(4, '0')}`;
      }
    }

    function onOver(e: PointerEvent) {
      const t = e.target as HTMLElement;
      const interactive = t.closest("a, button, [role='button'], input, textarea, select, label");
      
      if (interactive && !hovering.current) {
        hovering.current = true;
        if (cursorRef.current) {
          // Snap into a solid focus frame
          cursorRef.current.style.transform = "translate(-50%, -50%) rotate(90deg) scale(1.5)";
          cursorRef.current.style.borderColor = "rgba(255,255,255,0.8)";
          cursorRef.current.style.backgroundColor = "rgba(255,255,255,0.05)";
        }
        if (textRef.current) {
          // Hide HUD data when interacting
          textRef.current.style.opacity = "0";
          textRef.current.style.transform = "translate(15px, 15px)";
        }
      } else if (!interactive && hovering.current) {
        hovering.current = false;
        if (cursorRef.current) {
          // Return to precision crosshair
          cursorRef.current.style.transform = "translate(-50%, -50%) rotate(0deg) scale(1)";
          cursorRef.current.style.borderColor = "rgba(255,255,255,0.2)";
          cursorRef.current.style.backgroundColor = "transparent";
        }
        if (textRef.current) {
          // Show HUD data
          textRef.current.style.opacity = "1";
          textRef.current.style.transform = "translate(0px, 0px)";
        }
      }
    }

    if (!isTouch) {
      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerover", onOver);
    }
    
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
    };
  }, [mx, my, isTouch]);

  if (isTouch) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
      style={{ x: sx, y: sy }}
    >
      <div className="relative">
        {/* HUD Crosshair Reticle */}
        <div
          ref={cursorRef}
          className="absolute top-0 left-0 w-6 h-6 border border-signal/20 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          {/* Inner targeting ticks */}
          <div className="absolute top-1/2 left-0 w-1.5 h-[1px] bg-signal -translate-y-1/2" />
          <div className="absolute top-1/2 right-0 w-1.5 h-[1px] bg-signal -translate-y-1/2" />
          <div className="absolute left-1/2 top-0 w-[1px] h-1.5 bg-signal -translate-x-1/2" />
          <div className="absolute left-1/2 bottom-0 w-[1px] h-1.5 bg-signal -translate-x-1/2" />
          {/* Precision center dot */}
          <div className="absolute top-1/2 left-1/2 w-[2px] h-[2px] bg-signal -translate-x-1/2 -translate-y-1/2" />
        </div>
        
        {/* Telemetry Data HUD */}
        <div
          ref={textRef}
          className="absolute top-4 left-4 mono text-[9px] text-signal/40 tracking-widest whitespace-nowrap transition-all duration-300 ease-out"
        >
          X_0000 <br />
          Y_0000
        </div>
      </div>
    </motion.div>
  );
}
