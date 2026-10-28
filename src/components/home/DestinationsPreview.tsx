import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { destinations } from "../../data/destinations";
import { textLinkStyle } from "../../utils/styles";
import { DestinationCard } from "../destinations/DestinationCard";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";

export function DestinationsPreview() {
  const { t } = useLanguage();
  const [feature, ...rest] = destinations;

  return (
    <section aria-labelledby="destinations-title" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <SectionLabel>{t.home.destinations.label}</SectionLabel>
            <h2 id="destinations-title" className="display section-title mt-5 font-medium text-forest">
              {t.home.destinations.heading}
            </h2>
            <p className="mt-5 text-base text-muted">{t.home.destinations.body}</p>
          </div>
          <Link to="/destinations" className={`${textLinkStyle} shrink-0`}>
            {t.home.destinations.cta}
            <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-7">
            <DestinationCard destination={feature} size="large" />
          </Reveal>
          <div className="grid gap-12 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1 lg:gap-10">
            {rest.slice(0, 2).map((destination, index) =>
            <Reveal key={destination.id} delay={0.05 * (index + 1)}>
                <DestinationCard destination={destination} />
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>);

}