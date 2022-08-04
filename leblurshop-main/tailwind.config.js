/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["pages/**/*.{js,jsx}", "components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        shopee: "#fb5533",
        primary: "#2F4858",
      },
      fontFamily: {
        sans: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
