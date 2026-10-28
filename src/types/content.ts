import type {
  DestinationsTranslations,
  GalleryTranslations,
  StoriesTranslations } from
"../i18n/types";

export type DestinationId = keyof DestinationsTranslations["items"];
export type DestinationCategory = Exclude<keyof DestinationsTranslations["categories"], "all">;

export interface Destination {
  id: DestinationId;
  category: DestinationCategory;
  image: string;
  /** true while the image is a stand-in rather than Mike's own photograph */
  placeholder: boolean;
}

export type StoryId = keyof StoriesTranslations["items"];
export type StoryCategory = Exclude<keyof StoriesTranslations["categories"], "all">;

export interface Story {
  id: StoryId;
  category: StoryCategory;
  image: string;
  /** ISO date, e.g. "2026-09-14" */
  date: string;
  readingMinutes: number;
}

export type GalleryItemId = keyof GalleryTranslations["items"];
export type GalleryCategory = Exclude<keyof GalleryTranslations["categories"], "all">;

export interface GalleryItem {
  id: GalleryItemId;
  category: GalleryCategory;
  image: string;
  orientation: "landscape" | "portrait";
  placeholder: boolean;
}

export interface Video {
  id: string;
  /** Kept in its original language unless a verified translation exists */
  title: string;
  /** Public YouTube video id (the part after ?v=). null = not published yet */
  youtubeId: string | null;
  thumbnail: string;
}

export type SocialPlatform = "tiktok" | "youtube" | "instagram" | "facebook";

export interface SocialLink {
  platform: SocialPlatform;
  name: string;
  /** Verified username, e.g. "@miketravelers". null until confirmed */
  handle: string | null;
  /** Verified profile URL. null until confirmed — the link stays disabled */
  url: string | null;
}