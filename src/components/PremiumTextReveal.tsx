"use client";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

export function PremiumTextReveal({ 
  text, 
  delay = 0, 
  className = "" 
}: { 
  text: string; 
  delay?: number; 
  className?: string 
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay,
      },
    },
  };

  const child: Variants = {
    hidden: {
      y: "100%",
      scaleY: 1.5,
      opacity: 0,
      filter: "blur(10px)",
    },
    visible: {
      y: "0%",
      scaleY: 1,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        type: "tween",
        ease: [0.16, 1, 0.3, 1],
        duration: 1.4,
      },
    },
  };

  return (
    <div ref={ref} className={`${className}`}>
      <motion.div
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="flex flex-wrap"
      >
        {words.map((word, i) => (
          <span key={i} className="overflow-hidden inline-flex mr-[0.25em] pb-[0.1em] pt-[0.1em]">
            <motion.span variants={child} className="inline-block origin-bottom">
              {word}
            </motion.span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
