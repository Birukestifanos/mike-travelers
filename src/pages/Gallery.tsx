import React, { useCallback, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { useSeo } from "../hooks/useSeo";
import { galleryItems } from "../data/gallery";
import { videos } from "../data/videos";
import { buttonStyles } from "../utils/styles";
import { PageHeader } from "../components/ui/PageHeader";
import { CategoryFilter } from "../components/ui/CategoryFilter";
import { PhotoGrid } from "../components/media/PhotoGrid";
import { Lightbox } from "../components/media/Lightbox";
import { VideoEmbed } from "../components/media/VideoEmbed";
import { SectionLabel } from "../components/ui/SectionLabel";
import type { GalleryCategory } from "../types/content";

type Filter = "all" | GalleryCategory;

export function Gallery() {
  const { t } = useLanguage();
  const g = t.gallery;
  useSeo({ title: t.seo.pages.gallery.title + t.seo.titleSuffix, description: t.seo.pages.gallery.description });

  const [filter, setFilter] = useState<Filter>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const filterKeys = Object.keys(g.categories) as Filter[];
  const filtered = filter === "all" ? galleryItems : galleryItems.filter((item) => item.category === filter);

  const close = useCallback(() => setOpenIndex(null), []);

  return (
    <>
      <PageHeader label={g.label} title={g.title} intro={g.intro} />

      <section aria-labelledby="photos-title" className="bg-ivory pb-24 pt-12 lg:pt-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 id="photos-title" className="font-display text-3xl text-ink">
                {g.photosHeading}
              </h2>
              <p aria-live="polite" className="mt-1 text-sm text-muted">
                {g.photoCount(filtered.length)}
              </p>
            </div>
            <CategoryFilter
              label={g.filterLabel}
              value={filter}
              onChange={(next) => {
                setFilter(next);
                setOpenIndex(null);
              }}
              options={filterKeys.map((key) => ({ value: key, label: g.categories[key] }))} />
            
          </div>

          <div className="mt-10">
            {filtered.length === 0 ?
            <div className="rounded-lg border border-dashed border-sand py-20 text-center">
                <p className="text-lg text-muted">{g.empty}</p>
                <button type="button" onClick={() => setFilter("all")} className={`${buttonStyles.outlineDark} mt-6`}>
                  {g.emptyAction}
                </button>
              </div> :

            <PhotoGrid items={filtered} onOpen={setOpenIndex} />
            }
          </div>
        </div>
      </section>

      <section aria-labelledby="videos-title" className="bg-cream py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionLabel>{g.label}</SectionLabel>
          <h2 id="videos-title" className="display section-title mt-5 font-medium text-forest">
            {g.videosHeading}
          </h2>
          <p className="mt-5 max-w-xl text-base text-muted">{g.videosIntro}</p>
          <ul className="mt-12 grid gap-x-8 gap-y-12 md:grid-cols-3">
            {videos.map((video) =>
            <li key={video.id}>
                <VideoEmbed video={video} />
              </li>
            )}
          </ul>
        </div>
      </section>

      <AnimatePresence>
        {openIndex !== null && filtered[openIndex] &&
        <Lightbox items={filtered} index={openIndex} onClose={close} onChange={setOpenIndex} />
        }
      </AnimatePresence>
    </>);

}