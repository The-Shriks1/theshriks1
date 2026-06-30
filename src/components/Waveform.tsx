"use client";

import { motion } from "framer-motion";

/**
 * Decorative signal waveform — used to render "channel open" state on Transmit section.
 */
export function Waveform({ className = "" }: { className?: string }) {
  // 64 amplitude points, predictable but visually organic
  const bars = Array.from({ length: 64 }, (_, i) => {
    const v = (Math.sin(i * 0.7) * 0.5 + Math.cos(i * 0.31) * 0.3 + 0.55) * 0.8 + 0.2;
    return v;
  });
  return (
    <svg
      viewBox="0 0 320 40"
      className={`w-full h-10 text-signal/60 ${className}`}
      preserveAspectRatio="none"
    >
      {bars.map((v, i) => {
        const h = v * 36;
        const y = (40 - h) / 2;
        return (
          <motion.rect
            key={i}
            x={i * 5}
            y={y}
            width={2.2}
            height={h}
            fill="currentColor"
            initial={{ scaleY: 0, opacity: 0.2 }}
            whileInView={{ scaleY: 1, opacity: 0.85 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, delay: i * 0.012, ease: [0.65, 0, 0.35, 1] }}
            style={{ transformOrigin: "center" }}
          />
        );
      })}
    </svg>
  );
}
