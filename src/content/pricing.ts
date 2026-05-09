export type PricingDifferentiation = {
  /** Lines framed as what this is not */
  avoid: string[];
  /** Lines framed as what this is */
  embrace: string[];
};

export type PricingTier = {
  name: string;
  /** Display price (ranges are fine) */
  price: string;
  /** Outcome-first headline under the price */
  headline: string;
  /** Who this tier fits */
  bestFor: string;
  bullets: string[];
  differentiation: PricingDifferentiation;
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "₹25k+",
    headline: "Conversion-first landing page for early-stage products",
    bestFor:
      "Best for founders validating an idea or launching fast without wasting time on templates or bloated agencies.",
    bullets: [
      "Clear positioning and messaging (what you say and how you say it)",
      "One focused conversion goal (demo, signup, or waitlist)",
      "Structured sections based on proven SaaS patterns (not random layout)",
      "CTA flow designed to reduce hesitation and drive action",
      "Fast, production-ready Next.js build (not a static template)",
      "Mobile-first and performance optimized (Core Web Vitals in mind)",
      "Basic analytics setup: track clicks, conversions, and behavior",
    ],
    differentiation: {
      avoid: ["Not a template"],
      embrace: ["Built with real product + conversion thinking"],
    },
  },
  {
    name: "Growth",
    price: "₹60k+",
    headline: "Multi-page site built to convert traffic into demos and trials",
    bestFor:
      "Best for startups moving beyond MVP and needing a credible, conversion-ready presence.",
    bullets: [
      "3-5 pages (Home, Product, Pricing, FAQ, etc.)",
      "Messaging structure tailored for SaaS / AI buyers",
      "Clear user journey across pages (not just standalone screens)",
      "Trust-building sections (proof, comparisons, objections handled)",
      "Conversion-focused copy + layout (what users need to see before acting)",
      "SEO-friendly structure + metadata basics",
      "Reusable component system for scalability",
      "Performance-optimized Next.js build",
      "Analytics + event tracking guidance (know what is working)",
    ],
    differentiation: {
      avoid: ['Not just "more pages"'],
      embrace: ["Built as a system that guides users toward action"],
    },
  },
  {
    name: "Premium",
    price: "₹1L+",
    headline: "Full product marketing site for serious launches",
    bestFor:
      "Best for teams preparing for launch, fundraising, or scaling acquisition.",
    bullets: [
      "Full site architecture (deep IA, multiple flows, modular sections)",
      "Advanced messaging for complex SaaS / AI products",
      "Pages for different user types (buyers, users, stakeholders)",
      "Comparison, use-case, and explainer sections for clarity",
      "Conversion optimization across the entire funnel (not just homepage)",
      "High-quality UI polish + advanced layouts",
      "Scalable design system aligned with product UI",
      "Performance-first build (fast, maintainable, production-grade)",
      "Launch support (iterations, feedback loops, quick refinements)",
    ],
    differentiation: {
      avoid: ['Not a "design project"'],
      embrace: ["A conversion system built to support growth"],
    },
  },
];
