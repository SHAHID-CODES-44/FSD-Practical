const fs = require('fs');
fs.readFileSync('file.txt', 'utf-8', (err,data) => {
    if(err) throw err;
    console.log(data);
});

console.log("Started Reading File");