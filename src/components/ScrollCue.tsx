"use client";

import { motion } from "framer-motion";

export function ScrollCue({ label = "SCROLL" }: { label?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.6 }}
      className="mono caps text-[10px] text-signal/60 flex flex-col items-center gap-3 select-none"
    >
      <span>{label}</span>
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        style={{ transformOrigin: "top" }}
        className="w-px h-10 bg-signal/40"
      />
    </motion.div>
  );
}
