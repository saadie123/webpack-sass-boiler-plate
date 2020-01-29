const path = require('path');

module.exports = {
  modules: {
    app: path.resolve(__dirname, 'src', 'app.js'),
    auth: path.resolve(__dirname, 'src', 'auth.js')
  }
};
