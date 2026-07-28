"use client";

import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { SectionGutter, GridShell } from "@/components/Blueprint";
import Link from "next/link";

export function ContactPageClient() {
  return (
    <main className="bg-obsidian min-h-[100svh] pt-32 md:pt-40 pb-48">
      <SectionGutter index="CONTACT" codename="TRANSMIT" />
      <GridShell>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-16 flex items-baseline gap-4 mono caps text-[10px] text-signal/45">
          <Link href="/" className="hover:text-signal transition-colors">THE SHRIKS</Link>
          <span>→</span>
          <span className="text-signal">CONTACT</span>
        </nav>

        <Reveal className="w-full pt-8 pb-16 border-b border-rule flex flex-col items-start gap-6">
          <h1 className="caps text-[52px] md:text-[80px] leading-none tracking-tighter font-bold uppercase text-white">
            OPEN <span className="font-light text-signal/30">INBOX.</span>
          </h1>
          <p className="text-signal/75 text-[18px] md:text-[24px] leading-[1.4] font-light max-w-[42ch]">
            Got something for Engagement, Investment, Press, Collaboration or chaos? We got you.
          </p>
          <p className="text-signal/50 text-[14px] mono">
            Or reach us directly:{" "}
            <a
              href="mailto:transmission@theshriks.space"
              className="text-signal/80 hover:text-signal transition-colors underline underline-offset-4"
            >
              transmission@theshriks.space
            </a>
          </p>
        </Reveal>

        {/* FORM */}
        <div className="border-t border-rule pt-12">
          <div className="mono caps text-[10px] text-signal/40 tracking-[0.2em] mb-2">TRANSMISSION · 05 FIELDS</div>
          <p className="text-signal/50 text-[13px] mb-6 max-w-[52ch]">
            Fill what applies. The intent line is what gets read first.
          </p>
          <p className="text-signal/30 text-[11px] mono mb-8 max-w-[52ch]">
            By submitting this form you consent to us receiving and responding to your enquiry. We do not share your information with third parties. See our{" "}
            <Link href="/privacy" className="underline underline-offset-2 hover:text-signal/60 transition-colors">
              privacy policy
            </Link>.
          </p>
          <ContactForm />
        </div>

        {/* Footer nav */}
        <Reveal className="mt-36 pt-10 border-t border-rule flex items-center justify-between">
          <span className="mono caps text-[10px] text-signal/30 tracking-[0.2em]">CONTACT · TRANSMISSION OPEN</span>
          <Link href="/" className="mono caps text-[11px] text-signal/50 tracking-[0.16em] hover:text-signal transition-colors">
            BACK TO HOME →
          </Link>
        </Reveal>
      </GridShell>
    </main>
  );
}
