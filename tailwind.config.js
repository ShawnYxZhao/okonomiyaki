const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   'sans': [...defaultTheme.fontFamily.sans, 'STHeiti'],
      // },
      fontSize: {
        'title': '30px',
        'cardtitle': '22px',
        'subtitle': '18px',
        'content': '15px',
        'label': '12px',
      },
      width: {
        'home': '680px',
        'blog': '900px',
      }
    },
  },
  plugins: [],
}
