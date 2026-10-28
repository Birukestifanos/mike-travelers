import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { stories } from "../../data/stories";
import { textLinkStyle } from "../../utils/styles";
import { StoryCard } from "../stories/StoryCard";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";

export function StoriesPreview() {
  const { t } = useLanguage();
  const [lead, ...rest] = stories;

  return (
    <section aria-labelledby="stories-title" className="bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <SectionLabel>{t.home.stories.label}</SectionLabel>
            <h2 id="stories-title" className="display section-title mt-5 font-medium text-forest">
              {t.home.stories.heading}
            </h2>
            <p className="mt-5 text-base text-muted">{t.home.stories.body}</p>
          </div>
          <Link to="/stories" className={`${textLinkStyle} shrink-0`}>
            {t.home.stories.cta}
            <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <StoryCard story={lead} />
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.05}>
            <ul className="divide-y divide-sand border-y border-sand lg:border-t-0">
              {rest.map((story) =>
              <li key={story.id}>
                  <StoryCard story={story} variant="row" />
                </li>
              )}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>);

}