export const vehicle = {
  label: "The travel vehicle",
  heading: "THE ROAD HAS A CHARACTER OF ITS OWN.",
  intro:
  "Woven textiles, strands of beads and the colours of Ethiopia — the inside of Mike's vehicle travels with him, and it says something about the journey before a word is spoken.",
  details: [
  {
    title: "The dashboard",
    caption: "Patterned woven textiles frame every view of the road ahead."
  },
  {
    title: "Beadwork",
    caption: "Strands of red, yellow and green beads catch the light on every bend."
  },
  {
    title: "The seats",
    caption: "Blankets and fabrics in warm, earthy tones turn the cabin into a home on wheels."
  },
  {
    title: "Out on the road",
    caption: "From the outside, a working vehicle built for long distances."
  }],

  storyPending: "Mike's story behind this detail is coming soon.",
  previous: "Previous detail",
  next: "Next detail",
  counter: (current: number, total: number) => `${current} of ${total}`,
  chooseDetail: "Choose a detail to view"
};