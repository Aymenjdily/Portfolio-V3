/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        jost:["Jost", "sans-serif"]
      },
      colors: {
        black: "#212125",
        'orange': {  DEFAULT: '#FF5200',  '50': '#FFCFB8',  '100': '#FFC1A3',  '200': '#FFA57A',  '300': '#FF8952',  '400': '#FF6E29',  '500': '#FF5200',  '600': '#C74000',  '700': '#8F2E00',  '800': '#571C00',  '900': '#1F0A00'},
        gray:"#495664",
        white:"#fff"
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
