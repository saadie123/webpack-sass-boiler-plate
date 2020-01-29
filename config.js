const path = require('path');

module.exports = {
  modules: {
    app: path.resolve(__dirname, 'src', 'app.js')
    // Define other modules here
  },
  filename: '[name].bundle.js', // modulename.bundle.js
  rules: [
    {
      test: /\.js$/, //using regex to tell babel exactly what files to transcompile
      exclude: /node_modules/, // files to be ignored
      use: {
        loader: 'babel-loader' // specify the loader
      }
    }
    // Define other rules here
  ]
};
