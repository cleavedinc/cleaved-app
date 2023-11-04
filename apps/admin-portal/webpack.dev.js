const webpack = require("webpack");
const { merge } = require("webpack-merge");
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",

  devServer: {
    host: "localhost",
    port: "5000",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    historyApiFallback: true,
  },

  devtool: "inline-source-map",

  plugins: [
    new webpack.DefinePlugin({
      "process.env.DOMAIN": JSON.stringify("localhost:5000"),
      "process.env.GOOGLE_CLIENT_ID": JSON.stringify(
        "121617899254-b2639tb2t4r7ifvlmmh5m2la38jskss2.apps.googleusercontent.com"
      ),
      "process.env.GRAPHQL_API_SERVICE_URL": JSON.stringify("http://localhost:8080/graphql"),
    }),
    new webpack.HotModuleReplacementPlugin(),
    // new BundleAnalyzerPlugin()
  ],
});
