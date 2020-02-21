const path = require("path");

/* const CopyPlugin = require('copy-webpack-plugin');
 ,  plugins: [
  new CopyPlugin([
    {
      from: "./public",
      to: "dist/public/"
    }
  ])
] */

let webPackCfg = {
  entry: "./server.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "api.bundle.js"
  },
  target: "node",
  module: {
    rules: [
      {
        test: "/.js$/",
        exclude: "/node_modules/",
        use: "babel-loader"
      },
      {
        test: "/.jsx?$/",
        exclude: "/node_modules/",
        use: "babel-loader"
      }
    ]
  }
};

module.exports = webPackCfg;