import merge from "webpack-merge";
import webpack from "webpack";
import common from "./webpack.common.babel";

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  stats: "normal",
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: "development"
    })
  ]
});
