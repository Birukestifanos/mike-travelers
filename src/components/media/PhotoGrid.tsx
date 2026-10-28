import React from "react";
import { ExpandIcon } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import type { GalleryItem } from "../../types/content";

interface PhotoGridProps {
  items: GalleryItem[];
  onOpen: (index: number) => void;
}

export function PhotoGrid({ items, onOpen }: PhotoGridProps) {
  const { t } = useLanguage();

  return (
    <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3">
      {items.map((item, index) => {
        const caption = t.gallery.items[item.id];
        return (
          <li key={item.id} className="mb-4 break-inside-avoid">
            <button
              type="button"
              onClick={() => onOpen(index)}
              aria-label={t.gallery.lightbox.open(caption)}
              className="group relative block w-full overflow-hidden rounded-sm bg-sand text-left">
              
              <img
                src={item.image}
                alt={caption}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-300 ease-out-strong group-hover:scale-[1.03] ${
                item.orientation === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]"}`
                } />
              
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-ink/70 px-4 py-3 text-sm text-ivory opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                <span>{caption}</span>
                <ExpandIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
              </span>
            </button>
          </li>);

      })}
    </ul>);

}