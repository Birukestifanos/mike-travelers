import { images } from "./images";
import type { Destination } from "../types/content";

/*
 * Sample destinations. Names and descriptions live in i18n/en/destinations.ts
 * and i18n/am/destinations.ts under the same id.
 */
export const destinations: Destination[] = [
{ id: "lalibela", category: "heritage", image: images.lalibela, placeholder: true },
{ id: "simien", category: "nature", image: images.simien, placeholder: true },
{ id: "danakil", category: "adventure", image: images.danakil, placeholder: true },
{ id: "aksum", category: "heritage", image: images.aksum, placeholder: true },
{ id: "harar", category: "culture", image: images.harar, placeholder: true },
{ id: "lake-tana", category: "hidden", image: images.lakeTana, placeholder: true }];