const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
  entry: [
    './src/js/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: "assets/[name][ext][query]",
    filename: 'index.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.pug$/,
        loader: "pug3-loader",
      },
    ]
  },
  devServer: {
    'static': {
      directory: './dist'
    },
    port: 9000,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "index.css"
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: "src/pug/index.pug",
      favicon: "src/images/favicon.ico",
  }),
    new CleanWebpackPlugin()
  ]
};

module.exports = config;