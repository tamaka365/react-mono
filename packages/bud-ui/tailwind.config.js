/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/**/*.{ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        0.75: '0.1875rem',
        1.25: '0.3125rem',
      },
      minWidth: {
        small: '64px',
        medium: '96px',
        large: '96px',
      },
      colors: {
        primary: '#0f6cbd',
        gray: {
          300: '#d1d1d1',
          700: '#424242',
          800: '#242424',
        },
      },
      borderRadius: {
        circular: '10000px',
      },
    },
  },
  plugins: [],
};
