const webpack = require("webpack");
const webpackMerge = require("webpack-merge"); // used to merge webpack configs
const commonConfig = require("./webpack.common.js"); // the settings that are common to prod and dev
const ENV = (process.env.ENV = process.env.NODE_ENV = "development");
const NodemonPlugin = require("nodemon-webpack-plugin");

/**
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
module.exports = function(options) {
  return webpackMerge(commonConfig({ env: ENV }), {
    plugins: [new NodemonPlugin()],

    devtool: "eval-source-map",
    mode: ENV
  });
};
