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
    <section className="relative flex min-h-[min(88vh,56rem)] flex-col overflow-hidden rounded-b-[2.5rem] bg-black md:rounded-b-[3.5rem]">
      <Image
        src="/hero-background.png"
        alt=""
        fill
        priority
        className="object-cover object-[center_25%] sm:object-[center_20%]"
        sizes="100vw"
      />
      {/* Readability: darken left (copy zone), lighter toward right so the portrait reads */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/25 sm:from-black sm:via-black/70 sm:to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_70%_40%,transparent_0%,rgba(0,0,0,0.35)_55%,rgba(0,0,0,0.55)_100%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-between gap-12 px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:gap-16 lg:pb-20 lg:pt-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 lg:items-start xl:gap-16">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/75 drop-shadow-sm">
              Conversion-focused studio · SaaS &amp; AI
            </p>
            <h1 className="mt-6 font-[family-name:var(--font-display)] text-[clamp(2.1rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-white drop-shadow-md">
              We turn SaaS &amp; AI products into{" "}
              <span className="text-[var(--accent)]">high-converting websites</span>{" "}
              that drive demos, trials, and revenue.
            </h1>
          </div>
          <div className="flex min-w-0 flex-col lg:border-l lg:border-white/10 lg:pl-12">
            <p className="max-w-xl text-lg leading-relaxed text-white/90 drop-shadow lg:max-w-none sm:text-xl">
              Traffic should turn into pipeline. We ship in 7-14 days with copy,
              UX, and measurement aligned to signups and revenue, not decoration.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 lg:mt-10">
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
                className="text-center text-sm font-medium text-white/80 underline-offset-4 transition hover:text-white hover:underline sm:text-left"
              >
                See recent work →
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 border-t border-white/15 pt-10 sm:grid-cols-3 md:gap-6">
          {offers.map((o, i) => (
            <div key={o.title} className="min-w-0">
              <span className="font-mono text-xs font-medium tabular-nums text-[var(--accent)]">
                #{String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 font-[family-name:var(--font-display)] text-sm font-semibold leading-snug text-white sm:text-base">
                {o.title}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-white/65 sm:text-sm">
                {o.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
