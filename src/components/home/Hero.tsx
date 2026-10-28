import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { images } from "../../data/images";
import { buttonStyles } from "../../utils/styles";
import { WovenBand } from "../ui/WovenBand";

const ease: [number, number, number, number] = [0.23, 1, 0.32, 1];

export function Hero() {
  const { t } = useLanguage();
  const hero = t.home.hero;

  return (
    <section aria-labelledby="hero-title" className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-forest-deep text-ivory">
      <motion.img
        src={images.hero}
        alt={hero.imageAlt}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease }}
        className="absolute inset-0 h-full w-full object-cover object-[50%_60%]" />
      
      <div aria-hidden="true" className="absolute inset-0 bg-forest-deep/55" />

      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-24 pt-28 lg:px-8 lg:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease, delay: 0.1 }}
          className="caps flex items-center gap-3 text-xs font-semibold text-gold-light">
          
          <span aria-hidden="true" className="flex gap-[3px]">
            <span className="h-1.5 w-1.5 rounded-full bg-eth-green" />
            <span className="h-1.5 w-1.5 rounded-full bg-eth-yellow" />
            <span className="h-1.5 w-1.5 rounded-full bg-eth-red" />
          </span>
          {hero.location}
        </motion.p>

        <h1 id="hero-title" className="display hero-title mt-5 font-medium">
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease, delay: 0.16 }}>
            
            {hero.headlineTop}
          </motion.span>
          <motion.span
            className="block italic text-gold-light"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease, delay: 0.22 }}>
            
            {hero.headlineBottom}
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease, delay: 0.3 }}
          className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          
          <p className="max-w-xl text-base text-ivory/90 sm:text-lg">{hero.supporting}</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/destinations" className={buttonStyles.light}>
              {hero.primary}
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link to="/about" className={buttonStyles.outlineLight}>
              {hero.secondary}
            </Link>
          </div>
        </motion.div>
      </div>

      <a
        href="#story"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[11px] text-ivory/80 transition-colors duration-150 hover:text-ivory sm:flex">
        
        <span className="caps">{hero.scroll}</span>
        <span aria-hidden="true" className="relative block h-8 w-px overflow-hidden bg-ivory/25">
          <motion.span
            className="absolute inset-x-0 top-0 block h-3 bg-ivory"
            animate={{ y: [-12, 32] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }} />
          
        </span>
      </a>

      <WovenBand className="absolute inset-x-0 bottom-0 h-1.5" />
    </section>);

}