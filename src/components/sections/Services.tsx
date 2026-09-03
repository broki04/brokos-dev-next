import Image from "next/image";
import { SERVICES } from "@/data/services";
import SectionHeading from "../ui/SectionHeading";

export default function Services() {
  return (
    <section id="services" className="py-24 pb-1 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          className="mb-20"
          titleClassName="text-4xl lg:text-5xl font-bold text-brand-text"
          eyebrow="Co oferuję"
          title={
            <>
              Usługi & <span className="text-gradient">Realizacje</span>
            </>
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-24">
          {SERVICES.map((service, i) => (
            <div
              key={service.tag}
              className="rounded-2xl overflow-hidden border border-brand-surface bg-brand-dark flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-brand-subtle"
            >
              <div className="relative aspect-video">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-linear-to-br from-brand-cyan/10 to-brand-purple/10" />

                <span className="absolute top-3 left-3 font-mono text-xs tracking-wide text-brand-cyan bg-brand-dark/70 backdrop-blur-sm border border-brand-cyan/30 rounded px-2.5 py-1">
                  {String(i + 1).padStart(2, "0")} · {service.tag}
                </span>
              </div>

              <div className="p-6 flex flex-col gap-3 flex-1">
                <h3 className="text-xl font-bold text-brand-text">
                  {service.title}
                </h3>

                <p className="text-brand-muted text-sm leading-relaxed">
                  {service.description}
                </p>

                <ul className="flex flex-wrap gap-2 mt-2">
                  {service.features.map((f) => (
                    <li
                      key={f}
                      className="text-brand-muted text-xs border border-brand-surface rounded-full px-3 py-1"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
