/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  plugins: [new MiniCSSExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[hash][ext]',
        },
      },
      {
        test: /\.css$/,
        use: [MiniCSSExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },
});
