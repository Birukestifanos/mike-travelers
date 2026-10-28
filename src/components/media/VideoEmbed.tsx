import React, { useState } from "react";
import { ClockIcon, PlayIcon } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import type { Video } from "../../types/content";

interface VideoEmbedProps {
  video: Video;
}

/*
 * Reusable YouTube embed. Loads the player only after the visitor presses play
 * (privacy-enhanced youtube-nocookie domain). Without a youtubeId it shows "Coming soon".
 */
export function VideoEmbed({ video }: VideoEmbedProps) {
  const { t } = useLanguage();
  const [playing, setPlaying] = useState(false);

  return (
    <figure className="flex h-full flex-col">
      <div className="relative aspect-video overflow-hidden rounded-sm bg-forest-deep">
        {video.youtubeId && playing ?
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full" /> :

        video.youtubeId ?
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={t.gallery.playVideo(video.title)}
          className="group absolute inset-0">
          
            <img src={video.thumbnail} alt="" loading="lazy" className="h-full w-full object-cover" />
            <span className="absolute inset-0 bg-forest-deep/30 transition-colors duration-150 group-hover:bg-forest-deep/15" />
            <span className="absolute left-1/2 top-1/2 inline-flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ivory text-forest-deep transition-transform duration-150 ease-out group-hover:scale-105">
              <PlayIcon className="ml-1 h-6 w-6" fill="currentColor" aria-hidden="true" />
            </span>
          </button> :

        <div className="absolute inset-0" aria-disabled="true">
            <img src={video.thumbnail} alt="" loading="lazy" className="h-full w-full object-cover opacity-60 grayscale-[35%]" />
            <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-ivory px-3 py-1 text-xs font-semibold text-forest-deep">
              <ClockIcon className="h-3.5 w-3.5" aria-hidden="true" />
              {t.gallery.videoComingSoon}
            </span>
          </div>
        }
      </div>
      <figcaption className="pt-4 font-display text-xl text-ink">{video.title}</figcaption>
    </figure>);

}