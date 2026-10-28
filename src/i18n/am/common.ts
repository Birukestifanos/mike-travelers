import type { CommonTranslations } from "../types";

export const common: CommonTranslations = {
  brand: "MIKE TRAVELERS",
  skipToContent: "ወደ ዋናው ይዘት ይዝለሉ",
  sampleBadge: "ናሙና",
  sampleNotice: "ናሙና ይዘት — በማይክ የራሱ ቃላትና ፎቶግራፎች ይተካል።",
  placeholderImage: "ጊዜያዊ ምስል",
  readMore: "ተጨማሪ ያንብቡ",
  viewAll: "ሁሉንም ይመልከቱ",
  back: "ተመለስ",
  requiredMark: "አስፈላጊ",
  requiredLegend: "* ምልክት ያላቸው መስኮች መሞላት አለባቸው።",
  minRead: (minutes: number) => `የ${minutes} ደቂቃ ንባብ`,
  notFound: {
    title: "ይህ መንገድ የትም አያደርስም።",
    body: "የሚፈልጉት ገጽ የለም ወይም ወደ ሌላ ቦታ ተዛውሯል።",
    cta: "ወደ ዋና ገጽ ይመለሱ"
  }
};