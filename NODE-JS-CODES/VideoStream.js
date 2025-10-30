const http = require('http');
const fs = require('fs');

const serv = http.createServer(func);
serv.listen(8080);
console.log("Server is running : http://localhost:8080");

function func(req, res) {
    const path = 'video.mp4';
    const stat = fs.statSync(path);
    const fileSize = stat.size; 

    const head = {
        'Content-Length': fileSize,
        'Content-Type': 'video/mp4'
    };

    res.writeHead(200, head);
    const stream = fs.createReadStream(path);
    stream.pipe(res);
}
