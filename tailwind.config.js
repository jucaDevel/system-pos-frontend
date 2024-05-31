/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#024873',
        'secondary': '#182D40',
        'dark':'#2E4959',
        'danger': '#e3342f',
      }),
      colors: {
        customHover: '#05DDDD',
      },
      extend: {
        fontFamily:{
          'roboto':['Roboto','sans-serif']
        }
      },
    },
  },
  plugins: [],
}

