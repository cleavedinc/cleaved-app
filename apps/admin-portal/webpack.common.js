const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: "index.html",
  filename: "index.html",
  inject: true,
});

const sharedPlugins = [HTMLWebpackPluginConfig];

module.exports = {
  entry: ["./src/pages/index.tsx"],

  devtool: "inline-source-map",

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/env",
              {
                modules: false,
              },
            ],
            "@babel/react",
            "@babel/typescript",
          ],
          plugins: ["react-hot-loader/babel", "@babel/plugin-transform-runtime"],
          env: {
            test: {
              presets: [
                "@babel/react",
                [
                  "@babel/env",
                  {
                    modules: "commonjs",
                  },
                ],
              ],
            },
          },
        },
      },
      {
        enforce: "pre",
        test: /\.(m?)js$/,
        loader: "source-map-loader",
        exclude: [/node_modules/],
      },
      {
        // For pure CSS (without CSS modules)
        test: /\.css$/i,
        exclude: /\.module\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "url-loader",
        options: {
          limit: 10000,
        },
      },
    ],
  },

  optimization: {
    runtimeChunk: {
      name: "vendor",
    },
    splitChunks: {
      chunks: "all",
    },
    usedExports: true,
    minimizer: [new TerserPlugin()],
  },

  output: {
    filename: "[name].[fullhash].js",
    path: path.join(__dirname, "/build"),
    publicPath: "/",
  },

  plugins: [...sharedPlugins],

  resolve: {
    extensions: [".ts", ".tsx", ".mjs", ".js"],
  },
};
