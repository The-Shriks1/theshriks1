"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function GodModeText({ text, className = "" }: { text: string; className?: string }) {
  const chars = text.split("");

  return (
    <div 
      className={`flex flex-wrap ${className}`} 
      style={{ 
        perspective: "1200px",
        transformStyle: "preserve-3d" 
      }}
    >
      {chars.map((char, i) => {
        if (char === " ") return <span key={i} className="w-[0.3em] inline-block" />;
        return <GodChar key={i} char={char} index={i} total={chars.length} />;
      })}
    </div>
  );
}

function GodChar({ char, index, total }: { char: string; index: number; total: number }) {
  // Ultra-aggressive startup animation:
  // Characters start infinitely stretched and shattered in 3D space,
  // then violently snap into reality.
  
  // Create unique, non-repeating chaos for each letter
  const randomDelay = Math.random() * 0.5;
  const randomDuration = 0.1 + Math.random() * 0.3;
  const glitchOffset = Math.random() * 100;
  
  return (
    <motion.div
      className="relative inline-block cursor-crosshair group"
      initial={{ 
        opacity: 0, 
        scaleY: 100, 
        scaleX: 0.01, 
        z: -1000,
        rotateX: 180,
        rotateY: 90,
        filter: "blur(20px) hue-rotate(180deg)",
      }}
      whileInView={{
        opacity: 1,
        scaleY: 1,
        scaleX: 1,
        z: 0,
        rotateX: 0,
        rotateY: 0,
        filter: "blur(0px) hue-rotate(0deg)",
        transition: {
          type: "spring",
          damping: 3 + Math.random() * 5, // extremely bouncy
          stiffness: 100 + Math.random() * 300, // extremely violent
          delay: (index * 0.03) + Math.random() * 0.1,
          mass: 0.5 + Math.random() * 2
        }
      }}
      viewport={{ once: true, margin: "-10%" }}
      whileHover={{
        scaleY: [1, 3, -2, 4, 1],
        scaleX: [1, 0.2, 3, 0.5, 1],
        rotateZ: [0, 15, -25, 45, 0],
        filter: ["blur(0px)", "blur(10px) brightness(3)", "blur(2px) brightness(0.5)", "blur(20px) brightness(4)", "blur(0px)"],
        color: ["#fff", "#ff0055", "#00ffcc", "#000", "#fff"],
        transition: { duration: 0.3, ease: "anticipate" },
        zIndex: 50,
      }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Cyan Ghost - Erratic Orbital Phase */}
      <motion.span
        className="absolute inset-0 text-[#00ffcc] mix-blend-screen pointer-events-none z-10"
        animate={{
          x: [0, -3, 5, -6, 0, 4, -2, 0],
          y: [0, 4, -3, 5, -2, -4, 3, 0],
          opacity: [0, 0.8, 0, 1, 0, 0.5, 0],
          skewX: [0, 20, -25, 30, -10, 0],
          scale: [1, 1.1, 0.9, 1.2, 1]
        }}
        transition={{
          repeat: Infinity,
          duration: randomDuration * 1.5,
          repeatType: "mirror",
          ease: "circInOut",
          delay: glitchOffset
        }}
      >
        {char}
      </motion.span>

      {/* Magenta Ghost - Erratic Orbital Phase */}
      <motion.span
        className="absolute inset-0 text-[#ff0055] mix-blend-screen pointer-events-none z-10"
        animate={{
          x: [0, 5, -4, 3, -7, 2, 0],
          y: [0, -3, 6, -2, 4, -5, 0],
          opacity: [0, 1, 0, 0.9, 0, 0.7, 0],
          skewY: [0, -20, 25, -30, 10, 0],
          scale: [1, 0.9, 1.1, 0.8, 1]
        }}
        transition={{
          repeat: Infinity,
          duration: randomDuration * 1.2,
          repeatType: "mirror",
          ease: "backInOut",
          delay: glitchOffset * 1.5
        }}
      >
        {char}
      </motion.span>

      {/* Core Letter */}
      <motion.span 
        className="relative z-20 text-white mix-blend-difference inline-block"
        animate={{
          y: [0, -2, 1, -1, 0],
          x: [0, 1, -1, 2, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 3 + Math.random() * 2,
          ease: "easeInOut"
        }}
      >
        {char}
      </motion.span>
    </motion.div>
  );
}
