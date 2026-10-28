# MIKE TRAVELERS

A frontend-only personal travel website (React, TypeScript, Tailwind, Framer Motion, React Router) with full English and Amharic support. There's no backend, database or user accounts.

## Updating content

| What | Where |
| --- | --- |
| Contact email | `data/site.ts` → `contactEmail` |
| Social profiles (verified only) | `data/socialLinks.ts`: set `handle` and `url`. A platform stays disabled ("coming soon") while `url` is `null` |
| Photos | `data/images.ts`: every image URL lives here. Swap in Mike's photos, then set `placeholder: false` in `data/gallery.ts` / `data/destinations.ts` |
| Vehicle section images | `data/vehicleDetails.ts`, in the same order as `details` in `i18n/*/vehicle.ts` |
| Biography | `i18n/en/about.ts` and `i18n/am/about.ts` (the "chapter" block on My Journey is a placeholder for it) |
| Destinations | Add an entry to `data/destinations.ts`, then add text under the same id in `i18n/en/destinations.ts` **and** `i18n/am/destinations.ts` |
| Stories | Add an entry to `data/stories.ts`, then add the title, intro and body under the same id in `i18n/en/stories.ts` and `i18n/am/stories.ts` |
| Videos | `data/videos.ts`: paste the public YouTube id into `youtubeId` to make a video playable |

All sample stories and destination descriptions are placeholders. Replace them with Mike's real experiences before you launch.

## Translations

- `i18n/en/*` defines the shape of every translation, and `i18n/am/*` must match it. If an Amharic key is missing, TypeScript reports an error.
- If a value is empty at runtime, the site shows the English text (see `i18n/config.ts`).
- Components read the text through `const { language, setLanguage, t } = useLanguage()`.
- The visitor's chosen language is saved in `localStorage` under `mike-travelers.language`.

## Forms

The Contact and Stay Connected forms check the visitor's input, then open the visitor's own email app with the message already filled in. The website doesn't send or store anything.

## Deploying to Vercel

Import the project into Vercel. `vercel.json` sends every route to the app, so links like `/stories/coffee-ceremony` work when opened directly. Once you know the live domain, add `robots.txt` and `sitemap.xml` to your hosting's public folder.
