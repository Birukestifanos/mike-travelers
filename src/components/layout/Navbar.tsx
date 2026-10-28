import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { MenuIcon, XIcon } from "lucide-react";

import { useLanguage } from "../../contexts/LanguageContext";
import { navItems } from "../../data/navigation";
import { buttonStyles } from "../../utils/styles";
import { BrandMark } from "../ui/BrandMark";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const { t } = useLanguage();
  const { pathname } = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const transparent = pathname === "/" && !scrolled && !menuOpen;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,color] duration-200 ease-out ${
          transparent
            ? "border-b border-transparent bg-transparent text-ivory"
            : "border-b border-sand bg-ivory/95 text-ink backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 lg:h-20 lg:px-8">
          {/* Logo */}
          <Link to="/" aria-label={t.nav.homeLink} className="rounded-sm">
            <BrandMark />
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label={t.nav.mainLabel} className="hidden xl:block">
            <ul className="flex items-center gap-7">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.end}
                    className="relative block whitespace-nowrap py-2 text-sm font-medium"
                  >
                    {({ isActive }) => (
                      <>
                        <span
                          className={
                            isActive
                              ? ""
                              : "opacity-80 transition-opacity duration-150 hover:opacity-100"
                          }
                        >
                          {t.nav[item.labelKey]}
                        </span>

                        {isActive && (
                          <motion.span
                            layoutId="nav-active"
                            className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-gold"
                            transition={{
                              duration: 0.25,
                              ease: [0.23, 1, 0.32, 1],
                            }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right-side Actions */}
          <div className="flex items-center gap-3 lg:gap-5">
            <LanguageSwitcher
              tone={transparent ? "light" : "dark"}
              className="hidden sm:inline-flex"
            />

            <Link
              to="/contact"
              className={`hidden md:inline-flex !px-5 !py-2.5 ${
                transparent ? buttonStyles.light : buttonStyles.primary
              }`}
            >
              {t.nav.connect}
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
              className="relative z-[60] -mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full xl:hidden"
            >
              {menuOpen ? (
                <XIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu — outside the header */}
      <MobileMenu
        id="mobile-menu"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}
