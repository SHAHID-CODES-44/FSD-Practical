const fs = require('fs');
let streamin = fs.createReadStream('log.txt', 'utf8');
let filedata = '';

streamin.on('data', function(data) {
    filedata += data;
});

streamin.on('end', function() {
    console.log(filedata);
});

streamin.on('error', function(){
    console.log("Error Reading the file.");
});
