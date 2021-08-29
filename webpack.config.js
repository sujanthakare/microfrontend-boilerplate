/* eslint-disable */
const path = require("path");

const port = process.env.PORT || 3000;

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"],
      },
    ],
  },
  devServer: {
    host: "localhost",
    port: port,
    historyApiFallback: true,
    open: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
