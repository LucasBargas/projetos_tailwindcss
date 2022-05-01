module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      spacing: {
        '97': '80vh',
        '98': '75vh',
        '99': '50vh',
        '100': '80vh',
        '124': '124px',
        '600': '600px',
        '480': '480px',
      },

      maxWidth: {
        '8xl': '73.125rem'
      },

      colors: {
        'hoverspt': '#18D760',
        'purple-main': '#2D46B9',
        'green-main': '#1ED760',
        'pink': '#ffcdd2',
        'red': '#d83519' 
      },

      backgroundImage: {
        'spotify-theme': "url('../assets/imgs/bursts.svg')",
        'spotify-theme-moblie': "url('../assets/imgs/bursts_mobile.svg')"
      },

      backgroundSize: {
        '100%': 'auto 100%',
        '181%': 'auto 181%',
      },

      backgroundPosition: {
        'banner': 'right center',
        'banner-mobile': 'center center',
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
  plugins: []
}