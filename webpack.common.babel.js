import webpack from "webpack";
import path from "path";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import nodeExternals from "webpack-node-externals";  

const config = {
  entry: {
    gcd: path.resolve(__dirname, "src/main.ts")
  },
  module: {
    rules: [
      {
        test: /\.[tj]s$/,
        include: path.resolve(__dirname, "src"),
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  // Runnning node builds on webpack according to this article
  // https://medium.com/@binyamin/creating-a-node-express-webpack-app-with-dev-and-prod-builds-a4962ce51334
  target: "node",
  node: {
    __dirname: false,
    __filename: false
  },  
  externals: [nodeExternals()],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist/")
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new webpack.BannerPlugin("Open Sesame")
  ]
};

export default config;
