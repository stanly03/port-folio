/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor:{
        'primary' : "#8B008A",
        'secondary' : 'rgb(160 32 240)',

      }
    },
    fontFamily :{
      "hero-font" : "Bodoni"
    }
  },
  plugins: [],
}

