"use client";

import { AlertCircle, CheckCircle2, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

const BUDGETS = [
  "do 1 000 zł",
  "1 000 - 3 000 zł",
  "3 000 - 6 000 zł",
  "6 000 - 10 000 zł",
  "powyżej 10 000 zł",
  "Do ustalenia",
];

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const statusMessageId = "contact-form-status";

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mnnpljdl", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-32 px-6 bg-brand-darker relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-12">
          <div>
            <p className="text-brand-cyan text-sm font-mono tracking-[4px] uppercase mb-4">
              Porozmawiajmy
            </p>

            <h2 className="text-3xl lg:text-4xl font-bold text-brand-text">
              Napisz do{" "}
              <span className="bg-linear-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">
                mnie
              </span>
            </h2>

            <p className="mt-4 text-brand-muted text-sm leading-relaxed max-w-lg">
              Szukasz frontend developera? Chętnie pomogę w realizacji projektu
              lub dołączę do zespołu.
            </p>
          </div>

          <div className="flex flex-col gap-8 lg:justify-self-end lg:w-full lg:max-w-sm">
            <div className="mt-4">
              <p className="text-brand-cyan text-xs font-mono tracking-[2px] uppercase mb-2">
                Email
              </p>
              <a
                href="mailto:mateusz.brokos1@gmail.com"
                className="text-brand-text text-sm hover:text-brand-cyan transition-colors duration-200"
              >
                mateusz.brokos1@gmail.com
              </a>
            </div>

            <div>
              <p className="text-brand-cyan text-xs font-mono tracking-[2px] uppercase mb-2">
                Discord
              </p>
              <a
                href="https://discord.com/users/618507378333319196"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-brand-text text-sm hover:text-brand-cyan transition-colors duration-200"
                aria-label="Profil Discord: brokikrul"
              >
                <MessageCircle size={16} />
                brokikrul
              </a>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 mt-6">
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit}
            aria-describedby={status !== "idle" ? statusMessageId : undefined}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-name"
                  className="text-brand-muted text-xs font-mono tracking-[2px] uppercase"
                >
                  Imię i nazwisko
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Jan Kowalski"
                  autoComplete="name"
                  className="bg-brand-dark border border-brand-surface rounded-xl px-4 py-3 text-brand-text text-sm placeholder:text-brand-subtle focus:outline-none focus:border-brand-cyan transition-colors duration-200"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-email"
                  className="text-brand-muted text-xs font-mono tracking-[2px] uppercase"
                >
                  Email
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="twój@mail.pl"
                  className="bg-brand-dark border border-brand-surface rounded-xl px-4 py-3 text-brand-text text-sm placeholder:text-brand-subtle focus:outline-none focus:border-brand-cyan transition-colors duration-200"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="contact-subject"
                className="text-brand-muted text-xs font-mono tracking-[2px] uppercase"
              >
                Temat
              </label>

              <input
                id="contact-subject"
                type="text"
                name="subject"
                autoComplete="off"
                placeholder="Strona internetowa dla firmy"
                className="bg-brand-dark border border-brand-surface rounded-xl px-4 py-3 text-brand-text text-sm placeholder:text-brand-subtle focus:outline-none focus:border-brand-cyan transition-colors duration-200"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="contact-budget"
                className="text-brand-muted text-xs font-mono tracking-[2px] uppercase"
              >
                Budżet projektu
              </label>

              <select
                id="contact-budget"
                name="budget"
                className="bg-brand-dark border border-brand-surface rounded-xl px-4 py-3 text-brand-text text-sm focus:outline-none focus:border-brand-cyan transition-colors duration-200 appearance-none cursor-pointer"
              >
                <option value="" className="bg-brand-dark">
                  Wybierz przedział
                </option>
                {BUDGETS.map((b) => (
                  <option key={b} value={b} className="bg-brand-dark">
                    {b}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="contact-message"
                className="text-brand-muted text-xs font-mono tracking-[2px] uppercase"
              >
                Wiadomość
              </label>

              <textarea
                id="contact-message"
                name="message"
                rows={5}
                autoComplete="off"
                placeholder="Opisz swój projekt..."
                className="bg-brand-dark border border-brand-surface rounded-xl px-4 py-3 text-brand-text text-sm placeholder:text-brand-subtle focus:outline-none focus:border-brand-cyan transition-colors duration-200 resize-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="flex items-center justify-center gap-2 bg-linear-to-r from-brand-cyan to-brand-purple text-[#060910] font-semibold py-3 px-8 rounded-xl transition-all duration-200 hover:opacity-90 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <>Wysyłam...</>
              ) : (
                <>
                  <Send size={16} />
                  Wyślij wiadomość
                </>
              )}
            </button>

            {status === "success" && (
              <div
                id={statusMessageId}
                role="status"
                aria-live="polite"
                className="flex items-center gap-2 text-green-400 text-sm"
              >
                <CheckCircle2 size={16} />
                Wiadomość wysłana! Odezwę się wkrótce.
              </div>
            )}
            {status === "error" && (
              <div
                id={statusMessageId}
                role="alert"
                aria-live="assertive"
                className="flex items-center gap-2 text-red-400 text-sm"
              >
                <AlertCircle size={16} />
                Coś poszło nie tak. Spróbuj ponownie, lub napisz bezpośrednio na
                e-mail lub Discord.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
