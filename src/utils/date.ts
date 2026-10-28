import type { Language } from "../i18n/types";

export function formatDate(isoDate: string, language: Language): string {
  const date = new Date(`${isoDate}T12:00:00`);
  try {
    return new Intl.DateTimeFormat(language === "am" ? "am-ET" : "en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric"
    }).format(date);
  } catch {
    return isoDate;
  }
}