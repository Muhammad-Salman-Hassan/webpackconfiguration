const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.js',
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.js",
  },
  devServer: {
    port: 3000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css?$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|svg|gif)?$/,
        use: "file-loader",
      },
    ],
  },
  plugins:[new HtmlWebpackPlugin({template:'./public/index.html'})]
};
