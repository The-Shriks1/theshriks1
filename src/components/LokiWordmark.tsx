"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

/**
 * LokiAI rune wordmark. Source: /public/brand/lokiai-wordmark.png
 */
export function LokiWordmark({
  size = 280,
  animated = false,
}: {
  size?: number;
  animated?: boolean;
}) {
  const reduce = useReducedMotion();
  const ratio = 909 / 405;
  const h = size / ratio;
  return (
    <motion.span
      initial={reduce || !animated ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
      style={{ display: "inline-block", position: "relative", width: size, height: h }}
      aria-label="LokiAI wordmark"
    >
      <Image
        src="/brand/lokiai-wordmark-new.png"
        alt=""
        fill
        sizes={`${size}px`}
        style={{ objectFit: "contain" }}
        priority
      />
    </motion.span>
  );
}
