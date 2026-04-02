import clsx from "clsx";
import { PRICING, ADDONS } from "../data/pricing";

export default function Pricing() {
  return (
    <section id="prices" className="pb-24 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-brand-cyan text-sm font-mono tracking-[4px] uppercase mb-4">
            Transparentne ceny
          </p>
          <h2 className="text-4xl font-bold text-brand-text">Cennik</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-6 items-stretch">
          {PRICING.map((plan) => {
            const cardClass = clsx(
              "relative rounded-2xl p-6 flex flex-col h-full border transition-all duration-300 hover:-translate-y-1",
              plan.accent
                ? "hover:scale-[1.02] shadow-[0_0_30px_rgba(34,211,238,0.15)] border-brand-cyan/40 bg-linear-to-b from-brand-cyan/10 to-brand-purple/5"
                : "border-brand-surface bg-brand-dark hover:border-brand-subtle",
            );

            const btnClass = clsx(
              "mt-auto text-center text-sm font-semibold py-2.5 rounded-lg transition-all duration-200",
              plan.accent
                ? "hover:scale-[1.03] bg-linear-to-r from-brand-cyan to-brand-purple text-[#060910] hover:opacity-90"
                : "border border-brand-surface text-brand-muted hover:border-brand-cyan hover:text-brand-text",
            );

            return (
              <div key={plan.name} className={cardClass}>
                {plan.accent && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-mono tracking-[2px] uppercase bg-linear-to-r from-brand-cyan to-brand-purple text-[#060910] px-3 py-1 rounded-full font-semibold whitespace-nowrap">
                    Popularne
                  </div>
                )}

                <h3 className="text-white font-bold text-lg leading-tight mb-1 whitespace-nowrap">
                  {plan.name}
                </h3>

                <p className="text-[#475569] text-xs leading-relaxed">
                  {plan.desc}
                </p>

                <div className="text-2xl font-bold bg-linear-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent leading-tight pt-2">
                  {plan.price === "Wycena indywidualna" ? (
                    <>
                      Wycena <br /> indywidualna
                    </>
                  ) : (
                    plan.price
                  )}
                </div>

                <div className="w-full h-px bg-brand-surface mt-2" />

                <ul className="flex flex-col gap-2 flex-1 pt-2 pb-4">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-brand-muted text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0 mt-1.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a href="#contact" className={btnClass}>
                  Zapytaj o wycenę
                </a>
              </div>
            );
          })}
        </div>

        <p className="text-brand-subtle text-xs font-mono text-center mt-8 tracking-wide">
          * Ceny są orientacyjne i zależą od zakresu projektu. Skontaktuj się po
          bezpłatną wycenę.
        </p>

        <div className="mt-16">
          <p className="text-brand-cyan text-sm font-mono tracking-[4px] uppercase mb-2">
            Dodatkowe opcje
          </p>

          <p className="text-brand-muted text-sm mb-8">
            Opcje, które możesz dołączyć do dowolnego pakietu
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ADDONS.map(({ title, price, description, icon }) => (
              <div
                key={title}
                className="flex items-start gap-4 rounded-xl border border-brand-surface bg-brand-dark/50 p-4 hover:border-brand-subtle hover:-translate-y-0.5 transition-all duration-200"
              >
                <span className="text-2xl">{icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-brand-text text-sm font-semibold">
                      {title}
                    </span>
                    <span className="text-brand-cyan text-sm font-mono whitespace-nowrap">
                      {price}
                    </span>
                  </div>

                  <p className="text-brand-muted text-xs mt-1 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
