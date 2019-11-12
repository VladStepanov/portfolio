const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')
const WebpackBar = require('webpackbar')

const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist'),
  assets: 'assets'
}

module.exports = {
  externals: {
    paths: PATHS
  },
  entry: {
    app: PATHS.src
  },
  output: {
    filename: `${PATHS.assets}/js/[name].[hash].js`,
    path: PATHS.dist,
    publicPath: '/'
  },
  resolve: {
    alias: {
      "@": PATHS.src,
      "~": path.join(__dirname, '/')
    },
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: ['babel-loader'],
        exclude: '/node_modules/'
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      },
      {
        test: /\.svg$/,
        use: [
          'svg-sprite-loader',
          'svgo-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}/css/[name].[hash].css`
    }),
    new CopyWebpackPlugin([
      { from: `${PATHS.src}/assets/img/`, to: `${PATHS.assets}/img` },
      { from: `${PATHS.src}/static/`, to: `${PATHS.dist}` },
      { from: `${PATHS.src}/assets/svg`, to: `${PATHS.assets}/svg` }
    ]),
    new HtmlWebpackPlugin({
      hash: false,
      template: `${PATHS.src}/index.html`,
      filename: './index.html',
      minify: {
        collapseWhitespace: process.env.mode
      }
    }),
    new SpriteLoaderPlugin(),
    new WebpackBar()
  ]
}