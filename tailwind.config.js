/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#024873',
        'secondary': '#182D40',
        'dark':'#2d333c',
        'danger': '#e3342f',
        'primaryDark':'#1A293D',
        'secondaryDark':'#2f3742'
      }),
      colors: {
        primary: '#05DDDD',
        secondary: '#024873',
        secondaryLight: '#0270B4',
        neutralLight: '#C3C3C3'
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

