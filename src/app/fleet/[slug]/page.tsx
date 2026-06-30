import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { FLEET } from "@/lib/content";
import { SectionMarker } from "@/components/SectionMarker";
import { SectionGutter, GridShell } from "@/components/Blueprint";

export function generateStaticParams() {
  return FLEET.filter((s) => s.slug !== "lokiai").map((s) => ({ slug: s.slug }));
}

export default async function ShipPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug === "lokiai") redirect("/fleet/lokiai");
  const ship = FLEET.find((s) => s.slug === slug);
  if (!ship) notFound();

  return (
    <>
      <SectionMarker id="ship-classified" />
      <section className="relative bg-obsidian pt-32 md:pt-40 pb-48 min-h-screen">
        <SectionGutter index={`SHIP·${ship.id}`} codename={ship.codename} />
        <GridShell>
          <div className="mb-16 flex items-baseline justify-between mono caps text-[10px] text-signal/45">
            <Link href="/#fleet" className="hover:text-signal transition-colors">← BACK · THE FLEET</Link>
            <span>SHIP {ship.id} OF III</span>
          </div>

          <div className="grid grid-cols-12 gap-x-8 gap-y-10">
            <div className="col-span-12 md:col-span-3 mono caps text-[10px] text-signal/50">
              <div className="text-signal/45">SHIP {ship.id}</div>
              <div className="mt-1 text-signal">{ship.codename}</div>
              <div className="mt-1 text-signal/35">{ship.status}</div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h1 className="caps text-[44px] md:text-[96px] leading-[0.95] tracking-tight font-medium max-w-[16ch]">
                {ship.name}
              </h1>
              <p className="mt-10 caps text-[18px] md:text-[24px] text-signal/70 max-w-[30ch]">{ship.tagline}</p>
              <p className="mt-8 max-w-[58ch] text-signal/60 leading-relaxed text-[16px]">{ship.summary}</p>
            </div>
          </div>

          {/* Classified panel */}
          <div className="mt-24 border-t border-rule pt-16">
            <div className="grid grid-cols-12 gap-x-8 gap-y-12 items-center">
              <div className="col-span-12 md:col-span-7">
                <div className="mono caps text-[10px] text-signal/40 mb-4">TRANSMISSION STATUS</div>
                <h2 className="caps text-[36px] md:text-[56px] leading-[1] tracking-tight max-w-[22ch]">
                  Not yet arrived. Details under seal.
                </h2>
                <p className="mt-8 max-w-[54ch] text-signal/60 leading-relaxed text-[15px]">
                  Every vessel in the fleet has its own arrival sequence. When Ship {ship.id} approaches,
                  unusual activity will be observed; the hull will be revealed; the product will go live.
                  Until then, the hangar stays sealed.
                </p>
              </div>
              <div className="col-span-12 md:col-span-5">
                <ClassifiedDiagram />
              </div>
            </div>
          </div>

          <div className="mt-24 flex items-baseline justify-between mono caps text-[10px] text-signal/45">
            <Link href="/#fleet" className="hover:text-signal transition-colors">← RETURN TO FLEET</Link>
            <Link href="/#transmit" className="hover:text-signal transition-colors">OPEN CHANNEL →</Link>
          </div>
        </GridShell>
      </section>
    </>
  );
}

function ClassifiedDiagram() {
  return (
    <div className="relative aspect-square w-full max-w-[420px] mx-auto">
      <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full text-signal/35" fill="none" stroke="currentColor">
        {/* grid */}
        {[...Array(11)].map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 20} x2="200" y2={i * 20} strokeWidth="0.3" opacity="0.5" />
        ))}
        {[...Array(11)].map((_, i) => (
          <line key={`v${i}`} y1="0" x1={i * 20} y2="200" x2={i * 20} strokeWidth="0.3" opacity="0.5" />
        ))}
        {/* sealed lozenge */}
        <polygon points="100,30 165,100 100,170 35,100" strokeWidth="0.8" stroke="currentColor" fill="rgba(242,242,242,0.02)" />
        <polygon points="100,55 145,100 100,145 55,100" strokeWidth="0.5" />
        <line x1="40" y1="100" x2="160" y2="100" strokeWidth="0.4" strokeDasharray="2 2" />
        <line x1="100" y1="30" x2="100" y2="170" strokeWidth="0.4" strokeDasharray="2 2" />
        <circle cx="100" cy="100" r="3" fill="currentColor" />
        <text x="106" y="98" fontSize="6" fill="currentColor" className="mono">CLASSIFIED</text>
        <text x="106" y="106" fontSize="5" fill="currentColor" opacity="0.6" className="mono">CENTERLINE X=0</text>
      </svg>
    </div>
  );
}
