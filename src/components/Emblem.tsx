"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type Props = {
  size?: number;
  draw?: boolean;
  className?: string;
  showWordmark?: boolean;
  variant?: "mark-only" | "full";
};

/**
 * Real THE SHRIKS mask emblem (transparent), two dedicated crops:
 * variant="mark-only" — just the mask glyph (Nav, small placements).
 * variant="full" — mask + wordmark composition.
 */
export function Emblem({
  size = 56,
  draw = false,
  className = "",
  showWordmark = false,
  variant,
}: Props) {
  const reduce = useReducedMotion();
  const src = "/brand/shriks-mask-new.png";
  const ratio = 389 / 475;
  const h = size / ratio;

  return (
    <motion.span
      className={className}
      initial={draw ? { opacity: 0, scale: 0.96 } : false}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: reduce ? 0 : 1.1, ease: [0.65, 0, 0.35, 1] }}
      style={{
        display: "inline-block",
        position: "relative",
        width: size,
        height: h,
        overflow: "hidden",
      }}
      aria-label="THE SHRIKS emblem"
    >
      <Image
        src={src}
        alt=""
        fill
        sizes={`${size}px`}
        priority={size > 80}
        style={{ objectFit: "contain", objectPosition: "center" }}
      />
    </motion.span>
  );
}
