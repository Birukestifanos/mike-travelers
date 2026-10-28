import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useSeo } from "../hooks/useSeo";
import { destinations } from "../data/destinations";
import { DestinationCard } from "../components/destinations/DestinationCard";
import { NotFoundMessage } from "../components/ui/NotFoundMessage";
import { SampleNotice } from "../components/ui/SampleNotice";
import { Reveal } from "../components/ui/Reveal";

export function DestinationDetails() {
  const { id } = useParams();
  const { t } = useLanguage();
  const d = t.destinations;
  const destination = destinations.find((item) => item.id === id);
  const copy = destination ? d.items[destination.id] : null;

  useSeo({
    title: (copy ? copy.name : d.detail.notFoundTitle) + t.seo.titleSuffix,
    description: copy ? copy.summary : d.detail.notFoundBody,
    image: destination?.image
  });

  if (!destination || !copy) {
    return <NotFoundMessage title={d.detail.notFoundTitle} body={d.detail.notFoundBody} to="/destinations" cta={d.detail.back} />;
  }

  const related = destinations.
  filter((item) => item.id !== destination.id).
  sort((a, b) => Number(b.category === destination.category) - Number(a.category === destination.category)).
  slice(0, 3);

  return (
    <article className="bg-ivory">
      <header className="mx-auto max-w-7xl px-5 pt-28 lg:px-8 lg:pt-36">
        <Link
          to="/destinations"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors duration-150 hover:text-forest">
          
          <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
          {d.detail.back}
        </Link>
        <div className="mt-8 grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="caps text-xs font-semibold text-earth">{copy.region}</p>
            <h1 className="display mt-4 text-[clamp(2.75rem,7vw,6rem)] font-medium text-forest">{copy.name}</h1>
          </div>
          <p className="text-lg text-muted lg:col-span-4">{copy.summary}</p>
        </div>
      </header>

      <div className="mx-auto mt-12 max-w-7xl px-5 lg:px-8">
        <img
          src={destination.image}
          alt={copy.name}
          className="aspect-[4/3] w-full rounded-sm object-cover sm:aspect-[16/9] lg:aspect-[21/9]" />
        
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-12 lg:px-8 lg:py-24">
        <Reveal className="lg:col-span-7">
          <h2 className="font-display text-3xl text-ink">{d.detail.about}</h2>
          <div className="prose-body mt-6 text-lg leading-relaxed text-muted">
            {copy.body.map((paragraph) =>
            <p key={paragraph}>{paragraph}</p>
            )}
          </div>
        </Reveal>
        <aside className="lg:col-span-4 lg:col-start-9">
          <dl className="divide-y divide-sand border-y border-sand">
            <div className="flex justify-between gap-4 py-4 text-sm">
              <dt className="text-muted">{d.detail.region}</dt>
              <dd className="text-right font-medium text-ink">{copy.region}</dd>
            </div>
            <div className="flex justify-between gap-4 py-4 text-sm">
              <dt className="text-muted">{d.detail.category}</dt>
              <dd className="text-right font-medium text-ink">
                <Link
                  to={`/destinations?category=${destination.category}`}
                  className="underline decoration-gold/60 underline-offset-4 hover:text-forest">
                  
                  {d.categories[destination.category]}
                </Link>
              </dd>
            </div>
          </dl>
          <SampleNotice className="mt-8" />
        </aside>
      </div>

      <section aria-labelledby="related-destinations" className="bg-cream py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 id="related-destinations" className="display text-[clamp(1.8rem,3vw,2.75rem)] font-medium text-forest">
            {d.detail.related}
          </h2>
          <ul className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) =>
            <li key={item.id}>
                <DestinationCard destination={item} />
              </li>
            )}
          </ul>
        </div>
      </section>
    </article>);

}