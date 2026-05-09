export type ProjectTag = "Web" | "SaaS" | "Marketing" | "Strategy";

export type Project = {
  slug: string;
  title: string;
  /** Optional public client name */
  client?: string;
  /** Client-facing outcome line: what changed for the business or buyer */
  context: string;
  /** Impact / clarity bullets (qualitative results welcome) */
  results: string[];
  /** What shipped: systems, pages, workflows */
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
      "Conversion-focused Shopify storefront that improved product discovery and campaign-led shopping so repeat drops stay on-brand without slowing checkout.",
    results: [
      "Clearer paths from campaigns to collections and buy actions",
      "Stronger brand trust signals next to product decisions",
      "Merchandising that supports launches without rebuilding the whole site each time",
    ],
    outcomes: [
      "Editorial homepage with hero campaigns, collection highlights, and social-proof blocks.",
      "End-to-end journeys across collections, quick-buy patterns, and PDP layouts tuned for fewer dead ends.",
      "Modular content blocks for seasonal drops and storytelling alongside commerce.",
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
      "Investor-style briefs from real pitch uploads so founders spend less time re-explaining the deck and more time moving diligence forward.",
    results: [
      "Faster path from messy PDFs to structured outputs teams can share",
      "Clearer diligence narrative for buyers reviewing startup claims",
      "Recognition as Top 10 finalist, Google Gen AI Exchange Hackathon",
    ],
    outcomes: [
      "Guided upload-to-brief flow with PDF/DOCX handling and fast processing.",
      "Structured outputs: scorecards, strategic views, and analysis sections.",
      "Investor-ready summaries aligned with how diligence reviews actually run.",
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
      "Conversion-focused D2C ecommerce that improved product discovery and reduced friction from browsing to checkout for premium phone cases.",
    results: [
      "Increased clarity in product selection and variant choices",
      "Reduced drop-offs across PDP to checkout with visible pricing and actions",
      "Improved perceived brand quality through a bold, consistent storefront",
    ],
    outcomes: [
      "Brand-forward catalog and PDP patterns with pricing and variants surfaced early.",
      "Merchandising sections built for collections, offers, and repeat traffic.",
      "Shopping flows that prioritize speed to buy without diluting the visual identity.",
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
      "Subscription-ready SaaS that turns spreadsheet chaos into guided analysis and exportable outputs so teams justify renewal with tangible workflow wins.",
    results: [
      "Less manual wrangling: uploads become repeatable analysis runs",
      "Clearer next steps for stakeholders who do not live inside the sheet",
      "Packaging that supports upgrades when teams outgrow ad-hoc usage",
    ],
    outcomes: [
      "Dashboard workflow: upload, analysis types, structured insights, exports.",
      "Purpose-built UX vs generic chat: predictable paths for business users.",
      "Foundations for plans, gating, accounts, and payments.",
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
      "Education-first markets product that improved comprehension for retail learners while keeping compliance framing obvious so trust scales with usage.",
    results: [
      "Clearer explanations that reduce confusion around tickers and concepts",
      "Portfolio flows that merge broker screenshots into one actionable view",
      "Education-only positioning visible where users make decisions",
    ],
    outcomes: [
      "AI Chat and portfolio surfaces with credit-based screenshot parsing.",
      "Structured answers with price context, summaries, and technical framing.",
      "Merge-from-upload UX with add/replace modes, edits, and insights scaffolding.",
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
      "Marketing site for an AI autopilot that clarified support-to-revenue narrative so buyers see workflow value before they hit signup.",
    results: [
      "Stronger clarity on what the product does for ops and revenue teams",
      "Demo sections that sell the loop without burying the call to action",
      "Dashboard-style proof blocks that support enterprise curiosity",
    ],
    outcomes: [
      "Minimal landing with live drafter preview and workflow storytelling.",
      "Walkthrough blocks pairing narrative beats with draft UI and actions.",
      "Insights-style proof modules for sentiment and automation impact.",
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
