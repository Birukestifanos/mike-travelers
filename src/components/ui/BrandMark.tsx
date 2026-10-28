import React from "react";

interface BrandMarkProps {
  className?: string;
}

/* Text logo. The three beads echo the beadwork inside Mike's vehicle. */
export function BrandMark({ className = "" }: BrandMarkProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span aria-hidden="true" className="flex items-center gap-[3px]">
        <span className="h-1.5 w-1.5 rounded-full bg-eth-green" />
        <span className="h-1.5 w-1.5 rounded-full bg-eth-yellow" />
        <span className="h-1.5 w-1.5 rounded-full bg-eth-red" />
      </span>
      <span className="font-display text-[1.05rem] font-semibold tracking-[0.2em] whitespace-nowrap">
        MIKE TRAVELERS
      </span>
    </span>);

}