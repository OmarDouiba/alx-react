const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    header: {
      import: path.resolve(__dirname, "./modules/header/header.js"),
      dependOn: "shared",
    },
    body: {
      import: path.resolve(__dirname, "./modules/body/body.js"),
      dependOn: "shared",
    },
    footer: {
      import: path.resolve(__dirname, "./modules/footer/footer.js"),
      dependOn: "shared",
    },
    shared: "jquery",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "public"),
    // clean: true, // This is an alternative to CleanWebpackPlugin for Webpack 5+
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jp?g|ico|gif)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassingOnDebug: true,
              disable: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "./index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  devtool: "inline-source-map",
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  performance: {
    maxAssetSize: 1000000,
  },
  devServer: {
    static: path.join(__dirname, "./public"),
    compress: true,
    port: 8564,
  },
};
