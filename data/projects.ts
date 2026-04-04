export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  href: string;
  repo?: string;
  image: string;
  status?: "live" | "wip" | "archived";
};

export const PROJECTS: Project[] = [
  {
    slug: "eco-shop",
    title: "Eco Shop",
    description:
      "Sklep online z ekologicznymi produktami, z koszykiem, filtrowaniem i integracją płatności.",
    tech: ["React", "Next.JS", "Tailwind CSS"],
    href: "https://www.github.com/broki04",
    repo: "https://www.github.com/broki04",
    image: "/code-preview.webp",
    status: "live",
  },
  {
    slug: "fitmeal-landing",
    title: "FitMeal Landing",
    description:
      "Landing page dla cateringu dietetycznego z naciskiem na konwersję i przejrzysty UX.",
    tech: ["React", "Next.JS", "Tailwind CSS"],
    href: "https://www.github.com/broki04",
    repo: "https://www.github.com/broki04",
    image: "/code-preview.webp",
    status: "wip",
  },
  {
    slug: "movie-db",
    title: "MovieDB",
    description:
      "Aplikacja do przeglądania filmów z zewnętrznego API, z wyszukiwarką i szczegółami filmów.",
    tech: ["React", "Next.JS", "Tailwind CSS"],
    href: "https://www.github.com/broki04",
    repo: "https://www.github.com/broki04",
    image: "/code-preview.webp",
    status: "archived",
  },
  {
    slug: "task-manager",
    title: "Task Manager",
    description:
      "Aplikacja do zarządzania zadaniami z możliwością przepisywania statusów, terminów i priorytetów.",
    tech: ["React", "Next.JS", "Tailwind CSS"],
    href: "https://www.github.com/broki04",
    repo: "https://www.github.com/broki04",
    image: "/code-preview.webp",
    status: "wip",
  },
  {
    slug: "travel-guide",
    title: "Travel Guide",
    description:
      "Serwis podróżniczy z przewodnikami, mapami i rekomendacjami atrakcji w różnych miastach.",
    tech: ["React", "Next.JS", "Tailwind CSS"],
    href: "https://www.github.com/broki04",
    repo: "https://www.github.com/broki04",
    image: "/code-preview.webp",
    status: "wip",
  },
  {
    slug: "blog-platform",
    title: "Blog Platform",
    description:
      "Platforma blogowa z możliwością dodawania postów, komentarzy i systemem logowania użytkowników.",
    tech: ["React", "Next.JS", "Tailwind CSS"],
    href: "https://www.github.com/broki04",
    repo: "https://www.github.com/broki04",
    image: "/code-preview.webp",
    status: "wip",
  },
  {
    slug: "crypto-dashboard",
    title: "Crypto Dashboard",
    description:
      "Panel do śledzenia kursów kryptowalut w czasie rzeczywistym z wykresami i alertami cenowymi.",
    tech: ["React", "Next.JS", "Tailwind CSS"],
    href: "https://www.github.com/broki04",
    repo: "https://www.github.com/broki04",
    image: "/code-preview.webp",
    status: "wip",
  },
  {
    slug: "crm-flow",
    title: "CRM Flow",
    description:
      "Panel webowy do obsługi leadów sprzedażowych, statusów kontaktu i raportów.",
    tech: ["React", "Next.JS", "Tailwind CSS"],
    href: "https://www.github.com/broki04",
    repo: "https://www.github.com/broki04",
    image: "/code-preview.webp",
    status: "wip",
  },
];
