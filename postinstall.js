'use strict'
var gentlyCopy = require('gently-copy');
var fs = require("fs");

var filesToCopy = ['webpack.env.js'];
var destUserPath = process.env.INIT_CWD;


gentlyCopy(filesToCopy, destUserPath);

fs.writeFile('process.env.INIT_CWD/app.js', 'hi', function (err) {
    if (err) throw err;
})
