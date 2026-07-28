import type { Metadata } from "next";
import { buildMetadata, PAGE_METADATA } from "@/lib/metadata";
import { ServiceStructuredData } from "@/components/StructuredData";
import Link from "next/link";
import { SITE_URL } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(PAGE_METADATA.services);

const SERVICES = [
  {
    id: "I",
    slug: "custom-software-engineering",
    title: "Custom Software Engineering",
    body: "Production-grade full-stack systems for funded ventures. Architecture-first, delivered to deployment — not prototyped and abandoned.",
    detail: "THE SHRIKS engineers custom software platforms for startups and established ventures. Engagements are scoped to real production deliverables with documented architecture decisions, not minimum viable prototypes.",
  },
  {
    id: "II",
    slug: "ai-ml-systems",
    title: "AI & ML Systems Engineering",
    body: "Multi-agent orchestration, model pipeline architecture, edge-inference deployment, and applied AI tooling at production scale.",
    detail: "From multi-agent orchestration to model pipeline architecture and edge-inference deployment, THE SHRIKS engineers AI and ML systems that operate in real production environments.",
  },
  {
    id: "III",
    slug: "cloud-platform-engineering",
    title: "Cloud Platform Engineering",
    body: "Scalable cloud architecture, CI/CD automation, container orchestration, and production-grade infrastructure built for zero-downtime delivery.",
    detail: "Infrastructure engineered to deploy, scale, and sustain production systems. Includes cloud architecture, CI/CD pipelines, container orchestration, and zero-downtime delivery planning.",
  },
  {
    id: "IV",
    slug: "blockchain-engineering",
    title: "Blockchain Engineering",
    body: "Smart contract development, decentralised protocol architecture, and on-chain systems engineering.",
    detail: "Smart contract development, decentralised protocol architecture, and on-chain systems built to production standard. The work is governed by the same precision standard as all other THE SHRIKS engineering.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <ServiceStructuredData
        name="Engineering Services — THE SHRIKS"
        description="THE SHRIKS delivers production-grade engineering across six disciplines: custom software engineering, AI/ML systems, cloud platform engineering, blockchain engineering, content production, and cinematic production."
        url={`${SITE_URL}/services`}
        breadcrumbs={[
          { name: "THE SHRIKS", item: SITE_URL },
          { name: "Services", item: `${SITE_URL}/services` },
        ]}
      />
      <main className="bg-obsidian min-h-screen pt-32 md:pt-40 pb-48">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-16 flex items-baseline gap-4 mono caps text-[10px] text-signal/45">
            <Link href="/" className="hover:text-signal transition-colors">THE SHRIKS</Link>
            <span>→</span>
            <span className="text-signal">SERVICES</span>
          </nav>

          {/* Header */}
          <div className="mb-20 border-b border-rule pb-16">
            <div className="mono caps text-[10px] text-signal/40 tracking-[0.3em] mb-6">06 SYSTEM VERTICALS</div>
            <h1 className="caps text-[48px] md:text-[96px] leading-[0.9] tracking-tight font-medium max-w-[20ch]">
              Engineering disciplines.
            </h1>
            <p className="mt-8 text-signal/70 text-[18px] md:text-[22px] leading-[1.5] max-w-[60ch] font-light">
              THE SHRIKS is an independent systems studio and product venture. We engineer production-grade software platforms, AI/ML systems, cloud infrastructure, blockchain systems, and proprietary products for ventures operating at scale.
            </p>
            <p className="mt-6 text-signal/50 text-[16px] leading-[1.6] max-w-[55ch] font-light">
              Client engineering funds product research. Product research raises the standard of client delivery.
            </p>
          </div>

          {/* Services list */}
          <div className="flex flex-col gap-px border border-rule bg-rule">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-obsidian p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-16 group">
                <div className="md:w-[200px] flex-shrink-0">
                  <div className="mono text-[40px] text-signal/15 font-light leading-none">{service.id}</div>
                  <div className="mono caps text-[10px] text-signal/40 tracking-[0.2em] mt-2">{service.title.toUpperCase().split(" ").slice(0, 2).join(" ")}</div>
                </div>
                <div className="flex-1">
                  <h2 className="caps text-[24px] md:text-[32px] text-signal tracking-tight font-medium leading-[1] mb-4">
                    <Link
                      href={`/services/${service.slug}`}
                      className="hover:text-signal/80 transition-colors"
                    >
                      {service.title}
                    </Link>
                  </h2>
                  <p className="text-signal/70 text-[16px] leading-[1.7] max-w-[55ch]">{service.body}</p>
                  <p className="mt-4 text-signal/50 text-[14px] leading-[1.7] max-w-[55ch]">{service.detail}</p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-block mt-6 mono caps text-[11px] text-signal/60 tracking-[0.2em] border border-rule px-5 py-3 hover:border-signal/50 hover:text-signal transition-all"
                  >
                    VIEW SERVICE DETAIL →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-24 pt-12 border-t border-rule flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div>
              <div className="mono caps text-[10px] text-signal/40 tracking-[0.2em] mb-3">START AN ENGAGEMENT</div>
              <p className="text-signal/70 text-[16px] max-w-[45ch]">Ready to engage THE SHRIKS for a project? Transmit your intent and we will respond.</p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 mono caps text-[11px] text-signal border border-signal/40 px-8 py-4 hover:bg-signal hover:text-obsidian transition-colors"
            >
              OPEN CHANNEL →
            </Link>
          </div>

        </div>
      </main>
    </>
  );
}
