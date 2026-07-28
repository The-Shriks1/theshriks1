import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  trailingSlash: false,
  async redirects() {
    return [
      // /transmit → /contact (HTTP 308 Permanent Redirect)
      {
        source: "/transmit",
        destination: "/contact",
        permanent: true, // 308
      },
      // Legacy anchor-redirect pages → canonical standalone pages
      // Note: the existing page.tsx files handle these at the React level,
      // but we add HTTP-level redirects here for crawlers.
    ];
  },
};

export default nextConfig;
