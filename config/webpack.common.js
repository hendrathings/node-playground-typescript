// Modules
const webpack = require("webpack");
const helper = require("./helper");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = function(options) {
  return {
    entry: {
      app: ["./src/App.ts"]
    },

    output: {
      path: helper.root("/build"),
      publicPath: "/",
      filename: "[name].bundle.js",
      chunkFilename: "[name].chunk.js",
      sourceMapFilename: "[file].[hash].map"
    },

    // Initialize module
    module: {
      rules: [{ test: /\.tsx?$/, loader: "ts-loader" }]
    },

    plugins: [
      new CleanWebpackPlugin(["build"]),
      new webpack.NoEmitOnErrorsPlugin()
    ],
    node: {
      fs: "empty",
      net: "empty"
    }
  };
};
