module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '132': '132px', 
        '92': '92px'
      },

      fontSize: {
        '28': '28px',
        '15': '15px'
      },

      maxWidth: {
        '980': '980px'
      },

      colors: {
        'fb-blue': '#f0f2f5',
        'fb-btn-blue': '#1877f2',
        'fb-btn-green': '#42b72a',
        'fb-black': '#1c1e21',
        'fb-gray': '#606770',
        'fb-card': '#f5f6f7',
        'fb-red': '#fa3e3e',
        'black-opacity': 'rgba(0, 0, 0, .3)'
      },

      boxShadow: {
        'card': '0 0 0 1px #dddfe2',
        'notification': '-1px 1px 2px 0 rgba(0, 0, 0, .3)',
      }
    },
  },
  plugins: [],
}
