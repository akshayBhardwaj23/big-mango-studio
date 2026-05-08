import type { Metadata } from "next";
import { WorkFilter } from "@/components/WorkFilter";
import { Section } from "@/components/Section";
import { siteConfig } from "@/content/site";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description: `SaaS & AI launches and high-converting sites from ${siteConfig.name}.`,
  openGraph: {
    title: `Work — ${siteConfig.name}`,
    description: `Selected SaaS, AI, and product marketing builds.`,
  },
};

export default function WorkPage() {
  const all = getAllProjects();

  return (
    <Section
      eyebrow="Portfolio"
      title="Work across web, SaaS, and campaigns."
      description="Filter by focus area. Each card links to a short case write-up and the live site where available."
      className="bg-black pt-12 sm:pt-16"
    >
      <WorkFilter projects={all} />
    </Section>
  );
}
