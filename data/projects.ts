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
    slug: "openmp-website",
    title: "Strona internetowa serwera open.mp",
    description:
      "Kompletna strona serwera open.mp — konto gracza, sklep z VIP-ami, statystyki, gangi, prace i panel administracyjny.",
    longDescription: `Strona internetowa serwera open.mp to flagowy projekt zbudowany na potrzeby własnego serwera, łączący funkcje dla graczy, sklep i panel administracyjny w jednym systemie.
      Zalogowany gracz może zarządzać swoim kontem z poziomu strony (dane postaci, ustawienia, ekwipunek), sprawdzić, kto jest aktualnie online, przeglądać dostępne gangi i prace na serwerze,
      a także swoje statystyki, rekordy na poszczególnych zabawach i arenach oraz zdobyte osiągnięcia.
      Sklep pozwala na zakup pakietów VIP i innych dodatków z realną (testową) płatnością online, automatycznym nadaniem uprawnień na koncie oraz historią zamówień.
      Od strony administracyjnej dostępny jest panel pozwalający monitorować graczy w czasie rzeczywistym (WebSockety), przeglądać logi moderacji, nakładać bany i kicki
      oraz śledzić statystyki aktywności serwera na interaktywnych wykresach (godziny szczytu, liczba graczy w czasie).
      System ról (gracz / moderator / admin) zapewnia różny poziom dostępu do funkcji strony.
      Dane pobierane są z bazy MySQL zasilanej bezpośrednio przez serwer gry, co pokazuje pracę na realnym, produkcyjnym źródle danych.`,
    tech: [
      "Next.js",
      "TypeScript",
      "MySQL",
      "Socket.io",
      "NextAuth",
      "Stripe",
      "Recharts",
    ],
    href: "https://www.github.com/broki04",
    repo: "https://www.github.com/broki04",
    image: "/code-preview.webp",
    status: "wip",
  },
  {
    slug: "saas-billing",
    title: "System subskrypcji (SaaS)",
    description:
      "Pełny flow produktu SaaS — rejestracja, subskrypcje i płatności testowe przez Stripe.",
    longDescription: `Projekt SaaS z płatnościami odwzorowuje pełny cykl życia produktu subskrypcyjnego, jaki spotyka się w realnych firmach.
      Obejmuje rejestrację i logowanie użytkowników (NextAuth), wybór planu free lub pro z integracją płatności Stripe w trybie testowym,
      dashboard użytkownika z limitami zależnymi od wykupionego planu oraz historię i panel rozliczeń.
      Celem projektu jest pokazanie, że potrafię zbudować nie tylko interfejs, ale kompletny, działający produkt z logiką biznesową i obsługą płatności.`,
    tech: [
      "Next.js",
      "NextAuth",
      "Stripe",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    href: "https://www.github.com/broki04",
    repo: "https://www.github.com/broki04",
    image: "/code-preview.webp",
    status: "wip",
  },
  {
    slug: "public-api-docs",
    title: "REST API + dokumentacja dla developerów",
    description:
      "Własne REST API z kluczami dostępu, rate limitingiem i interaktywną dokumentacją.",
    longDescription: `Publiczne API to projekt czysto backendowy, pokazujący projektowanie interfejsu programistycznego od strony twórcy, a nie tylko konsumenta.
      API udostępnia dane w formacie REST z pełnym wersjonowaniem, systemem kluczy dostępowych i limitowaniem liczby zapytań (rate limiting) dla każdego klienta.
      Do projektu dołączona jest interaktywna dokumentacja w stylu Stripe Docs, umożliwiająca testowanie zapytań bezpośrednio z przeglądarki.
      Projekt kładzie nacisk na dobre praktyki API — spójne odpowiedzi błędów, autoryzację i czytelną strukturę endpointów.`,
    tech: ["Node.js", "NestJS", "PostgreSQL", "Redis", "OpenAPI / Swagger"],
    href: "https://www.github.com/broki04",
    repo: "https://www.github.com/broki04",
    image: "/code-preview.webp",
    status: "wip",
  },
  {
    slug: "nova-landing",
    title: 'Landing "Nova"',
    description:
      "Minimalistyczny landing page fikcyjnego produktu premium, z animacjami w stylu Apple.",
    longDescription: `Landing "Nova" to projekt czysto frontendowy, będący popisem animacji i dopracowanego designu w stylu stron produktowych Apple.
      Strona reklamuje fikcyjny produkt premium (bezprzewodowe słuchawki) z sekcją hero z animowanym produktem, sticky product reveal reagującym na scroll,
      interaktywnym wyborem koloru produktu oraz formularzem preorder z podpięciem pod backend.
      Szczególny nacisk położono na wydajność — animacje ograniczone do transform/opacity, wsparcie dla prefers-reduced-motion i wynik Lighthouse 90+ mimo bogatej warstwy wizualnej.`,
    tech: ["Next.js", "Tailwind CSS", "SASS", "Framer Motion"],
    href: "https://www.github.com/broki04",
    repo: "https://www.github.com/broki04",
    image: "/code-preview.webp",
    status: "wip",
  },
];
