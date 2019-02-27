const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");
const PurgecssWebpackPlugin = require("purgecss-webpack-plugin");
const PurifyCSSPlugin = require("purifycss-webpack");

const glob = require("glob-all");

const minifyOption = {
  collapseWhitespace: true,
  removeComments: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  useShortDoctype: true,
  minifyJS: true,
  minifyCSS: true,
  processConditionalComments: true
};

const PATHS = {
  src: path.join(__dirname, "src")
};

module.exports = {
  mode: "production",
  plugins: [
    // new PurifyCSSPlugin({
    //   // Give paths to parse for rules. These should be absolute!
    //   paths: glob.sync([
    //     path.join(__dirname, "src/**/*.html"),
    //     path.join(__dirname, "src/**/*.js")
    //   ])
    // }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      chunks: ["index"],
      chunksSortMode: "manual",
      favicon: "./src/favicon.ico",
      minify: minifyOption
    }),
    new HtmlWebpackPlugin({
      template: "./src/news.html",
      filename: "news.html",
      chunks: ["news"],
      chunksSortMode: "manual",
      favicon: "./src/favicon.ico",
      minify: minifyOption
    }),
    new HtmlWebpackPlugin({
      template: "./src/games.html",
      filename: "games.html",
      chunks: ["games"],
      favicon: "./src/favicon.ico",
      chunksSortMode: "manual",
      minify: minifyOption
    }),
    new CompressionPlugin(),
    new OptimizeCSSAssetsPlugin({}),
    new BundleAnalyzerPlugin()
  ]
};
