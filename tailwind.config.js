const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        "4xl": "2.5rem",
      },
      fontFamily: {
        sans: ["Mona Sans", ...defaultTheme.fontFamily.sans],
        display: [
          ["Mona Sans", ...defaultTheme.fontFamily.sans],
          { fontVariationSettings: '"wdth" 125' },
        ],
      },
      colors: {
        brand: {
          rose:         "#C75F71",
          "rose-hover": "#a84d5f",
          blush:        "#F0B8B8",
          "blush-light":"#F2C7C7",
          "pink-soft":  "#FFB7C5",
          mint:         "#D5F3D8",
          sage:         "#A2AE9D",
          espresso:     "#54463A",
          "espresso-dark": "#3d332a",
          "espresso-light":"#6e5b4e",
        },
      },
    },
  },
  plugins: [],
};
