import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: "standalone",
  async redirects() {
    const permanent = process.env.NODE_ENV === "production";

    return [
      {
        source: "/docs",
        destination: "/",
        permanent,
      },
      {
        source: "/docs/:slug+",
        destination: "/:slug*",
        permanent,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.kurohelper.com",
      },
    ],
  },
};

export default withMDX(config);
