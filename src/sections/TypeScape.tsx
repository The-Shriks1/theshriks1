"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionShell } from "./SectionShell";

/**
 * Kinetic typographic intermission. Massive THE SHRIKS letters drift apart on scroll.
 * No imagery — type as architecture.
 */
export function TypeScape() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const xLeft = useTransform(scrollYProgress, [0, 1], ["-2vw", "-22vw"]);
  const xRight = useTransform(scrollYProgress, [0, 1], ["2vw", "22vw"]);
  const opacity = useTransform(scrollYProgress, [0.0, 0.2, 0.8, 1], [0, 1, 1, 0.4]);
  const blur = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [4, 0, 0, 6]);
  const rule = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <SectionShell id="typescape" minH="min-h-[140vh]" className="bg-obsidian">
      <div ref={ref as unknown as React.RefObject<HTMLDivElement>} className="absolute inset-0">
        <motion.div
          style={{ opacity }}
          className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 select-none">
            <motion.h2
              style={{ x: xLeft, filter: useTransform(blur, (b) => `blur(${b}px)`) }}
              className="caps font-medium leading-[0.85] tracking-tighter text-signal whitespace-nowrap"
              suppressHydrationWarning
            >
              <span style={{ fontSize: "clamp(72px, 18vw, 280px)" }}>THE</span>
            </motion.h2>
            <motion.h2
              style={{ x: xRight, filter: useTransform(blur, (b) => `blur(${b}px)`) }}
              className="caps font-medium leading-[0.85] tracking-tighter text-signal whitespace-nowrap"
              suppressHydrationWarning
            >
              <span style={{ fontSize: "clamp(72px, 18vw, 280px)" }}>SHRIKS</span>
            </motion.h2>
          </div>

          <div className="absolute bottom-24 inset-x-8 md:inset-x-14">
            <div className="relative h-px bg-signal/15 overflow-hidden">
              <motion.div style={{ width: rule }} className="absolute left-0 top-0 h-px bg-signal" />
            </div>
          </div>
        </motion.div>
      </div>
    </SectionShell>
  );
}
