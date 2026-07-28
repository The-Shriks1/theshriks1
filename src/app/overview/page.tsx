import type { Metadata } from "next";
import { buildMetadata, PAGE_METADATA } from "@/lib/metadata";
import { redirect } from "next/navigation";

export const metadata: Metadata = buildMetadata(PAGE_METADATA.overview);

export default function OverviewPage() {
  redirect("/#overview");
}
