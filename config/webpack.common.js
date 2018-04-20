// Modules
const webpack = require("webpack");
const helper = require("./helper");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const { CheckerPlugin } = require("awesome-typescript-loader");

module.exports = function(options) {
  return {
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
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
      rules: [
        {
          test: /\.tsx?$/,
          loader: "awesome-typescript-loader"
        }
      ]
    },
    plugins: [
      new CheckerPlugin(),
      new CleanWebpackPlugin(["build"]),
      new webpack.NoEmitOnErrorsPlugin()
    ],
    node: {
      fs: "empty",
      net: "empty"
    }
  };
};
