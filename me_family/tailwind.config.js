module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '768px',
        'md': '820px',
        '2xl': '1440px',
        '390': {'max': '390px'},
        '276': {'max': '276px'},
      },

      maxWidth: {
        '1140': '1140px',
        '1320': '1320px',
      },

      colors: {
        'dark-blue': '#24325d',
        'sky-blue': '#006fbe',
        'text-color': '#444444',
        'menu-mobile': 'rgba(22, 30, 56, 0.9)'
      }
    },

    fontFamily: {
      'raleway': 'Raleway, sans-serif',
      'poppins': 'Poppins, sans-serif',
      'open-sans': 'Open Sans, sans-serif',
    },
  },
  plugins: [],
}
