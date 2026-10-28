import type { VehicleTranslations } from "../types";

export const vehicle: VehicleTranslations = {
  label: "የጉዞ መኪናው",
  heading: "መንገዱ የራሱ ባሕርይ አለው።",
  intro:
  "የተሸመኑ ጨርቆች፣ የዶቃ ክሮችና የኢትዮጵያ ቀለማት — የማይክ መኪና ውስጣዊ ገጽታ አብሮት ይጓዛል፤ አንድም ቃል ሳይነገር ስለ ጉዞው ብዙ ይናገራል።",
  details: [
  {
    title: "ዳሽቦርዱ",
    caption: "ባለ ጥለት የተሸመኑ ጨርቆች ወደፊት የሚታየውን መንገድ ሁሉ ያጅባሉ።"
  },
  {
    title: "የዶቃ ሥራ",
    caption: "ቀይ፣ ቢጫና አረንጓዴ ዶቃዎች በእያንዳንዱ መታጠፊያ ብርሃን ያንጸባርቃሉ።"
  },
  {
    title: "መቀመጫዎቹ",
    caption: "ሞቅ ያለ የአፈር ቀለም ያላቸው ብርድ ልብሶችና ጨርቆች የመኪናውን ውስጥ ተንቀሳቃሽ ቤት ያደርጉታል።"
  },
  {
    title: "በመንገድ ላይ",
    caption: "ከውጭ ሲታይ ለረጅም ርቀት የተሠራ የሥራ መኪና።"
  }],

  storyPending: "ከዚህ ዝርዝር ጀርባ ያለው የማይክ ታሪክ በቅርቡ ይቀርባል።",
  previous: "ቀዳሚው ዝርዝር",
  next: "ቀጣዩ ዝርዝር",
  counter: (current: number, total: number) => `${current} ከ${total}`,
  chooseDetail: "ለማየት ዝርዝር ይምረጡ"
};