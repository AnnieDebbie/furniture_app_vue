/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Mono: ["IBM Plex Mono", "monospace"],
      poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      black: "#000000",
      black200: "#393939",
      white: "#FFFFFF",
      nude:"#E2E1DD",
      offWhite: "#F1F1F1",
      green100: "#388D86",
      green200: "#7a8c81",
      green300: "#27BA75",
      yellow: "#FBE736",
      grey: "#D4DADD",
      grey100: "#B2B2B2",
      grey200: "#8D8D8D",
      grey300: "#E4E4E4",
      grey400: "#A4A4A4",
      red: "#FF0000",
      blue: "#0000ff",
    },
    plugins: [],
  },
};
