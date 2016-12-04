var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval',
  watch: true,
  entry: [
    'webpack-hot-middleware/client',
    './clients/reface'
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
    // TODO Move index.html into 'clients' folder
   /* new HtmlWebpackPlugin({
          filename: 'index.html',
          template: './clients/index.html'
        }
    )*/
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      query: {
        presets: ["es2015", "stage-5", "react"]
      },
      include: path.join(__dirname, '../clients')
    }]
  }
};
