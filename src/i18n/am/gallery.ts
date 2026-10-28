import type { GalleryTranslations } from "../types";

export const gallery: GalleryTranslations = {
  label: "ማዕከለ-ስዕላት",
  title: "ፎቶግራፎችና ፊልሞች።",
  intro:
  "መልክዓ ምድሮች፣ ባህላዊ ጊዜያት፣ የጀብዱ ድምቀቶችና መኪናው ራሱ። ጊዜያዊ ተብለው የተለዩ ምስሎች በማይክ የራሱ ፎቶግራፎች ይተካሉ።",
  filterLabel: "ፎቶግራፎችን በምድብ ይለዩ",
  categories: {
    all: "ሁሉም",
    landscapes: "መልክዓ ምድሮች",
    culture: "ባህላዊ ገጠመኞች",
    adventure: "የጀብዱ ድምቀቶች",
    vehicle: "መኪናው"
  },
  photosHeading: "ፎቶግራፎች",
  photoCount: (count: number) => `${count} ፎቶግራፎች`,
  empty: "በዚህ ምድብ እስካሁን ፎቶግራፍ የለም።",
  emptyAction: "ሁሉንም ፎቶግራፎች አሳይ",
  videosHeading: "የጉዞ ዘጋቢ ፊልሞች",
  videosIntro: "ከመንገድ የተቀረጹ ፊልሞች በማይክ ቻናሎች ላይ ሲለቀቁ እዚህ ይቀርባሉ።",
  videoComingSoon: "በቅርቡ",
  playVideo: (title: string) => `ቪዲዮውን አጫውት፦ ${title}`,
  lightbox: {
    label: "የምስል መመልከቻ",
    close: "የምስል መመልከቻውን ዝጋ",
    previous: "ቀዳሚው ምስል",
    next: "ቀጣዩ ምስል",
    counter: (current: number, total: number) => `${current} / ${total}`,
    open: (caption: string) => `ምስሉን ክፈት፦ ${caption}`,
    swipeHint: "ለማሰስ ያንሸራትቱ ወይም የቀስት ቁልፎችን ይጠቀሙ"
  },
  items: {
    hero: "በፊት መስታወት በኩል የሚታየው ደጋ",
    "interior-dash": "በዳሽቦርዱ ላይ የተዘረጉ የተሸመኑ ጨርቆች",
    "interior-beads": "ከመስታወቱ የተንጠለጠለ የዶቃ ሥራ",
    "interior-seats": "ሞቅ ባሉ ጨርቆች ያጌጠው የመኪናው ውስጥ",
    "vehicle-road": "በደጋማ የጠጠር መንገድ ላይ ዕረፍት",
    lalibela: "ከአለት የተፈለፈለ ቤተ ክርስቲያን፣ ላሊበላ",
    aksum: "የአክሱም ሐውልቶች",
    simien: "የስሜን ተራሮች ገደሎች",
    danakil: "የዳሎል የማዕድን ገጽታ፣ ዳናኪል",
    harar: "በሐረር ጀጎል ውስጥ ያለ መንገድ",
    "lake-tana": "ማለዳ በጣና ሐይቅ ላይ",
    coffee: "ባህላዊ የቡና ሥነ ሥርዓት",
    market: "በአካባቢ ገበያ ያሉ ቅመማ ቅመሞች",
    gelada: "ከሸለቆው በላይ ያሉ ጭላዳዎች",
    "sunset-road": "የስምጥ ሸለቆ መንገድ ጀንበር ስትጠልቅ"
  }
};