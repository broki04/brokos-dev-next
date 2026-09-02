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
    <div className="flex gap-3 sm:gap-6 w-full min-w-0">
      <div className="flex flex-col items-center shrink-0">
        <div className="w-3 h-3 rounded-full bg-brand-cyan shrink-0 mt-1 ring-4 ring-brand-cyan/20" />
        {!inLast && <div className="w-px flex-1 bg-brand-surface mt-2" />}
      </div>

      <div className="pb-8 sm:pb-10 min-w-0">
        <span className="text-brand-cyan text-[10px] sm:text-xs font-mono tracking-[2px]">
          {year}
        </span>
        <h3 className="text-brand-text font-semibold text-sm sm:text-base mt-1 mb-1">
          {title}
        </h3>
        <p className="text-brand-muted text-sm leading-relaxed wrap-break-word">
          {desc}
        </p>
      </div>
    </div>
  );
}

export function ProjectTimeline() {
  return (
    <div>
      <p className="text-brand-cyan text-sm font-mono tracking-[4px] uppercase mb-8">
        Moja droga
      </p>

      {TIMELINE.map((item, i) => (
        <RevealSection key={item.year} custom={i * 0.1}>
          <TimelineItem {...item} inLast={i === TIMELINE.length - 1} />
        </RevealSection>
      ))}
    </div>
  );
}
