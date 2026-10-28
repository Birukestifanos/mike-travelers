import { images } from "./images";
import type { GalleryItem } from "../types/content";

/* Captions live in i18n/en/gallery.ts and i18n/am/gallery.ts under the same id. */
export const galleryItems: GalleryItem[] = [
{ id: "hero", category: "vehicle", image: images.hero, orientation: "landscape", placeholder: true },
{ id: "simien", category: "landscapes", image: images.simien, orientation: "landscape", placeholder: true },
{ id: "interior-beads", category: "vehicle", image: images.interiorBeads, orientation: "portrait", placeholder: true },
{ id: "coffee", category: "culture", image: images.coffee, orientation: "landscape", placeholder: true },
{ id: "danakil", category: "adventure", image: images.danakil, orientation: "landscape", placeholder: true },
{ id: "lalibela", category: "culture", image: images.lalibela, orientation: "landscape", placeholder: true },
{ id: "gelada", category: "landscapes", image: images.gelada, orientation: "landscape", placeholder: true },
{ id: "interior-dash", category: "vehicle", image: images.interiorDash, orientation: "landscape", placeholder: true },
{ id: "market", category: "culture", image: images.market, orientation: "landscape", placeholder: true },
{ id: "vehicle-road", category: "adventure", image: images.vehicleRoad, orientation: "landscape", placeholder: true },
{ id: "lake-tana", category: "landscapes", image: images.lakeTana, orientation: "landscape", placeholder: true },
{ id: "harar", category: "culture", image: images.harar, orientation: "landscape", placeholder: true },
{ id: "aksum", category: "culture", image: images.aksum, orientation: "landscape", placeholder: true },
{ id: "interior-seats", category: "vehicle", image: images.interiorSeats, orientation: "landscape", placeholder: true },
{ id: "sunset-road", category: "adventure", image: images.sunsetRoad, orientation: "landscape", placeholder: true }];