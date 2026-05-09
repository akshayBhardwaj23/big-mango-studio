export type Testimonial = {
  quote: string;
  name: string;
  role?: string;
  company: string;
  href?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Akshay helped us simplify our product story and improve clarity massively.",
    name: "Founder",
    company: "ZYYP",
    href: "https://zyyp.ai/",
  },
  {
    quote:
      "Fast execution without the agency theater. Our funnel finally reads like the product we sell.",
    name: "Founder",
    company: "Early-stage SaaS",
  },
  {
    quote:
      "The site matches how technical buyers evaluate us: clear claims, proof, and a single next step.",
    name: "Product lead",
    company: "AI startup",
  },
];
