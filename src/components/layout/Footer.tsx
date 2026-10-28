import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpIcon, MailIcon } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { navItems } from "../../data/navigation";
import { site } from "../../data/site";
import { BrandMark } from "../ui/BrandMark";
import { WovenBand } from "../ui/WovenBand";
import { SocialLinks } from "../social/SocialLinks";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-deep text-ivory/80">
      <WovenBand />
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" aria-label={t.nav.homeLink} className="text-ivory">
              <BrandMark />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed">{t.footer.description}</p>
          </div>

          <nav aria-label={t.footer.explore} className="lg:col-span-2">
            <h2 className="caps text-xs font-semibold text-gold-light">{t.footer.explore}</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {navItems.map((item) =>
              <li key={item.to}>
                  <Link to={item.to} className="transition-colors duration-150 hover:text-ivory">
                    {t.nav[item.labelKey]}
                  </Link>
                </li>
              )}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="caps text-xs font-semibold text-gold-light">{t.footer.connect}</h2>
            <div className="mt-5">
              <SocialLinks tone="light" />
            </div>
            <Link
              to="/register"
              className="mt-6 inline-block text-sm text-ivory underline decoration-gold-light/60 underline-offset-4 transition-colors duration-150 hover:decoration-gold-light">
              
              {t.footer.stayConnected}
            </Link>
          </div>

          <div className="space-y-8 lg:col-span-3">
            <div>
              <h2 className="caps text-xs font-semibold text-gold-light">{t.footer.contactHeading}</h2>
              <a
                href={`mailto:${site.contactEmail}`}
                className="mt-5 inline-flex items-center gap-2 break-all text-sm text-ivory transition-colors duration-150 hover:text-gold-light">
                
                <MailIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
                {site.contactEmail}
              </a>
            </div>
            <div>
              <h2 className="caps text-xs font-semibold text-gold-light">{t.footer.language}</h2>
              <LanguageSwitcher tone="light" className="mt-3 text-ivory" />
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 border-t border-ivory/15 pt-8 text-xs lg:grid-cols-12 lg:items-start">
          <p className="lg:col-span-4">{t.footer.copyright(year)}</p>
          <p className="max-w-xl lg:col-span-6">
            <span className="font-semibold text-ivory">{t.footer.privacyTitle}. </span>
            {t.footer.privacy}
          </p>
          <div className="lg:col-span-2 lg:text-right">
            <a href="#top" className="inline-flex items-center gap-1.5 text-ivory transition-colors duration-150 hover:text-gold-light">
              {t.footer.backToTop}
              <ArrowUpIcon className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>);

}