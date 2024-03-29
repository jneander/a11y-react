const path = require('path')

const webpack = require('webpack')

const pkgPath = path.join(__dirname, '..')
const srcPath = path.join(pkgPath, 'src')

module.exports = {
  devtool: 'eval',

  mode: 'none',

  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },

  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },

  output: {
    filename: 'js/[name].js',
    path: path.join(pkgPath, '__build__'),
    pathinfo: false,
    publicPath: '/',
  },

  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser.js',
    }),
  ],

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: [srcPath, 'node_modules'],
  },

  stats: {
    colors: true,
  },
}
