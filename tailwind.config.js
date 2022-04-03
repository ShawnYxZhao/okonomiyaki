const { zIndex } = require('tailwindcss/defaultTheme')
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
        'label': '13px',
      },
      width: {
        'home': '680px',
        'blog': '900px',
      },
      keyframes: {
        fadeOut: {
          // '0%' : { opacity: '100', zIndex:'100'},
          // '50%' : { opacity: '50', zIndex:'50'},
          // '99%' : { opacity: '0', zIndex:'0' },
          // '100%' : { opacity: '0', zIndex:'-1' }
          '0%':{opacity: '1'},
          '99%':{opacity:'0', zIndex:'1'},
          '100%':{opacity:'0', zIndex:'-5'}
        }
      },
      animation: {
        fadeOut: 'fadeOut 1s ease forwards',
      }
    },
  },
  plugins: [],
}
