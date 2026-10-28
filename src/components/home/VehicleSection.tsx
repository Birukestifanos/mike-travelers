import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { vehicleDetails } from "../../data/vehicleDetails";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";

export function VehicleSection() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const details = t.vehicle.details;
  const total = details.length;
  const current = details[active];

  const go = (delta: number) => setActive((index) => (index + delta + total) % total);

  return (
    <section id="vehicle" aria-labelledby="vehicle-title" className="scroll-mt-16 bg-forest-deep py-24 text-ivory lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel tone="light">{t.vehicle.label}</SectionLabel>
            <h2 id="vehicle-title" className="display section-title mt-5 font-medium">
              {t.vehicle.heading}
            </h2>
          </div>
          <p className="text-base leading-relaxed text-ivory/75 lg:col-span-5">{t.vehicle.intro}</p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-8">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-forest">
              <AnimatePresence initial={false}>
                <motion.img
                  key={active}
                  id="vehicle-image"
                  src={vehicleDetails[active].image}
                  alt={current.caption}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  className="absolute inset-0 h-full w-full object-cover" />
                
              </AnimatePresence>
              <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-forest-deep/80 p-1.5 backdrop-blur">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label={t.vehicle.previous}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-150 hover:bg-ivory/10">
                  
                  <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                </button>
                <span className="min-w-[3.5rem] text-center text-xs tabular-nums text-ivory/80">
                  {t.vehicle.counter(active + 1, total)}
                </span>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label={t.vehicle.next}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-150 hover:bg-ivory/10">
                  
                  <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </Reveal>

          <Reveal className="flex flex-col lg:col-span-4" delay={0.05}>
            <ul aria-label={t.vehicle.chooseDetail} className="grid grid-cols-4 gap-2 lg:grid-cols-1 lg:gap-0 lg:divide-y lg:divide-ivory/10">
              {details.map((detail, index) => {
                const selected = index === active;
                return (
                  <li key={detail.title}>
                    <button
                      type="button"
                      onClick={() => setActive(index)}
                      aria-pressed={selected}
                      aria-controls="vehicle-image"
                      className={`group flex w-full items-center gap-4 rounded-sm text-left transition-[opacity,background-color] duration-150 lg:py-4 ${
                      selected ? "opacity-100" : "opacity-60 hover:opacity-100"}`
                      }>
                      
                      <span
                        className={`block aspect-square w-full shrink-0 overflow-hidden rounded-sm ring-2 lg:w-16 ${
                        selected ? "ring-gold-light" : "ring-transparent"}`
                        }>
                        
                        <img src={vehicleDetails[index].image} alt="" loading="lazy" className="h-full w-full object-cover" />
                      </span>
                      <span className="hidden font-display text-lg lg:block">{detail.title}</span>
                      <span className="sr-only lg:hidden">{detail.title}</span>
                    </button>
                  </li>);

              })}
            </ul>

            <div aria-live="polite" className="mt-8 border-t border-ivory/15 pt-6 lg:mt-auto">
              <h3 className="font-display text-2xl">{current.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-ivory/80">{current.caption}</p>
              <p className="mt-4 text-sm italic text-gold-light">{t.vehicle.storyPending}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}