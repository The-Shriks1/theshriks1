"use client";

import { motion } from "framer-motion";

export function OriginSeal({ size = 140 }: { size?: number }) {
  return (
    <motion.svg
      viewBox="0 0 140 140"
      width={size}
      height={size}
      className="text-signal shrink-0"
      fill="none"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 0.8 }}
    >
      <circle cx="70" cy="70" r="62" stroke="currentColor" strokeOpacity="0.45" strokeWidth="0.8" />
      <circle cx="70" cy="70" r="52" stroke="currentColor" strokeOpacity="0.25" strokeWidth="0.6" strokeDasharray="1.5 4" />
      <motion.circle
        cx="70" cy="70" r="58" stroke="currentColor" strokeOpacity="0.7" strokeWidth="0.6" strokeDasharray="2 6"
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "70px 70px" }}
      />
      <text x="70" y="63" textAnchor="middle" className="caps" fontSize="22" fontWeight="600" fill="currentColor">22</text>
      <text x="70" y="84" textAnchor="middle" className="mono caps" fontSize="9" fill="currentColor" opacity="0.65" letterSpacing="0.15em">
        FEBRUARY
      </text>
    </motion.svg>
  );
}
