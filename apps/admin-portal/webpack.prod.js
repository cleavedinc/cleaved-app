const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = merge(common, {
  // devtool: "source-map", // do we need this in prod?
  mode: "production",

  plugins: [
    new webpack.DefinePlugin({
      "process.env.DOMAIN": JSON.stringify("admin.cleaved.com"),
      "process.env.GOOGLE_CLIENT_ID": JSON.stringify(
        "547881876983-0hfc5llu7ctmpqnp9uqanqt6diintenk.apps.googleusercontent.com"
      ),
      "process.env.GOOGLE_SSO_CLIENT_ID_ADMIN_PORTAL": JSON.stringify("https://api.app.cleaved.com/graphql"),
    }),
    new CopyPlugin({
      patterns: [{ from: "public", to: "public" }],
    }),
  ],
});
