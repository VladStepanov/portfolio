const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  stats: 'errors-warnings',
  devServer: {
    contentBase: baseWebpackConfig.externals.paths.dist,
    overlay: true,
    compress: true
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    })
  ]
})

// module.exports = Promise.resolve(devWebpackConfig)
// module.exports = new Promise(resolve => {
//   resolve(devWebpackConfig)
// })