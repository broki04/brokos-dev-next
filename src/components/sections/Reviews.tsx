"use client";

import { motion, useReducedMotion } from "framer-motion";
import RevealSection from "../ui/RevealSection";
import { REVIEWS } from "@/data/reviews";
import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";

const LOOPED_REVIEWS = [...REVIEWS, ...REVIEWS];

export default function Reviews() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="reviews"
      className="py-24 px-6 bg-brand-darker text-brand-text"
    >
      <div className="max-w-7xl mx-auto">
        <RevealSection>
          <SectionHeading
            className="mb-14"
            titleClassName="text-4xl font-bold"
            eyebrow="Opinie"
            title={
              <>
                Co mówią <span className="text-gradient">klienci</span>
              </>
            }
          />
        </RevealSection>

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-8 w-max"
            animate={shouldReduceMotion ? undefined : { x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: REVIEWS.length * 4,
              ease: "linear",
            }}
          >
            {LOOPED_REVIEWS.map((t, i) => (
              <div
                key={i}
                className="bg-brand-dark/40 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center text-center w-2xs shrink-0 shadow-lg"
              >
                <div className="relative w-20 h-20 mb-4">
                  <div className="absolute inset-0 rounded-full bg-linear-to-br from-brand-cyan/30 to-brand-purple/30 blur-2xl scale-110" />
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    sizes="80px"
                    className="relative w-20 h-20 rounded-full object-cover z-10 border-2 border-brand-cyan/30"
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
