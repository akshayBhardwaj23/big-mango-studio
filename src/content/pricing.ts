export type PricingTier = {
  name: string;
  /** Display price (ranges are fine) */
  price: string;
  description: string;
  bullets: string[];
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "₹25k+",
    description: "Single high-converting landing page.",
    bullets: [
      "One primary conversion goal (signup / book / waitlist)",
      "Mobile-first layout + fast performance",
      "Basic analytics hookup guidance",
    ],
  },
  {
    name: "Growth",
    price: "₹60k+",
    description: "Multi-page site + conversion copy.",
    bullets: [
      "3-5 pages (home, product, pricing, FAQ, etc.)",
      "Messaging structure for SaaS / AI buyers",
      "SEO-friendly structure + metadata basics",
    ],
  },
  {
    name: "Premium",
    price: "₹1L+",
    description: "Full product marketing site with deeper IA and polish.",
    bullets: [
      "More pages / modular sections for launches",
      "Complex layouts (compare, docs-adjacent marketing, etc.)",
      "Prioritized turnaround for launch windows",
    ],
  },
];
