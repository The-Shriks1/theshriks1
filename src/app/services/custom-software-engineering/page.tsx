import type { Metadata } from "next";
import { buildMetadata, PAGE_METADATA, SITE_URL } from "@/lib/metadata";
import { ServiceStructuredData } from "@/components/StructuredData";
import Link from "next/link";

export const metadata: Metadata = buildMetadata(PAGE_METADATA["services/custom-software-engineering"]);

export default function CustomSoftwarePage() {
  return (
    <>
      <ServiceStructuredData
        name="Custom Software Engineering — THE SHRIKS"
        description="Production-grade full-stack systems for funded ventures. Architecture-first, delivered to deployment — not prototyped and abandoned."
        url={`${SITE_URL}/services/custom-software-engineering`}
        breadcrumbs={[
          { name: "THE SHRIKS", item: SITE_URL },
          { name: "Services", item: `${SITE_URL}/services` },
          { name: "Custom Software Engineering", item: `${SITE_URL}/services/custom-software-engineering` },
        ]}
      />
      <main className="bg-obsidian min-h-screen pt-32 md:pt-40 pb-48">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14">

          <nav aria-label="Breadcrumb" className="mb-16 flex items-baseline gap-4 mono caps text-[10px] text-signal/45">
            <Link href="/" className="hover:text-signal transition-colors">THE SHRIKS</Link>
            <span>→</span>
            <Link href="/services" className="hover:text-signal transition-colors">SERVICES</Link>
            <span>→</span>
            <span className="text-signal">CUSTOM SOFTWARE</span>
          </nav>

          <div className="mb-20 border-b border-rule pb-16">
            <div className="mono caps text-[10px] text-signal/40 tracking-[0.3em] mb-6">SERVICE · I</div>
            <h1 className="caps text-[48px] md:text-[96px] leading-[0.9] tracking-tight font-medium max-w-[20ch]">
              Custom software engineering.
            </h1>
            <p className="mt-8 text-signal/70 text-[18px] md:text-[22px] leading-[1.5] max-w-[60ch] font-light">
              Production-grade full-stack systems for funded ventures. Architecture-first, delivered to deployment — not prototyped and abandoned.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 mb-24">
            <div>
              <h2 className="caps text-[24px] text-signal tracking-tight font-medium mb-6">What we deliver</h2>
              <ul className="flex flex-col gap-4">
                {[
                  "Full-stack application architecture and implementation",
                  "API design, documentation, and production hardening",
                  "Database design, schema management, and migration strategy",
                  "Authentication, authorisation, and security architecture",
                  "CI/CD pipeline setup and deployment automation",
                  "Technical documentation as a first-class deliverable",
                  "Root-cause debugging and system health audits",
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 text-signal/70 text-[15px] leading-relaxed">
                    <span className="mono text-signal/30 text-[10px] mt-1 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="caps text-[24px] text-signal tracking-tight font-medium mb-6">Our approach</h2>
              <div className="flex flex-col gap-6 text-signal/70 text-[15px] leading-relaxed">
                <p>Engagements begin with architecture decisions documented before implementation begins. We do not start building until the system design is clear and agreed.</p>
                <p>We are willing to restart from the ground up when something is structurally broken. Symptom patching is not a substitute for root-cause resolution.</p>
                <p>Deliverables include documentation. Not as an afterthought — as a first-class output alongside the code.</p>
                <p>All work is delivered remotely. Based in India, working with clients worldwide.</p>
              </div>
            </div>
          </div>

          <div className="border-t border-rule pt-12 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
            <div className="flex gap-6">
              <Link href="/services" className="mono caps text-[11px] text-signal/50 tracking-[0.16em] hover:text-signal transition-colors">← ALL SERVICES</Link>
              <Link href="/services/ai-ml-systems" className="mono caps text-[11px] text-signal/50 tracking-[0.16em] hover:text-signal transition-colors">AI & ML SYSTEMS →</Link>
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
