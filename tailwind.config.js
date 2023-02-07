/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'node_modules/preline/dist/*.js',
    "./*.html", "./ecommerce/*.html", "./assets/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('preline/plugin'),
    require("daisyui"),
    require("tailgrids/plugin"),

  ],
}
