import Image from "next/image";
import Link from "next/link";

import { PROJECTS } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-brand-darker text-brand-text px-6 py-28">
      <section className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-brand-cyan text-sm font-mono tracking-[4px] uppercase mb-4">
            Portfolio
          </p>

          <h1 className="text-4xl lg:text-5xl font-bold">
            Wybrane{" "}
            <span className="bg-linear-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">
              projekty
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <article
              key={project.slug}
              id={project.slug}
              className="rounded-2xl border border-brand-surface bg-brand-dark/70 overflow-hidden"
            >
              <div className="relative aspect-video">
                <Image
                  src={project.image}
                  alt={`Podgląd projektu ${project.title}`}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5 flex flex-col gap-3">
                <h2 className="text-xl font-semibold">{project.title}</h2>

                <p className="text-brand-muted text-sm leading-relaxed">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-2 pt-1">
                  {project.tech.map((item) => (
                    <li
                      key={item}
                      className="text-xs px-2.5 py-1 rounded-full border border-brand-surface text-brand-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href={project.href}
                  className="mt-2 inline-flex items-center text-sm text-brand-cyan hover:text-brand-text transition-colors"
                >
                  Zobacz projekt →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
