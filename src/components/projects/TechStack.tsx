"use client";

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
import RevealSection from "@/components/ui/RevealSection";

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
    <div
      className="flex items-center gap-2 rounded-xl border border-brand-surface bg-brand-dark px-3 py-2.5 sm:px-4 sm:py-3 transition-all duration-300"
      style={{
        backgroundColor: `${color}14`,
        boxShadow: "inset 0 0 0 1px transparent",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = `${color}22`;
        e.currentTarget.style.boxShadow = `0 0 0 1px ${color}66, 0 0 18px ${color}55`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = `${color}14`;
        e.currentTarget.style.boxShadow = "inset 0 0 0 1px transparent";
      }}
    >
      <Icon
        size={18}
        style={{
          color,
          transition: "transform 0.2s ease, filter: 0.2s ease",
          filter: "drop-shadow(0 0 8px transparent)",
        }}
      />
      <span className="text-brand-muted text-xs sm:text-sm font-medium">
        {name}
      </span>
    </div>
  );
}

export function TechStack() {
  return (
    <div>
      <p className="text-brand-cyan text-sm font-mono tracking-[4px] uppercase mb-8">
        Technologie
      </p>

      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        {STACKS.map((stack, i) => (
          <RevealSection key={stack.name} custom={i * 0.3}>
            <StackBadge {...stack} />
          </RevealSection>
        ))}
      </div>
    </div>
  );
}
