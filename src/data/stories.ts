import { images } from "./images";
import type { Story } from "../types/content";

/*
 * Sample stories. Titles, intros and body text live in
 * i18n/en/stories.ts and i18n/am/stories.ts under the same id.
 */
export const stories: Story[] = [
{ id: "highland-road", category: "road", image: images.sunsetRoad, date: "2026-09-28", readingMinutes: 4 },
{ id: "coffee-ceremony", category: "culture", image: images.coffee, date: "2026-09-12", readingMinutes: 3 },
{ id: "market-morning", category: "people", image: images.market, date: "2026-08-30", readingMinutes: 3 },
{ id: "danakil-heat", category: "places", image: images.danakil, date: "2026-08-14", readingMinutes: 4 }];