const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true
  },
  plugins: [new Dotenv()]
};
