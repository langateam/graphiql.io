// config/webpack.js
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    './client/js/app.js'
  ],
  output: {
    path: './.tmp/public',
    filename: 'app.js',
    publicPath: ''
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Trails Application',
      template: 'client/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: /client/,
      exclude: /node_modules/,
      query: {
        presets: [
          require.resolve('babel-preset-react'),
          require.resolve('babel-preset-es2015'),
          require.resolve('babel-preset-stage-0')
        ],
        plugins: [ ]
      }
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      loader: 'file-loader?name=fonts/[name].[ext]'
    }, {
      test: /\.(png|jpg)$/,
      loader: require.resolve('url-loader')
    }]
  }
}
