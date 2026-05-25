let autoprefixer

try {
  autoprefixer = require('autoprefixer')
} catch (err) {
  // If PostCSS plugins aren't installed (CI/local), gracefully export no-op plugins.
  module.exports = { plugins: {} }
  return
}

module.exports = {
  plugins: [autoprefixer()],
}
