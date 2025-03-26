/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./content/**/*.html",
    "./themes/deadset-theme/layouts/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#FFA600',
        'pink': '#FF00BF',
        'purple': '#5E1E4E',
        'light-purple': '#8F2274',
        'black': '#000',
        'white': '#FFF',
        'gray-100': '#f7f7f7',
        'gray-200': '#e6e6e6',
        'gray-300': '#d5d5d5',
        'gray-400': '#b0b0b0',
        'gray-500': '#909090',
        'gray-600': '#707070',
        'gray-700': '#505050',
        'gray-800': '#303030',
        'gray-900': '#101010',
      },
    },
  },
  plugins: [],
}