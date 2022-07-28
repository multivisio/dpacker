'use strict'
var gentlyCopy = require("gently-copy");
const fs = require("fs");

gentlyCopy(
  ["app.js", "webpack.env.js"],
  process.env.INIT_CWD
);

const json = require(process.env.INIT_CWD + "/package.json");

if (!json.hasOwnProperty("scripts")) {
  json.scripts = {};
}

if (!json.scripts.hasOwnProperty("build")) {
  json.scripts.build =
    "webpack --config " +
    "node_modules/@multivisio/webpacker/configuration/webpack.prod.config.js --mode=production";
}

if (!json.scripts.hasOwnProperty("watch")) {
  json.scripts.watch =
    "webpack --config " +
    "node_modules/@multivisio/webpacker/configuration/webpack.dev.config.js --mode=development --watch";
}

if (!json.scripts.hasOwnProperty("dev")) {
  json.scripts.dev =
    "webpack --config " +
    "node_modules/@multivisio/webpacker/configuration/webpack.dev.config.js --mode=development";
}

fs.writeFileSync(process.env.INIT_CWD + "/package.json", JSON.stringify(json, null, 2));