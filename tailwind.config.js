/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        dark: '#1A1A1A',
        lightGray: '#828EB0',
        darkGray: 'rgba(20, 20, 20, 0.5)',
        yellow1: '#E5B001',
        yellow2: '#C49412',

      },
    },
  },
  plugins: [],
};
