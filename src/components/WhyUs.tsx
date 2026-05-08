import { ButtonLink } from "@/components/ButtonLink";
import Image from "next/image";
import { mailtoLink } from "@/content/site";

export function WhyUs() {
  return (
    <section className="bg-black py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Why us
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Led by an engineer who understands product{" "}
            <span className="text-[var(--accent)]">+ conversion</span>.
          </h2>
          <div className="mt-8 rounded-2xl border border-white/[0.1] bg-[var(--surface-elevated)] p-4">
            <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-white/10">
              <Image
                src="/akshay-bhardwaj.png"
                alt="Akshay Bhardwaj"
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
              <div>
              <p className="font-semibold text-white">Akshay Bhardwaj</p>
                <p className="text-sm text-neutral-400">
                  Founder, Big Mango Studio
                </p>
              <a
                href="https://www.linkedin.com/in/akshaybhardwaj-23/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-300 underline-offset-4 hover:text-white hover:underline"
              >
                LinkedIn profile
              </a>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div className="rounded-xl border border-white/10 bg-black/30 px-2 py-2">
                <p className="text-xs text-neutral-500">Experience</p>
                <p className="text-sm font-semibold text-white">10+ years</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/30 px-2 py-2">
                <p className="text-xs text-neutral-500">Focus</p>
                <p className="text-sm font-semibold text-white">SaaS + AI</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/30 px-2 py-2">
                <p className="text-xs text-neutral-500">Approach</p>
                <p className="text-sm font-semibold text-white">Conversion</p>
              </div>
            </div>
          </div>
          <div className="mt-6 rounded-[1.5rem] border border-white/[0.1] bg-[var(--surface-elevated)] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Recognition
            </p>
            <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold text-white">
              Google Gen AI Exchange Hackathon — Top 10 Finalist
            </h3>
            <p className="mt-2 text-sm text-neutral-400">
              Recognized among nationwide submissions for the AI Analyst for
              Startup Evaluation problem statement.
            </p>
            <a
              href="/google-hackathon-certificate.png"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block overflow-hidden rounded-xl border border-white/10"
            >
              <Image
                src="/google-hackathon-certificate.png"
                alt="Google Gen AI Exchange Hackathon certificate for Akshay Bhardwaj"
                width={1200}
                height={900}
                className="h-auto w-full object-cover"
              />
            </a>
            <a
              href="/google-hackathon-certificate.png"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm text-neutral-300 underline-offset-4 hover:text-white hover:underline"
            >
              View full certificate
            </a>
          </div>
        </div>
        <div className="space-y-5 text-lg leading-relaxed text-neutral-400">
          <p>
            Big Mango Studio is not a traditional agency or a design-only
            studio. We are led by Akshay Bhardwaj, an engineer who has spent
            years building real products — from banking platforms to AI tools —
            where performance, clarity, and user behavior actually matter.
          </p>
          <p>
            That experience changes how we build websites. We don&apos;t start
            with design — we start with conversion: what does the user need to
            understand, what action should they take, and what removes doubt?
          </p>
          <p>
            We&apos;ve built AI SaaS products, product surfaces, and
            launch-ready marketing pages where the goal isn&apos;t aesthetics
            — it&apos;s
            outcomes: more qualified signups, more demos, and faster decisions.
          </p>
          <p>
            Today, we work with SaaS and AI founders to take ideas from zero
            → live site in days, not months — with a focus on clarity, speed,
            and conversion from day one.
          </p>
          <div className="rounded-[1.5rem] border border-white/[0.1] bg-[var(--surface-elevated)] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Background
            </p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-300">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>10+ years building products and brands</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>Worked on large-scale banking and product platforms</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>Built AI SaaS products and tools</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>Focus: conversion, performance, and product clarity</span>
              </li>
            </ul>
            <p className="mt-5 text-sm italic text-white">
              “No fluff. No bloated agency process. Just focused builds that
              ship fast and perform.”
            </p>
          </div>
          <ButtonLink
            href={mailtoLink("Book a 30-min call — Big Mango Studio")}
            variant="primary"
            className="mt-4 inline-flex px-8 py-3.5 text-base"
          >
            Book a 30-min call
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
