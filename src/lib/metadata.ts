import type { Metadata } from "next";

export const SITE_URL = "https://theshriks.space";
export const SITE_NAME = "THE SHRIKS";
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const DEFAULT_OG_IMAGE = `${SITE_URL}/brand/og-default.png`;

export type PageMetadataKey =
  | "home"
  | "overview"
  | "fleet"
  | "fleet/lokiai"
  | "commanders"
  | "broadcast"
  | "the-shriks"
  | "services"
  | "services/custom-software-engineering"
  | "services/ai-ml-systems"
  | "services/cloud-platform-engineering"
  | "services/blockchain-engineering"
  | "contact"
  | "facts"
  | "privacy"
  | "terms";

export type PageMetadataEntry = {
  title: string;
  description: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  robots: string;
  h1: string;
  keywords?: string[];
};

export const PAGE_METADATA: Record<PageMetadataKey, PageMetadataEntry> = {
  home: {
    title: "The Shriks - System Architectures | AI & Software",
    description:
      "THE SHRIKS is an independent systems studio and product venture building production-grade software, AI infrastructure, cloud platforms, blockchain systems, and proprietary products including LokiAI.",
    canonical: SITE_URL,
    ogTitle: "The Shriks - System Architectures | AI & Software",
    ogDescription:
      "THE SHRIKS is an independent systems studio and product venture building production-grade software, AI infrastructure, cloud platforms, blockchain systems, and proprietary products including LokiAI.",
    ogImage: DEFAULT_OG_IMAGE,
    robots: "index,follow",
    h1: "Production-grade system architectures for software and AI.",
  },
  overview: {
    title: "Overview — THE SHRIKS | Systems Studio & Product Venture",
    description:
      "An overview of THE SHRIKS — an independent systems studio operating two divisions: production-grade engineering for funded ventures and an internally developed product line.",
    canonical: `${SITE_URL}/overview`,
    ogTitle: "Overview — THE SHRIKS",
    ogDescription:
      "Two divisions. One production standard. Client engineering funds product research.",
    ogImage: DEFAULT_OG_IMAGE,
    robots: "index,follow",
    h1: "THE SHRIKS — overview.",
  },
  fleet: {
    title: "Fleet — THE SHRIKS | Products in Arrival",
    description:
      "The product fleet of THE SHRIKS. LokiAI is Ship I — a hardware-aware deployment layer for local AI on Android devices. Ship II and III are under development.",
    canonical: `${SITE_URL}/fleet`,
    ogTitle: "Fleet — THE SHRIKS",
    ogDescription:
      "The product fleet of THE SHRIKS. LokiAI is Ship I. More vessels in arrival.",
    ogImage: DEFAULT_OG_IMAGE,
    robots: "index,follow",
    h1: "The fleet.",
  },
  "fleet/lokiai": {
    title: "LokiAI — Hardware-Aware Local AI Deployment | THE SHRIKS",
    description:
      "LokiAI is an Android-first, hardware-aware deployment layer for local AI. It combines workload requirements with a device profile to identify, package, deploy, and validate a compatible model and runtime path.",
    canonical: `${SITE_URL}/fleet/lokiai`,
    ogTitle: "LokiAI by THE SHRIKS — Deploy compatible AI workloads onto supported hardware.",
    ogDescription:
      "LokiAI is an Android-first, hardware-aware deployment layer for local AI. It combines workload requirements with a device profile to identify, package, deploy, and validate a compatible model and runtime path.",
    ogImage: DEFAULT_OG_IMAGE,
    robots: "index,follow",
    h1: "Deploy compatible AI workloads onto supported hardware.",
  },
  commanders: {
    title: "Commanders — THE SHRIKS | Laukik & Shrusti",
    description:
      "Meet the two commanders of THE SHRIKS. Laukik leads systems architecture and AI infrastructure. Shrusti leads product design, UI/UX, and creative systems.",
    canonical: `${SITE_URL}/commanders`,
    ogTitle: "Commanders — THE SHRIKS",
    ogDescription:
      "Meet the two commanders of THE SHRIKS.",
    ogImage: DEFAULT_OG_IMAGE,
    robots: "index,follow",
    h1: "The commanders.",
  },
  broadcast: {
    title: "Broadcast — THE SHRIKS | Manifest & Channels",
    description:
      "The manifest, operating model, and broadcast channels of THE SHRIKS. Four dedicated channels serving a distinct purpose in the communication architecture.",
    canonical: `${SITE_URL}/broadcast`,
    ogTitle: "Broadcast — THE SHRIKS",
    ogDescription: "The manifest, operating model, and broadcast channels of THE SHRIKS.",
    ogImage: DEFAULT_OG_IMAGE,
    robots: "index,follow",
    h1: "The manifest.",
  },
  "the-shriks": {
    title: "THE SHRIKS — Brand Film",
    description:
      "THE SHRIKS brand film. A cinematic introduction to the venture, its identity, and its fleet.",
    canonical: `${SITE_URL}/the-shriks`,
    ogTitle: "THE SHRIKS — Brand Film",
    ogDescription: "A cinematic introduction to THE SHRIKS.",
    ogImage: DEFAULT_OG_IMAGE,
    robots: "index,follow",
    h1: "THE SHRIKS.",
  },
  services: {
    title: "Services — THE SHRIKS | Engineering Disciplines",
    description:
      "THE SHRIKS delivers production-grade engineering across six disciplines: custom software engineering, AI/ML systems, cloud platform engineering, blockchain engineering, content production, and cinematic production.",
    canonical: `${SITE_URL}/services`,
    ogTitle: "Services — THE SHRIKS",
    ogDescription:
      "Production-grade engineering across six disciplines. Architecture-first. Delivered to production standard.",
    ogImage: DEFAULT_OG_IMAGE,
    robots: "index,follow",
    h1: "Engineering disciplines.",
  },
  "services/custom-software-engineering": {
    title: "Custom Software Engineering — THE SHRIKS",
    description:
      "Production-grade full-stack systems for funded ventures. Architecture-first, delivered to deployment. THE SHRIKS engineers custom software platforms for startups and established ventures.",
    canonical: `${SITE_URL}/services/custom-software-engineering`,
    ogTitle: "Custom Software Engineering — THE SHRIKS",
    ogDescription:
      "Production-grade full-stack systems for funded ventures. Architecture-first, delivered to deployment.",
    ogImage: DEFAULT_OG_IMAGE,
    robots: "index,follow",
    h1: "Custom software engineering.",
  },
  "services/ai-ml-systems": {
    title: "AI & ML Systems Engineering — THE SHRIKS",
    description:
      "Multi-agent orchestration, model pipeline architecture, edge-inference deployment, and applied AI tooling at production scale. THE SHRIKS engineers AI and ML systems for production.",
    canonical: `${SITE_URL}/services/ai-ml-systems`,
    ogTitle: "AI & ML Systems Engineering — THE SHRIKS",
    ogDescription:
      "Multi-agent orchestration, model pipeline architecture, edge-inference deployment, and applied AI tooling at production scale.",
    ogImage: DEFAULT_OG_IMAGE,
    robots: "index,follow",
    h1: "AI and ML systems engineering.",
  },
  "services/cloud-platform-engineering": {
    title: "Cloud Platform Engineering — THE SHRIKS",
    description:
      "Scalable cloud architecture, CI/CD automation, container orchestration, and production-grade infrastructure. THE SHRIKS engineers cloud platforms for zero-downtime delivery.",
    canonical: `${SITE_URL}/services/cloud-platform-engineering`,
    ogTitle: "Cloud Platform Engineering — THE SHRIKS",
    ogDescription:
      "Scalable cloud architecture, CI/CD automation, container orchestration, and production-grade infrastructure built for zero-downtime delivery.",
    ogImage: DEFAULT_OG_IMAGE,
    robots: "index,follow",
    h1: "Cloud platform engineering.",
  },
  "services/blockchain-engineering": {
    title: "Blockchain Engineering — THE SHRIKS",
    description:
      "Smart contract development, decentralised protocol architecture, and on-chain systems engineering. THE SHRIKS engineers blockchain systems for production.",
    canonical: `${SITE_URL}/services/blockchain-engineering`,
    ogTitle: "Blockchain Engineering — THE SHRIKS",
    ogDescription:
      "Smart contract development, decentralised protocol architecture, and on-chain systems engineering.",
    ogImage: DEFAULT_OG_IMAGE,
    robots: "index,follow",
    h1: "Blockchain engineering.",
  },
  contact: {
    title: "Contact — THE SHRIKS | Transmit",
    description:
      "Get in touch with THE SHRIKS for engagement, investment, press, or collaboration enquiries. Contact address: transmission@theshriks.space.",
    canonical: `${SITE_URL}/contact`,
    ogTitle: "Contact — THE SHRIKS",
    ogDescription:
      "Get in touch with THE SHRIKS for engagement, investment, press, or collaboration enquiries.",
    ogImage: DEFAULT_OG_IMAGE,
    robots: "index,follow",
    h1: "Open inbox.",
  },
  facts: {
    title: "Facts — THE SHRIKS | About the Venture",
    description:
      "Key facts about THE SHRIKS: an independent systems studio and product venture building production-grade software, AI infrastructure, cloud platforms, blockchain systems, and LokiAI.",
    canonical: `${SITE_URL}/facts`,
    ogTitle: "Facts — THE SHRIKS",
    ogDescription:
      "Key facts about THE SHRIKS venture: structure, disciplines, products, and operating model.",
    ogImage: DEFAULT_OG_IMAGE,
    robots: "index,follow",
    h1: "Facts about THE SHRIKS.",
  },
  privacy: {
    title: "Privacy Policy — THE SHRIKS",
    description:
      "Privacy policy for theshriks.space and affiliated THE SHRIKS properties. Describes data collected, how it is used, and how to contact us regarding privacy matters.",
    canonical: `${SITE_URL}/privacy`,
    ogTitle: "Privacy Policy — THE SHRIKS",
    ogDescription: "Privacy policy for THE SHRIKS properties.",
    ogImage: DEFAULT_OG_IMAGE,
    robots: "index,follow",
    h1: "Privacy policy.",
  },
  terms: {
    title: "Terms of Use — THE SHRIKS",
    description:
      "Terms of use for theshriks.space and affiliated THE SHRIKS properties.",
    canonical: `${SITE_URL}/terms`,
    ogTitle: "Terms of Use — THE SHRIKS",
    ogDescription: "Terms of use for THE SHRIKS properties.",
    ogImage: DEFAULT_OG_IMAGE,
    robots: "index,follow",
    h1: "Terms of use.",
  },
};

/**
 * Build a Next.js Metadata object from a PageMetadataEntry.
 */
export function buildMetadata(
  entry: PageMetadataEntry,
  overrides?: Partial<Metadata>
): Metadata {
  return {
    title: entry.title,
    description: entry.description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: entry.canonical,
    },
    openGraph: {
      title: entry.ogTitle,
      description: entry.ogDescription,
      url: entry.canonical,
      siteName: SITE_NAME,
      type: "website",
      images: [
        {
          url: entry.ogImage,
          width: 1200,
          height: 630,
          alt: entry.ogTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: entry.ogTitle,
      description: entry.ogDescription,
      images: [entry.ogImage],
    },
    robots: {
      index: entry.robots.includes("index"),
      follow: entry.robots.includes("follow"),
    },
    ...overrides,
  };
}
