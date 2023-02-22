/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Agrimo Infra LTD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const { resolve } = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

/**
 * Webpack Dev
 *
 * @type {import('webpack').Configuration}
 */
const config = {
  mode: "development",
  target: "web",
  entry: {
    "host.web": resolve("./src/build.ts"),
  },
  devtool: "inline-source-map",
  resolve: {
    alias: {
      vt: resolve("./src/vt"),
    },
    extensions: [".ts", ".js"],
  },

  plugins: [
    new htmlWebpackPlugin({
      title: "Caltivate - Dev",
      cache: true,
      template: resolve("./src/vt/host/browser/host.web.dev.html"),
    }),
  ],

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
      },
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|ttf|svg)/,
        type: "asset",
      },
    ],
  },

  devServer: {
    static: resolve("./.tmp"),
    historyApiFallback: true,
    open : true
  },

  output: {
    filename: "[name].bundle.js",
    path: resolve("./.tmp"),
    clean: true,
    publicPath: "/",
  },
  optimization: {
    runtimeChunk: "single",
  },
};

module.exports = config;
