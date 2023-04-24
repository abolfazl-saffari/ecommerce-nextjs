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
    extend: {
      keyframes: {
        drawer: {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
      },
      animation: {
        drawer: "drawer 1s ease-in",
      },
    },
  },
  plugins: [],
};
