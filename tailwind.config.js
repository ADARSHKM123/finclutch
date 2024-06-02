// tailwind.config.js
const { nextui } = require("@nextui-org/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '130': '130px',
      },
      borderRadius: {
        '10': '10px',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
      fontSize: {
        '15': '15px',
        '25': '25px',
      },
      fontWeight: {
        '300': '300',
        '500': '500',
      },
      colors: {
        customGradientFrom: '#704FF2',
        customGradientTo: '#D06EF2',
      },
      backgroundImage: {
        'gradient-to-r-custom': 'linear-gradient(90deg, rgba(152, 45, 236, 1) 0%, rgba(57, 4, 99, 1) 70%)',
      },
      spacing: {
        '130': '130px',
        '30': '30px',
        '40': '40px',
        '60': '60px',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
