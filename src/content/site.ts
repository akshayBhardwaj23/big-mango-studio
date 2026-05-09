export const siteConfig = {
  name: "Big Mango Studio",
  /** Used for absolute URLs in metadata, sitemap, and OG. Set in production via NEXT_PUBLIC_SITE_URL */
  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://bigmangostudio.com",
  /** Public inbox for mailto CTAs. Override with NEXT_PUBLIC_SITE_EMAIL */
  email:
    process.env.NEXT_PUBLIC_SITE_EMAIL ?? "hello@bigmangostudio.com",
  description:
    "High-converting websites for SaaS & AI products — shipped fast (often 7–14 days) by a small studio team that understands product, engineering, and conversion.",
  locale: "en_US",
} as const;

export function mailtoLink(subject?: string) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  const q = params.toString();
  return `mailto:${siteConfig.email}${q ? `?${q}` : ""}`;
}
