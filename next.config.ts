import type { NextConfig } from "next";

/**
 * NEXT_PAGES_EXPORT=1 — сборка статического экспорта для GitHub Pages
 * (репозиторий разворачивается по адресу https://<user>.github.io/ponzi/).
 * Локальная разработка работает обычным образом: bun run dev → http://localhost:3000
 */
const pagesExport = process.env.NEXT_PAGES_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(pagesExport
    ? {
        output: "export" as const,
        basePath: "/ponzi",
        trailingSlash: true,
      }
    : {}),
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
