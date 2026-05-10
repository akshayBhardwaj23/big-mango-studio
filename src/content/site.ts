export const siteConfig = {
  name: "Big Mango Studio",
  /** Used for absolute URLs in metadata, sitemap, and OG. Set in production via NEXT_PUBLIC_SITE_URL */
  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://bigmangostudio.com",
  /** Public inbox for mailto CTAs. Override with NEXT_PUBLIC_SITE_EMAIL */
  email:
    process.env.NEXT_PUBLIC_SITE_EMAIL ?? "akshaybhardwaj96.ab@gmail.com",
  description:
    "We turn SaaS and AI products into websites that drive demos, trials, and revenue. Shipped fast (often 7-14 days) by a small studio team focused on conversion.",
  locale: "en_US",
} as const;

export function mailtoLink(subject?: string) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  const q = params.toString();
  return `mailto:${siteConfig.email}${q ? `?${q}` : ""}`;
}
