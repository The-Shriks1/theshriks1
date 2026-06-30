"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ElementType } from "react";

/** Word-by-word materialize reveal — for headlines only, not body copy. */
export function TextReveal({
  text,
  className = "",
  delay = 0,
  as = "span",
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });
  const words = text.split(" ");
  const Tag = as as "span";

  return (
    <Tag ref={ref as React.RefObject<HTMLSpanElement>} className={className} style={{ perspective: "600px" }}>
      {words.map((w, i) => (
        <span
          key={i}
          style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top", paddingBottom: "0.06em" }}
        >
          <motion.span
            style={{ display: "inline-block", transformOrigin: "50% 100%" }}
            initial={{ y: "115%", rotateX: 55, filter: "blur(8px)", opacity: 0 }}
            animate={inView ? { y: "0%", rotateX: 0, filter: "blur(0px)", opacity: 1 } : {}}
            transition={{ duration: 0.85, delay: delay + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
