const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './js/index.js',

  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, '../docs'),
  },

  devServer: {
    static: './docs',

    historyApiFallback: {
      rewrites: [
        { from: /^\/index/, to: '/index.html' },
      ],
    },
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,

          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },

          "sass-loader",
        ],
      },
    ],
  },

  plugins: [
    new CopyPlugin({
      patterns: [{ from: './img', to: 'img' }],
    }),

    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),

    new HtmlWebpackPlugin(
      {
        template: './index.html',
      }
    ),
  ]
}