import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { socialLinks } from "../../data/socialLinks";
import { BrandIcon } from "../ui/BrandIcon";

interface SocialLinksProps {
  tone?: "dark" | "light";
}

/* Compact icon row. Platforms without a verified URL render as disabled. */
export function SocialLinks({ tone = "dark" }: SocialLinksProps) {
  const { t } = useLanguage();
  const ring = tone === "light" ? "border-ivory/25 text-ivory" : "border-ink/15 text-ink";

  return (
    <ul className="flex flex-wrap gap-2">
      {socialLinks.map((link) =>
      <li key={link.platform}>
          {link.url ?
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition-[background-color,border-color] duration-150 ${ring} ${
          tone === "light" ? "hover:border-gold-light hover:bg-ivory/10" : "hover:border-forest hover:bg-forest/5"}`
          }>
          
              <BrandIcon platform={link.platform} />
              <span className="sr-only">
                {t.social.visit(link.name)} {t.social.opensNewTab}
              </span>
            </a> :

        <span
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full border opacity-40 ${ring}`}
          title={`${link.name} — ${t.social.pending}`}>
          
              <BrandIcon platform={link.platform} />
              <span className="sr-only">
                {link.name} — {t.social.pending}
              </span>
            </span>
        }
        </li>
      )}
    </ul>);

}