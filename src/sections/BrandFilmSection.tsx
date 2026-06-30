"use client";

import { SectionShell } from "./SectionShell";
import { SectionGutter } from "@/components/Blueprint";
import { SiteFooter } from "@/components/SiteFooter";

export function BrandFilmSection() {
  return (
    <SectionShell id="the-shriks" minH="min-h-0" className="bg-obsidian pt-20">
      <SectionGutter index="07" codename="FILM" />
      <SiteFooter />
    </SectionShell>
  );
}
