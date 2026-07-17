"use client";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

export function CyberTextReveal({ 
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
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        controls.start("visible");
      }, delay * 1000);
    }
  }, [inView, controls, delay]);

  // Jagged diagonal slice
  const topClip = "polygon(0 0, 100% 0, 100% 55%, 0 35%)";
  const bottomClip = "polygon(0 35%, 100% 55%, 100% 100%, 0 100%)";

  return (
    <div ref={ref} className={`relative whitespace-nowrap ${className}`} style={{ display: "inline-block" }}>
      {/* Invisible placeholder to reserve layout space */}
      <span style={{ opacity: 0 }}>{text}</span>

      {/* Top half sliding down and right */}
      <motion.span
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { x: "-8%", y: "-30%", opacity: 0, rotate: -2, filter: "blur(12px)" },
          visible: { 
            x: "0%", y: "0%", opacity: 1, rotate: 0, filter: "blur(0px)",
            transition: { type: "spring", damping: 14, stiffness: 180, duration: 0.8 }
          }
        }}
        className="absolute inset-0 top-0 left-0 text-inherit"
        style={{ clipPath: topClip, display: "inline-block" }}
      >
        {text}
      </motion.span>

      {/* Bottom half sliding up and left */}
      <motion.span
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { x: "8%", y: "30%", opacity: 0, rotate: 2, filter: "blur(12px)" },
          visible: { 
            x: "0%", y: "0%", opacity: 1, rotate: 0, filter: "blur(0px)",
            transition: { type: "spring", damping: 14, stiffness: 180, duration: 0.8 }
          }
        }}
        className="absolute inset-0 top-0 left-0 text-inherit"
        style={{ clipPath: bottomClip, display: "inline-block" }}
      >
        {text}
      </motion.span>

      {/* Impact Flash (Chromatic Aberration - Red) */}
      <motion.span
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, x: "-2%", color: "#ff0055" },
          visible: { 
            opacity: [0, 0.8, 1, 0], 
            x: ["-2%", "2%", "-1%", "0%"],
            transition: { duration: 0.4, delay: 0.15, times: [0, 0.1, 0.2, 1] }
          }
        }}
        className="absolute inset-0 top-0 left-0 mix-blend-screen pointer-events-none"
        style={{ display: "inline-block" }}
      >
        {text}
      </motion.span>

      {/* Impact Flash (Chromatic Aberration - Cyan) */}
      <motion.span
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, x: "2%", color: "#00eeff" },
          visible: { 
            opacity: [0, 0.8, 1, 0], 
            x: ["2%", "-2%", "1%", "0%"],
            transition: { duration: 0.4, delay: 0.15, times: [0, 0.1, 0.2, 1] }
          }
        }}
        className="absolute inset-0 top-0 left-0 mix-blend-screen pointer-events-none"
        style={{ display: "inline-block" }}
      >
        {text}
      </motion.span>

      {/* White Core Flash on Impact */}
      <motion.span
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, filter: "blur(10px) brightness(2)" },
          visible: { 
            opacity: [0, 1, 0], 
            filter: ["blur(10px) brightness(2)", "blur(0px) brightness(3)", "blur(0px) brightness(1)"],
            transition: { duration: 0.3, delay: 0.2, times: [0, 0.1, 1] }
          }
        }}
        className="absolute inset-0 top-0 left-0 text-white pointer-events-none"
        style={{ display: "inline-block" }}
      >
        {text}
      </motion.span>
    </div>
  );
}
