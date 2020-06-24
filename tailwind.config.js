const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontFamily: {
        'abel': ['Abel', 'Arial'],
        'poppins': ['Poppins', 'Arial']
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      height: {
        76: '18rem',
        88: '20rem',
        110: '22rem',
      },
    },
  },
  plugins: [
    plugin(function({ addComponents }){
      const transitions = {
        '.transition-appear': {
          opacity: '0'
        },
        '.transition-appear-active': {
          animation: '1s fadeIn forwards',
        },
      }

      addComponents(transitions)
    })
  ],
}
