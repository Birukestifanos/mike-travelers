import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon, PenLineIcon } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useSeo } from "../hooks/useSeo";
import { images } from "../data/images";
import { buttonStyles } from "../utils/styles";
import { PageHeader } from "../components/ui/PageHeader";
import { Reveal } from "../components/ui/Reveal";
import { SectionLabel } from "../components/ui/SectionLabel";

export function About() {
  const { t } = useLanguage();
  const a = t.about;
  useSeo({ title: t.seo.pages.about.title + t.seo.titleSuffix, description: t.seo.pages.about.description });

  return (
    <>
      <PageHeader label={a.label} title={a.title} intro={a.intro} />

      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <Reveal className="lg:col-span-5">
            <img src={images.vehicleRoad} alt={a.imageAlt} loading="lazy" className="aspect-[4/5] w-full rounded-sm object-cover" />
          </Reveal>
          <Reveal className="flex flex-col justify-center lg:col-span-7" delay={0.05}>
            {/* Replace this block with Mike's biography once he provides it (i18n/en/about.ts + i18n/am/about.ts) */}
            <div className="rounded-lg border border-dashed border-gold/60 bg-cream/60 p-8 lg:p-12">
              <SectionLabel>{a.chapterLabel}</SectionLabel>
              <h2 className="display mt-5 text-[clamp(1.9rem,3.4vw,3rem)] font-medium text-forest">{a.chapterTitle}</h2>
              <p className="mt-5 flex items-start gap-3 text-lg text-muted">
                <PenLineIcon className="mt-1.5 h-5 w-5 shrink-0 text-earth" aria-hidden="true" />
                {a.chapterBody}
              </p>
            </div>

            <h2 className="caps mt-16 text-xs font-semibold text-earth">{a.principlesHeading}</h2>
            <dl className="mt-6 grid gap-8 border-t border-sand pt-8 sm:grid-cols-3">
              {a.principles.map((principle) =>
              <div key={principle.title}>
                  <dt className="font-display text-2xl text-forest">{principle.title}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted">{principle.body}</dd>
                </div>
              )}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="bg-forest-deep text-ivory">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <img src={images.interiorDash} alt="" loading="lazy" className="aspect-[4/3] h-full w-full object-cover lg:aspect-auto" />
          <Reveal className="flex flex-col justify-center px-5 py-16 lg:px-16 lg:py-24">
            <SectionLabel tone="light">{t.vehicle.label}</SectionLabel>
            <h2 className="display mt-5 text-[clamp(2rem,3.6vw,3.25rem)] font-medium">{a.vehicleHeading}</h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ivory/80">{a.vehicleBody}</p>
            <Link to="/#vehicle" className={`${buttonStyles.light} mt-8 self-start`}>
              {a.vehicleCta}
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-20 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 md:flex-row md:items-center md:justify-between lg:px-8">
          <h2 className="display text-[clamp(1.8rem,3vw,2.75rem)] font-medium text-forest">{a.closingHeading}</h2>
          <Link to="/contact" className={`${buttonStyles.primary} self-start md:self-auto`}>
            {a.closingCta}
          </Link>
        </div>
      </section>
    </>);

}