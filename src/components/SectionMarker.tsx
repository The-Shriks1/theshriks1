"use client";

import { useEffect } from "react";

/**
 * Force the HUD to a specific section id while a non-scroll route is mounted.
 */
export function SectionMarker({ id }: { id: string }) {
  useEffect(() => {
    window.dispatchEvent(new CustomEvent("section:active", { detail: id }));
  }, [id]);
  return null;
}
