import type { Project } from "@/data/projects";

const STATUS_LABEL: Record<NonNullable<Project["status"]>, string> = {
  live: "Live",
  wip: "W trakcie",
  archived: "Zarchiwizowany",
};

const STATUS_DOT: Record<NonNullable<Project["status"]>, string> = {
  live: "bg-green-400 animate-pulse",
  wip: "bg-yellow-400 animate-pulse",
  archived: "bg-brand-muted",
};

export function ProjectStatusBadge({
  status,
  className = "",
}: {
  status: NonNullable<Project["status"]>;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-mono px-2.5 py-1 rounded-full bg-brand-dark/70 backdrop-blur-sm border border-brand-surface text-brand-muted ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${STATUS_DOT[status]}`} />
      {STATUS_LABEL[status]}
    </span>
  );
}

export function ProjectStatusDot({
  status,
}: {
  status: NonNullable<Project["status"]>;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className={`w-2 h-2 rounded-full ${STATUS_DOT[status]}`} />
      <span className="text-brand-muted text-sm font-mono">
        {STATUS_LABEL[status]}
      </span>
    </div>
  );
}
