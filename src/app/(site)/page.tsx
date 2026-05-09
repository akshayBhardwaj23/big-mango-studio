import { FaqShort } from "@/components/FaqShort";
import { Hero } from "@/components/Hero";
import { LogoCloud } from "@/components/LogoCloud";
import { OfferSection } from "@/components/OfferSection";
import { PricingSection } from "@/components/PricingSection";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { ServiceGrid } from "@/components/ServiceGrid";
import { ButtonLink } from "@/components/ButtonLink";
import { WhoForSection } from "@/components/WhoForSection";
import { WhyUs } from "@/components/WhyUs";
import { siteConfig, mailtoLink } from "@/content/site";
import { getFeaturedProjects } from "@/lib/projects";

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <>
      <Hero />

      <LogoCloud />

      <WhyUs />

      <OfferSection />

      <Section
        id="services"
        eyebrow="How I build"
        title="Conversion-first execution — end to end."
        description="Engineering-backed builds for SaaS & AI: performance, clarity, and measurement — not decoration for its own sake."
        className="bg-[var(--surface-muted)]"
      >
        <ServiceGrid />
      </Section>

      <PricingSection />

      <Section
        id="work"
        eyebrow="Proof"
        title="Sites that ship and sell."
        description="SaaS, AI, and ecommerce launches — built for clarity, conversion, and ship speed."
        className="bg-black"
      >
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-10">
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} priority={i < 3} />
          ))}
        </div>
        <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink href="/work" variant="secondary" className="px-10 py-3.5 text-base">
            View all projects
          </ButtonLink>
          <ButtonLink
            href={mailtoLink("Get your website in 7 days — Big Mango Studio")}
            variant="primary"
            className="px-10 py-3.5 text-base"
          >
            Get your website in 7 days
          </ButtonLink>
        </div>
      </Section>

      <Section
        id="process"
        eyebrow="Process"
        title="Fast loop: align → ship → measure."
        description="Built for founders with deadlines — clear scope, visible progress, and iteration tied to conversion signals."
        className="bg-[var(--surface-muted)]"
      >
        <ProcessSteps />
      </Section>

      <WhoForSection />

      <Section
        eyebrow="FAQ"
        title="Questions founders ask before we start."
        description="Straight answers — no agency fog."
        align="center"
        className="bg-black"
      >
        <FaqShort />
      </Section>

      <section className="relative overflow-hidden border-t border-white/10 bg-gradient-to-br from-orange-600 via-[var(--accent-deep)] to-neutral-950 py-20 sm:py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.12)_0%,transparent_55%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Ready for a site that converts?
          </h2>
          <p className="mt-5 text-lg text-white/85">
            Book a 30-min call — we&apos;ll confirm scope, timeline (often 7–14
            days), and the fastest path to a live page.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink
              href={mailtoLink("Book a 30-min call — Big Mango Studio")}
              variant="inverse"
              className="px-10 py-3.5 text-base shadow-xl shadow-black/30"
            >
              Book a 30-min call
            </ButtonLink>
            <ButtonLink
              href={mailtoLink("Get your website in 7 days — Big Mango Studio")}
              variant="secondary"
              className="border-white/40 bg-black/25 px-10 py-3.5 text-base text-white backdrop-blur-sm hover:bg-black/40"
            >
              Get your website in 7 days
            </ButtonLink>
          </div>
          <p className="mt-6 text-sm text-white/70">
            Prefer email?{" "}
            <a
              href={mailtoLink()}
              className="font-medium text-white underline-offset-4 hover:underline"
            >
              {siteConfig.email}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
