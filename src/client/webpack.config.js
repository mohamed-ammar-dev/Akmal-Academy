const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: {
    authentication: "./src/client/src/authentication-module/index.ts",
    twoFactorLogin: "./src/client/src/authentication-module/twoFactorLogin.ts",
    forgetPassword: "./src/client/src/authentication-module/forgetPassword.ts",
    validateForgetPassword: "./src/client/src/authentication-module/validateForgetPassword.ts",
    resetPassword: "./src/client/src/authentication-module/resetPassword.ts",
    logout: "./src/client/src/logout-module/index.ts"
   },

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "src/dist"),
    publicPath: "/src/dist/",
  },

  mode: "production",
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
    splitChunks: {
      chunks: "all",
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png)$/,
        loader: "image-webpack-loader",
        enforce: "pre",
      },
      {
        test: /\.(png|svg)$/,
        loader: "url-loader",
        options: {
          // files larger than 25 KB won’t be inlined
          limit: 25 * 1024,
        },
      },
      {
        test: /\.(mp3)$/,
        loader: "file-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [new TerserPlugin(), new MiniCssExtractPlugin()],
  resolve: {
    extensions: [".ts", ".js", ".css"],
  },
};