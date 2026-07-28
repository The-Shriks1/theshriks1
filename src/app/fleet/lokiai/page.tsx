import type { Metadata } from "next";
import { buildMetadata, PAGE_METADATA } from "@/lib/metadata";
import { LokiAIStructuredData } from "@/components/StructuredData";
import { LokiAIPageClient } from "./LokiAIPageClient";

export const metadata: Metadata = buildMetadata(PAGE_METADATA["fleet/lokiai"]);

export default function LokiAIPage() {
  return (
    <>
      <LokiAIStructuredData />
      <LokiAIPageClient />
    </>
  );
}
