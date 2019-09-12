const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const ENV = process.env.NODE_ENV || 'development'
const isDev = ENV !== 'production'

function buildCss (use) {
  if (!isDev) {
    return [
      MiniCssExtractPlugin.loader,
      ...use
    ]
  }
  return [
    {
      loader: 'style-loader'
    },
    ...use
  ]
}

const cssLoader = [{
  loader: 'css-loader'
}, {
  loader: 'postcss-loader',
  options: {
    sourceMap: true,
    plugins: [
      autoprefixer()
    ]
  }
}]

const stylLoader = {
  loader: 'stylus-loader'
}

const plugins = [
  new webpack.DefinePlugin({
    VERSION: JSON.stringify(require('./package.json').version)
  }),
  new BundleAnalyzerPlugin()
]

module.exports = {
  context: path.resolve(__dirname, '.'),
  entry: {
    gitalk: './src/index.js'
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: './dist',
    filename: 'gitalk.js',
    libraryTarget: 'umd',
    library: 'Gitalk'
  },

  resolve: {
    extensions: ['.jsx', '.js', '.json'],
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat'
    }
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: buildCss(cssLoader)
      },
      {
        test: /\.styl$/,
        use: buildCss([...cssLoader, stylLoader])
      },
      {
        test: /\.(svg|woff2?|ttf|eot|jpe?g|png|gif)(\?.*)?$/i,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1024 * 10
          }
        }]
      }
    ]
  },
  plugins: isDev ? [...plugins, new webpack.NoEmitOnErrorsPlugin()] : [...plugins, new MiniCssExtractPlugin({ filename: 'gitalk.css' })],

  devtool: isDev ? 'cheap-module-source-map' : 'source-map',
  mode: 'development',
  devServer: {
    port: process.env.PORT || 8000,
    host: 'localhost',
    // publicPath: '/dist',
    contentBase: './dev',
    // historyApiFallback: true,
    // open: true
  }
}
