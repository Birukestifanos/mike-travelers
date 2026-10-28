import { useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { images } from "../data/images";

interface SeoOptions {
  title: string;
  description: string;
  image?: string;
}

export function useSeo({ title, description, image }: SeoOptions): void {
  const { language, t } = useLanguage();

  useEffect(() => {
    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", t.seo.siteName);
    setMeta("property", "og:image", image ?? images.hero);
    setMeta("property", "og:locale", language === "am" ? "am_ET" : "en_US");
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
  }, [title, description, image, language, t.seo.siteName]);
}

function setMeta(attribute: "name" | "property", key: string, content: string): void {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}