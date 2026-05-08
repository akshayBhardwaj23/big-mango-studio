import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost" | "inverse";
} & Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "className" | "children"
>;

const variantClass: Record<NonNullable<Props["variant"]>, string> = {
  primary:
    "inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-950/40 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]",
  secondary:
    "inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/35 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40",
  ghost:
    "inline-flex items-center justify-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-white/75 underline-offset-4 hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40",
  inverse:
    "inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400",
};

export function ButtonLink({
  href,
  children,
  className,
  variant = "primary",
  ...rest
}: Props) {
  const classes = `${variantClass[variant]} ${className ?? ""}`.trim();
  const external =
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("//");

  if (!external) {
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      {...rest}
    >
      {children}
    </a>
  );
}
