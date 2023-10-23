const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = merge(common, {
  // devtool: "source-map", // do we need this in prod?
  mode: "production",

  plugins: [
    new webpack.DefinePlugin({
      "process.env.DOMAIN": JSON.stringify("adminportal.cleaved.com"),
      "process.env.GRAPHQL_API_SERVICE_URL": JSON.stringify("https://api.adminportal.cleaved.com/graphql"),
    }),
    new CopyPlugin({
      patterns: [{ from: "public", to: "public" }],
    }),
  ],
});
