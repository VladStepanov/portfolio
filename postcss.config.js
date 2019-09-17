module.exports = {
  plugins: [
    require('@fullhuman/postcss-purgecss')({
      content: ['./**/*.html']
    }),
    require('autoprefixer'),
    require('postcss-combine-duplicated-selectors'),
    require('cssnano')
  ]
}