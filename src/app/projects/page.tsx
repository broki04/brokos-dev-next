import Image from "next/image";
import heroImage from "@/public/hero-bg.svg";
import RevealSection from "@/components/ui/RevealSection";
import { ProjectTimeline } from "@/components/projects/ProjectTimeline";
import { TechStack } from "@/components/projects/TechStack";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projekty",
  description:
    "Przegląd projektów i realizacji Mateusza Brokosa — aplikacje webowe zbudowane w Next.js, TypeScript i React.",
};

export default function ProjectsPage() {
  return (
    <main className="bg-brand-darker min-h-screen pb-24">
      <section className="relative h-[30vh] sm:h-[40vh] flex items-end px-4 sm:px-6 pb-10 sm:pb-20 overflow-hidden">
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
            <p className="text-brand-cyan text-[10px] sm:text-sm font-mono tracking-[3px] sm:tracking-[4px] uppercase mb-3 sm:mb-4">
              Moje prace
            </p>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-brand-text leading-tight">
              Projekty &{" "}
              <span className="bg-linear-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">
                Realizacje
              </span>
            </h1>
          </RevealSection>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-12 sm:gap-24">
        <RevealSection>
          <div className="grid grid-cols-1 gap-10 sm:gap-16 lg:grid-cols-2">
            <ProjectTimeline />
            <TechStack />
          </div>
        </RevealSection>

        <RevealSection>
          <ProjectGrid />
        </RevealSection>
      </div>
    </main>
  );
}
