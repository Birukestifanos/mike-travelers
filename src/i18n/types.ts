import type { common } from "./en/common";
import type { navigation } from "./en/navigation";
import type { home } from "./en/home";
import type { about } from "./en/about";
import type { vehicle } from "./en/vehicle";
import type { destinations } from "./en/destinations";
import type { stories } from "./en/stories";
import type { gallery } from "./en/gallery";
import type { contact } from "./en/contact";
import type { registration } from "./en/registration";
import type { social } from "./en/social";
import type { footer } from "./en/footer";
import type { seo } from "./en/seo";

export type Language = "en" | "am";

/*
 * English modules are the source of truth for the shape of every translation.
 * Amharic modules are typed against these, so a missing key is a compile error.
 */
export type CommonTranslations = typeof common;
export type NavigationTranslations = typeof navigation;
export type HomeTranslations = typeof home;
export type AboutTranslations = typeof about;
export type VehicleTranslations = typeof vehicle;
export type DestinationsTranslations = typeof destinations;
export type StoriesTranslations = typeof stories;
export type GalleryTranslations = typeof gallery;
export type ContactTranslations = typeof contact;
export type RegistrationTranslations = typeof registration;
export type SocialTranslations = typeof social;
export type FooterTranslations = typeof footer;
export type SeoTranslations = typeof seo;

export interface Translations {
  common: CommonTranslations;
  nav: NavigationTranslations;
  home: HomeTranslations;
  about: AboutTranslations;
  vehicle: VehicleTranslations;
  destinations: DestinationsTranslations;
  stories: StoriesTranslations;
  gallery: GalleryTranslations;
  contact: ContactTranslations;
  registration: RegistrationTranslations;
  social: SocialTranslations;
  footer: FooterTranslations;
  seo: SeoTranslations;
}

export type SeoPageKey = keyof SeoTranslations["pages"];