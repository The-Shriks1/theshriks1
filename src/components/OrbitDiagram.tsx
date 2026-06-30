"use client";

import { motion } from "framer-motion";

/**
 * Narrative-universe visual — mothership at center, three ships orbiting.
 * Pure SVG. Slow rotation. Decorative only.
 */
export function OrbitDiagram({ size = 320 }: { size?: number }) {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className="text-signal/50"
      stroke="currentColor"
      fill="none"
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 1.1 }}
    >
      {/* outer rings */}
      <circle cx="100" cy="100" r="92" strokeWidth="0.3" strokeDasharray="2 4" opacity="0.5" />
      <circle cx="100" cy="100" r="72" strokeWidth="0.4" />
      <circle cx="100" cy="100" r="48" strokeWidth="0.4" strokeDasharray="1 3" opacity="0.7" />
      {/* cross hairs */}
      <line x1="6" y1="100" x2="194" y2="100" strokeWidth="0.3" opacity="0.4" />
      <line x1="100" y1="6" x2="100" y2="194" strokeWidth="0.3" opacity="0.4" />

      {/* mothership */}
      <g>
        <polygon points="100,84 116,100 100,116 84,100" fill="rgba(242,242,242,0.06)" strokeWidth="0.6" />
        <circle cx="100" cy="100" r="3" fill="currentColor" />
      </g>

      {/* orbiting ships */}
      <motion.g
        style={{ transformOrigin: "100px 100px" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, ease: "linear", repeat: Infinity }}
      >
        <g>
          <circle cx="172" cy="100" r="1.8" fill="currentColor" />
          <text x="158" y="92" fontSize="4.5" className="mono" fill="currentColor" opacity="0.65">SHIP·I</text>
        </g>
        <g>
          <circle cx="28" cy="100" r="1.4" fill="currentColor" opacity="0.55" />
          <text x="14" y="92" fontSize="4.5" className="mono" fill="currentColor" opacity="0.45">SHIP·II</text>
        </g>
        <g>
          <circle cx="100" cy="172" r="1.4" fill="currentColor" opacity="0.55" />
          <text x="86" y="184" fontSize="4.5" className="mono" fill="currentColor" opacity="0.45">SHIP·III</text>
        </g>
      </motion.g>

      <text x="6" y="14" fontSize="4.5" className="mono" fill="currentColor" opacity="0.55">FLEET DIAGRAM · v1.0</text>
      <text x="6" y="196" fontSize="4.5" className="mono" fill="currentColor" opacity="0.35">CENTERLINE X=0 · Y=0</text>
    </motion.svg>
  );
}
