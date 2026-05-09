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

/** Portfolio case studies. Images live in /public/projects/ (e.g. "/projects/my-shot.png"). */
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
    slug: "magicstocks-ai",
    title: "MagicStocks.ai",
    client: "MagicStocks.ai",
    context:
      "Built an education-first AI platform for Indian markets—guided chat that explains stocks and concepts (not prescriptions), portfolio ingestion from broker screenshots into one view, and a conversion-ready SaaS dashboard aligned with compliance framing.",
    outcomes: [
      "Shipped a dark-mode product UI with AI Chat, portfolio workflows, and credit-based screenshot parsing—clear hierarchy for retail learners and repeat usage.",
      "Designed conversational flows that return structured, cited-style answers (price context, summaries, technical framing) while keeping education-only positioning visible.",
      "Implemented portfolio merge-from-uploads UX with add/replace modes, manual edits, and insights scaffolding—built for real holdings workflows without generic chat chrome.",
    ],
    tags: ["SaaS", "Web", "Strategy"],
    liveUrl: "https://magicstocks.ai/",
    image: "/projects/magicstocks-hero.png",
    galleryImages: [
      "/projects/magicstocks-hero.png",
      "/projects/magicstocks-portfolio.png",
      "/projects/magicstocks-chat.png",
    ],
    featured: true,
  },
  {
    slug: "zyyp-ai",
    title: "ZYYP",
    client: "zyyp.ai",
    context:
      "Built a light, conversion-led marketing site for an AI autopilot product—support triage, drafted replies with Shopify-style actions, and analytics narratives—plus interactive demo sections that show the product without burying the signup path.",
    outcomes: [
      "Designed a minimal SaaS landing with floating nav, peach accents, and a live drafter preview that sells the workflow (email → AI draft → order updates → insight pulse).",
      "Shipped a step-by-step walkthrough block pairing narrative beats with a high-confidence draft UI and clear action labels for ops teams.",
      "Surfaced an insights story with dashboard-style proof: revenue signals, sentiment trends, and automation impact cards alongside the hero narrative.",
    ],
    tags: ["SaaS", "Web", "Marketing"],
    liveUrl: "https://zyyp.ai/",
    image: "/projects/zyyp-hero.png",
    galleryImages: [
      "/projects/zyyp-hero.png",
      "/projects/zyyp-demo.png",
      "/projects/zyyp-insights.png",
    ],
    featured: true,
  },
];
