import styles from "./Hero.module.css";

import Image from "next/image";
import Link from "next/link";

import heroImage from "@/public/hero-bg.svg";
import avatarImage from "@/public/me.jpg";

export default function Hero() {
  return (
    <section className="relative w-full h-screen">
      <Image
        src={heroImage}
        alt="Hero background"
        className="object-cover"
        fill
        sizes="100vw"
        loading="eager"
        priority
      />

      <div className="absolute inset-0 bg-linear-to-r from-[#060910]/80 via-[#060910]/40 to-transparent z-10" />

      <div className="relative z-20 max-w-6xl mx-auto px-6 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <div className="flex flex-col gap-6">
            <p className="text-brand-cyan text-sm font-mono tracking-[4px] uppercase">
              Cześć, jestem
            </p>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-brand-text">
              Mateusz{" "}
              <span className="bg-linear-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">
                Brokos
              </span>
            </h1>

            <h2 className="text-xl lg:text-2xl font-medium text-brand-muted">
              Front-end Developer
            </h2>

            <div className="w-16 h-0.5 bg-linear-to-r from-brand-cyan to-brand-purple" />

            <p className="text-brand-muted text-base leading-relaxed max-w-md">
              Tworzę nowoczesne, responsywne aplikacje webowe z dbałością o
              każdy detal. Łącze techniczne umiejętności z dbałością o
              doświadczenie użytkownika, tworząc interfejsy, które wyróżniają
              się na tle konkurencji.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <Link
                href="/projects"
                className="px-6 py-3 rounded-lg bg-linear-to-r from-brand-cyan to-brand-purple text-[#060910] font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity duration-300"
              >
                Zobacz wszystkie projekty →
              </Link>

              <a
                href="#contact"
                className="px-6 py-3 rounded-lg border border-brand-surface text-brand-muted font-semibold text-sm tracking-wide hover:border-brand-cyan hover:text-brand-text transition-all duration-300"
              >
                Skontaktuj się
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-center items-center">
            <div
              className={`${styles.photo__wrapper} relative flex items-center justify-center`}
            >
              <div className="absolute inset-0 rounded-full bg-linear-to-br from-brand-cyan/20 to-brand-purple/20 blur-3xl scale-110" />

              <div className="relative w-72 h-72 xl:w-80 xl:h-80 rounded-full border border-brand-darker overflow-hidden z-10">
                <div className="relative w-full h-full bg-linear-to-br from-brand-dark to-brand-darker flex items-center justify-center">
                  <Image
                    src={avatarImage}
                    alt="photo"
                    sizes="50vw"
                    loading="eager"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div
                className={`${styles.spinning__ring__inner} absolute -inset-3 rounded-full`}
              />
              <div
                className={`${styles.spinning__ring__outer} absolute -inset-6 rounded-full`}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-48 bg-linear-to-b from-transparent to-brand-darker z-10" />

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
        <span className="text-xs font-mono tracking-[3px] uppercase text-brand-subtle">
          scroll
        </span>

        <div className="w-px h-6 bg-linear-to-b from-brand-subtle to-transparent animate-pulse"></div>
      </div>
    </section>
  );
}
