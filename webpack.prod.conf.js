const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const ImageminPlugin = require('imagemin-webpack-plugin').default

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  // module: {
  //   rules: [
  //     {
  //       test: /\.svg$/,
  //       use: [
  //         { loader: 'file-loader'},
  //         {
  //           loader: 'svgo-loader'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // plugins: [
  //   new ImageminPlugin({ test: /\.(jpe?g|png|gif)$/i }),    
  // ]
})

// module.exports = new Promise(resolve => {
//   resolve(prodWebpackConfig)
// })