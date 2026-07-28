import type { Metadata } from "next";
import { buildMetadata, PAGE_METADATA } from "@/lib/metadata";
import { ArrivalSection } from "@/sections/ArrivalSection";
import { TypeScape } from "@/sections/TypeScape";
import { BriefingSection } from "@/sections/BriefingSection";
import { FleetSection } from "@/sections/FleetSection";
import { CommandersSection } from "@/sections/CommandersSection";
import { BroadcastSection } from "@/sections/BroadcastSection";
import { TransmitSection } from "@/sections/TransmitSection";
import { BrandFilmSection } from "@/sections/BrandFilmSection";
import { HomepageStructuredData } from "@/components/StructuredData";

export const metadata: Metadata = buildMetadata(PAGE_METADATA.home);

export default function HomePage() {
  return (
    <>
      <HomepageStructuredData />
      <main>
        <ArrivalSection />
        <TypeScape />
        <BriefingSection />
        <FleetSection />
        <CommandersSection />
        <BroadcastSection />
        <TransmitSection />
        <BrandFilmSection />
      </main>
    </>
  );
}
