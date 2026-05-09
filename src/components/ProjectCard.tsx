import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";
import { ButtonLink } from "@/components/ButtonLink";

type Props = {
  project: Project;
  priority?: boolean;
};

export function ProjectCard({ project, priority }: Props) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[var(--surface-elevated)] shadow-xl shadow-black/50 transition hover:border-white/15">
      <Link
        href={`/work/${project.slug}`}
        className="relative block aspect-[16/11] bg-neutral-900"
      >
        <Image
          src={project.image}
          alt={`Preview for ${project.title}`}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <span className="sr-only">View case: {project.title}</span>
      </Link>
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-medium text-neutral-300"
            >
              {t}
            </span>
          ))}
        </div>
        <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-bold text-white">
          <Link
            href={`/work/${project.slug}`}
            className="transition hover:text-[var(--accent)]"
          >
            {project.title}
          </Link>
        </h3>
        {project.client ? (
          <p className="mt-1 text-sm text-neutral-500">{project.client}</p>
        ) : null}
        <p className="mt-3 text-sm leading-relaxed text-neutral-400">
          {project.context}
        </p>
        <ul className="mt-4 space-y-2 text-sm text-neutral-300">
          {project.outcomes.slice(0, 2).map((o) => (
            <li key={o} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
              <span>{o}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={`/work/${project.slug}`} variant="secondary">
            Case study
          </ButtonLink>
          <ButtonLink href={project.liveUrl} variant="ghost">
            View live site
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
