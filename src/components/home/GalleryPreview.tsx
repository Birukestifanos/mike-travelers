import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { galleryItems } from "../../data/gallery";
import { textLinkStyle } from "../../utils/styles";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";

export function GalleryPreview() {
  const { t } = useLanguage();
  const preview = galleryItems.slice(0, 5);

  return (
    <section aria-labelledby="gallery-title" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <SectionLabel>{t.home.gallery.label}</SectionLabel>
            <h2 id="gallery-title" className="display section-title mt-5 font-medium text-forest">
              {t.home.gallery.heading}
            </h2>
            <p className="mt-5 text-base text-muted">{t.home.gallery.body}</p>
          </div>
          <Link to="/gallery" className={`${textLinkStyle} shrink-0`}>
            {t.home.gallery.cta}
            <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>

        <Reveal className="mt-14">
          <ul className="grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[200px] md:grid-cols-4 lg:auto-rows-[240px]">
            {preview.map((item, index) =>
            <li key={item.id} className={index === 0 ? "col-span-2 row-span-2" : ""}>
                <Link to="/gallery" className="group block h-full overflow-hidden rounded-sm bg-sand">
                  <img
                  src={item.image}
                  alt={t.gallery.items[item.id]}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 ease-out-strong group-hover:scale-[1.04]" />
                
                </Link>
              </li>
            )}
          </ul>
        </Reveal>
      </div>
    </section>);

}