import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { LANGUAGES } from "../../i18n/config";

interface LanguageSwitcherProps {
  /** "light" for use on dark backgrounds */
  tone?: "dark" | "light";
  className?: string;
}

export function LanguageSwitcher({ tone = "dark", className = "" }: LanguageSwitcherProps) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div role="group" aria-label={t.nav.languageLabel} className={`inline-flex items-center text-sm ${className}`}>
      {LANGUAGES.map((option, index) => {
        const active = option.code === language;
        return (
          <React.Fragment key={option.code}>
            {index > 0 &&
            <span aria-hidden="true" className={`px-1.5 ${tone === "light" ? "text-ivory/40" : "text-ink/30"}`}>
                |
              </span>
            }
            <button
              type="button"
              lang={option.code}
              aria-pressed={active}
              onClick={() => setLanguage(option.code)}
              className={`whitespace-nowrap rounded px-1.5 py-1 underline-offset-[6px] transition-[color,opacity] duration-150 ${
              active ?
              "font-semibold underline decoration-gold decoration-2" :
              `opacity-70 hover:opacity-100`}`
              }>
              
              {option.label}
            </button>
          </React.Fragment>);

      })}
    </div>);

}