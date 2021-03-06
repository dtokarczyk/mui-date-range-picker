var path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/Index.js",
  output: {
    path: path.resolve("./dist"),
    filename: "index.js",
    libraryTarget: "commonjs2",
  },
  externals: {
    react: "react",
    reactDom: "react-dom",
  },
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
