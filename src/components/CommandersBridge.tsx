"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function CommandersBridge() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [0.35, 0.65, 0.95]);

  return (
    <section ref={ref} className="relative w-full h-screen overflow-hidden bg-obsidian">
      <motion.div style={{ scale, y }} className="absolute inset-0">
        <Image
          src="/brand/commanders.jpg"
          alt="Two Commanders, masked, seated in the bridge of the mothership."
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", filter: "grayscale(1) contrast(1.06) brightness(0.92)" }}
        />
      </motion.div>

      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-obsidian/30 via-transparent to-obsidian pointer-events-none"
      />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-obsidian to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute bottom-28 left-0 right-0 px-8 md:px-14 text-center"
      >
        <h1 className="caps text-[32px] sm:text-5xl md:text-7xl tracking-tight drop-shadow-[0_2px_24px_rgba(0,0,0,0.5)]">
          COMMANDERS&apos; BRIDGE
        </h1>
        <div className="mono caps text-[10px] text-signal/70 mt-4">LAUKIK · SHRUSTI</div>
      </motion.div>
    </section>
  );
}
