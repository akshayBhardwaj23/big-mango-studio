import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-black">
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
            404
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold text-white sm:text-4xl">
            Page not found
          </h1>
          <p className="mt-4 max-w-md text-neutral-400">
            That route does not exist. Head back home or browse projects.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/" variant="primary" className="px-8 py-3">
              Home
            </ButtonLink>
            <ButtonLink href="/work" variant="secondary" className="px-8 py-3">
              Projects
            </ButtonLink>
          </div>
          <Link
            href="/"
            className="mt-12 text-sm text-neutral-500 transition hover:text-white"
          >
            bigmangostudio.com
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
