import { servicePillars } from "@/content/services";

export function ServiceGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
      {servicePillars.map((s, i) => (
        <article
          key={s.title}
          className="rounded-[1.75rem] border border-white/[0.08] bg-[var(--surface-elevated)] p-7 shadow-xl shadow-black/40 sm:p-9"
        >
          <span className="font-mono text-xs font-medium tabular-nums text-[var(--accent)]">
            #{String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-bold text-white">
            {s.title}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-neutral-400">
            {s.body}
          </p>
        </article>
      ))}
    </div>
  );
}
