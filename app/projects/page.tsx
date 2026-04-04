import Image from "next/image";
import heroImage from "@/public/hero-bg.svg";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiSass,
  SiPhp,
  SiMysql,
  SiWordpress,
} from "react-icons/si";
import { Project, PROJECTS } from "@/data/projects";
import { ExternalLink } from "lucide-react";
import RevealSection from "@/components/ui/RevealSection";

const TIMELINE = [
  {
    year: "2020",
    title: "Pierwsze kroki",
    desc: "Zacząłem naukę HTML i CSS - pierwsze statyczne strony i eksperymenty z layoutem.",
  },
  {
    year: "2022",
    title: "JavaScript i logika",
    desc: "Nauka JavaScript, DOM, pierwsze interaktywne projekty i zabawy z API.",
  },
  {
    year: "2024",
    title: "React i nowoczesny stack",
    desc: "Przejście na React, TypeScript i TailwindCSS. Pierwsze SPA i własne projekty.",
  },
  {
    year: "2025",
    title: "Next.JS i zaawansowane projekty",
    desc: "App Router, Server Components, integracje z zewnętrznym API i własne dashboardy.",
  },
  {
    year: "2026",
    title: "Otwarcie na klientów",
    desc: "Rozbudowane portfolio, aktywne szukanie pierwszych zleceń komercyjnych.",
  },
];

const STACKS = [
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
  { icon: SiSass, name: "Sass", color: "#CC6699" },
  { icon: SiPhp, name: "PHP", color: "#777BB4" },
  { icon: SiMysql, name: "MySQL", color: "#4479A1" },
  { icon: SiWordpress, name: "WordPress", color: "#21759B" },
];

function TimelineItem({
  year,
  title,
  desc,
  inLast,
}: {
  year: string;
  title: string;
  desc: string;
  inLast: boolean;
}) {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-brand-cyan shrink-0 mt-1 ring-4 ring-brand-cyan/20" />
        {!inLast && <div className="w-px flex-1 bg-brand-surface mt-2" />}
      </div>

      <div className="pb-10">
        <span className="text-brand-cyan text-xs font-mono tracking-[2px]">
          {year}
        </span>
        <h3 className="text-brand-text font-semibold text-sm mt-1 mb-1">
          {title}
        </h3>
        <p className="text-brand-muted text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function StackBadge({
  icon: Icon,
  name,
  color,
}: {
  icon: React.ElementType;
  name: string;
  color: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-brand-surface bg-brand-dark px-4 py-3 hover:border-brand-subtle transition-colors duration-300">
      <Icon size={20} style={{ color }} />
      <span className="text-brand-muted text-sm font-medium">{name}</span>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
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

        <div className="absolute inset-0 bg-brand-darker/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.href && project.href !== "#" && (
            <a
              href={`/projects/${project.slug}`}
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-cyan text-brand-darker text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <ExternalLink size={14} />
              Sprawdź
            </a>
          )}
        </div>
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

export default function ProjectsPage() {
  return (
    <main className="bg-brand-darker min-h-screen pb-24">
      <section className="relative h-[40vh] flex items-end px-6 pb-20 overflow-visible">
        <Image
          src={heroImage}
          alt="hero background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          aria-hidden
          fill
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-brand-darker" />

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <RevealSection>
            <p className="text-brand-cyan text-sm font-mono tracking-[4px] uppercase mb-4">
              Moje prace
            </p>

            <h1 className="text-5xl lg:text-6xl font-bold text-brand-text">
              Projekty &{" "}
              <span className="bg-linear-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">
                Realizacje
              </span>
            </h1>
          </RevealSection>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-24">
        <RevealSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-brand-cyan text-sm font-mono tracking-[4px] uppercase mb-8">
                Moja droga
              </p>

              {TIMELINE.map((item, i) => (
                <RevealSection key={item.year} custom={i * 0.1}>
                  <TimelineItem
                    key={item.year}
                    {...item}
                    inLast={i === TIMELINE.length - 1}
                  />
                </RevealSection>
              ))}
            </div>

            <div>
              <p className="text-brand-cyan text-sm font-mono tracking-[4px] uppercase mb-8">
                Technologie
              </p>

              <div className="grid grid-cols-2 gap-3">
                {STACKS.map((stack, i) => (
                  <RevealSection key={stack.name} custom={i * 0.3}>
                    <StackBadge key={stack.name} {...stack} />
                  </RevealSection>
                ))}
              </div>
            </div>
          </div>
        </RevealSection>

        <RevealSection>
          <div>
            <p className="text-brand-cyan text-sm font-mono tracking-[4px] uppercase mb-8">
              Realizacje
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
              {PROJECTS.map((project, i) => (
                <RevealSection key={project.slug} custom={i * 0.1}>
                  <ProjectCard key={project.slug} project={project} />
                </RevealSection>
              ))}
            </div>
          </div>
        </RevealSection>
      </div>
    </main>
  );
}
