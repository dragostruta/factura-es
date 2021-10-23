const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        phone: "375px",
      },
      colors: {
        blue: {
          light: "#60A5FA",
          dark: "#1D4ED8",
        },
        gray: {
          light: "#F3F4F6",
          dark: "#6B7280",
        },
        black: "#111827",
      },
      container: {
        center: true,
      },
    },
  },
  variants: {},
  plugins: [],
};
