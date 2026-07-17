"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function BlueprintText({ 
  text, 
  delay = 0, 
  className = "",
  fillClassName = "text-signal",
  outlineOpacity = "0.3"
}: { 
  text: string; 
  delay?: number; 
  className?: string;
  fillClassName?: string;
  outlineOpacity?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  const words = text.split(" ");

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay }
    }
  };

  const wordVariant = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div ref={ref} className={`flex flex-wrap ${className}`}>
      <motion.div
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="flex flex-wrap w-full"
      >
        {words.map((word, i) => (
          <motion.span key={i} variants={wordVariant} className="relative inline-flex mr-[0.25em] pb-[0.1em]">
            
            {/* Outline (Blueprint layer) */}
            <span 
              className="absolute inset-0"
              style={{
                WebkitTextStroke: `1px rgba(242, 242, 242, ${outlineOpacity})`, // signal color equivalent
                WebkitTextFillColor: "transparent",
              }}
            >
              {word}
            </span>

            {/* Solid Fill Layer (Reveals from left to right) */}
            <motion.span
              className={`relative ${fillClassName}`}
              variants={{
                hidden: { clipPath: "inset(0 100% 0 0)" },
                visible: { 
                  clipPath: "inset(0 0% 0 0)",
                  transition: { 
                    duration: 1.4, 
                    ease: [0.76, 0, 0.24, 1], 
                    delay: delay + 0.4 + (i * 0.1) 
                  }
                }
              }}
            >
              {word}
            </motion.span>
            
            {/* Scanner Line Effect */}
            <motion.span
              className="absolute top-0 bottom-0 w-1 md:w-2 bg-signal/60 mix-blend-overlay shadow-[0_0_8px_rgba(255,255,255,0.8)]"
              variants={{
                hidden: { left: "0%", opacity: 0 },
                visible: { 
                  left: ["0%", "100%", "100%"],
                  opacity: [0, 1, 1, 0],
                  transition: { 
                    duration: 1.4, 
                    ease: [0.76, 0, 0.24, 1], 
                    delay: delay + 0.4 + (i * 0.1) 
                  }
                }
              }}
            />
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
