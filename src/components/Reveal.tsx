"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 24,
  as: As = "div",
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
}) {
  const reduce = useReducedMotion();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Comp = (motion as any)[As] || motion.div;
  return (
    <Comp
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: reduce ? 0 : 0.8, delay, ease: [0.65, 0, 0.35, 1] }}
      className={className}
    >
      {children}
    </Comp>
  );
}
