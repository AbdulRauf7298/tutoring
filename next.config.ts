import type { NextConfig } from "next";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const basePath = isGitHubActions && repository ? `/${repository}` : "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  assetPrefix: basePath || undefined,
  basePath: basePath || undefined,
};

export default nextConfig;
