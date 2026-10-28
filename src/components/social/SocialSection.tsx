import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRightIcon } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { socialLinks } from "../../data/socialLinks";
import { buttonStyles } from "../../utils/styles";
import { BrandIcon } from "../ui/BrandIcon";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";

export function SocialSection() {
  const { t } = useLanguage();
  const firstProfile = socialLinks.find((link) => link.url);

  return (
    <section aria-labelledby="social-title" className="bg-ivory py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-12 lg:px-8">
        <Reveal className="lg:col-span-5">
          <SectionLabel>{t.social.label}</SectionLabel>
          <h2 id="social-title" className="display section-title mt-5 font-medium text-forest">
            {t.social.heading}
          </h2>
          <p className="mt-5 max-w-md text-base text-muted">{t.social.body}</p>
          <div className="mt-8">
            {firstProfile?.url ?
            <a href={firstProfile.url} target="_blank" rel="noopener noreferrer" className={buttonStyles.primary}>
                {t.social.cta}
                <span className="sr-only">{t.social.opensNewTab}</span>
              </a> :

            <Link to="/register" className={buttonStyles.primary}>
                {t.social.cta}
              </Link>
            }
          </div>
        </Reveal>

        <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.05}>
          <ul className="divide-y divide-sand border-y border-sand">
            {socialLinks.map((link) => {
              const content =
              <>
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cream text-forest">
                    <BrandIcon platform={link.platform} className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-2xl text-ink">{link.name}</span>
                    <span className="block truncate text-sm text-muted">{link.handle ?? t.social.pending}</span>
                  </span>
                </>;


              return (
                <li key={link.platform}>
                  {link.url ?
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-5 py-5">
                    
                      {content}
                      <ArrowUpRightIcon
                      className="h-5 w-5 text-forest transition-transform duration-150 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true" />
                    
                      <span className="sr-only">{t.social.opensNewTab}</span>
                    </a> :

                  <div className="flex items-center gap-5 py-5 opacity-70">{content}</div>
                  }
                </li>);

            })}
          </ul>
        </Reveal>
      </div>
    </section>);

}