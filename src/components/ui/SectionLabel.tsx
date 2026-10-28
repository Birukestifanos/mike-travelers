import React from "react";

interface SectionLabelProps {
  children: React.ReactNode;
  tone?: "dark" | "light";
}

export function SectionLabel({ children, tone = "dark" }: SectionLabelProps) {
  return (
    <p
      className={`caps flex items-center gap-3 text-xs font-semibold ${
      tone === "dark" ? "text-earth" : "text-gold-light"}`
      }>
      
      <span aria-hidden="true" className={`h-px w-8 ${tone === "dark" ? "bg-gold" : "bg-gold-light"}`} />
      {children}
    </p>);

}