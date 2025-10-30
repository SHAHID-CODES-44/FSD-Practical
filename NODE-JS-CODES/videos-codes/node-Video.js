const fs = require('fs');
const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();

// Allow cross-origin requests
app.use(cors());

// Define the video file path
const videoPath = path.join(__dirname, 'video.mp4');

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to the home page!");
});

// Video streaming route
app.get('/video', (req, res) => {
    const range = req.headers.range;

    // If there's no range header, serve the entire video file
    if (!range) {
        fs.stat(videoPath, (err, stats) => {
            if (err) {
                console.log(err.message);
                res.status(500).send('Internal Server Error');
                return;
            }

            const videoSize = stats.size;
            const headers = {
                "Content-Type": "video/mp4",
                "Content-Length": videoSize,
            };

            res.writeHead(200, headers);
            const stream = fs.createReadStream(videoPath);

            stream.on('error', (err) => {
                console.log(err.message);
                res.status(500).send('Internal Server Error');
            });

            stream.pipe(res);
        });
    } else {
        // Handle the range request for partial content
        fs.stat(videoPath, (err, stats) => {
            if (err) {
                console.log(err.message);
                res.status(500).send('Internal Server Error');
                return;
            }

            const videoSize = stats.size;
            const chunkSize = 1 * 1e6; // 1MB per chunk

            // Parse the Range header
            const parts = range.replace(/bytes=/, "").split("-");
            const start = parseInt(parts[0], 10);
            const end = parts[1] ? parseInt(parts[1], 10) : Math.min(start + chunkSize, videoSize - 1);
            const contentLength = end - start + 1;

            // Set headers for partial content (206)
            const headers = {
                "Content-Range": `bytes ${start}-${end}/${videoSize}`,
                "Accept-Ranges": "bytes",
                "Content-Type": "video/mp4",
                "Content-Length": contentLength
            };

            res.writeHead(206, headers);

            const stream = fs.createReadStream(videoPath, { start, end });

            stream.on('error', (err) => {
                console.log(err.message);
                res.status(500).send('Internal Server Error');
            });

            stream.pipe(res);
        });
    }
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});
