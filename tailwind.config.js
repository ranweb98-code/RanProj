/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#DEDBC8',
        gold: {
          DEFAULT: '#E8C872',
          light: '#F5EDD6',
          dim: '#C4A052',
        },
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'serif'],
        display: ['Syne', 'Heebo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
