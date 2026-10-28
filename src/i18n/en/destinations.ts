export const destinations = {
  label: "Destinations",
  title: "Across Ethiopia.",
  intro:
  "A growing collection of places across the country — from rock-hewn churches to salt flats below sea level. These are sample entries and will be updated as Mike's journeys unfold.",
  filterLabel: "Filter destinations by category",
  categories: {
    all: "All",
    heritage: "History & Heritage",
    nature: "Mountains & Nature",
    culture: "Culture & Traditions",
    adventure: "Adventure & Exploration",
    hidden: "Hidden Gems"
  },
  resultsCount: (count: number) =>
  count === 1 ? "1 destination" : `${count} destinations`,
  empty: "No destinations in this category yet.",
  emptyAction: "Show all destinations",
  discoverMore: "Discover More",
  detail: {
    back: "All destinations",
    region: "Region",
    category: "Category",
    about: "About this place",
    related: "More destinations",
    notFoundTitle: "Destination not found",
    notFoundBody: "We couldn't find that destination. It may have been renamed or removed."
  },
  items: {
    lalibela: {
      name: "Lalibela",
      region: "Amhara Region",
      summary:
      "A town in the northern highlands known for its churches carved directly out of solid rock.",
      body: [
      "Lalibela is home to eleven medieval churches hewn from volcanic rock, traditionally associated with King Lalibela of the Zagwe dynasty. The churches are recognised as a UNESCO World Heritage Site.",
      "They remain active places of worship. The site is especially busy during major Ethiopian Orthodox celebrations such as Genna (Ethiopian Christmas), when pilgrims travel from across the country."]

    },
    aksum: {
      name: "Aksum",
      region: "Tigray Region",
      summary:
      "The ancient capital of the Aksumite Kingdom, famous for its towering granite stelae.",
      body: [
      "Aksum was the centre of one of the great ancient kingdoms of the Horn of Africa. Its fields of carved granite stelae are among the most recognisable monuments in Ethiopia.",
      "The archaeological sites of Aksum are a UNESCO World Heritage Site, and the city remains an important place of pilgrimage in the Ethiopian Orthodox tradition."]

    },
    simien: {
      name: "Simien Mountains",
      region: "Amhara Region",
      summary:
      "Dramatic escarpments, deep valleys and wildlife found nowhere else on earth.",
      body: [
      "The Simien Mountains National Park protects some of the most dramatic highland scenery in Africa, including Ras Dashen, Ethiopia's highest peak.",
      "The park is home to endemic wildlife such as the gelada and the Walia ibex, and is a UNESCO World Heritage Site popular for multi-day treks."]

    },
    danakil: {
      name: "Danakil Depression",
      region: "Afar Region",
      summary:
      "One of the lowest and hottest places on earth, with salt flats and vivid mineral fields.",
      body: [
      "The Danakil Depression lies well below sea level in the Afar Region. Its landscapes include vast salt flats, the colourful hydrothermal fields of Dallol and the Erta Ale volcano.",
      "Conditions are extreme, and visits are typically made with experienced local guides and careful planning."]

    },
    harar: {
      name: "Harar",
      region: "Harari Region",
      summary:
      "A historic walled city of narrow alleys, colourful houses and long-standing traditions.",
      body: [
      "Harar Jugol, the old walled city of Harar, is a UNESCO World Heritage Site known for its maze of narrow lanes, historic mosques and distinctive traditional houses.",
      "The city is also known for its evening hyena-feeding tradition, which has become one of its best-known sights."]

    },
    "lake-tana": {
      name: "Lake Tana",
      region: "Amhara Region",
      summary:
      "Ethiopia's largest lake, dotted with islands and quiet monasteries.",
      body: [
      "Lake Tana is the largest lake in Ethiopia and the source of the Blue Nile. Its islands and peninsulas are home to monasteries, some reached only by boat.",
      "Traditional papyrus boats, known as tankwa, are still used on parts of the lake."]

    }
  }
};