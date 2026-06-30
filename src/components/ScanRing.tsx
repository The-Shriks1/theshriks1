"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * Cursor-driven scan ring with a sweeping radar arm. Pure SVG, hardware-accelerated transforms.
 * Sits over the hero. Listens to pointermove on its window.
 */
export function ScanRing() {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    function onMove(e: PointerEvent) {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      if (x >= -5 && x <= 105 && y >= -5 && y <= 105) {
        setPos({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) });
        setActive(true);
      } else {
        setActive(false);
      }
    }
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div ref={ref} aria-hidden className="absolute inset-0 pointer-events-none z-[5]">
      <motion.div
        animate={{ left: `${pos.x}%`, top: `${pos.y}%`, opacity: active ? 1 : 0 }}
        transition={{ left: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }, top: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.4 } }}
        className="absolute -translate-x-1/2 -translate-y-1/2"
      >
        <svg width="280" height="280" viewBox="0 0 280 280" className="text-signal/35">
          <defs>
            <radialGradient id="scanGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f2f2f2" stopOpacity="0.06" />
              <stop offset="60%" stopColor="#f2f2f2" stopOpacity="0.02" />
              <stop offset="100%" stopColor="#f2f2f2" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="sweep" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#f2f2f2" stopOpacity="0" />
              <stop offset="100%" stopColor="#f2f2f2" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <circle cx="140" cy="140" r="130" fill="url(#scanGrad)" stroke="currentColor" strokeWidth="0.6" />
          <circle cx="140" cy="140" r="92" fill="none" stroke="currentColor" strokeWidth="0.4" strokeDasharray="2 4" />
          <circle cx="140" cy="140" r="52" fill="none" stroke="currentColor" strokeWidth="0.4" />
          <line x1="0" y1="140" x2="280" y2="140" stroke="currentColor" strokeWidth="0.25" />
          <line x1="140" y1="0" x2="140" y2="280" stroke="currentColor" strokeWidth="0.25" />
          {/* sweep arm */}
          <g style={{ transformOrigin: "140px 140px" }}>
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ duration: 4.5, ease: "linear", repeat: Infinity }}
              style={{ transformOrigin: "140px 140px" }}
            >
              <rect x="140" y="20" width="120" height="2" fill="url(#sweep)" />
              <circle cx="140" cy="140" r="3" fill="#f2f2f2" />
            </motion.g>
          </g>
          {/* targeting brackets */}
          <g stroke="currentColor" strokeWidth="0.8" fill="none">
            <path d="M120 120 L120 110 L130 110" />
            <path d="M160 110 L170 110 L170 120" />
            <path d="M170 160 L170 170 L160 170" />
            <path d="M130 170 L120 170 L120 160" />
          </g>
          <text x="140" y="270" textAnchor="middle" fontSize="7" className="mono" fill="currentColor" opacity="0.5">
            SCAN · NOMINAL · 0.000
          </text>
        </svg>
      </motion.div>
    </div>
  );
}
