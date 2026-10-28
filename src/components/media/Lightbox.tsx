import React, { useCallback, useEffect, useRef } from "react";
import { motion, type PanInfo } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import type { GalleryItem } from "../../types/content";

interface LightboxProps {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onChange: (index: number) => void;
}

export function Lightbox({ items, index, onClose, onChange }: LightboxProps) {
  const { t } = useLanguage();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const item = items[index];
  const total = items.length;
  const caption = t.gallery.items[item.id];

  const next = useCallback(() => onChange((index + 1) % total), [index, total, onChange]);
  const previous = useCallback(() => onChange((index - 1 + total) % total), [index, total, onChange]);

  // Focus management + scroll lock
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, []);

  // Keyboard: Esc, arrows, focus trap
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();else
      if (event.key === "ArrowRight") next();else
      if (event.key === "ArrowLeft") previous();else
      if (event.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>("button");
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, next, previous]);

  const onDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -60) next();else
    if (info.offset.x > 60) previous();
  };

  return (
    <motion.div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={t.gallery.lightbox.label}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
      className="fixed inset-0 z-[60] flex flex-col bg-ink/95 text-ivory">
      
      <div className="flex items-center justify-between px-4 py-3 sm:px-6">
        <span className="text-sm tabular-nums text-ivory/70">{t.gallery.lightbox.counter(index + 1, total)}</span>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label={t.gallery.lightbox.close}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-150 hover:bg-ivory/10">
          
          <XIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-2 sm:px-20">
        <motion.img
          key={item.id}
          src={item.image}
          alt={caption}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.4}
          onDragEnd={onDragEnd}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="max-h-full max-w-full touch-pan-y select-none rounded-sm object-contain"
          draggable={false} />
        
        <button
          type="button"
          onClick={previous}
          aria-label={t.gallery.lightbox.previous}
          className="absolute left-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-ivory/10 transition-colors duration-150 hover:bg-ivory/20 sm:inline-flex">
          
          <ChevronLeftIcon className="h-6 w-6" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label={t.gallery.lightbox.next}
          className="absolute right-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-ivory/10 transition-colors duration-150 hover:bg-ivory/20 sm:inline-flex">
          
          <ChevronRightIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <div className="flex items-center justify-between gap-4 px-4 pb-6 pt-4 sm:px-6">
        <div className="min-w-0">
          <p className="font-display text-lg">{caption}</p>
          <p className="mt-1 text-xs text-ivory/60">
            {item.placeholder && <span>{t.common.placeholderImage} · </span>}
            {t.gallery.lightbox.swipeHint}
          </p>
        </div>
        <div className="flex shrink-0 gap-2 sm:hidden">
          <button
            type="button"
            onClick={previous}
            aria-label={t.gallery.lightbox.previous}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-ivory/10">
            
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label={t.gallery.lightbox.next}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-ivory/10">
            
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </motion.div>);

}