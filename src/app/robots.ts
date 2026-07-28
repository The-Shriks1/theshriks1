import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/metadata";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/internal/",
          "/preview/",
          "/_next/",
        ],
      },
      // Legitimate AI-retrieval crawlers — allowed to index public content
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/internal/", "/preview/"],
      },
      {
        userAgent: "Claude-Web",
        allow: "/",
        disallow: ["/api/", "/admin/", "/internal/", "/preview/"],
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/internal/", "/preview/"],
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
        disallow: ["/api/", "/admin/", "/internal/", "/preview/"],
      },
      {
        userAgent: "CCBot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/internal/", "/preview/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
