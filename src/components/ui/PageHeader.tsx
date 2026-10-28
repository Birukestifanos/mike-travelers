import React from "react";
import { SectionLabel } from "./SectionLabel";

interface PageHeaderProps {
  label: string;
  title: string;
  intro?: string;
  children?: React.ReactNode;
}

export function PageHeader({ label, title, intro, children }: PageHeaderProps) {
  return (
    <header className="bg-cream pb-14 pt-32 lg:pb-20 lg:pt-40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionLabel>{label}</SectionLabel>
        <h1 className="display mt-5 max-w-4xl text-[clamp(2.6rem,6vw,5.5rem)] font-medium text-forest">
          {title}
        </h1>
        {intro && <p className="mt-6 max-w-2xl text-lg text-muted">{intro}</p>}
        {children}
      </div>
    </header>);

}