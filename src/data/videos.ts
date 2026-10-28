import { images } from "./images";
import type { Video } from "../types/content";

/*
 * Documentary slots. Paste a public YouTube video id into `youtubeId`
 * (e.g. "dQw4w9WgXcQ" from youtube.com/watch?v=dQw4w9WgXcQ) to make it playable.
 * Titles are shown as written — update them to Mike's real video titles.
 */
export const videos: Video[] = [
{ id: "film-highlands", title: "The Highland Road", youtubeId: null, thumbnail: images.sunsetRoad },
{ id: "film-coffee", title: "Coffee & Conversation", youtubeId: null, thumbnail: images.coffee },
{ id: "film-vehicle", title: "Inside the Vehicle", youtubeId: null, thumbnail: images.interiorDash }];