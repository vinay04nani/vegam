import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: the landing page builds to plain HTML/CSS/JS in `out/`
  // and can be hosted anywhere. Remove when the app needs server features.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
