import { PROJECTS } from "./projects";

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
    href: "/projects",
    portfolio: false,
    dropdown: PROJECTS.map((project) => ({
      label: project.title,
      href: `/projects#${project.slug}`,
    })),
  },
  { label: "Kontakt", href: "/#contact", portfolio: false },
];
