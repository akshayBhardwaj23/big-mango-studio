import { ButtonLink } from "@/components/ButtonLink";
import Image from "next/image";
import { bookConversionPlan } from "@/content/cta";
import { mailtoLink } from "@/content/site";

export function WhyUs() {
  return (
    <section className="bg-black py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
          Why us
        </p>

        <div className="mt-6 rounded-[1.75rem] border-2 border-[var(--accent)]/40 bg-[var(--surface-elevated)] px-6 py-8 shadow-xl shadow-black/40 sm:px-10 sm:py-10">
          <p className="font-[family-name:var(--font-display)] text-2xl font-bold leading-snug tracking-tight text-white sm:text-3xl md:text-[1.75rem] md:leading-tight">
            We don&apos;t start with design; we{" "}
            <span className="text-[var(--accent)]">start with conversion</span>.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-neutral-400 sm:text-lg">
            Every section earns its place: what the visitor must understand, what
            they should do next, and what removes doubt before they buy or book.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              An engineering-led studio: product{" "}
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
                Google Gen AI Exchange Hackathon: Top 10 Finalist
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

          <div className="space-y-8 text-base leading-relaxed text-neutral-400 sm:text-lg">
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-white">
                What we do differently
              </h3>
              <p className="mt-3">
                We&apos;re a small product-minded team led by Akshay Bhardwaj,
                with engineers and builders who&apos;ve shipped banking platforms,
                AI tools, and launch sites where performance and behavior actually
                matter. We don&apos;t treat your homepage like a portfolio piece.
              </p>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-white">
                Why it matters
              </h3>
              <p className="mt-3">
                SaaS and AI buyers decide fast. If the story is fuzzy or the
                next step is unclear, traffic leaks. We align messaging, layout,
                and CTAs so visitors see value and know what to do, whether
                that&apos;s a demo, a trial, or a purchase.
              </p>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-white">
                What you get
              </h3>
              <p className="mt-3">
                Launch-ready pages where the goal isn&apos;t aesthetics alone:
                more qualified signups, more demos, faster decisions. We work
                with founders to go from zero to a live site in days or weeks,
                with clarity and conversion from day one.
              </p>
            </div>

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
                “No fluff. No bloated agency process. Just focused builds from our
                team that ship fast and perform.”
              </p>
            </div>
            <ButtonLink
              href={mailtoLink(bookConversionPlan.mailSubject)}
              variant="primary"
              className="mt-2 inline-flex px-8 py-3.5 text-base"
            >
              {bookConversionPlan.label}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
