import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import { images } from "../../data/images";
import { buttonStyles } from "../../utils/styles";
import { Reveal } from "../ui/Reveal";

export function ClosingCta() {
  const { t } = useLanguage();
  const closing = t.home.closing;

  return (
    <section aria-labelledby="closing-title" className="relative overflow-hidden bg-forest-deep text-ivory">
      <img src={images.sunsetRoad} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div aria-hidden="true" className="absolute inset-0 bg-forest-deep/65" />
      <div className="relative mx-auto max-w-7xl px-5 py-28 lg:px-8 lg:py-40">
        <Reveal className="max-w-3xl">
          <h2 id="closing-title" className="display section-title font-medium">
            {closing.heading}
          </h2>
          <p className="mt-6 max-w-xl text-lg text-ivory/85">{closing.body}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/contact" className={buttonStyles.gold}>
              {closing.primary}
            </Link>
            <Link to="/register" className={buttonStyles.outlineLight}>
              {closing.secondary}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>);

}