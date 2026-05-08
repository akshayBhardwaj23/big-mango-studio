import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { getAllSlugs } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const lastModified = new Date();

  const entries: MetadataRoute.Sitemap = [
    { url: base, lastModified, changeFrequency: "monthly", priority: 1 },
    {
      url: `${base}/work`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  for (const slug of getAllSlugs()) {
    entries.push({
      url: `${base}/work/${slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return entries;
}
