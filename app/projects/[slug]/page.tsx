import { PROJECTS } from "@/data/projects";
import Image from "next/image";
import { notFound } from "next/navigation";

import heroImage from "@/public/hero-bg.svg";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const prev = PROJECTS[currentIndex - 1] ?? null;
  const next = PROJECTS[currentIndex + 1] ?? null;

  return (
    <main className="bg-brand-darker min-h-screen pb-24">
      <section className="relative h-[45vh] flex items-end px-6 pb-20 overflow-hidden">
        <Image
          src={heroImage}
          alt="hero background"
          className="absolute inset-0 object-cover opacity-50"
          aria-hidden
          fill
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-brand-darker" />

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-brand-muted text-sm hover:text-brand-cyan transition-colors duration-200 mb-6"
          >
            <ArrowLeft size={14} />
            Wróc do projektów
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            {project.tech.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-2 py-0.5 rounded-md bg-brand-surface text-brand-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-brand-text">
            {project.title}
          </h1>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 pt-12 flex flex-col gap-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-6">
            <p className="text-brand-cyan text-sm font-mono tracking-[4px] uppercase">
              O projekcie
            </p>
            <p className="text-brand-muted text-base leading-relaxed">
              {project.longDescription ?? project.description}
            </p>

            {project.status && (
              <div className="flex items-center gap-2">
                <span
                  className={`w-2 h-2 rounded-full ${project.status === "live" ? "bg-green-400 animate-pulse" : project.status === "wip" ? "bg-yellow-400 animate-pulse" : "bg-brand-muted"}`}
                />
                <span className="text-brand-muted text-sm font-mono">
                  {project.status === "live"
                    ? "Live"
                    : project.status === "wip"
                      ? "W trakcie"
                      : "Zarchiwizowany"}
                </span>
              </div>
            )}

            <div className="flex items-center gap-4 pt-2">
              {project.href && project.href !== "#" && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-linear-to-r from-brand-cyan to-brand-purple text-brand-darker text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  <ExternalLink size={14} />
                  Zobacz live
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-brand-surface text-brand-muted text-sm font-semibold hover:border-brand-cyan hover:text-brand-text transition-all duration-200"
                >
                  <SiGithub size={14} />
                  Repozytorium
                </a>
              )}
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-brand-surface aspect-video">
            <Image
              src={project.image}
              alt={project.title}
              className="object-cover"
              fill
              sizes="50vw"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 pt-8 border-t border-brand-surface">
            {prev ? (
              <Link
                href={`/projects/${prev.slug}`}
                className="flex flex-col gap-1 group"
              >
                <span className="text-brand-muted text-xs font-mono tracking-[2px] uppercase">
                  ← Poprzedni
                </span>
                <span className="text-brand-text text-sm font-semibold group-hover:text-brand-cyan transition-colors duration-300">
                  {prev.title}
                </span>
              </Link>
            ) : (
              <div />
            )}

            {next ? (
              <Link
                href={`/projects/${next.slug}`}
                className="flex flex-col gap-1 items-end group"
              >
                <span className="text-brand-muted text-xs font-mono tracking-[2px] uppercase">
                  Następny →
                </span>
                <span className="text-brand-text text-sm font-semibold group-hover:text-brand-cyan transition-colors duration-300">
                  {next.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
