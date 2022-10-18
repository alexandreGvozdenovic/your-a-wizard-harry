/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      body: "Noto sans, arial, sans-serif",
      serif: "Noto serif, serif",
    },
    extend: {
      backgroundImage: {
        stars: "url('/images/starsNight.png')",
        map: "url('/images/map.png')",
      },
      colors: {
        silver: "#84828F",
        lavender: "#6a687a",
        coral: "#536271",
        charcoal: "#3e4c5e",
        blue: "#2c3d55",
        purple: "#514A92",
      },
      height: {
        13: 52,
        14: 56,
        15: 60,
      },
      width: {
        800: 800,
      },
    },
  },
  plugins: [],
};
