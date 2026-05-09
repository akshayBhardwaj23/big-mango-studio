import { ButtonLink } from "@/components/ButtonLink";
import { bookConversionPlan } from "@/content/cta";
import { pricingTiers } from "@/content/pricing";
import { mailtoLink } from "@/content/site";

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="scroll-mt-24 bg-[var(--surface-muted)] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Pricing
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Clear packages. No mystery invoices.
            </h2>
          </div>
          <p className="shrink-0 rounded-full border border-[var(--accent)]/35 bg-[var(--accent)]/10 px-4 py-2 text-center text-xs font-semibold uppercase tracking-wide text-[var(--accent)] sm:mt-10 sm:text-left">
            Typical delivery: 7-14 days
          </p>
        </div>
        <p className="mt-4 max-w-2xl text-lg text-neutral-400">
          Ranges beat silence. Most projects fall into one of these. Final quote
          depends on scope, assets, and integrations; we&apos;ll confirm on a
          call.
        </p>
        <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-neutral-200">
          Most founders don&apos;t need more pages: they need clarity and a site
          that actually converts.
        </p>
        <p className="mt-4 max-w-2xl rounded-2xl border border-[var(--accent)]/25 bg-[var(--accent)]/10 px-5 py-4 text-base font-medium leading-relaxed text-neutral-200">
          Most founders start with ₹60k+ to ₹1L+ projects once we define scope on
          a call.
        </p>
        <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {pricingTiers.map((tier) => (
            <article
              key={tier.name}
              className="flex flex-col rounded-[1.75rem] border border-white/[0.08] bg-[var(--surface-elevated)] p-8 shadow-xl shadow-black/40"
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500">
                {tier.name}
              </p>
              <p className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold text-white">
                {tier.price}
              </p>
              <p className="mt-3 text-base font-semibold leading-snug text-white">
                {tier.headline}
              </p>
              <ul className="mt-6 flex-1 space-y-3 text-sm text-neutral-300">
                {tier.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-neutral-400">
                {tier.bestFor}
              </p>
              <div className="mt-5 space-y-2 rounded-xl border border-white/10 bg-black/25 p-4 text-sm">
                {tier.differentiation.avoid.map((line) => (
                  <p key={line} className="flex gap-2 text-neutral-500">
                    <span className="select-none text-neutral-600" aria-hidden>
                      ✕
                    </span>
                    <span>{line}</span>
                  </p>
                ))}
                {tier.differentiation.embrace.map((line) => (
                  <p key={line} className="flex gap-2 font-medium text-neutral-200">
                    <span className="select-none text-[var(--accent)]" aria-hidden>
                      ✓
                    </span>
                    <span>{line}</span>
                  </p>
                ))}
              </div>
              <ButtonLink
                href={mailtoLink(
                  `Big Mango Studio: Pricing question (${tier.name})`,
                )}
                variant="secondary"
                className="mt-8 w-full justify-center py-3"
              >
                Discuss {tier.name}
              </ButtonLink>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-[1.75rem] border border-white/[0.08] bg-[var(--surface-elevated)] p-8 text-center shadow-xl shadow-black/40 sm:p-10">
          <p className="font-[family-name:var(--font-display)] text-xl font-bold text-white sm:text-2xl">
            Not sure which plan fits?
          </p>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-neutral-400">
            Book a short call. You&apos;ll leave with a clear direction, even if
            we don&apos;t work together.
          </p>
          <ButtonLink
            href={mailtoLink(bookConversionPlan.mailSubject)}
            variant="primary"
            className="mt-8 inline-flex px-10 py-3.5 text-base"
          >
            {bookConversionPlan.label}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
