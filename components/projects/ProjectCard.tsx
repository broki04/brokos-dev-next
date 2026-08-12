import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col h-full rounded-2xl border border-brand-surface bg-brand-dark overflow-hidden hover:border-brand-subtle transition-all duration-300 hover:-translate-y-1">
      <div className="relative aspect-4/3 overflow-hidden bg-brand-darker">
        <Image
          src={project.image}
          alt={project.title}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          fill
          sizes="50vw"
          priority
        />
        <div className="absolute inset-0 bg-brand-darker/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          {project.href && project.href !== "#" && (
            <a
              href={`/projects/${project.slug}`}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-brand-cyan text-brand-darker text-xs sm:text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <ExternalLink size={14} />
              Sprawdź
            </a>
          )}
        </div>{" "}
      </div>

      <div className="flex flex-col gap-3 p-5 flex-1">
        <h3 className="text-brand-text font-bold text-base">{project.title}</h3>
        <p className="text-brand-muted text-sm leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-2 py-0.5 rounded-md bg-brand-surface text-brand-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
