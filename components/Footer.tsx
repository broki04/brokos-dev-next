import { SOCIAL_LINKS } from "@/data/socialLinks";
import { NAV_LINKS } from "../data/navLinks";

export default function Footer() {
  return (
    <section className="bg-brand-dark border-t border-brand-surface px-6 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col gap-4">
          <a href="#" className="text-2xl font-bold tracking-tight">
            <span className="bg-linear-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">
              brokos
            </span>
            <span className="text-brand-text">Dev</span>
          </a>

          <p className="text-brand-muted text-sm leading-relaxed max-w-xs">
            Front-end developer tworzący nowoczesne strony i aplikacje webowe.
            Dbam o każdy detal - od projektu po wdrożenie.
          </p>

          <div className="flex gap-3 mt-2">
            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg border border-brand-surface flex items-center justify-center text-brand-muted hover:text-brand-cyan transition-colors duration-200"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-brand-text text-sm font-semibold tracking-[2px] uppercase">
            Nawigacja
          </p>

          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-brand-muted text-sm hover:text-brand-cyan transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-brand-text text-sm font-semibold tracking-[2px] uppercase">
            Kontakt
          </p>
          <div className="flex flex-col gap-2">
            <p className="text-brand-muted text-xs font-mono tracking-[2px] uppercase">
              Email
            </p>
            <a
              href="mailto:mateusz.brokos1@gmail.com"
              className="text-brand-text text-sm hover:text-brand-cyan transition-colors duration-200"
            >
              mateusz.brokos1@gmail.com
            </a>
          </div>

          <div className="flex flex-col gap-2 mt-2">
            <p className="text-brand-muted text-xs font-mono tracking-[2px] uppercase">
              Dostępność
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-brand-muted text-sm">
                Otwarty na nowe projekty
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-brand-surface flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-brand-subtle text-xs font-mono">
          &copy; 2026 brokosDev - wszelkie prawa zastrzeżone.
        </p>
        <p className="text-brand-subtle text-xs font-mono">
          Designed by <span className="text-brand-cyan">Mateusz Brokos</span>
        </p>
      </div>
    </section>
  );
}
