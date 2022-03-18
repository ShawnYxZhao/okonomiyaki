const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   'sans': ['Helvetica'],
      // },
      fontSize: {
        'title': '30px',
        'subtitle': '18px',
        'content': '15px',
      },
      width: {
        'content': '680px',
      }
    },
  },
  plugins: [],
}
