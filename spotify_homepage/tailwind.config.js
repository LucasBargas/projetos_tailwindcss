module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '14': '3.5rem',
        '125px': '125px',
      },

      maxWidth: {
        '8xl': '75rem'
      },

      colors: {
        'hoverspt': '#18D760',
        'purple-main': '#2D46B9',
        'gree-main': '#1ED760',
        'pink': '#ffcdd2',
        'red': '#d83519' 
      },

      backgroundImage: theme => ({
        'spotify-theme': "url('./src/assets/imgs/bursts.svg')",
        'spotify-theme-moblie': "url('./src/assets/imgs/bursts-mobile.svg')"
      }),

      backgroundSize: {
        '175%': '175%',
        '195%': '195%',
      },

      backgroundPosition: {
        'banner': '46% 4%',
        'banner-mobile': 'top 25% center',
      },
      
      fontSize: {
        '9xl': '9rem'
      }
    },
  },
  plugins: [],
}