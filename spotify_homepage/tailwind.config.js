module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '14': '3.5rem',
        '125px': '125px',
        '97': '80vh',
        '98': '75vh',
        '99': '50vh',
        '100': '80vh',
      },

      maxWidth: {
        '8xl': '73.125rem'
      },

      colors: {
        'hoverspt': '#18D760',
        'purple-main': '#2D46B9',
        'gree-main': '#1ED760',
        'pink': '#ffcdd2',
        'red': '#d83519' 
      },

      backgroundImage: {
        'spotify-theme': "url('../assets/imgs/bursts.svg')",
        'spotify-theme-moblie': "url('../assets/imgs/bursts-mobile.svg')"
      },

      backgroundSize: {
        '175%': '175%',
        '195%': '195%',
      },

      backgroundPosition: {
        'banner': '46% 4%',
        'banner-mobile': 'top 25% center',
      },
      
      fontSize: {
        '9xl': '5rem'
      },

      lineHeight: {
        '11': '5.25rem',
      },

      screens: {
        'sm': '390px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
}