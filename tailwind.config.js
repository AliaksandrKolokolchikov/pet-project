/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'gray-opacity': 'rgba(102, 102, 102)',
        green: 'rgba(0,197,0)',
        'dark-green': 'rgba(44, 116, 47)',
      },
    },
  },
  plugins: [],
};
