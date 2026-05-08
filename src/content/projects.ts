export type ProjectTag = "Web" | "SaaS" | "Marketing" | "Strategy";

export type Project = {
  slug: string;
  title: string;
  /** Optional public client name */
  client?: string;
  /** Short positioning line */
  context: string;
  outcomes: string[];
  tags: ProjectTag[];
  liveUrl: string;
  /** Path under /public, e.g. /projects/acme.png */
  image: string;
  /** Optional screenshot gallery for case-study detail page */
  galleryImages?: string[];
  /** Shown on the homepage “Selected work” strip */
  featured?: boolean;
};

/**
 * Replace entries with your real launches. Keep images in /public/projects/
 * and reference them here (e.g. "/projects/my-shot.png").
 */
export const projects: Project[] = [
  {
    slug: "fuchsia-shaw",
    title: "Fuchsia Shaw",
    client: "Fuchsia Shaw",
    context:
      "Built an editorial Shopify storefront for a fashion brand, balancing premium brand storytelling with fast product discovery and conversion-ready shopping flows.",
    outcomes: [
      "Implemented a clean homepage narrative with hero campaigns, collection highlights, and social-proof sections to support brand trust.",
      "Designed ecommerce journeys across collection browsing, quick-buy interactions, and product detail views to reduce friction.",
      "Structured merchandising and content blocks for repeat product drops while keeping the visual identity consistent across pages.",
    ],
    tags: ["Web", "Marketing", "Strategy"],
    liveUrl: "https://www.fuchsiashaw.com/",
    image: "/projects/fuchsia-shaw-hero.png",
    galleryImages: [
      "/projects/fuchsia-shaw-hero.png",
      "/projects/fuchsia-shaw-collection.png",
      "/projects/fuchsia-shaw-social-proof.png",
    ],
    featured: true,
  },
  {
    slug: "startup-analyst-xi",
    title: "Startup-Analyst-XI",
    client: "Startup-Analyst-XI",
    context:
      "AI-powered startup brief platform built to transform pitch documents into investor-style analysis and structured strategic outputs.",
    outcomes: [
      "Shipped guided document-to-brief workflow with PDF/DOCX upload, fast processing, and investor-ready summary generation.",
      "Built structured output system including scorecards, strategic views, and analysis sections designed for diligence workflows.",
      "Project achieved Top 10 finalist recognition in the Google Gen AI Exchange Hackathon.",
    ],
    tags: ["SaaS", "Web", "Strategy"],
    liveUrl: "https://startup-analyst-xi.vercel.app/",
    image: "/projects/startup-analyst-hero.png",
    galleryImages: [
      "/projects/startup-analyst-hero.png",
      "/projects/startup-analyst-results.png",
      "/projects/startup-analyst-canvas.png",
    ],
    featured: true,
  },
  {
    slug: "slick-stiles",
    title: "Slick Stiles",
    client: "Slick Stiles",
    context:
      "Built a bold D2C ecommerce experience for premium phone cases with a high-energy visual style and conversion-focused shopping flow.",
    outcomes: [
      "Designed a distinct, brand-forward storefront that keeps product discovery fast while preserving a unique visual identity.",
      "Implemented clear catalog-to-PDP journey with pricing visibility, variant selection, and direct buy actions.",
      "Structured merchandising sections for collections and offers to support repeat drops and campaign-led traffic.",
    ],
    tags: ["Web", "Marketing", "Strategy"],
    liveUrl: "https://slickstiles.com/",
    image: "/projects/slickstiles-landing.png",
    galleryImages: [
      "/projects/slickstiles-landing.png",
      "/projects/slickstiles-listing.png",
      "/projects/slickstiles-product.png",
      "/projects/slickstiles-grid.png",
    ],
    featured: true,
  },
  {
    slug: "snaptix-ai",
    title: "Snaptix.ai",
    client: "Snaptix",
    context:
      "Built an AI-powered SaaS platform that helps businesses upload spreadsheets, analyze data, and receive structured, actionable recommendations through a guided dashboard workflow.",
    outcomes: [
      "Converted manual spreadsheet analysis into a subscription-ready SaaS experience with uploads, guided analysis, summaries, and report-style outputs.",
      "Designed a purpose-built workflow (instead of generic chatbot UX): upload data, choose analysis type, view structured insights, and export results.",
      "Implemented product foundations for SaaS scaling: plan-based access, feature gating, account flow, and payment-gateway-ready architecture.",
    ],
    tags: ["SaaS", "Web", "Strategy"],
    liveUrl: "https://www.snaptix.ai/",
    image: "/projects/snaptix-landing.png",
    galleryImages: [
      "/projects/snaptix-landing.png",
      "/projects/snaptix-dashboard.png",
      "/projects/snaptix-briefing.png",
    ],
    featured: true,
  },
  {
    slug: "aurora-analytics",
    title: "Aurora Analytics",
    client: "Aurora Analytics",
    context:
      "AI-powered analytics SaaS needed a credible product story and a site that matched enterprise buyers.",
    outcomes: [
      "Shipped a narrative-led landing plus pricing that clarified complex ML outputs.",
      "Cut bounce on the homepage by tightening hero messaging and proof placement.",
      "Established reusable sections for future feature launches.",
    ],
    tags: ["SaaS", "Web", "Strategy"],
    liveUrl: "https://example.com",
    image: "/projects/aurora.svg",
    featured: true,
  },
  {
    slug: "northwind-health",
    title: "Northwind Health",
    client: "Northwind Health",
    context:
      "Healthcare workflow startup launching a patient-facing portal alongside a B2B pitch.",
    outcomes: [
      "Dual-audience IA: patients get clarity; buyers get outcomes and security posture.",
      "Component library aligned marketing pages with the product UI language.",
      "Launch playbook including email drips and landing experiments.",
    ],
    tags: ["Web", "Marketing", "Strategy"],
    liveUrl: "https://example.com",
    image: "/projects/northwind.svg",
    featured: true,
  },
  {
    slug: "signalforge",
    title: "SignalForge",
    client: "SignalForge",
    context:
      "Developer tool for event pipelines—technical readers, fast scans, and strong SEO.",
    outcomes: [
      "Docs-adjacent marketing site with code-forward samples and fast LCP.",
      "Structured metadata for SDK pages to improve discoverability.",
      "Campaign landing templates for conference and launch pushes.",
    ],
    tags: ["SaaS", "Web", "Marketing"],
    liveUrl: "https://example.com",
    image: "/projects/signalforge.svg",
    featured: true,
  },
  {
    slug: "copperlane-retail",
    title: "Copperlane Retail",
    client: "Copperlane",
    context:
      "Regional retailer modernizing omnichannel presence with seasonal campaigns.",
    outcomes: [
      "Campaign system for promos with repeatable blocks and photography rhythm.",
      "Store locator and hours surfaced without hurting mobile performance.",
      "Quarterly roadmap for SEO content clusters.",
    ],
    tags: ["Web", "Marketing"],
    liveUrl: "https://example.com",
    image: "/projects/copperlane.svg",
    featured: true,
  },
  {
    slug: "ledgerwell",
    title: "Ledgerwell",
    client: "Ledgerwell",
    context:
      "Fintech onboarding flows needed trust, compliance cues, and crisp activation.",
    outcomes: [
      "Information architecture that separated investor vs. SMB paths cleanly.",
      "Experiment backlog mapped to analytics events for growth reviews.",
      "Sales one-pagers aligned with the site narrative.",
    ],
    tags: ["Strategy", "Web", "Marketing"],
    liveUrl: "https://example.com",
    image: "/projects/ledgerwell.svg",
    featured: false,
  },
  {
    slug: "studio-elara",
    title: "Studio Elara",
    client: "Studio Elara",
    context:
      "Premium consumer brand refresh with editorial storytelling and launch films.",
    outcomes: [
      "Visual system tied marketing and product drops under one brand roof.",
      "Email and paid landing parity tests lifted repeat visits.",
      "Research-backed messaging hierarchy for founder-led sales.",
    ],
    tags: ["Marketing", "Strategy", "Web"],
    liveUrl: "https://example.com",
    image: "/projects/elara.svg",
    featured: true,
  },
];
