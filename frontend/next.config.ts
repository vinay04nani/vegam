import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: the landing page builds to plain HTML/CSS/JS in `out/`
  // and can be hosted anywhere. Remove when the app needs server features.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  // Set when the site is served from a sub-path, e.g. /vegam on GitHub Pages.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
};

export default nextConfig;
