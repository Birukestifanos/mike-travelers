import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { images } from "../../data/images";
import { textLinkStyle } from "../../utils/styles";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";

export function StorySection() {
  const { t } = useLanguage();
  const intro = t.home.intro;

  return (
    <section id="story" aria-labelledby="story-title" className="scroll-mt-16 bg-ivory py-24 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <Reveal className="relative lg:col-span-7">
          <img
            src={images.vehicleRoad}
            alt={intro.imageAlt}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-sm object-cover sm:aspect-[5/4]" />
          
          <img
            src={images.interiorBeads}
            alt={intro.detailAlt}
            loading="lazy"
            className="absolute -bottom-10 right-4 aspect-[3/4] w-32 rounded-sm border-[6px] border-ivory object-cover sm:w-44 lg:-right-8 lg:w-56" />
          
        </Reveal>

        <Reveal className="flex flex-col justify-center lg:col-span-5 lg:pl-8" delay={0.05}>
          <SectionLabel>{intro.label}</SectionLabel>
          <h2 id="story-title" className="display section-title mt-5 font-medium text-forest">
            {intro.heading}
          </h2>
          <div className="prose-body mt-8 text-base leading-relaxed text-muted">
            {intro.paragraphs.map((paragraph) =>
            <p key={paragraph}>{paragraph}</p>
            )}
          </div>
          <div className="mt-10 border-t border-sand pt-6">
            <p className="caps text-xs font-semibold text-earth">{intro.approachTitle}</p>
            <p className="mt-3 font-display text-xl italic leading-snug text-forest">{intro.approach}</p>
          </div>
          <Link to="/about" className={`${textLinkStyle} mt-10 self-start`}>
            {intro.cta}
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>);

}