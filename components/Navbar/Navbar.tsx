"use client";

import { useEffect, useState } from "react";

import styles from "./Navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavLink } from "@/data/navLinks";
import { ChevronDown, X, Menu } from "lucide-react";
import { SOCIAL_LINKS } from "@/data/socialLinks";

interface NavbarProps {
  NAV_LINKS: NavLink[];
}

export default function Navbar({ NAV_LINKS }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const pathname = usePathname();
  const links = NAV_LINKS.filter((l) => !l.portfolio);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
        setDropdownOpen(null);
        document.body.style.overflow = "";
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isActive = (href: string) => href === pathname;
  return (
    <>
      <nav
        className={[
          styles.navbar,
          "fixed top-0 left-0 w-full z-50 transition-all duration-300 md:bg-brand-dark/90 backdrop-blur-md",
        ].join(" ")}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-8 py-4 font-sans">
          <h1
            className={`${menuOpen ? "hidden" : ""} text-2xl font-bold tracking-light flex items-center gap-1 md:block`}
          >
            <Link href="/">
              <span className="bg-linear-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">
                brokos
              </span>
              <span className="text-brand-text">Dev</span>
            </Link>
          </h1>

          <ul className="hidden md:flex space-x-8 items-center text-sm font-medium">
            {links.map((link) => (
              <li
                key={link.href}
                className="relative"
                onMouseEnter={() => setDropdownOpen(link.href)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <Link
                  href={link.href}
                  className={`${styles.nav__link} flex items-center gap-1 transition-colors duration-300 ${
                    isActive(link.href)
                      ? "text-brand-cyan"
                      : "text-brand-muted hover:text-brand-text"
                  }`}
                >
                  {link.label}
                  {link.dropdown && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        dropdownOpen === link.href ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {link.dropdown && (
                  <div
                    className={`absolute top-full left-0 pt-3 transition-all duration-200 ${
                      dropdownOpen === link.href
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="bg-brand-dark/95 backdrop-blur-md border border-brand-surface rounded-xl overflow-hidden min-w-40">
                      {link.dropdown.map((d) => (
                        <Link
                          key={d.href}
                          href={d.href}
                          className="block px-4 py-3 text-sm text-brand-muted hover:text-brand-cyan hover:bg-brand-surface transition-all duration-200"
                        >
                          {d.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <ul className="hidden md:flex items-center space-x-4">
            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-brand-text hover:text-brand-cyan hover:scale-110 transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden ml-auto flex items-center text-brand-muted hover:text-brand-text transition-colors duration-300"
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-60 transition-opacity duration-300 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className={`absolute top-0 left-0 w-3/4 h-full bg-brand-dark p-6 flex flex-col gap-4
                      transform transition-transform duration-300 ease-out
                      ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
          onClick={(e) => e.stopPropagation()}
        >
          {links.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                className={`block text-lg font-medium ${
                  isActive(link.href) ? "text-brand-cyan" : "text-brand-text"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
              {link.dropdown && (
                <div
                  className={`ml-4 mt-2 flex flex-col gap-2 transition-all duration-300 ease-out ${
                    menuOpen
                      ? "opacity-100 max-h-96"
                      : "opacity-0 max-h-0 overflow-hidden"
                  }`}
                >
                  {link.dropdown.map((d) => (
                    <Link
                      key={d.href}
                      href={d.href}
                      className="block text-sm text-brand-muted hover:text-brand-cyan"
                      onClick={() => setMenuOpen(false)}
                    >
                      {d.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="mt-auto flex gap-4">
            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-brand-text hover:text-brand-cyan"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
