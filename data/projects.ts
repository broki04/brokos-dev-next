export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  href: string;
  image: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "fitmeal-landing",
    title: "FitMeal Landing",
    description:
      "Landing page dla cateringu dietetycznego z naciskiem na konwersję i przejrzysty UX.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    href: "#",
    image: "/code-preview.png",
  },
  {
    slug: "woodstyle-shop",
    title: "WoodStyle Shop",
    description:
      "Sklep internetowy z meblami premium z rozbudowanymi kartami produktów i filtrowaniem.",
    tech: ["React", "Node.js", "Stripe"],
    href: "#",
    image: "/code-preview.png",
  },
  {
    slug: "crm-flow",
    title: "CRM Flow",
    description:
      "Panel webowy do obsługi leadów sprzedażowych, statusów kontaktu i raportów.",
    tech: ["Next.js", "PostgreSQL", "Prisma"],
    href: "#",
    image: "/code-preview.png",
  },
];
