/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ub: ["ub", "sans-serif"],
        mid: ["mid", "serif"],
        reg: ["reg", "serif"],
      },
    },
  },
  plugins: [],
};
