module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        robotoCondensed: ['Roboto Condensed', 'sans-serif'],
        vidaloka: ['Vidaloka', 'serif'],
        turretRoad: ['Turret Road', 'cursive'],
        asul: ['Asul', 'sans-serif'],
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