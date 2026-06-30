"use client";

import { motion } from "framer-motion";

/**
 * Detailed studio architecture diagram. Shows:
 *   CLIENT ENGAGEMENTS ←→ THE SHRIKS (mothership node) ←→ IN-HOUSE PRODUCTS
 * with feeder branches (services + ships) and pulsing data flow.
 *
 * Pure SVG, scales by viewBox, detailed annotations.
 */
export function StudioDiagram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 460" className={`w-full h-auto text-signal ${className}`} fill="none">
      <defs>
        <linearGradient id="flow" x1="0" x2="1">
          <stop offset="0%" stopColor="#f2f2f2" stopOpacity="0" />
          <stop offset="50%" stopColor="#f2f2f2" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#f2f2f2" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f2f2f2" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#f2f2f2" stopOpacity="0" />
        </radialGradient>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeOpacity="0.06" strokeWidth="0.5" />
        </pattern>
      </defs>

      {/* grid bg */}
      <rect width="800" height="460" fill="url(#grid)" />

      {/* outer frame */}
      <rect x="10" y="10" width="780" height="440" stroke="currentColor" strokeOpacity="0.18" strokeWidth="0.5" />

      {/* corner ticks */}
      {[
        [10, 10, 0], [790, 10, 90], [790, 450, 180], [10, 450, 270],
      ].map(([x, y, r], i) => (
        <g key={i} transform={`translate(${x},${y}) rotate(${r})`}>
          <line x1="0" y1="0" x2="18" y2="0" stroke="currentColor" strokeOpacity="0.55" />
          <line x1="0" y1="0" x2="0" y2="18" stroke="currentColor" strokeOpacity="0.55" />
        </g>
      ))}

      {/* corner labels */}
      <text x="22" y="28" className="mono" fontSize="9" fill="currentColor" opacity="0.5">FIG. 02·VENTURE</text>
      <text x="778" y="28" className="mono" fontSize="9" fill="currentColor" opacity="0.5" textAnchor="end">REV · v1.0</text>

      {/* centerlines */}
      <line x1="400" y1="20" x2="400" y2="440" stroke="currentColor" strokeOpacity="0.12" strokeDasharray="2 4" />
      <line x1="20" y1="230" x2="780" y2="230" stroke="currentColor" strokeOpacity="0.12" strokeDasharray="2 4" />

      {/* LEFT — Client Engagements */}
      <g>
        <rect x="55" y="180" width="170" height="100" stroke="currentColor" strokeOpacity="0.55" strokeWidth="0.8" />
        <text x="65" y="200" className="mono" fontSize="10" fill="currentColor" opacity="0.5">A·LEFT</text>
        <text x="65" y="220" className="caps" fontSize="14" fill="currentColor" fontWeight="500">CLIENT</text>
        <text x="65" y="238" className="caps" fontSize="14" fill="currentColor" fontWeight="500">ENGAGEMENTS</text>
        <text x="65" y="258" className="mono" fontSize="9" fill="currentColor" opacity="0.55">INDIA · REMOTE</text>
        <text x="65" y="272" className="mono" fontSize="9" fill="currentColor" opacity="0.4">FUNDED VENTURES</text>

        {/* feeder branches */}
        {["DEV", "AI/ML", "DEVOPS", "SEC"].map((t, i) => {
          const y = 50 + i * 28;
          return (
            <g key={t}>
              <line x1="140" y1={y} x2="140" y2="180" stroke="currentColor" strokeOpacity="0.25" />
              <line x1="80" y1={y} x2="140" y2={y} stroke="currentColor" strokeOpacity="0.4" />
              <circle cx="80" cy={y} r="2.5" fill="currentColor" opacity="0.7" />
              <text x="70" y={y + 4} className="mono" fontSize="8" fill="currentColor" opacity="0.6" textAnchor="end">{t}</text>
            </g>
          );
        })}
      </g>

      {/* CENTRE — Mothership Node */}
      <g>
        <circle cx="400" cy="230" r="68" fill="url(#coreGlow)" />
        <circle cx="400" cy="230" r="60" stroke="currentColor" strokeOpacity="0.7" strokeWidth="0.9" />
        <circle cx="400" cy="230" r="48" stroke="currentColor" strokeOpacity="0.35" strokeWidth="0.5" strokeDasharray="2 3" />
        <circle cx="400" cy="230" r="30" stroke="currentColor" strokeOpacity="0.55" strokeWidth="0.6" />

        {/* mask glyph inside */}
        <g transform="translate(400 230) scale(0.6)">
          <path d="M0 -28 L-18 -18 L-22 0 L-15 22 L0 30 L15 22 L22 0 L18 -18 Z" stroke="currentColor" strokeWidth="1.2" fill="rgba(242,242,242,0.05)" />
          <line x1="0" y1="-28" x2="0" y2="30" stroke="currentColor" strokeWidth="0.8" />
          <circle cx="0" cy="-2" r="3" fill="currentColor" />
        </g>

        <text x="400" y="318" className="caps" fontSize="11" fill="currentColor" textAnchor="middle" fontWeight="500">THE SHRIKS</text>
        <text x="400" y="332" className="mono" fontSize="8" fill="currentColor" opacity="0.55" textAnchor="middle">MOTHERSHIP · COMMAND</text>
      </g>

      {/* connecting flow lines L↔C and C↔R with pulsing dots */}
      <g>
        <motion.line x1="225" y1="230" x2="340" y2="230" stroke="currentColor" strokeOpacity="0.45" />
        <motion.line x1="460" y1="230" x2="575" y2="230" stroke="currentColor" strokeOpacity="0.45" />
        {/* pulse dots */}
        <motion.circle
          cx="225" cy="230" r="2.5" fill="currentColor"
          initial={{ cx: 225 }}
          animate={{ cx: 340 }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="460" cy="230" r="2.5" fill="currentColor"
          initial={{ cx: 575 }}
          animate={{ cx: 460 }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </g>

      {/* RIGHT — In-house Products */}
      <g>
        <rect x="575" y="180" width="170" height="100" stroke="currentColor" strokeOpacity="0.55" strokeWidth="0.8" />
        <text x="735" y="200" className="mono" fontSize="10" fill="currentColor" opacity="0.5" textAnchor="end">B·RIGHT</text>
        <text x="585" y="220" className="caps" fontSize="14" fill="currentColor" fontWeight="500">IN-HOUSE</text>
        <text x="585" y="238" className="caps" fontSize="14" fill="currentColor" fontWeight="500">PRODUCTS</text>
        <text x="585" y="258" className="mono" fontSize="9" fill="currentColor" opacity="0.55">THE FLEET</text>
        <text x="585" y="272" className="mono" fontSize="9" fill="currentColor" opacity="0.4">03 VESSELS</text>

        {/* fleet feeder branches */}
        {["SHIP·I", "SHIP·II", "SHIP·III"].map((t, i) => {
          const y = 320 + i * 28;
          const live = i === 0;
          return (
            <g key={t}>
              <line x1="660" y1="280" x2="660" y2={y} stroke="currentColor" strokeOpacity="0.25" />
              <line x1="660" y1={y} x2="720" y2={y} stroke="currentColor" strokeOpacity={live ? 0.6 : 0.3} />
              <circle cx="720" cy={y} r="2.5" fill={live ? "#2a8a5a" : "currentColor"} opacity={live ? 1 : 0.5} />
              <text x="730" y={y + 4} className="mono" fontSize="8" fill="currentColor" opacity="0.6">{t}</text>
            </g>
          );
        })}
      </g>

      {/* bottom annotation */}
      <text x="400" y="430" className="mono" fontSize="8" fill="currentColor" opacity="0.4" textAnchor="middle">
        BOTH HALVES FEED EACH OTHER · SAME STANDARD
      </text>
    </svg>
  );
}
