export type NavLabelKey = "home" | "journey" | "destinations" | "stories" | "gallery" | "contact";

export const navItems: {to: string;labelKey: NavLabelKey;end?: boolean;}[] = [
{ to: "/", labelKey: "home", end: true },
{ to: "/about", labelKey: "journey" },
{ to: "/destinations", labelKey: "destinations" },
{ to: "/stories", labelKey: "stories" },
{ to: "/gallery", labelKey: "gallery" },
{ to: "/contact", labelKey: "contact" }];