import React from "react";

interface WovenBandProps {
  className?: string;
}

/* A thin border inspired by the woven textile edges in the vehicle — hard-edged stripes, no blending. */
export function WovenBand({ className = "h-1.5" }: WovenBandProps) {
  return (
    <div
      aria-hidden="true"
      className={`w-full ${className}`}
      style={{
        backgroundImage:
        "repeating-linear-gradient(90deg, #2E7D46 0 22px, #E2B33C 22px 28px, #C0392B 28px 50px, #B48A3C 50px 54px, #1E3B2F 54px 84px, #E2B33C 84px 88px)"
      }} />);


}