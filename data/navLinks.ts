export type NavDropdown = { label: string; href: string };
export type NavLink = {
  label: string;
  href: string;
  portfolio: boolean;
  dropdown?: NavDropdown[];
};

export const NAV_LINKS: NavLink[] = [
  { label: "Strona główna", href: "/", portfolio: false },
  { label: "Usługi", href: "/#services", portfolio: false },
  { label: "Cennik", href: "/#prices", portfolio: false },
  { label: "Umiejętności", href: "/#skills", portfolio: false },
  {
    label: "Portfolio",
    href: "/portfolio",
    portfolio: false,
    dropdown: [
      { label: "Wszystkie", href: "/projects" },
      { label: "Strony WWW", href: "/projects#websites" },
      { label: "Sklepy", href: "/projects#shops" },
      { label: "Aplikacje", href: "/projects#apps" },
    ],
  },
  { label: "Kontakt", href: "/#contact", portfolio: false },
  { label: "Wszystkie", href: "/projects", portfolio: true },
  { label: "Strony WWW", href: "/projects#websites", portfolio: true },
  { label: "Sklepy", href: "/projects#shops", portfolio: true },
  { label: "Aplikacje", href: "/projects#apps", portfolio: true },
];
