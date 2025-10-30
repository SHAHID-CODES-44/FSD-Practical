const fs = require('fs');

const streamin = fs.createReadStream('log.txt', 'utf-8');
const streamout = fs.createWriteStream('NewLog.txt', 'utf-8');

streamin.pipe(streamout);

streamin.on('data', function(data) {
    console.log('transferred: %d' , data.length);
});
                                                                          
streamin.on('end', function() {
    console.log('Finished');
});

streamin.on('error', function() {
    console.log('Error Copying');
});