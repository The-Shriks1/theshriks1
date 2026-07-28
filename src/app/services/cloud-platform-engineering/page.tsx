import type { Metadata } from "next";
import { buildMetadata, PAGE_METADATA, SITE_URL } from "@/lib/metadata";
import { ServiceStructuredData } from "@/components/StructuredData";
import Link from "next/link";

export const metadata: Metadata = buildMetadata(PAGE_METADATA["services/cloud-platform-engineering"]);

export default function CloudPlatformPage() {
  return (
    <>
      <ServiceStructuredData
        name="Cloud Platform Engineering — THE SHRIKS"
        description="Scalable cloud architecture, CI/CD automation, container orchestration, and production-grade infrastructure built for zero-downtime delivery."
        url={`${SITE_URL}/services/cloud-platform-engineering`}
        breadcrumbs={[
          { name: "THE SHRIKS", item: SITE_URL },
          { name: "Services", item: `${SITE_URL}/services` },
          { name: "Cloud Platform Engineering", item: `${SITE_URL}/services/cloud-platform-engineering` },
        ]}
      />
      <main className="bg-obsidian min-h-screen pt-32 md:pt-40 pb-48">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14">

          <nav aria-label="Breadcrumb" className="mb-16 flex items-baseline gap-4 mono caps text-[10px] text-signal/45">
            <Link href="/" className="hover:text-signal transition-colors">THE SHRIKS</Link>
            <span>→</span>
            <Link href="/services" className="hover:text-signal transition-colors">SERVICES</Link>
            <span>→</span>
            <span className="text-signal">CLOUD PLATFORM</span>
          </nav>

          <div className="mb-20 border-b border-rule pb-16">
            <div className="mono caps text-[10px] text-signal/40 tracking-[0.3em] mb-6">SERVICE · III</div>
            <h1 className="caps text-[48px] md:text-[96px] leading-[0.9] tracking-tight font-medium max-w-[20ch]">
              Cloud platform engineering.
            </h1>
            <p className="mt-8 text-signal/70 text-[18px] md:text-[22px] leading-[1.5] max-w-[60ch] font-light">
              Scalable cloud architecture, CI/CD automation, container orchestration, and production-grade infrastructure built for zero-downtime delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 mb-24">
            <div>
              <h2 className="caps text-[24px] text-signal tracking-tight font-medium mb-6">What we build</h2>
              <ul className="flex flex-col gap-4">
                {[
                  "Cloud infrastructure architecture and implementation (Railway, AWS, GCP, Vercel)",
                  "CI/CD pipeline design, automation, and production hardening",
                  "Container orchestration and service deployment strategies",
                  "Database hosting, configuration, and migration management",
                  "Zero-downtime deployment architecture",
                  "Environment configuration and secrets management",
                  "Monitoring, alerting, and production observability",
                  "Infrastructure documentation as a first-class deliverable",
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 text-signal/70 text-[15px] leading-relaxed">
                    <span className="mono text-signal/30 text-[10px] mt-1 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="caps text-[24px] text-signal tracking-tight font-medium mb-6">Production standard</h2>
              <div className="flex flex-col gap-6 text-signal/70 text-[15px] leading-relaxed">
                <p>THE SHRIKS operates its own production infrastructure for LokiAI and its ecosystem properties. The same standard applied to in-house systems is applied to client platform engagements.</p>
                <p>Platform work includes architecture documentation that captures decisions, tradeoffs, and operational procedures — not just the resulting infrastructure.</p>
                <p>Engagements are delivered remotely to production environments worldwide. Based in India.</p>
              </div>
            </div>
          </div>

          <div className="border-t border-rule pt-12 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
            <div className="flex gap-6 flex-wrap">
              <Link href="/services/ai-ml-systems" className="mono caps text-[11px] text-signal/50 tracking-[0.16em] hover:text-signal transition-colors">← AI & ML SYSTEMS</Link>
              <Link href="/services/blockchain-engineering" className="mono caps text-[11px] text-signal/50 tracking-[0.16em] hover:text-signal transition-colors">BLOCKCHAIN →</Link>
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
