import React from "react";
import { InfoIcon } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useSeo } from "../hooks/useSeo";
import { images } from "../data/images";
import { RegistrationForm } from "../components/forms/RegistrationForm";
import { SectionLabel } from "../components/ui/SectionLabel";

export function Register() {
  const { t } = useLanguage();
  const r = t.registration;
  useSeo({ title: t.seo.pages.register.title + t.seo.titleSuffix, description: t.seo.pages.register.description });

  return (
    <section className="bg-cream pb-24 pt-32 lg:pb-32 lg:pt-40">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <div className="lg:col-span-5">
          <SectionLabel>{r.label}</SectionLabel>
          <h1 className="display mt-5 text-[clamp(2.5rem,5.2vw,4.75rem)] font-medium text-forest">{r.title}</h1>
          <p className="mt-6 max-w-md text-lg text-muted">{r.intro}</p>

          <div className="mt-10 flex items-start gap-3 border-l-2 border-eth-yellow bg-ivory px-5 py-4">
            <InfoIcon className="mt-0.5 h-5 w-5 shrink-0 text-earth" aria-hidden="true" />
            <div>
              <p className="font-semibold text-ink">{r.accountsTitle}</p>
              <p className="mt-1 text-sm text-muted">{r.accountsBody}</p>
            </div>
          </div>

          <img
            src={images.interiorSeats}
            alt=""
            loading="lazy"
            className="mt-10 hidden aspect-[4/3] w-full rounded-sm object-cover lg:block" />
          
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <div className="rounded-2xl border border-sand bg-ivory p-6 sm:p-8 lg:p-10">
            <RegistrationForm />
          </div>
        </div>
      </div>
    </section>);

}