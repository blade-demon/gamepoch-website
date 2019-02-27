const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      chunks: ["index"],
      chunksSortMode: "manual",
      favicon: "./src/favicon.ico"
    }),
    new HtmlWebpackPlugin({
      template: "./src/games.html",
      filename: "games.html",
      chunks: ["games"],
      chunksSortMode: "manual",
      favicon: "./src/favicon.ico"
    }),
    new HtmlWebpackPlugin({
      template: "./src/news.html",
      filename: "news.html",
      chunks: ["news"],
      chunksSortMode: "manual",
      favicon: "./src/favicon.ico"
    })
  ]
};
