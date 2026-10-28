/* Shared button styles so every call-to-action stays consistent. */
const base =
"inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold whitespace-nowrap transition-[background-color,color,border-color,transform] duration-150 ease-out active:scale-[0.98] focus-visible:outline-offset-4";

export const buttonStyles = {
  primary: `${base} bg-forest text-ivory hover:bg-forest-soft`,
  gold: `${base} bg-gold text-forest-deep hover:bg-gold-light`,
  light: `${base} bg-ivory text-forest-deep hover:bg-cream`,
  outlineLight: `${base} border border-ivory/60 text-ivory hover:bg-ivory/10 hover:border-ivory`,
  outlineDark: `${base} border border-ink/25 text-ink hover:border-ink hover:bg-ink/5`
};

export const textLinkStyle =
"group inline-flex items-center gap-2 text-sm font-semibold text-forest underline decoration-gold/60 decoration-2 underline-offset-[6px] transition-colors duration-150 hover:text-earth hover:decoration-earth";