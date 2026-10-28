import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { useSeo } from "../hooks/useSeo";
import { stories } from "../data/stories";
import { buttonStyles } from "../utils/styles";
import { PageHeader } from "../components/ui/PageHeader";
import { CategoryFilter } from "../components/ui/CategoryFilter";
import { StoryCard } from "../components/stories/StoryCard";
import { Reveal } from "../components/ui/Reveal";
import type { StoryCategory } from "../types/content";

type Filter = "all" | StoryCategory;

export function Stories() {
  const { t } = useLanguage();
  const s = t.stories;
  useSeo({ title: t.seo.pages.stories.title + t.seo.titleSuffix, description: t.seo.pages.stories.description });

  const [filter, setFilter] = useState<Filter>("all");
  const filterKeys = Object.keys(s.categories) as Filter[];
  const filtered = filter === "all" ? stories : stories.filter((story) => story.category === filter);
  const [feature, ...rest] = filtered;

  return (
    <>
      <PageHeader label={s.label} title={s.title} intro={s.intro} />

      <section className="bg-ivory pb-28 pt-12 lg:pt-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <CategoryFilter
            label={s.filterLabel}
            value={filter}
            onChange={setFilter}
            options={filterKeys.map((key) => ({ value: key, label: s.categories[key] }))} />
          

          {!feature ?
          <div className="mt-16 rounded-lg border border-dashed border-sand py-20 text-center">
              <p className="text-lg text-muted">{s.empty}</p>
              <button type="button" onClick={() => setFilter("all")} className={`${buttonStyles.outlineDark} mt-6`}>
                {s.emptyAction}
              </button>
            </div> :

          <div aria-live="polite">
              <Reveal key={feature.id} className="mt-12 border-b border-sand pb-16">
                <StoryCard story={feature} variant="feature" />
              </Reveal>
              {rest.length > 0 &&
            <ul className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
                  {rest.map((story) =>
              <li key={story.id}>
                      <StoryCard story={story} />
                    </li>
              )}
                </ul>
            }
            </div>
          }
        </div>
      </section>
    </>);

}