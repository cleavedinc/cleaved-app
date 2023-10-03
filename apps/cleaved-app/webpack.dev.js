const webpack = require("webpack");
const { merge } = require("webpack-merge");
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",

  devServer: {
    host: "localhost",
    port: "4000",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    historyApiFallback: true,
  },

  devtool: "inline-source-map",

  plugins: [
    new webpack.DefinePlugin({
      "process.env.DOMAIN": JSON.stringify("localhost:4000"),
      "process.env.AMPLITUDE_API_KEY": JSON.stringify("a2f344672df634b57ddd17188b6da8b7"),
      "process.env.GOOGLE_CLIENT_ID": JSON.stringify(
        "1005196783589-i01f4cj4cfg9i7ukgl80t9e8sgnab1fl.apps.googleusercontent.com"
      ),
      "process.env.GOOGLE_TAG_MANAGER_ID": JSON.stringify("GTM-PF2PGRP"),
      "process.env.GRAPHQL_API_SERVICE_URL": JSON.stringify("http://localhost:8080/graphql"),
      "process.env.MEDIA_ENDPOINT": JSON.stringify("http://localhost:8080"),
      "process.env.STRIPE_PUBLISHABLE_KEY": JSON.stringify("pk_test_VX53iabGnIXBis1UmYQsWQ7B00yqMWnlmT"),
      "process.env.STRIPE_PRICING_TABLE_ID": JSON.stringify("prctbl_1NwnesGP3PYNtNs6tsnTKCSM"),
    }),
    new webpack.HotModuleReplacementPlugin(),
    // new BundleAnalyzerPlugin()
  ],
});
