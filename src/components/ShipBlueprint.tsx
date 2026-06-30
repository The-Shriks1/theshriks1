"use client";

import { motion } from "framer-motion";

/**
 * Per-ship blueprint thumbnail. LokiAI shows an angular fighter silhouette.
 * Classified ships show a sealed lozenge with crosshair.
 */
export function ShipBlueprint({ slug }: { slug: string }) {
  const isLoki = slug === "lokiai";
  return (
    <motion.svg
      viewBox="0 0 200 120"
      className="w-full h-full text-signal/45"
      stroke="currentColor"
      fill="none"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
    >
      {/* grid */}
      {[...Array(7)].map((_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 20} x2="200" y2={i * 20} strokeWidth="0.2" opacity="0.4" />
      ))}
      {[...Array(11)].map((_, i) => (
        <line key={`v${i}`} y1="0" x1={i * 20} y2="120" x2={i * 20} strokeWidth="0.2" opacity="0.4" />
      ))}
      {/* centerline */}
      <line x1="100" y1="0" x2="100" y2="120" strokeWidth="0.4" strokeDasharray="2 3" opacity="0.6" />

      {isLoki ? (
        <g>
          {/* fighter hull */}
          <path d="M100 18 L84 50 L60 64 L72 76 L100 70 L128 76 L140 64 L116 50 Z" strokeWidth="0.9" />
          <path d="M100 18 L100 70" strokeWidth="0.5" opacity="0.6" />
          <path d="M84 50 L116 50" strokeWidth="0.4" opacity="0.5" />
          {/* engine glow */}
          <circle cx="100" cy="82" r="2" fill="#2a8a5a" stroke="none" opacity="0.9" />
          <circle cx="100" cy="82" r="5" stroke="#2a8a5a" strokeWidth="0.4" opacity="0.5" />
          {/* annotations */}
          <text x="6" y="106" fontSize="5" className="mono" fill="currentColor" opacity="0.7">SHIP·I / LOKIAI</text>
          <text x="142" y="106" fontSize="5" className="mono" fill="currentColor" opacity="0.55">LIVE</text>
        </g>
      ) : (
        <g>
          <polygon points="100,30 150,60 100,90 50,60" strokeWidth="0.8" fill="rgba(242,242,242,0.025)" />
          <polygon points="100,45 130,60 100,75 70,60" strokeWidth="0.5" />
          <line x1="40" y1="60" x2="160" y2="60" strokeWidth="0.4" strokeDasharray="2 3" />
          <circle cx="100" cy="60" r="2" fill="currentColor" />
          <text x="6" y="106" fontSize="5" className="mono" fill="currentColor" opacity="0.7">UNDER SEAL</text>
          <text x="142" y="106" fontSize="5" className="mono" fill="currentColor" opacity="0.45">PLANNED</text>
        </g>
      )}
    </motion.svg>
  );
}
