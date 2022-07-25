const fs = require("fs");
fs.writeFile('test.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});
