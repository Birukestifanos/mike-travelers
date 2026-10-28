import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import { navItems } from "../../data/navigation";
import { buttonStyles } from "../../utils/styles";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { WovenBand } from "../ui/WovenBand";

interface MobileMenuProps {
  id: string;
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ id, open, onClose }: MobileMenuProps) {
  const { t } = useLanguage();

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id={id}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="fixed inset-x-0 bottom-0 top-16 lg:top-20 z-[55] flex flex-col overflow-y-auto bg-ivory text-ink xl:hidden"
        >
          <nav aria-label={t.nav.mainLabel} className="flex-1 px-5 pt-6">
            <ul className="divide-y divide-sand">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.end}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `flex items-center justify-between py-4 font-display text-2xl ${
                        isActive ? "text-forest" : "text-ink/80"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {t.nav[item.labelKey]}
                        {isActive && (
                          <span
                            aria-hidden="true"
                            className="h-2 w-2 rounded-full bg-gold"
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="space-y-5 px-5 pb-8 pt-6">
            <LanguageSwitcher className="text-base" />
            <Link
              to="/contact"
              onClick={onClose}
              className={`${buttonStyles.primary} w-full`}
            >
              {t.nav.connect}
            </Link>
          </div>
          <WovenBand />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
