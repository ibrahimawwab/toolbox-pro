import type { NextConfig } from "next";
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPages ? "/toolbox-pro" : "",
  images: { unoptimized: true },
  poweredByHeader: false,
  reactStrictMode: true
};
export default nextConfig;