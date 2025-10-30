const fs = require('fs');

console.log('Started Reading File');
fs.readFile("file.txt", 'utf-8', (err,data) => {
    if(err) throw err;
    console.log("File content,", "\n" , data);
})

console.log("This prints before file read completely.");