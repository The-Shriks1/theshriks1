import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Nav } from "@/components/Nav";
import { HUD } from "@/components/HUD";
import { SoundProvider } from "@/components/Sound";
import { PageFrame } from "@/components/PageFrame";
import { AppLayoutWrapper } from "@/components/AppLayoutWrapper";
import { CinematicRuntimeProvider } from "@/lib/CinematicRuntime";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "The Shriks - System Architectures | AI & Software",
    template: "%s | THE SHRIKS",
  },
  description:
    "THE SHRIKS is an independent systems studio and product venture building production-grade software, AI infrastructure, cloud platforms, blockchain systems, and proprietary products including LokiAI.",
  metadataBase: new URL("https://www.theshriks.space"),
  alternates: {
    canonical: "https://www.theshriks.space",
  },
  openGraph: {
    title: "The Shriks - System Architectures | AI & Software",
    description:
      "THE SHRIKS is an independent systems studio and product venture building production-grade software, AI infrastructure, cloud platforms, blockchain systems, and proprietary products including LokiAI.",
    url: "https://theshriks.space",
    siteName: "THE SHRIKS",
    type: "website",
    images: [
      {
        url: "/brand/og-default.png",
        width: 1200,
        height: 630,
        alt: "THE SHRIKS — System Architectures | AI & Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Shriks - System Architectures | AI & Software",
    description:
      "THE SHRIKS is an independent systems studio and product venture building production-grade software, AI infrastructure, cloud platforms, blockchain systems, and proprietary products including LokiAI.",
    images: ["/brand/og-default.png"],
  },
  icons: {
    icon: "/favicon-v3.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = { themeColor: "#0a0a0a" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <SoundProvider>
          <CinematicRuntimeProvider>
            <AppLayoutWrapper>
              <SmoothScroll />
              <Nav />
              <HUD />
              <PageFrame>{children}</PageFrame>
            </AppLayoutWrapper>
          </CinematicRuntimeProvider>
        </SoundProvider>
      </body>
    </html>
  );
}
