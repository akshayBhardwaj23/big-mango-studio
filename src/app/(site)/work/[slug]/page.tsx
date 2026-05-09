import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { siteConfig, mailtoLink } from "@/content/site";
import {
  getAllSlugs,
  getProjectBySlug,
} from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project" };

  return {
    title: project.title,
    description: project.context,
    openGraph: {
      title: `${project.title} — ${siteConfig.name}`,
      description: project.context,
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article className="border-b border-white/10 bg-black pb-24 pt-12 sm:pt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
          Case study
        </p>
        <h1 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          {project.title}
        </h1>
        {project.client ? (
          <p className="mt-3 text-lg text-neutral-500">{project.client}</p>
        ) : null}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-neutral-200"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-neutral-900 shadow-2xl shadow-black/60">
          <Image
            src={project.image}
            alt={`Project preview for ${project.title}`}
            fill
            priority
            className="object-cover transition duration-700"
            sizes="(max-width: 1200px) 100vw, 1152px"
          />
        </div>
        {project.galleryImages?.length ? (
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {project.galleryImages.map((img, idx) => (
              <a
                key={img}
                href={img}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-neutral-900"
              >
                <Image
                  src={img}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  fill
                  className="object-cover transition duration-300 hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </a>
            ))}
          </div>
        ) : null}

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_340px] lg:gap-16">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Context
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-300">
              {project.context}
            </p>

            <h2 className="mt-12 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Outcomes
            </h2>
            <ul className="mt-5 space-y-4 text-base leading-relaxed text-neutral-200">
              {project.outcomes.map((o) => (
                <li key={o} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="h-fit rounded-[1.75rem] border border-white/[0.08] bg-[var(--surface-elevated)] p-7 shadow-xl shadow-black/40">
            <p className="text-sm font-semibold text-white">Launch link</p>
            <ButtonLink
              href={project.liveUrl}
              variant="primary"
              className="mt-5 w-full justify-center py-3.5"
            >
              View live site
            </ButtonLink>
            <p className="mt-6 text-sm leading-relaxed text-neutral-400">
              Replace placeholder URLs in{" "}
              <code className="rounded-md border border-white/10 bg-black/40 px-2 py-1 font-mono text-xs text-neutral-200">
                src/content/projects.ts
              </code>{" "}
              with your production links.
            </p>
            <ButtonLink
              href={mailtoLink(`Book a 30-min call — similar to ${project.title}`)}
              variant="secondary"
              className="mt-5 w-full justify-center py-3.5"
            >
              Book a 30-min call
            </ButtonLink>
          </aside>
        </div>
      </div>
    </article>
  );
}
