const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "build"),
  },
  devServer: {
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        exclude: ['/node_modules/']
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "index.html"
    })
  ],
  resolve: {
    extensions: [".jsx", ".js", ".tsx", ".ts"],
  },
};
