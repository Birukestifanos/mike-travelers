export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        ivory: "#FBF7EF",
        cream: "#F3EBDD",
        sand: "#E6D9C3",
        ink: "#1F1A14",
        muted: "#5F5448",
        forest: {
          DEFAULT: "#1E3B2F",
          deep: "#12261D",
          soft: "#2C5242",
        },
        earth: "#7A5638",
        gold: {
          DEFAULT: "#B48A3C",
          light: "#D9BC7A",
        },
        eth: {
          green: "#2E7D46",
          yellow: "#E2B33C",
          red: "#C0392B",
        },
      },
      fontFamily: {
        display: ["Fraunces", '"Noto Serif Ethiopic"', "Georgia", "serif"],
        sans: ["Inter", '"Noto Sans Ethiopic"', "system-ui", "sans-serif"],
      },
      transitionTimingFunction: {
        "out-strong": "cubic-bezier(0.23, 1, 0.32, 1)",
      },
    },
  },
  plugins: [],
};
