import React from "react";
import type { SocialPlatform } from "../../types/content";

interface BrandIconProps {
  platform: SocialPlatform;
  className?: string;
}

/* Simplified platform marks (Lucide doesn't ship brand logos). */
export function BrandIcon({ platform, className = "h-5 w-5" }: BrandIconProps) {
  switch (platform) {
    case "tiktok":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
          <path d="M16.6 3c.4 2.3 1.9 3.9 4.1 4.2v3.3c-1.5.1-2.9-.4-4.1-1.2v6.2a6 6 0 1 1-6-6c.3 0 .6 0 .9.1v3.4a2.7 2.7 0 1 0 1.8 2.5V3h3.3z" />
        </svg>);

    case "youtube":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
          <path d="M21.6 7.2a2.6 2.6 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.6 2.6 0 0 0 2.4 7.2 27 27 0 0 0 2 12c0 1.6.1 3.2.4 4.8a2.6 2.6 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.6 2.6 0 0 0 1.8-1.8c.3-1.6.4-3.2.4-4.8s-.1-3.2-.4-4.8zM10 15V9l5.2 3L10 15z" />
        </svg>);

    case "instagram":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
        </svg>);

    case "facebook":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
          <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H7.9v3h2.6V21h3z" />
        </svg>);

    default:
      return null;
  }
}