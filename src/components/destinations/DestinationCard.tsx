import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import type { Destination } from "../../types/content";

interface DestinationCardProps {
  destination: Destination;
  size?: "large" | "regular";
}

export function DestinationCard({ destination, size = "regular" }: DestinationCardProps) {
  const { t } = useLanguage();
  const copy = t.destinations.items[destination.id];
  const large = size === "large";

  return (
    <Link
      to={`/destinations/${destination.id}`}
      className="group flex h-full flex-col rounded-sm focus-visible:outline-offset-4">
      
      <div className={`relative overflow-hidden rounded-sm bg-sand ${large ? "aspect-[4/3] lg:aspect-[6/5]" : "aspect-[4/3]"}`}>
        <img
          src={destination.image}
          alt={copy.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 ease-out-strong group-hover:scale-[1.04]" />
        
        <span className="absolute left-3 top-3 rounded-full bg-ivory/95 px-3 py-1 text-xs font-medium text-forest">
          {t.destinations.categories[destination.category]}
        </span>
      </div>
      <div className="flex flex-1 flex-col pt-5">
        <p className="caps text-[11px] font-semibold text-earth">{copy.region}</p>
        <h3 className={`mt-2 font-display font-medium text-ink ${large ? "text-3xl lg:text-4xl" : "text-2xl"}`}>
          {copy.name}
        </h3>
        <p className={`mt-3 text-muted ${large ? "max-w-lg text-base" : "line-clamp-2 text-sm"}`}>{copy.summary}</p>
        <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-forest">
          {t.destinations.discoverMore}
          <ArrowRightIcon
            className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-1"
            aria-hidden="true" />
          
        </span>
      </div>
    </Link>);

}