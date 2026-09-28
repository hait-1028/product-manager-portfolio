import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const [repositoryOwner = "", repositoryName = ""] = (process.env.GITHUB_REPOSITORY ?? "").split("/");
const basePath = isGitHubPages && repositoryName && !repositoryName.endsWith(".github.io")
  ? `/${repositoryName}`
  : "";
const siteUrl = isGitHubPages && repositoryOwner
  ? `https://${repositoryOwner}.github.io${basePath}`
  : "https://personal-career-portfolio-2026.jovial-fox-1949.chatgpt.site";

const nextConfig: NextConfig = isGitHubPages
  ? {
      output: "export",
      trailingSlash: true,
      basePath,
      assetPrefix: basePath || undefined,
      images: { unoptimized: true },
      env: { NEXT_PUBLIC_BASE_PATH: basePath, NEXT_PUBLIC_SITE_URL: siteUrl },
    }
  : {};

export default nextConfig;
