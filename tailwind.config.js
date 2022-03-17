const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Helvetica'],
      },
      fontSize: {
        'title': '30px',
        'subtitle': '22px',
        'content': '15px',
      },
    },
  },
  plugins: [],
}
