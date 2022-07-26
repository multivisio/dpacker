const fs = require("fs");
const path = require('path');


if(fs.existsSync("webpack.env.js")){
    fs.writeFile('test.txt', 'ist da!', function (err) {
        if (err) throw err;
    });
}
else{
    fs.writeFile('test.txt', 'nicht dad!', function (err) {
        if (err) throw err;
    });
}