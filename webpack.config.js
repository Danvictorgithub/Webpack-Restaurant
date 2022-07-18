const path = require('path');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clear:'true',
  },
  optimization: {
    minimizer: [
      optimization.minimize = true,
      new CssMinimizerPlugin(),
    ],
  },
};