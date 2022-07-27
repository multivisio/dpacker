const fs = require("fs");
const path = require('path');
const reqpath = path.join(__dirname,"..","..","..");

if(fs.existsSync(reqpath, "webpack.env.js")){
         fs.writeFile('test.txt', 'ist da!', function (err) {
             if (err) throw err;
         });
}
else{
        fs.writeFile(reqpath, 'test.txt', 'nicht da!', function (err) {
            if (err) throw err;
        });
}