const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

const postcssConfig = {
  plugins: [
    tailwindcss('./tailwind.config.js'),
    autoprefixer
  ]
};

module.exports = postcssConfig;
