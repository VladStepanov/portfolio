const UglifyjsPlugin = require('uglifyjs-webpack-plugin')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const WebpackPluginAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  // output: {
  //   publicPath: '/portfolio'
  // },
  // optimization: {
  //   minimizer: [
  //     new UglifyjsPlugin()
  //   ]
  // },
  plugins: [
    new WebpackPluginAnalyzer()
  ]
})
