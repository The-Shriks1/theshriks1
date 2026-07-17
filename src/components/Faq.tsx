"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQS } from "@/lib/content";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="border-t border-rule">
      {FAQS.map((f, i) => {
        const isOpen = open === i;
        return (
          <button
            key={f.q}
            onClick={() => setOpen(isOpen ? null : i)}
            onMouseEnter={() => setOpen(i)}
            className="w-full text-left py-7 border-b border-rule group"
            aria-expanded={isOpen}
          >
            <div className="flex items-baseline gap-6">
              <span className="mono caps text-[10px] text-signal/40 tabular-nums shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="caps text-xl md:text-2xl text-signal flex-1">{f.q}</span>
              <span className="mono caps text-[11px] text-signal/50 shrink-0">{isOpen ? "−" : "+"}</span>
            </div>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
                  style={{ overflow: "hidden" }}
                >
                  <p className="pt-5 pl-[3.5rem] max-w-[60ch] text-signal/70 leading-relaxed">
                    {f.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        );
      })}
    </div>
  );
}
