"use client";

import { useEffect } from "react";

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="text-brand-cyan text-sm font-mono tracking-[4px] uppercase">
        Coś poszło nie tak
      </p>

      <h1 className="text-3xl font-bold text-brand-text">
        Nie udało się załadować projektów
      </h1>

      <p className="text-brand-muted text-sm max-w-md">
        Spróbuj ponownie za chwilę. Jeśli problem się powtarza, wróć na stronę
        główną.
      </p>

      <button
        onClick={retry}
        className="px-6 py-3 bg-linear-to-r from-brand-cyan to-brand-purple text-[#060910] font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity duration-300"
      >
        Spróbuj ponownie
      </button>
    </div>
  );
}
