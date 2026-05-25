let tailwindcss
let autoprefixer

try {
  tailwindcss = require('tailwindcss')
  autoprefixer = require('autoprefixer')
} catch (err) {
  // If tailwind isn't installed (CI/local), gracefully export no-op plugins
  module.exports = { plugins: {} }
  return
}

module.exports = {
  plugins: {
    [tailwindcss]: {},
    [autoprefixer]: {},
  },
}
