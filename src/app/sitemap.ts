import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/menu", "/catering-events", "/gallery", "/contact"];

  return routes.map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    changeFrequency: route === "/menu" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/menu" ? 0.9 : 0.7,
  }));
}
