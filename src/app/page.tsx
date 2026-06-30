import { ArrivalSection } from "@/sections/ArrivalSection";
import { TypeScape } from "@/sections/TypeScape";
import { BriefingSection } from "@/sections/BriefingSection";
import { FleetSection } from "@/sections/FleetSection";
import { CommandersSection } from "@/sections/CommandersSection";
import { BroadcastSection } from "@/sections/BroadcastSection";
import { TransmitSection } from "@/sections/TransmitSection";
import { BrandFilmSection } from "@/sections/BrandFilmSection";

export default function HomePage() {
  return (
    <>
      <ArrivalSection />
      <TypeScape />
      <BriefingSection />
      <FleetSection />
      <CommandersSection />
      <BroadcastSection />
      <TransmitSection />
      <BrandFilmSection />
    </>
  );
}
