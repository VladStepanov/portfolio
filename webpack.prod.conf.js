const UglifyjsPlugin = require('uglifyjs-webpack-plugin')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const ASSET_PATH = process.env.ASSET_PATH || '/';


module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  output: {
    publicPath: '/portfolio'
  },
  optimization: {
    minimizer: [
      new UglifyjsPlugin()
    ]
  },
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