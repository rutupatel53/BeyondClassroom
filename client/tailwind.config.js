/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("postcss-nesting")],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['"lato"'],
      },
    },
  },
  plugins: [],
};
