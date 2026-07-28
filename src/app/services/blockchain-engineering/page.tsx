import type { Metadata } from "next";
import { buildMetadata, PAGE_METADATA, SITE_URL } from "@/lib/metadata";
import { ServiceStructuredData } from "@/components/StructuredData";
import Link from "next/link";

export const metadata: Metadata = buildMetadata(PAGE_METADATA["services/blockchain-engineering"]);

export default function BlockchainEngineeringPage() {
  return (
    <>
      <ServiceStructuredData
        name="Blockchain Engineering — THE SHRIKS"
        description="Smart contract development, decentralised protocol architecture, and on-chain systems engineering."
        url={`${SITE_URL}/services/blockchain-engineering`}
        breadcrumbs={[
          { name: "THE SHRIKS", item: SITE_URL },
          { name: "Services", item: `${SITE_URL}/services` },
          { name: "Blockchain Engineering", item: `${SITE_URL}/services/blockchain-engineering` },
        ]}
      />
      <main className="bg-obsidian min-h-[100svh] pt-32 md:pt-40 pb-48">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14">

          <nav aria-label="Breadcrumb" className="mb-16 flex items-baseline gap-4 mono caps text-[10px] text-signal/45">
            <Link href="/" className="hover:text-signal transition-colors">THE SHRIKS</Link>
            <span>→</span>
            <Link href="/services" className="hover:text-signal transition-colors">SERVICES</Link>
            <span>→</span>
            <span className="text-signal">BLOCKCHAIN</span>
          </nav>

          <div className="mb-20 border-b border-rule pb-16">
            <div className="mono caps text-[10px] text-signal/40 tracking-[0.3em] mb-6">SERVICE · IV</div>
            <h1 className="caps text-[48px] md:text-[96px] leading-[0.9] tracking-tight font-medium max-w-[20ch]">
              Blockchain engineering.
            </h1>
            <p className="mt-8 text-signal/70 text-[18px] md:text-[22px] leading-[1.5] max-w-[60ch] font-light">
              Smart contract development, decentralised protocol architecture, and on-chain systems engineering. Delivered to the same production standard as all THE SHRIKS engineering.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 mb-24">
            <div>
              <h2 className="caps text-[24px] text-signal tracking-tight font-medium mb-6">What we build</h2>
              <ul className="flex flex-col gap-4">
                {[
                  "Smart contract development and audit preparation",
                  "Decentralised protocol architecture and design",
                  "On-chain systems integration with off-chain backends",
                  "Token architecture and contract lifecycle management",
                  "Blockchain infrastructure and node configuration",
                  "Web3 integration for full-stack applications",
                  "Contract documentation and security considerations",
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 text-signal/70 text-[15px] leading-relaxed">
                    <span className="mono text-signal/30 text-[10px] mt-1 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="caps text-[24px] text-signal tracking-tight font-medium mb-6">Our standard</h2>
              <div className="flex flex-col gap-6 text-signal/70 text-[15px] leading-relaxed">
                <p>Blockchain engineering at THE SHRIKS is governed by the same precision standard as all other disciplines. Architecture is documented before implementation. Security considerations are first-class deliverables.</p>
                <p>We work exclusively in domains where sustained depth compounds into a measurable advantage. Engagements are scoped accordingly.</p>
              </div>
            </div>
          </div>

          <div className="border-t border-rule pt-12 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
            <div className="flex gap-6 flex-wrap">
              <Link href="/services/cloud-platform-engineering" className="mono caps text-[11px] text-signal/50 tracking-[0.16em] hover:text-signal transition-colors">← CLOUD PLATFORM</Link>
              <Link href="/services" className="mono caps text-[11px] text-signal/50 tracking-[0.16em] hover:text-signal transition-colors">ALL SERVICES →</Link>
            </div>
            <Link href="/contact" className="mono caps text-[11px] text-signal border border-signal/40 px-8 py-4 hover:bg-signal hover:text-obsidian transition-colors">
              START AN ENGAGEMENT →
            </Link>
          </div>

        </div>
      </main>
    </>
  );
}
