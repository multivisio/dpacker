/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge')

const webpackConfiguration = require('../webpack.config')
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = merge(webpackConfiguration, {
  mode: 'development',

  /* Manage source maps generation process */
  //devtool: 'eval-source-map',
  devtool: 'source-map',

  /* File watcher options */
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
    ignored: /node_modules/,
  },

  /* Additional plugins configuration */
  plugins: [
    new LiveReloadPlugin({
      appendScriptTag:true,
      port:35729,
    }),
  ],
});
