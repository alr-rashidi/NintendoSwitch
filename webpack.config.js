const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
  },
  devServer: {
    open: true,
    hot: true,
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "index.html"
    })
  ],
  resolve: {
    extensions: [".jsx", ".js"],
  },
};
