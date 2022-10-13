/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      body: "Noto sans, arial, sans-serif",
      serif: "Noto serif, serif",
    },
    extend: {
      backgroundImage: {
        stars: "url('/images/starsNight.png')",
      },
      colors: {
        silver: "#84828F",
        lavender: "#6a687a",
        coral: "#536271",
        charcoal: "#3e4c5e",
        blue: "#2c3d55",
      },
      height: {
        13: 52,
        14: 56,
        15: 60,
      },
    },
  },
  plugins: [],
};
