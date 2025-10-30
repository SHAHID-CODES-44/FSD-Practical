// Handling rejection using catch() method


var fs = require('fs');
var promise = new Promise(function (resolve, reject){
    fs.readFile('File.txt', 'utf8', function( error, data) {
        if(error) {
            return reject(error);
        }
        resolve(data);
    });
});

promise.then(function(result){
    console.log(result);
    console.log("THE END !");
}).catch(function(error) {
    console.error(error.message);
});
