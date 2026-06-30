"use client";

import { motion } from "framer-motion";

export function BigNumeral({ n, label }: { n: string; label?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
      className="relative inline-block leading-none"
    >
      <span
        aria-hidden
        className="block caps font-medium text-signal/95"
        style={{ fontSize: "clamp(96px, 14vw, 220px)", letterSpacing: "-0.04em" }}
      >
        {n}
      </span>
      {label && (
        <span className="block mono caps text-[10px] text-signal/40 mt-2 tracking-[0.18em]">{label}</span>
      )}
    </motion.div>
  );
}
