//index.js file
const fs = require ('fs');  // built-in module
const express = require ('express'); // express framework
const app = express(); // create the express app obj

//define the routes

// access User-Agent request header
app.get('/', function (req, res){
    console.log(req.url);
    console.log(req.headers['user-agent']);
    res.end('From Express');
})

//access the query-string parameter
app.get('/user', function (req, res){
    console.log(req.query.name);
    res.end(req.query.name);
})

// access the route parameters (path params)
app.get('/user/:uid', function(req, res){
    console.log(req.params.uid);
    res.end('seeking user details' ); 
})

//access the body parameters
app.post('/login', function(req, res){
    console.log(req.body.name);
    res.end(req.body.name);
})

// serve the video.html file
app.get('/intro', function(req, res){
    console.log('intro page requested');
    res.sendFile(__dirname + '/video.html');
})

// stream a video in chunks
app.get('/video', function(req, res){
     const range = req.headers.range;

    const videoPath = __dirname + '/video.mp4';
    const videoSize = fs.statSync(videoPath).size;
    const chunkSize = 1 * 1e6;
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + chunkSize, videoSize - 1);
    const contentLength = end - start + 1;

    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4"
    }

//console.log(headers);
    res.writeHead(206, headers);
    const stream = fs.createReadStream(videoPath, {'start': start, 'end': end})
    stream.on('error', (err)=> {
        console.log(err.message);
    })
    stream.pipe(res);
 
})

app.listen(8080, ()=>{ console.log('server started : http://localhost:8080');});
