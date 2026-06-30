"use client";

import { motion } from "framer-motion";

const PULSE = { duration: 3.2, repeat: Infinity, ease: "easeInOut" as const };

function HexNode({ cx, cy, r, label, sub, glow }: { cx: number; cy: number; r: number; label: string; sub?: string; glow?: string }) {
  const pts = Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 2;
    return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
  }).join(" ");

  return (
    <g>
      {glow && <polygon points={pts} fill={glow} opacity="0.08" />}
      <polygon points={pts} fill="none" stroke="currentColor" strokeOpacity="0.6" strokeWidth="0.8" />
      <polygon
        points={Array.from({ length: 6 }, (_, i) => {
          const a = (Math.PI / 3) * i - Math.PI / 2;
          return `${cx + (r - 4) * Math.cos(a)},${cy + (r - 4) * Math.sin(a)}`;
        }).join(" ")}
        fill="none" stroke="currentColor" strokeOpacity="0.2" strokeWidth="0.5" strokeDasharray="2 3"
      />
      <text x={cx} y={cy - 4} className="caps" fontSize="11" fill="currentColor" textAnchor="middle" fontWeight="500">{label}</text>
      {sub && <text x={cx} y={cy + 10} className="mono" fontSize="7.5" fill="currentColor" opacity="0.5" textAnchor="middle">{sub}</text>}
    </g>
  );
}

function DataFlow({ x1, y1, x2, y2, reverse }: { x1: number; y1: number; x2: number; y2: number; reverse?: boolean }) {
  const sx = reverse ? x2 : x1;
  const ex = reverse ? x1 : x2;
  const sy = reverse ? y2 : y1;
  const ey = reverse ? y1 : y2;
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeOpacity="0.3" strokeWidth="0.6" />
      <motion.circle
        r="2" fill="currentColor"
        initial={{ cx: sx, cy: sy, opacity: 0.8 }}
        animate={{ cx: ex, cy: ey, opacity: [0.8, 1, 0.8] }}
        transition={PULSE}
      />
    </g>
  );
}

export function VentureDiagram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 900 560" className={`w-full h-auto text-signal ${className}`} fill="none">
      <defs>
        <pattern id="vd-grid" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M 16 0 L 0 0 0 16" fill="none" stroke="currentColor" strokeOpacity="0.04" strokeWidth="0.5" />
        </pattern>
        <radialGradient id="vd-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f2f2f2" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#f2f2f2" stopOpacity="0" />
        </radialGradient>
        <filter id="vd-glow">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* background */}
      <rect width="900" height="560" fill="url(#vd-grid)" />

      {/* outer technical frame */}
      <rect x="8" y="8" width="884" height="544" stroke="currentColor" strokeOpacity="0.15" strokeWidth="0.5" />
      <rect x="16" y="16" width="868" height="528" stroke="currentColor" strokeOpacity="0.08" strokeWidth="0.5" strokeDasharray="4 8" />

      {/* corner registration marks */}
      {[[16, 16], [884, 16], [884, 544], [16, 544]].map(([x, y], i) => (
        <g key={i}>
          <line x1={x - 6} y1={y} x2={x + 6} y2={y} stroke="currentColor" strokeOpacity="0.5" strokeWidth="0.6" />
          <line x1={x} y1={y - 6} x2={x} y2={y + 6} stroke="currentColor" strokeOpacity="0.5" strokeWidth="0.6" />
        </g>
      ))}

      {/* labels */}
      <text x="28" y="32" className="mono" fontSize="8" fill="currentColor" opacity="0.45">FIG. 02·I — VENTURE ARCHITECTURE</text>
      <text x="872" y="32" className="mono" fontSize="8" fill="currentColor" opacity="0.35" textAnchor="end">REV 1.0 · CLASSIFIED</text>
      <text x="28" y="540" className="mono" fontSize="7" fill="currentColor" opacity="0.3">THE SHRIKS · DEEP TECHNOLOGY VENTURE STUDIO · INDIA</text>

      {/* axis lines */}
      <line x1="450" y1="24" x2="450" y2="536" stroke="currentColor" strokeOpacity="0.06" strokeDasharray="1 6" />
      <line x1="24" y1="280" x2="876" y2="280" stroke="currentColor" strokeOpacity="0.06" strokeDasharray="1 6" />

      {/* === LEFT SECTOR — CLIENT ENGINEERING === */}
      <g>
        <text x="120" y="70" className="mono caps" fontSize="8" fill="currentColor" opacity="0.4">SECTOR A · CLIENT ENGINEERING</text>
        <rect x="50" y="82" width="260" height="32" fill="currentColor" fillOpacity="0.03" stroke="currentColor" strokeOpacity="0.15" strokeWidth="0.5" />
        <text x="60" y="103" className="mono" fontSize="8" fill="currentColor" opacity="0.5">PRODUCTION-GRADE · REMOTE · FUNDED VENTURES</text>

        {/* discipline nodes */}
        {[
          { x: 100, y: 180, l: "SOFTWARE", s: "FULL-STACK" },
          { x: 220, y: 180, l: "AI / ML", s: "AGENTS · EDGE" },
          { x: 100, y: 270, l: "INFRA", s: "DEVOPS · CI/CD" },
          { x: 220, y: 270, l: "SECURITY", s: "PENTEST · HARDEN" },
          { x: 100, y: 360, l: "CHAIN", s: "SMART CONTRACTS" },
          { x: 220, y: 360, l: "CINEMA", s: "AI-DRIVEN VIDEO" },
        ].map((n, i) => (
          <g key={i}>
            <rect x={n.x - 50} y={n.y - 26} width="100" height="52" stroke="currentColor" strokeOpacity="0.4" strokeWidth="0.6" />
            <rect x={n.x - 48} y={n.y - 24} width="96" height="48" stroke="currentColor" strokeOpacity="0.12" strokeWidth="0.5" strokeDasharray="2 4" />
            <text x={n.x} y={n.y - 6} className="caps" fontSize="9.5" fill="currentColor" textAnchor="middle" fontWeight="500">{n.l}</text>
            <text x={n.x} y={n.y + 8} className="mono" fontSize="7" fill="currentColor" opacity="0.45" textAnchor="middle">{n.s}</text>
            {/* connector to centre axis */}
            <line x1={n.x + 50} y1={n.y} x2={340} y2={n.y} stroke="currentColor" strokeOpacity="0.12" strokeDasharray="2 4" />
          </g>
        ))}

        {/* vertical bus line */}
        <line x1="160" y1="130" x2="160" y2="400" stroke="currentColor" strokeOpacity="0.1" strokeWidth="0.5" />
        <motion.circle
          r="1.5" fill="currentColor"
          initial={{ cx: 160, cy: 130, opacity: 0.6 }}
          animate={{ cx: 160, cy: 400, opacity: [0.6, 1, 0.6] }}
          transition={{ ...PULSE, duration: 4 }}
        />
      </g>

      {/* === CENTRE — MOTHERSHIP CORE === */}
      <g>
        <circle cx="450" cy="280" r="90" fill="url(#vd-core)" />

        {/* hex rings */}
        <HexNode cx={450} cy={280} r={74} label="" />
        {Array.from({ length: 6 }, (_, i) => {
          const a = (Math.PI / 3) * i - Math.PI / 2;
          const x = 450 + 74 * Math.cos(a);
          const y = 280 + 74 * Math.sin(a);
          return <circle key={i} cx={x} cy={y} r="2.5" fill="currentColor" opacity="0.4" />;
        })}

        {/* inner hex */}
        <HexNode cx={450} cy={280} r={48} label="" />

        {/* mask glyph */}
        <g transform="translate(450 280) scale(0.7)" filter="url(#vd-glow)">
          <path d="M0 -30 L-20 -20 L-24 0 L-16 24 L0 32 L16 24 L24 0 L20 -20 Z" stroke="currentColor" strokeWidth="1" fill="rgba(242,242,242,0.04)" />
          <line x1="0" y1="-30" x2="0" y2="32" stroke="currentColor" strokeWidth="0.7" />
          <ellipse cx="0" cy="-3" rx="4" ry="3" fill="currentColor" opacity="0.9" />
          {/* cross-hatch detail */}
          <line x1="-12" y1="-10" x2="-6" y2="-16" stroke="currentColor" strokeWidth="0.4" opacity="0.4" />
          <line x1="12" y1="-10" x2="6" y2="-16" stroke="currentColor" strokeWidth="0.4" opacity="0.4" />
          <line x1="-10" y1="8" x2="-16" y2="2" stroke="currentColor" strokeWidth="0.4" opacity="0.4" />
          <line x1="10" y1="8" x2="16" y2="2" stroke="currentColor" strokeWidth="0.4" opacity="0.4" />
        </g>

        {/* orbit ring */}
        <motion.circle
          cx="450" cy="280" r="62" fill="none" stroke="currentColor" strokeOpacity="0.25" strokeWidth="0.5" strokeDasharray="3 6"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "450px 280px" }}
        />

        {/* labels */}
        <text x="450" y="390" className="caps" fontSize="13" fill="currentColor" textAnchor="middle" fontWeight="600" letterSpacing="0.12em">THE SHRIKS</text>
        <text x="450" y="406" className="mono" fontSize="8" fill="currentColor" opacity="0.5" textAnchor="middle">MOTHERSHIP · COMMAND NODE</text>
        <text x="450" y="420" className="mono" fontSize="7" fill="currentColor" opacity="0.35" textAnchor="middle">DEEP TECHNOLOGY VENTURE STUDIO</text>
      </g>

      {/* === DATA FLOW — LEFT TO CENTRE === */}
      <DataFlow x1={310} y1={220} x2={390} y2={260} />
      <DataFlow x1={310} y1={340} x2={390} y2={300} />

      {/* === DATA FLOW — CENTRE TO RIGHT === */}
      <DataFlow x1={510} y1={260} x2={590} y2={220} reverse />
      <DataFlow x1={510} y1={300} x2={590} y2={340} reverse />

      {/* === RIGHT SECTOR — IN-HOUSE PRODUCTS (THE FLEET) === */}
      <g>
        <text x="730" y="70" className="mono caps" fontSize="8" fill="currentColor" opacity="0.4">SECTOR B · IN-HOUSE PRODUCTS</text>
        <rect x="590" y="82" width="260" height="32" fill="currentColor" fillOpacity="0.03" stroke="currentColor" strokeOpacity="0.15" strokeWidth="0.5" />
        <text x="600" y="103" className="mono" fontSize="8" fill="currentColor" opacity="0.5">THE FLEET · PROPRIETARY TECHNOLOGY</text>

        {/* ship nodes */}
        {[
          { x: 700, y: 195, l: "SHIP I", s: "LOKIAI · LIVE", live: true },
          { x: 700, y: 290, l: "SHIP II", s: "CLASSIFIED · PLANNED", live: false },
          { x: 700, y: 385, l: "SHIP III", s: "CLASSIFIED · PLANNED", live: false },
        ].map((n, i) => (
          <g key={i}>
            <HexNode cx={n.x} cy={n.y} r={38} label={n.l} sub={n.s} glow={n.live ? "#2a8a5a" : undefined} />
            {n.live && (
              <motion.circle
                cx={n.x} cy={n.y} r="38" fill="none" stroke="#2a8a5a" strokeWidth="0.8"
                initial={{ opacity: 0.6 }}
                animate={{ opacity: [0.6, 0.15, 0.6] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            )}
            {/* connector */}
            <line x1={n.x + 38} y1={n.y} x2={830} y2={n.y} stroke="currentColor" strokeOpacity={n.live ? 0.3 : 0.12} strokeDasharray="2 4" />
            <circle cx={830} cy={n.y} r="2" fill={n.live ? "#2a8a5a" : "currentColor"} opacity={n.live ? 0.9 : 0.3} />
            <text x={840} y={n.y + 3} className="mono" fontSize="7" fill="currentColor" opacity={n.live ? 0.6 : 0.3}>{n.live ? "ACTIVE" : "QUEUED"}</text>
          </g>
        ))}

        {/* vertical bus */}
        <line x1="770" y1="130" x2="770" y2="430" stroke="currentColor" strokeOpacity="0.08" strokeWidth="0.5" />
      </g>

      {/* === CHANNELS BAR (bottom) === */}
      <g>
        <line x1="50" y1="470" x2="850" y2="470" stroke="currentColor" strokeOpacity="0.2" strokeWidth="0.5" />
        <text x="50" y="490" className="mono caps" fontSize="7.5" fill="currentColor" opacity="0.4">BROADCAST CHANNELS</text>
        {[
          { x: 180, l: "CH·01 FOUNDER" },
          { x: 370, l: "CH·02 THE SHRIKS" },
          { x: 560, l: "CH·03 LOKIAI" },
          { x: 740, l: "CH·04 TIMES" },
        ].map((c) => (
          <g key={c.l}>
            <rect x={c.x - 65} y={496} width="130" height="22" stroke="currentColor" strokeOpacity="0.25" strokeWidth="0.5" />
            <text x={c.x} y={510} className="mono" fontSize="7.5" fill="currentColor" opacity="0.5" textAnchor="middle">{c.l}</text>
            <line x1={c.x} y1={470} x2={c.x} y2={496} stroke="currentColor" strokeOpacity="0.15" strokeDasharray="2 3" />
          </g>
        ))}
      </g>

      {/* bottom annotation */}
      <text x="450" y="524" className="mono" fontSize="7.5" fill="currentColor" opacity="0.3" textAnchor="middle">
        CLIENT REVENUE FUNDS PRODUCT R&amp;D · PRODUCT WORK RAISES THE ENGINEERING CEILING · BOTH HALVES FEED EACH OTHER
      </text>
    </svg>
  );
}
