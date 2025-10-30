const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'video-post-params')));

app.get('/', function(req, res) {
    res.send('Welcome to the homepage');
});

app.post('/login', function(req, res) {
    console.log(req.body.name);
    res.end(req.body.name);
});

app.get('/intro', function(req, res) {
    console.log('Intro Page Requested');
    const filePath = path.join(__dirname, 'video-post-params', 'video.html');
    console.log(`Serving file from: ${filePath}`);
    res.sendFile(filePath, function(err) {
        if (err) {
            console.log("Error serving the file:", err);
        } else {
            console.log("HTML file served successfully.");
        }
    });
});

app.listen(3000, function() {
    console.log("Server is running on http://localhost:3000");
});
