/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFF5F7',
        surface: '#FFEDF0',
        primary: {
          DEFAULT: '#D6336C',
          light: '#F06595',
          dark: '#A61E4D',
        },
        gold: '#D4A373',
        gray: {
          DEFAULT: '#495057',
          light: '#E9ECEF',
          dark: '#343A40',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Pretendard', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.05em',
        widest: '0.1em',
      },
    },
  },
  plugins: [],
};
