export const gallery = {
  label: "Gallery",
  title: "Photographs & films.",
  intro:
  "Landscapes, cultural moments, adventure highlights and the vehicle itself. Images marked as placeholders will be replaced with Mike's own photography.",
  filterLabel: "Filter photographs by category",
  categories: {
    all: "All",
    landscapes: "Landscapes",
    culture: "Cultural Experiences",
    adventure: "Adventure Highlights",
    vehicle: "The Vehicle"
  },
  photosHeading: "Photographs",
  photoCount: (count: number) => count === 1 ? "1 photograph" : `${count} photographs`,
  empty: "No photographs in this category yet.",
  emptyAction: "Show all photographs",
  videosHeading: "Travel documentaries",
  videosIntro:
  "Films from the road will appear here as they are published on Mike's channels.",
  videoComingSoon: "Coming soon",
  playVideo: (title: string) => `Play video: ${title}`,
  lightbox: {
    label: "Image viewer",
    close: "Close image viewer",
    previous: "Previous image",
    next: "Next image",
    counter: (current: number, total: number) => `${current} / ${total}`,
    open: (caption: string) => `Open image: ${caption}`,
    swipeHint: "Swipe or use arrow keys to browse"
  },
  items: {
    hero: "The view through the windshield, highlands ahead",
    "interior-dash": "Woven textiles across the dashboard",
    "interior-beads": "Beadwork hanging from the mirror",
    "interior-seats": "The cabin, dressed in warm fabrics",
    "vehicle-road": "A pause on a highland gravel road",
    lalibela: "Rock-hewn church, Lalibela",
    aksum: "The stelae of Aksum",
    simien: "Escarpments of the Simien Mountains",
    danakil: "Mineral fields of Dallol, Danakil Depression",
    harar: "An alley in Harar Jugol",
    "lake-tana": "Early morning on Lake Tana",
    coffee: "A traditional coffee ceremony",
    market: "Spices at a regional market",
    gelada: "Geladas above the valley",
    "sunset-road": "The Rift Valley road at sunset"
  }
};