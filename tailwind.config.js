/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue,ts,js,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["gordita"],
      },
    },
  },
  plugins: [],
};
