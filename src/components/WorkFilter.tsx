"use client";

import { useMemo, useState } from "react";
import type { Project, ProjectTag } from "@/content/projects";
import { getAllTags } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";

type Filter = "All" | ProjectTag;

type Props = {
  projects: Project[];
};

export function WorkFilter({ projects }: Props) {
  const tags = useMemo(() => {
    const all = getAllTags();
    return ["All" as const, ...all];
  }, []);

  const [filter, setFilter] = useState<Filter>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.tags.includes(filter));
  }, [filter, projects]);

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filter projects by type"
      >
        {tags.map((tag) => {
          const selected = filter === tag;
          return (
            <button
              key={tag}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setFilter(tag)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                selected
                  ? "bg-[var(--accent)] text-white shadow-lg shadow-orange-950/30"
                  : "border border-white/15 bg-white/5 text-neutral-300 hover:border-white/25 hover:bg-white/10"
              }`}
            >
              {tag}
            </button>
          );
        })}
      </div>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:gap-10">
        {filtered.map((p, i) => (
          <ProjectCard key={p.slug} project={p} priority={i < 2} />
        ))}
      </div>
      {filtered.length === 0 ? (
        <p className="mt-10 text-center text-neutral-400">
          No projects in this category yet. Try another filter.
        </p>
      ) : null}
    </div>
  );
}
