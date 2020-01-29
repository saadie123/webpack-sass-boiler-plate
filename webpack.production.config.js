const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const config = require('./config');

module.exports = {
  mode: 'production',
  entry: config.modules, // Entry point of js (can be a single file or multiple files)
  output: {
    filename: config.filename, // name of generated bundles
    path: path.resolve(__dirname, 'assets', 'js') // path to the output folder e.g ./assets/js
  },
  module: {
    rules: config.rules
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()] // Minification plugin
  }
};
