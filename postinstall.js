'use strict'
var gentlyCopy = require("gently-copy");
const fs = require("fs");

gentlyCopy(
  ["app.js", "webpack.env.js"],
  process.env.INIT_CWD
);

const json = require(process.env.INIT_CWD + "/package.json");

if (!json.hasOwnProperty("scripts")){
    json.scripts = {};
}
json.scripts["build"] = "webpack --config configuration/webpack.dev.config.js --mode=development ";
json.scripts["watch"] = "webpack --config configuration/webpack.dev.config.js --mode=development --watch";

fs.writeFileSync(process.env.INIT_CWD + "/package.json", JSON.stringify(json, null, 2));