/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        kafopticon: 'url(/assets/KafOpticon-pic.jpg)',
        algogoggles: 'url(/assets/algogoggles-pic.jpg)',
        floorplan: 'url(/assets/floor-plan-pic.jpg)',
        passtheplate: 'url(/assets/pass-the-plate-pic.jpg)',
        techtalk: 'url(/assets/tech-talk.jpg)'
      },
      colors: {
        'well-read': {
          50: 'oklch(97.19% 0.01 17.34)',
          100: 'oklch(93.96% 0.02 17.59)',
          200: 'oklch(89.07% 0.05 16.46)',
          300: 'oklch(81.50% 0.08 18.11)',
          400: 'oklch(71.51% 0.13 19.85)',
          500: 'oklch(63.10% 0.17 22.72)',
          600: 'oklch(56.21% 0.18 24.79)',
          700: 'oklch(51.92% 0.17 25.07)',
          800: 'oklch(43.39% 0.14 24.46)',
          900: 'oklch(39.11% 0.11 23.22)',
          950: 'oklch(25.41% 0.08 23.25)'
        }
      },
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

