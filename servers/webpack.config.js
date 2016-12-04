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
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // TODO Move index.html into 'clients' folder
    new HtmlWebpackPlugin({
          template: './clients/index.html'
        }
    )
  ],
  module: {
    loaders: [
        {
          test: /\.js$/,
          loader: 'babel',
          query: {
            presets: ["es2015", "react"]
          },
          include: /clients|components/
        },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },

  node: {
    fs: "empty"
  }
};
