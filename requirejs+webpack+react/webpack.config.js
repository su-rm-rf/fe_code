const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const AA = require('./webpack.plugin/aa')

module.exports = {
  entry: './app.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dest'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      moment: path.resolve(__dirname, 'dest/moment.min')
    }
  },
  externals: [
    'toolss',
    '_'
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/, loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dest')
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './tpl.html'
    }),
    new AA({
      name: '余华玲',
      amount: '$123456789'
    })
  ]
}