/**
 * Webpack main configuration file
 */

const path = require('path');
const fs = require('fs');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackEnv = require(process.env.INIT_CWD + '/webpack.env');

module.exports = {
  entry: webpackEnv.entry,
  stats: 'errors-warnings',
  output: {
    filename: webpackEnv.files.name.javascript,
    path: webpackEnv.paths.output,
  },
  module: {
    rules: [
      {
        test: /\.((c|sa|sc)ss)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(png|gif|jpe?g|svg)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: webpackEnv.limits.images,
          },
        },
        generator: {
          filename: webpackEnv.files.name.image,
        },
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: webpackEnv.limits.fonts,
          },
        },
        generator: {
          filename: webpackEnv.files.name.font,
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: webpackEnv.files.name.css,
    }),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'JavaScript/'),
      '~': path.resolve(__dirname, 'JavaScript/'),
      'node_modules' : path.resolve(__dirname, 'node_modules/'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.vue'],
  },
  target: 'web',
};
