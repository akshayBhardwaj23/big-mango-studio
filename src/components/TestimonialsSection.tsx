import type { Testimonial } from "@/content/testimonials";
import { testimonials } from "@/content/testimonials";

function QuoteCard({ t }: { t: Testimonial }) {
  const attribution = (
    <p className="mt-5 text-sm font-medium text-white">
      <span className="text-neutral-500">{t.name}</span>
      {t.role ? (
        <span className="text-neutral-500">, {t.role}</span>
      ) : null}
      {t.company ? (
        <span className="text-neutral-400"> · {t.company}</span>
      ) : null}
    </p>
  );

  return (
    <blockquote className="flex h-full flex-col rounded-[1.75rem] border border-white/[0.08] bg-[var(--surface-elevated)] p-7 shadow-xl shadow-black/40 sm:p-8">
      <p className="text-lg leading-relaxed text-neutral-300">&ldquo;{t.quote}&rdquo;</p>
      {t.href ? (
        <a
          href={t.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto block pt-4 text-left hover:text-[var(--accent)]"
        >
          {attribution}
        </a>
      ) : (
        <div className="mt-auto pt-4">{attribution}</div>
      )}
    </blockquote>
  );
}

export function TestimonialsSection() {
  return (
    <section className="border-y border-white/[0.06] bg-[var(--surface-muted)] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
          Proof
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          What founders say
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-neutral-400">
          Short quotes from teams we&apos;ve built launches with.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
          {testimonials.map((t) => (
            <QuoteCard key={`${t.quote}-${t.company}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
