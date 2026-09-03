import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiSass,
  SiPhp,
  SiMysql,
} from "react-icons/si";
import SectionHeading from "../ui/SectionHeading";

const SKILLS = [
  { name: "HTML", icon: SiHtml5, color: "#e34f26", level: 95 },
  { name: "CSS", icon: SiCss, color: "#1572b6", level: 90 },
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e", level: 83 },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6", level: 78 },
  { name: "React", icon: SiReact, color: "#61dafb", level: 80 },
  { name: "Sass", icon: SiSass, color: "#cc6699", level: 85 },
  { name: "PHP", icon: SiPhp, color: "#777bb4", level: 65 },
  { name: "SQL", icon: SiMysql, color: "#4479a1", level: 80 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-4 px-6 relative bg-brand-darker">
      <div className="absolute top-0 left-0 w-full h-[85%] bg-brand-dark/70 z-0" />

      <div className="max-w-7xl mx-auto pt-4 relative z-10">
        <SectionHeading
          className="mb-12"
          titleClassName="text-4xl font-bold text-brand-text"
          eyebrow="Co potrafię"
          title={
            <>
              Umiejętności & <span className="text-gradient">Technologie</span>
            </>
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {SKILLS.map(({ name, icon: Icon, color, level }) => (
            <div
              key={name}
              className="flex items-center gap-4 rounded-xl border border-brand-surface bg-brand-dark p-4 transition-all duration-300 hover:-translate-y-1 hover:border-brand-subtle"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center shrink-0"
                style={{
                  background: `conic-gradient(${color} ${(level / 100) * 360}deg, var(--color-brand-surface) 0deg)`,
                }}
              >
                <div className="w-10.5 h-10.5 rounded-full bg-brand-dark flex items-center justify-center">
                  <span className="text-[11px] font-mono text-brand-text">
                    {level}%
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-brand-text text-sm font-semibold">
                  {name}
                </span>
                <Icon size={14} style={{ color }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
