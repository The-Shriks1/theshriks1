"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { Emblem } from "@/components/Emblem";
import { ScrollCue } from "@/components/ScrollCue";
import { SectionShell } from "./SectionShell";

export function ArrivalSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const emblemY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const fade = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.6, 0]);

  return (
    <SectionShell id="arrival" className="overflow-hidden">
      <div ref={ref as unknown as React.RefObject<HTMLDivElement>} className="absolute inset-0">
        <motion.video
          ref={videoRef}
          src="/videos/Timeline-1.mp4"
          autoPlay muted loop playsInline preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: "grayscale(1) contrast(1.08) brightness(0.72)",
            scale: videoScale,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/75 via-obsidian/35 to-obsidian" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/30 via-transparent to-obsidian/30" />

        <motion.div
          style={{ y: emblemY, opacity: fade }}
          className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6 text-center pointer-events-none"
        >
          <Emblem size={200} variant="full" draw />
        </motion.div>


      </div>
    </SectionShell>
  );
}
