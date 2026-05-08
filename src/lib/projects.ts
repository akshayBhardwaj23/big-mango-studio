import type { Project, ProjectTag } from "@/content/projects";
import { projects } from "@/content/projects";

export function getAllProjects(): Project[] {
  return [...projects];
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}

export function getAllTags(): ProjectTag[] {
  const set = new Set<ProjectTag>();
  for (const p of projects) {
    for (const t of p.tags) set.add(t);
  }
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}

export function filterProjectsByTag(tag: ProjectTag | "All"): Project[] {
  if (tag === "All") return getAllProjects();
  return projects.filter((p) => p.tags.includes(tag));
}
