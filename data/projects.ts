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
    longDescription: `Eco Shop to w pełni funkcjonalny sklep internetowy z ekologicznymi produktami. 
      Umożliwia dodawanie produktów do koszyka, filtrowanie według kategorii, a także integrację z systemami płatności online. 
      Zadbano o responsywność, szybkie ładowanie i przejrzysty UX, aby użytkownik mógł łatwo przeglądać i kupować produkty.`,
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
    longDescription: `Strona FitMeal Landing to nowoczesny landing page dla cateringu dietetycznego. 
      Skupia się na jasnej prezentacji oferty, szybkim ładowaniu i responsywnym designie. 
      CTA są dobrze widoczne, co zwiększa współczynnik konwersji, a sekcje z menu, opiniami i formularzem kontaktowym są przejrzyście rozmieszczone.`,
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
    longDescription: `MovieDB to aplikacja webowa korzystająca z zewnętrznego API filmowego, pozwalająca na przeglądanie filmów, 
      wyszukiwanie według tytułu i przeglądanie szczegółowych informacji, takich jak opis, oceny czy trailer. 
      Dzięki React i Next.js zapewniono szybkie ładowanie i płynne przechodzenie między stronami.`,
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
    longDescription: `Task Manager to aplikacja webowa pozwalająca użytkownikom tworzyć, edytować i usuwać zadania. 
      Zadania mogą mieć różne statusy, priorytety i terminy realizacji. 
      Interfejs jest intuicyjny, z możliwością filtrowania i sortowania, a backend zapewnia trwałość danych.`,
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
    longDescription: `Travel Guide to interaktywny serwis dla podróżników, oferujący przewodniki po miastach, rekomendacje atrakcji, 
      mapy i wskazówki dotyczące transportu i lokalnej kuchni. Użytkownik może wyszukiwać miejsca według kategorii i lokalizacji, 
      a responsywny design umożliwia wygodne korzystanie na telefonach i tabletach.`,
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
    longDescription: `Blog Platform to pełnoprawna platforma do publikacji artykułów, z możliwością dodawania postów, komentowania i logowania użytkowników. 
      System zarządzania treścią pozwala na łatwe edytowanie postów, moderowanie komentarzy i personalizację profilu użytkownika. 
      Całość działa w SPA, co daje płynne przechodzenie między stronami.`,
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
    longDescription: `Crypto Dashboard to aplikacja do monitorowania kursów kryptowalut w czasie rzeczywistym. 
      Oferuje dynamiczne wykresy, alerty cenowe i filtrowanie według kryptowaluty lub giełdy. 
      Backend API zapewnia aktualne dane, a frontend z React i Tailwind gwarantuje płynne i responsywne doświadczenie użytkownika.`,
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
    longDescription: `CRM Flow to panel webowy dla zespołów sprzedażowych, umożliwiający zarządzanie leadami, 
      śledzenie statusów kontaktu, przypisywanie zadań i generowanie raportów. 
      Aplikacja jest responsywna i umożliwia szybki dostęp do najważniejszych danych sprzedażowych.`,
    tech: ["React", "Next.JS", "Tailwind CSS"],
    href: "https://www.github.com/broki04",
    repo: "https://www.github.com/broki04",
    image: "/code-preview.webp",
    status: "wip",
  },
];
