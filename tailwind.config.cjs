/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "moons": "radial-gradient(#2e2e2e 0.45px, #171717 0.45px)"
      },
      backgroundSize: {
        "moonsSize": "9px 9px"
      },
      fontFamily: {
        "permanent-marker": ['"Permanent Marker"', "cursive"],
        "cabin": ['"Cabin"', "sans-serif"],
        "oswald": ['"Oswald"', "sans-serif"],
        "roboto-condensed": ['"Roboto Condensed"', "sans-serif"],
      },
    },
  },
  plugins: [],
};