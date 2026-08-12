import { PROJECTS } from "@/data/projects";
import RevealSection from "@/components/ui/RevealSection";
import { ProjectCard } from "./ProjectCard";

export function ProjectGrid() {
  return (
    <div>
      <p className="text-brand-cyan text-sm font-mono tracking-[4px] uppercase mb-8">
        Realizacje
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 auto-rows-fr">
        {PROJECTS.map((project, i) => (
          <RevealSection key={project.slug} custom={i * 0.1}>
            <ProjectCard project={project} />
          </RevealSection>
        ))}
      </div>
    </div>
  );
}
