'use strict'
var gentlyCopy = require('gently-copy');
var filesToCopy = ['.webpack.env.js'];
var destUserPath = process.env.INIT_CWD;

gentlyCopy(filesToCopy, destUserPath)