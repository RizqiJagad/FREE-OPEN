/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          coral: "#F08080",
          teal: "#20B2AA",
        },
      },
    },
  },
  plugins: [],
};
