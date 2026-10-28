import React from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { useSeo } from "../hooks/useSeo";
import { destinations } from "../data/destinations";
import { buttonStyles } from "../utils/styles";
import { PageHeader } from "../components/ui/PageHeader";
import { CategoryFilter } from "../components/ui/CategoryFilter";
import { DestinationCard } from "../components/destinations/DestinationCard";
import type { DestinationCategory } from "../types/content";

type Filter = "all" | DestinationCategory;

export function Destinations() {
  const { t } = useLanguage();
  const d = t.destinations;
  useSeo({ title: t.seo.pages.destinations.title + t.seo.titleSuffix, description: t.seo.pages.destinations.description });

  const [params, setParams] = useSearchParams();
  const filterKeys = Object.keys(d.categories) as Filter[];
  const requested = params.get("category");
  const filter: Filter = filterKeys.find((key) => key === requested) ?? "all";

  const setFilter = (next: Filter) => {
    setParams(next === "all" ? {} : { category: next }, { replace: true });
  };

  const filtered = filter === "all" ? destinations : destinations.filter((item) => item.category === filter);

  return (
    <>
      <PageHeader label={d.label} title={d.title} intro={d.intro} />

      <section className="bg-ivory pb-28 pt-12 lg:pt-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <CategoryFilter
              label={d.filterLabel}
              value={filter}
              onChange={setFilter}
              options={filterKeys.map((key) => ({ value: key, label: d.categories[key] }))} />
            
            <p aria-live="polite" className="shrink-0 text-sm text-muted">
              {d.resultsCount(filtered.length)}
            </p>
          </div>

          {filtered.length === 0 ?
          <div className="mt-16 rounded-lg border border-dashed border-sand py-20 text-center">
              <p className="text-lg text-muted">{d.empty}</p>
              <button type="button" onClick={() => setFilter("all")} className={`${buttonStyles.outlineDark} mt-6`}>
                {d.emptyAction}
              </button>
            </div> :

          <ul className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout" initial={false}>
                {filtered.map((destination) =>
              <motion.li
                key={destination.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}>
                
                    <DestinationCard destination={destination} />
                  </motion.li>
              )}
              </AnimatePresence>
            </ul>
          }
        </div>
      </section>
    </>);

}