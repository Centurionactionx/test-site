/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#212427',
      },
      fontFamily: {
        'Lucon':['"Lucida Console"']
      },
      fontSize:{
        'custom1':'80px',
      }
    },
  },
  plugins: [],
}