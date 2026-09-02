import type { Metadata } from "next";
import Image from "next/image";

import { PROJECTS } from "@/data/projects";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";

import heroImage from "@/public/hero-bg.svg";
import Link from "next/link";
import RevealSection from "@/components/ui/RevealSection";
import { ProjectStatusDot } from "@/components/projects/ProjectStatus";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Projekt nie znaleziony" };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
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

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <RevealSection>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-brand-muted text-sm hover:text-brand-cyan transition-colors duration-200 mb-6"
            >
              <ArrowLeft size={14} />
              Wróć do projektów
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
          </RevealSection>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pt-4 flex flex-col gap-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <RevealSection className="flex flex-col gap-6">
            <p className="text-brand-cyan text-sm font-mono tracking-[4px] uppercase">
              O projekcie
            </p>

            <div className="flex flex-col gap-4">
              {(project.longDescription ?? [project.description]).map(
                (paragraph, i) => (
                  <p
                    key={i}
                    className="text-brand-muted text-base leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ),
              )}
            </div>
          </RevealSection>

          <RevealSection custom={0.15}>
            <div className="relative rounded-2xl overflow-hidden border border-brand-surface aspect-video">
              <Image
                src={project.image}
                alt={project.title}
                className="object-cover"
                fill
                sizes="50vw"
                quality={90}
              />
            </div>
          </RevealSection>
        </div>

        <RevealSection>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl border border-brand-surface bg-brand-dark p-6">
            {project.status && <ProjectStatusDot status={project.status} />}

            <div className="flex items-center gap-4 flex-wrap">
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
        </RevealSection>

        <RevealSection>
          <div className="grid grid-cols-2 gap-4 pt-8 border-t border-brand-surface">
            {prev ? (
              <Link
                href={`/projects/${prev.slug}`}
                className="flex items-center gap-3 group min-w-0"
              >
                <span className="relative w-14 h-14 rounded-lg overflow-hidden border border-brand-surface shrink-0">
                  <Image
                    src={prev.image}
                    alt={prev.title}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </span>
                <span className="flex flex-col gap-1 min-w-0">
                  <span className="text-brand-muted text-xs font-mono tracking-[2px] uppercase">
                    ← Poprzedni
                  </span>
                  <span className="text-brand-text text-sm font-semibold group-hover:text-brand-cyan transition-colors duration-300 truncate">
                    {prev.title}
                  </span>
                </span>
              </Link>
            ) : (
              <div />
            )}

            {next ? (
              <Link
                href={`/projects/${next.slug}`}
                className="flex items-center justify-end gap-3 text-right group min-w-0"
              >
                <span className="flex flex-col gap-1 items-end min-w-0">
                  <span className="text-brand-muted text-xs font-mono tracking-[2px] uppercase">
                    Następny →
                  </span>
                  <span className="text-brand-text text-sm font-semibold group-hover:text-brand-cyan transition-colors duration-300 truncate">
                    {next.title}
                  </span>
                </span>
                <span className="relative w-14 h-14 rounded-lg overflow-hidden border border-brand-surface shrink-0">
                  <Image
                    src={next.image}
                    alt={next.title}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </RevealSection>
      </div>
    </main>
  );
}
