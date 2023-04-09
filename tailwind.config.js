/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    minWidth: {
      10: '40px',
    },
    extend: {
      colors: {
        fbblue: '#0c8ef1',
        fbbg: '#f0f2f5',
      },
      padding: {
        '1/2': '2px',
      },
      screens: {
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
};
