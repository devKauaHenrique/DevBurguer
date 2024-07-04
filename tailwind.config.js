/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily:{
      'sans': ['Poppins', 'sans-serif']
    },
    extend: {
      backgroundImage:{
        "home": "url('/assets/bg.png')"
      },
      keyframes:{
        wiggle:{
          '0%, 100%':{transform: 'translateY(0) scale(1)'},
          '50%': {transform: 'translateY(-8px) scale(1.1)'},
        }
      }
    },
  },
  plugins: [],
}

