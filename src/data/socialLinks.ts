import type { SocialLink } from "../types/content";

/*
 * Add Mike's VERIFIED profiles only. While `url` is null the platform is shown
 * as "Profile link coming soon" and is not clickable.
 * Example: { platform: "tiktok", name: "TikTok", handle: "@username", url: "https://www.tiktok.com/@username" }
 */
export const socialLinks: SocialLink[] = [
{ platform: "tiktok", name: "TikTok", handle: null, url: null },
{ platform: "youtube", name: "YouTube", handle: null, url: null },
{ platform: "instagram", name: "Instagram", handle: null, url: null },
{ platform: "facebook", name: "Facebook", handle: null, url: null }];