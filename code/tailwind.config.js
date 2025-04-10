/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "montserrat-bold": ["montserrat-bold", "sans-serif"],
        "montserrat-medium": ["montserrat-medium", "sans-serif"],
        "karla-regular": ["karla-regular", "sans-serif"],
        "inter-medium": ["inter-medium", "sans-serif"],
      },
      colors: {
        primary: "#161519" /*0E0E0E*/,
        secondary: "#141318",
        darkSecondary: "#100F14",
        accent: "#02af5f",
        darkAccent: "#02804c",
        "black-blur": "rgba(0,0,0,0.7)",
      },
    },
    listStyleType: {
      none: "none",
      square: "square",
    },
  },
  plugins: [],
};
