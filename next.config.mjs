import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.kurohelper.com"],
  },
};

export default withMDX(config);
