/** Short list for hero strip + “What we Offer” */
export type OfferItem = {
  title: string;
  body: string;
};

export const offers: OfferItem[] = [
  {
    title: "SaaS landing pages",
    body: "One sharp page: positioning, proof, pricing cues, and CTAs tuned for signups and demos, not just “pretty.”",
  },
  {
    title: "MVP websites",
    body: "Fast multi-page sites for early teams: clear story, trust, and conversion paths while you’re still proving the product.",
  },
  {
    title: "AI product launches",
    body: "Launch narrative + site structure for AI products: explain the outcome, reduce skepticism, and route visitors to “try” or “talk.”",
  },
];

/** Deeper “how we deliver” cards under Services */
export type ServicePillar = {
  title: string;
  body: string;
};

export const servicePillars: ServicePillar[] = [
  {
    title: "Conversion-led UX & copy",
    body: "Headlines, sections, and CTAs shaped around one funnel job so traffic turns into trials, calls, or signups.",
  },
  {
    title: "Production-ready builds",
    body: "Next.js/React sites that are fast, accessible, and easy to iterate: built like software, not a static brochure.",
  },
  {
    title: "AI / SaaS messaging",
    body: "Positioning that respects technical buyers: crisp claims, proof, and comparisons without hype.",
  },
  {
    title: "Launch support",
    body: "Landing experiments, launch checks, and tight feedback loops so you ship on a deadline (often 7-14 days for focused scopes).",
  },
];
