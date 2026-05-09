import Image from "next/image";
import Link from "next/link";
import { bookConversionPlan, getWebsite7Days } from "@/content/cta";
import { mailtoLink } from "@/content/site";
import { offers } from "@/content/services";

function HeaderCta({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-3 rounded-full border border-white/35 bg-black/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition hover:border-white/55 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
    >
      <span>{label}</span>
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-white transition group-hover:brightness-110">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
        >
          <path
            d="M9 5l7 7-7 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-b-[2.5rem] bg-black md:rounded-b-[3.5rem]">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-15%,rgba(255,92,26,0.55)_0%,rgba(180,50,20,0.25)_28%,transparent_58%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 top-1/4 h-[420px] w-[420px] rounded-full bg-orange-600/25 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-red-900/20 blur-[80px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:pb-20 lg:pt-16">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[1fr_minmax(0,420px)] lg:items-end lg:gap-12">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
              Conversion-focused studio · SaaS &amp; AI
            </p>
            <h1 className="mt-6 font-[family-name:var(--font-display)] text-[clamp(2.1rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-white">
              We turn SaaS &amp; AI products into{" "}
              <span className="text-[var(--accent)]">high-converting websites</span>{" "}
              that drive demos, trials, and revenue.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">
              Traffic should turn into pipeline. We ship in 7-14 days with copy,
              UX, and measurement aligned to signups and revenue, not decoration.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <HeaderCta
                href={mailtoLink(bookConversionPlan.mailSubject)}
                label={bookConversionPlan.label}
              />
              <HeaderCta
                href={mailtoLink(getWebsite7Days.mailSubject)}
                label={getWebsite7Days.label}
              />
              <Link
                href="/#work"
                className="text-center text-sm font-medium text-white/65 underline-offset-4 transition hover:text-white hover:underline sm:text-left"
              >
                See recent work →
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900 shadow-2xl shadow-black/60 sm:aspect-[3/4] lg:aspect-square">
              <Image
                src="/hero-creative.png"
                alt=""
                fill
                priority
                className="object-cover object-[center_20%]"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-orange-900/10"
                aria-hidden
              />
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 border-t border-white/10 pt-10 sm:grid-cols-3 md:gap-6">
          {offers.map((o, i) => (
            <div key={o.title} className="min-w-0">
              <span className="font-mono text-xs font-medium tabular-nums text-[var(--accent)]">
                #{String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 font-[family-name:var(--font-display)] text-sm font-semibold leading-snug text-white sm:text-base">
                {o.title}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-white/55 sm:text-sm">
                {o.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
