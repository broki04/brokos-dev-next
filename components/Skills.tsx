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
    <section id="skills" className="py-4 px-8 relative bg-brand-darker">
      <div className="absolute top-0 left-0 w-full h-[85%] bg-brand-dark/70 z-0" />

      <div className="max-w-6xl mx-auto pt-12 relative z-10">
        <div className="mb-12">
          <p className="text-brand-cyan text-sm font-mono tracking-[4px] uppercase mb-4">
            Co potrafię?
          </p>
          <h2 className="text-4xl font-bold text-brand-text">
            Umiejętności &{" "}
            <span className="bg-linear-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">
              Technologie
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {SKILLS.map(({ name, icon: Icon, color, level }) => (
            <div
              key={name}
              className="group flex flex-col gap-3 rounded-xl border border-brand-surface bg-brand-dark p-4 transition-all duration-300 hover:-translate-y-1 hover:border-brand-subtle overflow-hidden relative"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 20% 50%, ${color}10, transparent 60%)`,
                }}
              />

              <div className="flex items-center gap-3 relative z-10 p-1">
                <Icon
                  size={22}
                  style={{ color }}
                  className="transition-transform duration-300 group-hover:scale-110 shrink-0"
                />

                <span className="text-brand-text text-sm font-semibold block">
                  {name}
                </span>

                <span className="text-brand-muted text-xs font-mono">
                  {level}%
                </span>
              </div>

              <div className="w-full h-1 rounded-full bg-brand-surface overflow-hidden relative z-10">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${level}%`,
                    background: `linear-gradient(90deg, ${color}80, ${color})`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
