'use strict'
var gentlyCopy = require('gently-copy');
var fs = require("fs");

var filesToCopy = ['webpack.env.js'];
var destUserPath = process.env.INIT_CWD;


gentlyCopy(filesToCopy, destUserPath);

fs.writeFileSync('app.js', '',);
var appjsCopy = ['app.js'];

gentlyCopy(appjsCopy, destUserPath);