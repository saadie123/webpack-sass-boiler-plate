const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const config = require('./config');

module.exports = {
  mode: 'production',
  entry: config.modules, // Entry point of js (can be a single file or multiple files)
  output: {
    filename: '[name].bundle.js', // name of generated bundles
    path: path.resolve(__dirname, 'assets', 'js') // path to the output folder e.g ./assets/js
  },
  module: {
    rules: [
      {
        test: /\.js$/, //using regex to tell babel exactly what files to transcompile
        exclude: /node_modules/, // files to be ignored
        use: {
          loader: 'babel-loader' // specify the loader
        }
      }
    ]
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()] // Minification plugin
  }
};
