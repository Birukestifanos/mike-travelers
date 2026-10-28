import type { SocialTranslations } from "../types";

export const social: SocialTranslations = {
  label: "ይከተሉ",
  heading: "ጉዞው በመስመር ላይ ይቀጥላል።",
  body: "አዳዲስ መንገዶች፣ ፊልሞችና የጉዞው ጊዜያት በማይክ የማኅበራዊ ሚዲያ ገጾች ላይ ይጋራሉ።",
  cta: "ጉዞውን ይከተሉ",
  pending: "የገጹ ሊንክ በቅርቡ ይቀርባል",
  visit: (platform: string) => `ማይክን በ${platform} ይጎብኙ`,
  opensNewTab: "(በአዲስ ትር ይከፈታል)"
};