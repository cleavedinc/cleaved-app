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
      "process.env.DOMAIN": JSON.stringify("app.cleavedengineering.com"),
      "process.env.GOOGLE_CLIENT_ID": JSON.stringify(
        "986438347433-c1rjio2fgvrfbeg2jmvbko8kht858gs1.apps.googleusercontent.com"
      ),
      // "process.env.GOOGLE_TAG_MANAGER_ID": JSON.stringify("XXX-XXXXX"),
      "process.env.GRAPHQL_API_SERVICE_URL": JSON.stringify("https://api.app.cleavedengineering.com/graphql"),
      "process.env.MEDIA_ENDPOINT": JSON.stringify("https://api.app.cleavedengineering.com"),
    }),
    new webpack.HotModuleReplacementPlugin(),
    // new BundleAnalyzerPlugin()
  ],
});
