import { common as enCommon } from "./en/common";
import { navigation as enNavigation } from "./en/navigation";
import { home as enHome } from "./en/home";
import { about as enAbout } from "./en/about";
import { vehicle as enVehicle } from "./en/vehicle";
import { destinations as enDestinations } from "./en/destinations";
import { stories as enStories } from "./en/stories";
import { gallery as enGallery } from "./en/gallery";
import { contact as enContact } from "./en/contact";
import { registration as enRegistration } from "./en/registration";
import { social as enSocial } from "./en/social";
import { footer as enFooter } from "./en/footer";
import { seo as enSeo } from "./en/seo";
import { common as amCommon } from "./am/common";
import { navigation as amNavigation } from "./am/navigation";
import { home as amHome } from "./am/home";
import { about as amAbout } from "./am/about";
import { vehicle as amVehicle } from "./am/vehicle";
import { destinations as amDestinations } from "./am/destinations";
import { stories as amStories } from "./am/stories";
import { gallery as amGallery } from "./am/gallery";
import { contact as amContact } from "./am/contact";
import { registration as amRegistration } from "./am/registration";
import { social as amSocial } from "./am/social";
import { footer as amFooter } from "./am/footer";
import { seo as amSeo } from "./am/seo";
import type { Language, Translations } from "./types";

export const LANGUAGES: {code: Language;label: string;}[] = [
{ code: "en", label: "English" },
{ code: "am", label: "አማርኛ" }];


export const DEFAULT_LANGUAGE: Language = "en";
export const LANGUAGE_STORAGE_KEY = "mike-travelers.language";

const en: Translations = {
  common: enCommon,
  nav: enNavigation,
  home: enHome,
  about: enAbout,
  vehicle: enVehicle,
  destinations: enDestinations,
  stories: enStories,
  gallery: enGallery,
  contact: enContact,
  registration: enRegistration,
  social: enSocial,
  footer: enFooter,
  seo: enSeo
};

const am: Translations = {
  common: amCommon,
  nav: amNavigation,
  home: amHome,
  about: amAbout,
  vehicle: amVehicle,
  destinations: amDestinations,
  stories: amStories,
  gallery: amGallery,
  contact: amContact,
  registration: amRegistration,
  social: amSocial,
  footer: amFooter,
  seo: amSeo
};

/**
 * Every language is merged over English, so an empty or missing value
 * falls back to the English text instead of rendering "undefined" or a key.
 */
export const translations: Record<Language, Translations> = {
  en,
  am: withFallback(en, am) as Translations
};

export function isLanguage(value: unknown): value is Language {
  return value === "en" || value === "am";
}

export function getInitialLanguage(): Language {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE;
  try {
    const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (isLanguage(stored)) return stored;
  } catch {

    // localStorage can be unavailable (private mode, blocked storage)
  }return DEFAULT_LANGUAGE;
}

export function persistLanguage(language: Language): void {
  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch {

    // Preference simply won't persist if storage is unavailable
  }}

export function applyDocumentLanguage(language: Language): void {
  if (typeof document === "undefined") return;
  document.documentElement.lang = language;
  // Both English and Amharic are written left-to-right
  document.documentElement.dir = "ltr";
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function withFallback(fallback: unknown, value: unknown): unknown {
  if (Array.isArray(fallback)) {
    if (!Array.isArray(value)) return fallback;
    return fallback.map((item, index) =>
    index < value.length ? withFallback(item, value[index]) : item
    );
  }
  if (isPlainObject(fallback)) {
    if (!isPlainObject(value)) return fallback;
    const result: Record<string, unknown> = {};
    for (const key of Object.keys(fallback)) {
      result[key] = withFallback(fallback[key], value[key]);
    }
    return result;
  }
  if (typeof fallback === "string") {
    return typeof value === "string" && value.trim() !== "" ? value : fallback;
  }
  if (typeof fallback === "function") {
    return typeof value === "function" ? value : fallback;
  }
  return value ?? fallback;
}