const webpack = require("webpack");
const webpackMerge = require("webpack-merge"); // used to merge webpack configs
const commonConfig = require("./webpack.common.js"); // the settings that are common to prod and dev
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const ENV = (process.env.NODE_ENV = process.env.ENV = "production");

/**
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
module.exports = function(options) {
  return webpackMerge(commonConfig({ env: ENV }), {
    plugins: [],

    optimization: {
      minimizer: [
        // we specify a custom UglifyJsPlugin here to get source maps in production
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          uglifyOptions: {
            compress: false,
            ecma: 6,
            mangle: true
          },
          sourceMap: true
        })
      ]
    },

    devtool: "hidden-source-map",
    mode: ENV
  });
};
