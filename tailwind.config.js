/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue,ts,js,jsx,tsx}"],
  theme: {
    container: {
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1280px",
      },
    },
    extend: {
      fontFamily: {
        primary: ["gordita"],
      },
    },
  },
  plugins: [],
};
