const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = merge(common, {
  // devtool: "source-map", // do we need this in prod?
  mode: "production",

  plugins: [
    new webpack.DefinePlugin({
      "process.env.DOMAIN": JSON.stringify("app.cleaved.com"),
      "process.env.GOOGLE_CLIENT_ID": JSON.stringify(
        "654752608855-q10gsot4kegila36fpglv08j9ml3baqd.apps.googleusercontent.com"
      ),
      // "process.env.GOOGLE_TAG_MANAGER_ID": JSON.stringify("XXX-XXXXX"),
      "process.env.GRAPHQL_API_SERVICE_URL": JSON.stringify("https://api.app.cleaved.com/graphql"),
      "process.env.MEDIA_ENDPOINT": JSON.stringify("https://api.app.cleaved.com"),
    }),
    new CopyPlugin({
      patterns: [{ from: "public", to: "public" }],
    }),
  ],
});
