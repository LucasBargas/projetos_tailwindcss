const defaultTheme = require('tailwindcss/defaultTheme');

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
      },

      maxWidth: {
        '1140': '1140px',
        '1320': '1320px',
      },

      spacing: {
        '15': '60px'
      },

      colors: {
        'light-gray': '#dddddd',
        'dark-blue': '#24325d',
        'sky-blue': '#006fbe',
        'font-color': '#444444',
        'menu-mobile': 'rgba(22, 30, 56, .9)',
        'slider-btn': 'rgba(255, 255, 255, .4)',
        'slider-btn-opacity': 'rgba(255, 255, 255, .2)',
        'form-border': 'rgb(206, 212, 218)',
        'modal': 'rgba(22, 30, 56, .9)'
      },

      backgroundImage: {
        'slider-one': "url('../assets/images/slide-1.jpg')",
        'slider-two': "url('../assets/images/slide-2.jpg')",
        'slider-three': "url('../assets/images/slide-3.jpg')",
        'map': "url('../assets/images/map.PNG')",
      },

      boxShadow: {
        'header': '0px 2px 15px rgba(36, 50, 93, .1)',
        'feature': '0px 0 25px rgba(0, 0, 0, .15)',
        'events': '0px 2px 15px rgb(0, 0, 0, .1)'
      },

      fontSize: {
        '32': '32px'
      },
    },

    screens: {
      '390': {'max': '390px'},
      '276': {'max': '276px'},
      ...defaultTheme.screens,
    },

    fontFamily: {
      'raleway': 'Raleway, sans-serif',
      'poppins': 'Poppins, sans-serif',
      'open-sans': 'Open Sans, sans-serif',
    },

    keyframes: {
      modalAnimate: {
        from: {
          opacity: '0',
          transform: 'translateY(-50px)',
        },
        to: {
          opacity: '1',
          transform: 'translateY(0)',
        }
      }
    },
    
    animation: {
      'show-modal': 'modalAnimate .6s forwards'
    }
  },
  plugins: [],
}
