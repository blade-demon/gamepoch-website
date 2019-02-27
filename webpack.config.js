const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const WriteFilePlugin = require("write-file-webpack-plugin");
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");

const common = {
  mode: "none",
  entry: {
    index: path.resolve(__dirname, "src/js/index.js"),
    games: path.resolve(__dirname, "src/js/games.js"),
    news: path.resolve(__dirname, "src/js/news.js")
  },
  output: {
    filename: "./[name].[hash].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: require.resolve("jquery/dist/jquery.min.js"),
        use: [
          {
            loader: "expose-loader",
            options: "jQuery"
          },
          {
            loader: "expose-loader",
            options: "$"
          }
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            plugins: ["@babel/plugin-syntax-dynamic-import"]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          ExtractCssChunks.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: loader => [
                require("autoprefixer")({
                  browsers: [
                    "last 5 version",
                    "> 1%",
                    "maintained node versions",
                    "not dead"
                  ]
                }) //CSS浏览器兼容
              ]
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|ttf|woff2|woff|eot)$/,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new ExtractCssChunks({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new WriteFilePlugin([{ from: "src/img", to: "./img" }]),
    new CopyWebpackPlugin([{ from: "src/img", to: "./img" }])
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    disableHostCheck: true
  }
};

module.exports = (env, argv) => {
  var config = {};
  if (argv.mode === "development") {
    config = merge(common, require("./webpack.development.config"));
  }

  if (argv.mode === "production") {
    config = merge(common, require("./webpack.production.config"));
  }
  return config;
};
