import React from "react";
import { Outlet } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollManager } from "./ScrollManager";

export function Layout() {
  const { t } = useLanguage();

  return (
    <div id="top" className="flex min-h-screen w-full flex-col bg-ivory text-ink">
      <ScrollManager />
      <a
        href="#main"
        className="sr-only z-[70] rounded-full bg-forest px-5 py-3 text-sm font-semibold text-ivory focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        
        {t.common.skipToContent}
      </a>
      <Navbar />
      <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
        <Outlet />
      </main>
      <Footer />
    </div>);

}