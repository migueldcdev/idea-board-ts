/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      light: "#EAEAEA",
      dark: "#252A34",
      primary: "#08D9D6",
      secondary: "#FF2E63",
    },
    fontFamily: {
      lobster: ["Lobster", "sans-serif"],
    },
  },
  plugins: [],
};
