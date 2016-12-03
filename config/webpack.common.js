var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");


const PATHS = {
  src: path.join(__dirname, '../src'),
  build: path.join(__dirname, '../build')
};

module.exports = {

  entry: {
    femptocss: PATHS.src + '/index.js'
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },


  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },

      {
        test: /\.pcss$/, loader: ExtractTextPlugin.extract({
        loader: "postcss-loader"
      })
      }

      ,
      {
        test: /\.css$/, loader: ExtractTextPlugin.extract({
        fallbackLoader: "style-loader",
        loader: "css-loader"
      })
      }
    ]
  },
  resolve: {
    // you can now require('file') instead of require('file.js')
    extensions: ['.ts', '.js', '.json']
  },
  plugins: [
    new ExtractTextPlugin("styles.css")
  ]
};

