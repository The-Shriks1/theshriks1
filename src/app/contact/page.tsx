import type { Metadata } from "next";
import { buildMetadata, PAGE_METADATA } from "@/lib/metadata";
import { ContactPageClient } from "./ContactPageClient";

export const metadata: Metadata = buildMetadata(PAGE_METADATA.contact);

export default function ContactPage() {
  return <ContactPageClient />;
}
