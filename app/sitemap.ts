import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/products", "/services", "/contact"];

  if (!siteUrl) return [];

  const base = siteUrl;

  return routes.map((route) => ({
    url: route === "/" ? base : `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "monthly" : "yearly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
