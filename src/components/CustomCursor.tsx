"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const mx = useMotionValue(-40);
  const my = useMotionValue(-40);
  const sx = useSpring(mx, { damping: 28, stiffness: 300, mass: 0.4 });
  const sy = useSpring(my, { damping: 28, stiffness: 300, mass: 0.4 });
  const hovering = useRef(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onMove(e: PointerEvent) {
      mx.set(e.clientX);
      my.set(e.clientY);
    }

    function onOver(e: PointerEvent) {
      const t = e.target as HTMLElement;
      const interactive = t.closest("a, button, [role='button'], input, textarea, select, label");
      if (interactive && !hovering.current) {
        hovering.current = true;
        if (ringRef.current) {
          ringRef.current.style.transform = "translate(-50%, -50%) scale(1.6)";
          ringRef.current.style.borderColor = "rgba(242,242,242,0.5)";
        }
        if (dotRef.current) dotRef.current.style.transform = "translate(-50%, -50%) scale(0.5)";
      } else if (!interactive && hovering.current) {
        hovering.current = false;
        if (ringRef.current) {
          ringRef.current.style.transform = "translate(-50%, -50%) scale(1)";
          ringRef.current.style.borderColor = "rgba(242,242,242,0.25)";
        }
        if (dotRef.current) dotRef.current.style.transform = "translate(-50%, -50%) scale(1)";
      }
    }

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerover", onOver);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
    };
  }, [mx, my]);

  return (
    <>
      {/* dot */}
      <motion.div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{ x: mx, y: my, translateX: "-50%", translateY: "-50%", transition: "transform 0.15s ease" }}
      >
        <div className="w-[6px] h-[6px] rounded-full bg-signal" />
      </motion.div>
      {/* trailing ring */}
      <motion.div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          x: sx,
          y: sy,
          translateX: "-50%",
          translateY: "-50%",
          transition: "transform 0.2s ease, border-color 0.25s ease",
        }}
      >
        <div
          className="w-[32px] h-[32px] rounded-full border border-signal/25"
          style={{ transition: "inherit" }}
        />
      </motion.div>
    </>
  );
}
