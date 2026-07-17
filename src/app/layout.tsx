import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Nav } from "@/components/Nav";
import { HUD } from "@/components/HUD";
import { SoundProvider } from "@/components/Sound";
import { PageFrame } from "@/components/PageFrame";
import { AppLayoutWrapper } from "@/components/AppLayoutWrapper";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Shriks - System Architectures",
  description:
    "Two Commanders. One mothership. A fleet of products in arrival. THE SHRIKS — engineering, AI/ML, and cinematic production, based in India.",
  metadataBase: new URL("https://theshriks.space"),
  openGraph: {
    title: "The Shriks - System Architectures",
    description: "Independent Deep Technology Venture Studio. Two Commanders. One fleet.",
    url: "https://theshriks.space",
    siteName: "THE SHRIKS",
    type: "website",
  },
  icons: {
    icon: "/favicon-v3.png",
  },
};

export const viewport: Viewport = { themeColor: "#0a0a0a" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <SoundProvider>
          <AppLayoutWrapper>
            <SmoothScroll />
            <Nav />
            <HUD />
            <PageFrame>{children}</PageFrame>
          </AppLayoutWrapper>
        </SoundProvider>
      </body>
    </html>
  );
}
