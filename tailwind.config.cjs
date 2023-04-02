module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        robotoCondensed: ['Roboto Condensed', 'sans-serif'],
        vidaloka: ['Vidaloka', 'serif'],
        turretRoad: ['Turret Road', 'cursive'],
      },
      colors: {
        'brand': '#283646',
      },
      backgroundImage: {
        'footer': "url('../src/assets/images/global/footer-bg.png')",
      }
    },
    },
    plugins: [
      require('tailwind-scrollbar-hide')
    ],
  }