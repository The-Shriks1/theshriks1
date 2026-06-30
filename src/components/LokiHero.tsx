"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { LokiWordmark } from "./LokiWordmark";

export function LokiHero() {
  const v = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    v.current?.play().catch(() => {});
  }, []);
  return (
    <section className="relative w-full h-[92vh] overflow-hidden">
      <video
        ref={v}
        src="/videos/lokiai-arrival.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "grayscale(1) contrast(1.05) brightness(0.82)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-obsidian/25 to-obsidian" />
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/35 via-transparent to-obsidian/35" />

      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="absolute top-24 left-0 right-0 px-8 md:px-14 flex items-baseline justify-between mono caps text-[10px] text-signal/60"
      >
        <span>SHIP I · LOKIAI</span>
        <span className="hidden md:inline">DESCENT VECTOR · METROPOLITAN AIRSPACE</span>
        <span>FIRST ARRIVAL · 2026</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-24 left-0 right-0 px-8 md:px-14 flex flex-col items-center gap-8"
      >
        <LokiWordmark size={320} animated />
        <div className="mono caps text-[10px] text-signal/60 max-w-[40ch] text-center leading-relaxed">
          THE FIRST VESSEL OF THE FLEET — A HARDWARE-PLUS-ML PLATFORM FOR EDGE AI ORCHESTRATION
        </div>
      </motion.div>
    </section>
  );
}
