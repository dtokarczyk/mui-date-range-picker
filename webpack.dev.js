var path = require("path");

module.exports = {
  mode: "development",
  entry: "./app/src/index.js",
  output: {
    path: path.resolve("./app"),
    filename: "index.js",
  },
  devtool: "source-map",
  watch: true,
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      },
    ],
  },
};
