/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "montserrat-bold": ["montserrat-bold", "sans-serif"],
        "montserrat-medium": ["montserrat-medium", "sans-serif"],
        "karla-regular": ["karla-regular", "sans-serif"],
      },
      colors: {
        primary: "#161519",
        secondary: "#141318",
        accent: "#02af5f",
        "black-blur": "rgba(0,0,0,0.7)",
      },
    },
  },
  plugins: [],
};
