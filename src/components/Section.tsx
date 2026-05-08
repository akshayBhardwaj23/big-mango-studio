import type { ReactNode } from "react";

type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  align?: "left" | "center";
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
  align = "left",
}: Props) {
  const headerAlign =
    align === "center"
      ? "mx-auto max-w-3xl text-center"
      : "max-w-3xl text-left";

  return (
    <section
      id={id}
      className={`scroll-mt-24 py-16 sm:py-24 ${className}`.trim()}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className={`${headerAlign} mb-10 sm:mb-14`}>
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            {title}
          </h2>
          {description ? (
            <p
              className={`mt-4 max-w-2xl text-lg leading-relaxed text-neutral-400 sm:text-xl ${align === "center" ? "mx-auto" : ""}`}
            >
              {description}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
