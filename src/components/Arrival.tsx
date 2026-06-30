"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Emblem } from "./Emblem";
import { ScrollCue } from "./ScrollCue";

export function Arrival() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Mothership video */}
      <video
        ref={videoRef}
        src="/videos/mothership.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "grayscale(1) contrast(1.08) brightness(0.85)" }}
      />

      {/* dark gradient frame */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/70 via-obsidian/30 to-obsidian" />
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/40 via-transparent to-obsidian/40" />

      {/* status row top */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute top-24 left-0 right-0 px-8 md:px-14 flex items-baseline justify-between mono caps text-[10px] text-signal/60"
      >
        <span>TRANSMISSION 001 · ARRIVAL</span>
        <span className="hidden md:inline">FLEET STATUS: MOTHERSHIP NOMINAL · TWO COMMANDERS SEATED</span>
        <span>FIRST CONTACT</span>
      </motion.div>

      {/* center mark + name */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 z-10">
        <Emblem size={104} draw />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 1.2 }}
          className="flex flex-col items-center gap-3"
        >
          <h1 className="caps text-5xl md:text-7xl font-medium tracking-tight">THE SHRIKS</h1>
          <div className="mono caps text-[10px] text-signal/60 max-w-[28ch] text-center leading-relaxed">
            An independent technical studio · Founded 22 February · Two Commanders, one fleet
          </div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10">
        <ScrollCue label="ENTER BRIEFING" />
      </div>

      {/* corner brackets */}
      <Brackets />
    </section>
  );
}

function Brackets() {
  const armLen = 28;
  return (
    <svg
      className="absolute inset-6 pointer-events-none text-signal/30"
      width="100%"
      height="100%"
      preserveAspectRatio="none"
    >
      {/* TL */}
      <path d={`M0 ${armLen} L0 0 L${armLen} 0`} stroke="currentColor" strokeWidth="1" fill="none" />
      {/* TR */}
      <path d={`M100% 0 m-${armLen} 0 L100% 0 L100% ${armLen}`} stroke="currentColor" strokeWidth="1" fill="none" transform="translate(0,0)" />
    </svg>
  );
}
