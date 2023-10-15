/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        primary: '#10b981',
        dark: "#1e293b",
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}