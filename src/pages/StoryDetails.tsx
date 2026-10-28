import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useSeo } from "../hooks/useSeo";
import { stories } from "../data/stories";
import { formatDate } from "../utils/date";
import { StoryCard } from "../components/stories/StoryCard";
import { NotFoundMessage } from "../components/ui/NotFoundMessage";
import { SampleNotice } from "../components/ui/SampleNotice";

export function StoryDetails() {
  const { id } = useParams();
  const { t, language } = useLanguage();
  const s = t.stories;
  const story = stories.find((item) => item.id === id);
  const copy = story ? s.items[story.id] : null;

  useSeo({
    title: (copy ? copy.title : s.detail.notFoundTitle) + t.seo.titleSuffix,
    description: copy ? copy.intro : s.detail.notFoundBody,
    image: story?.image
  });

  if (!story || !copy) {
    return <NotFoundMessage title={s.detail.notFoundTitle} body={s.detail.notFoundBody} to="/stories" cta={s.detail.back} />;
  }

  const related = stories.
  filter((item) => item.id !== story.id).
  sort((a, b) => Number(b.category === story.category) - Number(a.category === story.category)).
  slice(0, 3);

  return (
    <>
      <article className="bg-ivory pb-20 lg:pb-28">
        <header className="mx-auto max-w-3xl px-5 pt-28 lg:pt-36">
          <Link
            to="/stories"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors duration-150 hover:text-forest">
            
            <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
            {s.detail.back}
          </Link>
          <p className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
            <span className="font-semibold text-earth">{s.categories[story.category]}</span>
            <span aria-hidden="true">·</span>
            <span>
              <span className="sr-only">{s.detail.published}: </span>
              <time dateTime={story.date}>{formatDate(story.date, language)}</time>
            </span>
            <span aria-hidden="true">·</span>
            <span>{t.common.minRead(story.readingMinutes)}</span>
          </p>
          <h1 className="display mt-5 text-[clamp(2.4rem,5.5vw,4.5rem)] font-medium text-forest">{copy.title}</h1>
          <p className="mt-6 font-display text-xl leading-relaxed text-ink/80 sm:text-2xl">{copy.intro}</p>
        </header>

        <div className="mx-auto mt-12 max-w-6xl px-5 lg:px-8">
          <img src={story.image} alt="" className="aspect-[4/3] w-full rounded-sm object-cover sm:aspect-[16/9]" />
        </div>

        <div className="mx-auto mt-14 max-w-3xl px-5">
          <div className="prose-body text-lg leading-[1.8] text-ink/85">
            {copy.body.map((paragraph) =>
            <p key={paragraph}>{paragraph}</p>
            )}
          </div>
          <SampleNotice className="mt-12" />
        </div>
      </article>

      <section aria-labelledby="related-stories" className="bg-cream py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 id="related-stories" className="display text-[clamp(1.8rem,3vw,2.75rem)] font-medium text-forest">
            {s.detail.related}
          </h2>
          <ul className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) =>
            <li key={item.id}>
                <StoryCard story={item} />
              </li>
            )}
          </ul>
        </div>
      </section>
    </>);

}