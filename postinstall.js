const fs = require("fs");
const path = require('path');
const reqpath = path.join(__dirname,"../../../");

if(fs.existsSync(reqpath, "webpack.env.js")){
    console.log("Ist da");
}
else{
    fs.writeFile('test.txt', 'Jajajajjaja!', function (err) {
        if (err) throw err;
    });
}