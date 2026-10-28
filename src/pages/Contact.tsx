import React from "react";
import { MailIcon } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useSeo } from "../hooks/useSeo";
import { site } from "../data/site";
import { ContactForm } from "../components/forms/ContactForm";
import { SocialLinks } from "../components/social/SocialLinks";
import { SectionLabel } from "../components/ui/SectionLabel";

export function Contact() {
  const { t } = useLanguage();
  const c = t.contact;
  useSeo({ title: t.seo.pages.contact.title + t.seo.titleSuffix, description: t.seo.pages.contact.description });

  return (
    <section className="bg-cream pb-24 pt-32 lg:pb-32 lg:pt-40">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <div className="lg:col-span-5">
          <SectionLabel>{c.label}</SectionLabel>
          <h1 className="display mt-5 text-[clamp(2.5rem,5.2vw,4.75rem)] font-medium text-forest">{c.heading}</h1>
          <p className="mt-6 max-w-md text-lg text-muted">{c.intro}</p>

          <div className="mt-12 space-y-10 border-t border-sand pt-10">
            <div>
              <h2 className="caps text-xs font-semibold text-earth">{c.directEmail}</h2>
              <a
                href={`mailto:${site.contactEmail}`}
                className="mt-3 inline-flex items-center gap-2 break-all font-display text-2xl text-ink transition-colors duration-150 hover:text-forest">
                
                <MailIcon className="h-5 w-5 shrink-0 text-earth" aria-hidden="true" />
                {site.contactEmail}
              </a>
            </div>
            <div>
              <h2 className="caps text-xs font-semibold text-earth">{c.socialHeading}</h2>
              <div className="mt-4">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-sand bg-ivory p-6 sm:p-8 lg:p-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>);

}