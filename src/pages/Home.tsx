import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { useSeo } from "../hooks/useSeo";
import { Hero } from "../components/home/Hero";
import { StorySection } from "../components/home/StorySection";
import { VehicleSection } from "../components/home/VehicleSection";
import { DestinationsPreview } from "../components/home/DestinationsPreview";
import { StoriesPreview } from "../components/home/StoriesPreview";
import { GalleryPreview } from "../components/home/GalleryPreview";
import { SocialSection } from "../components/social/SocialSection";
import { ClosingCta } from "../components/home/ClosingCta";

export function Home() {
  const { t } = useLanguage();
  useSeo({ title: t.seo.pages.home.title, description: t.seo.pages.home.description });

  return (
    <>
      <Hero />
      <StorySection />
      <VehicleSection />
      <DestinationsPreview />
      <StoriesPreview />
      <GalleryPreview />
      <SocialSection />
      <ClosingCta />
    </>);

}