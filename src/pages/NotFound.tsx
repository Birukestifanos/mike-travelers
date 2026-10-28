import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { useSeo } from "../hooks/useSeo";
import { NotFoundMessage } from "../components/ui/NotFoundMessage";

export function NotFound() {
  const { t } = useLanguage();
  useSeo({ title: t.seo.pages.notFound.title + t.seo.titleSuffix, description: t.seo.pages.notFound.description });

  return <NotFoundMessage title={t.common.notFound.title} body={t.common.notFound.body} to="/" cta={t.common.notFound.cta} />;
}