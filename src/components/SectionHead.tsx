"use client";

import { motion } from "framer-motion";

export function SectionHead({
  index,
  title,
  kicker,
}: {
  index: string;
  title: string;
  kicker?: string;
}) {
  return (
    <div className="flex flex-col gap-4 py-12 border-t border-rule">
      <div className="flex items-baseline justify-between gap-6 mono caps text-[10px] text-signal/50">
        <span>SECTION {index}</span>
        {kicker && <span>{kicker}</span>}
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
        className="font-sans caps text-4xl md:text-6xl leading-[1.05] tracking-tight"
      >
        {title}
      </motion.h2>
    </div>
  );
}
