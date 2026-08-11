"use client";

import { motion } from "framer-motion";
import RevealSection from "../ui/RevealSection";
import { TESTIMONIALS } from "@/data/testimonials";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 px-6 bg-brand-darker text-brand-text"
    >
      <div className="max-w-6xl mx-auto">
        <RevealSection>
          <div className="mb-14">
            <p className="text-brand-cyan text-sm font-mono tracking-[4px] uppercase mb-4">
              Opinie
            </p>

            <h2 className="text-4xl font-bold">
              Co mówią{" "}
              <span className="bg-linear-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">
                klienci
              </span>
            </h2>
          </div>
        </RevealSection>

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-8 w-2xs"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: TESTIMONIALS.length * 0.8,
              ease: "linear",
            }}
          >
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <div
                key={i}
                className="bg-brand-dark/40 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center text-center min-w-70 shadow-lg"
              >
                <div className="relative w-20 h-20 mb-4">
                  <div className="absolute inset-0 rounded-full bg-linear-to-br from-brand-cyan/30 to-brand-purple/30 blur-2xl scale-110" />
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="relative w-20 h-20 rounded-full objectr-cover z-10 border-2 border-brand-cyan/30"
                    loading="lazy"
                  />
                </div>

                <h3 className="text-lg font-semibold">{t.name}</h3>
                <p className="text-sm text-brand-muted mb-2">{t.role}</p>
                <p className="text-sm text-brand-text mt-2 mb-5">{t.text}</p>

                <div className="flex gap-1 justify-center text-yellow-400">
                  {Array.from({ length: 5 }, (_, idx) => (
                    <span
                      key={idx}
                      className={idx < t.stars ? "" : "text-gray-500"}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
