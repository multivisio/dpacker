'use strict'
var gentlyCopy = require('gently-copy');

gentlyCopy(
  ["app,js", "webpack.env.js"],
  process.env.INIT_CWD
);
