import type { NextConfig } from "next";

/** The Nigat CMS (Strapi). Its uploads are served from here unless Cloudinary is configured. */
const cmsUrl = new URL(process.env.CMS_URL || "http://localhost:1337");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    agentUpgrade: "security",
  },
  images: {
    remotePatterns: [
      { protocol: cmsUrl.protocol.replace(":", "") as "http" | "https", hostname: cmsUrl.hostname, port: cmsUrl.port, pathname: "/uploads/**" },
      { protocol: "https", hostname: "res.cloudinary.com" },
    ],
    // Locally the CMS runs on localhost, which Next.js refuses to optimise images from by default.
    dangerouslyAllowLocalIP: process.env.NODE_ENV !== "production",
  },
  /** The template had one fixed page per detail type; detail pages now live at /<section>/<slug>. */
  async redirects() {
    return [
      { source: "/service-details", destination: "/services", permanent: true },
      { source: "/project-details", destination: "/projects", permanent: true },
      { source: "/team-details", destination: "/team", permanent: true },
      { source: "/blog-details", destination: "/blog", permanent: true },
    ];
  },
};

export default nextConfig;
