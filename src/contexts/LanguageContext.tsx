import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import {
  applyDocumentLanguage,
  getInitialLanguage,
  persistLanguage,
  translations } from
"../i18n/config";
import type { Language, Translations } from "../i18n/types";

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: {children: React.ReactNode;}) {
  const [language, setLanguageState] = useState<Language>(() => {
    const initial = getInitialLanguage();
    applyDocumentLanguage(initial);
    return initial;
  });

  useEffect(() => {
    applyDocumentLanguage(language);
  }, [language]);

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next);
    persistLanguage(next);
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({ language, setLanguage, t: translations[language] }),
    [language, setLanguage]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside a LanguageProvider");
  }
  return context;
}