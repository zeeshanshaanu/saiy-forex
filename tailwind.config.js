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
        text1: "#A0AAC5",
        textgreen: "#01B574",
        lightgreen: "rgba(49, 159, 67, 0.1)",
        textRed: "#E56101",
        lightRed: "rgba(229, 97, 1, 0.1)",
      },
    },
  },
  plugins: [],
};
