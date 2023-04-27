/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      vazir: ["Vazirmatn", "sans-serif"],
    },
    container: {
      padding: {
        DEFAULT: "1rem",
      },
    },
    extend: {},
  },
  plugins: [],
};
