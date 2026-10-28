import React from "react";
import { InfoIcon } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

export function SampleNotice({ className = "" }: {className?: string;}) {
  const { t } = useLanguage();
  return (
    <p className={`flex items-start gap-3 border-l-2 border-gold bg-cream px-4 py-3 text-sm text-muted ${className}`}>
      <InfoIcon className="mt-0.5 h-4 w-4 shrink-0 text-earth" aria-hidden="true" />
      {t.common.sampleNotice}
    </p>);

}