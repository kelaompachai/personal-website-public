/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      keyframes: {
        blurin: {
          '100%': {},
          '0%': {
            color: 'transparent'
          }
        }
      },
      animation: {
        blurin: 'blurin 1s ease-in-out 1'
      }
    }
  },
  plugins: []
};

