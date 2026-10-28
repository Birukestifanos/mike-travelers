import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import { formatDate } from "../../utils/date";
import type { Story } from "../../types/content";

interface StoryCardProps {
  story: Story;
  variant?: "grid" | "row" | "feature";
}

export function StoryCard({ story, variant = "grid" }: StoryCardProps) {
  const { t, language } = useLanguage();
  const copy = t.stories.items[story.id];

  const meta =
  <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted">
      <span className="font-semibold text-earth">{t.stories.categories[story.category]}</span>
      <span aria-hidden="true">·</span>
      <time dateTime={story.date}>{formatDate(story.date, language)}</time>
      <span aria-hidden="true">·</span>
      <span>{t.common.minRead(story.readingMinutes)}</span>
    </p>;


  if (variant === "row") {
    return (
      <Link to={`/stories/${story.id}`} className="group grid grid-cols-[96px_1fr] gap-5 py-6 sm:grid-cols-[140px_1fr]">
        <div className="aspect-square overflow-hidden rounded-sm bg-sand sm:aspect-[4/3]">
          <img
            src={story.image}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 ease-out-strong group-hover:scale-[1.04]" />
          
        </div>
        <div className="min-w-0">
          {meta}
          <h3 className="mt-2 font-display text-xl font-medium leading-snug text-ink underline-offset-4 group-hover:underline">
            {copy.title}
          </h3>
          <p className="mt-2 hidden text-sm text-muted sm:line-clamp-2">{copy.intro}</p>
        </div>
      </Link>);

  }

  if (variant === "feature") {
    return (
      <Link to={`/stories/${story.id}`} className="group grid gap-8 lg:grid-cols-12 lg:items-center">
        <div className="aspect-[16/10] overflow-hidden rounded-sm bg-sand lg:col-span-7">
          <img
            src={story.image}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 ease-out-strong group-hover:scale-[1.03]" />
          
        </div>
        <div className="lg:col-span-5">
          {meta}
          <h3 className="display mt-4 text-[clamp(1.9rem,3.4vw,3rem)] font-medium text-ink">{copy.title}</h3>
          <p className="mt-4 text-lg text-muted">{copy.intro}</p>
          <span className="mt-6 inline-block text-sm font-semibold text-forest underline decoration-gold/60 decoration-2 underline-offset-[6px]">
            {t.stories.readStory}
          </span>
        </div>
      </Link>);

  }

  return (
    <Link to={`/stories/${story.id}`} className="group flex h-full flex-col">
      <div className="aspect-[4/3] overflow-hidden rounded-sm bg-sand">
        <img
          src={story.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 ease-out-strong group-hover:scale-[1.04]" />
        
      </div>
      <div className="flex flex-1 flex-col pt-5">
        {meta}
        <h3 className="mt-3 font-display text-2xl font-medium leading-snug text-ink underline-offset-4 group-hover:underline">
          {copy.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm text-muted">{copy.intro}</p>
        <span className="mt-auto pt-5 text-sm font-semibold text-forest">{t.stories.readStory}</span>
      </div>
    </Link>);

}