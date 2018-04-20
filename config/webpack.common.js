// Modules
const webpack = require('webpack');
const helper = require('./helper');

module.exports = function (options) {
  return {
    entry: {
      app: './src/App.ts'
    },

    output: {
      path: helper.root('/build'),
      publicPath: '/',
      filename: '[name].[hash].js',
      chunkFilename: '[name].[hash].js',
      sourceMapFilename: '[file].[hash].map'
    },

    // Initialize module
    module: {
      rules: [{ test: /\.tsx?$/, loader: "ts-loader" }]
    },

    plugins: []
  }
};
