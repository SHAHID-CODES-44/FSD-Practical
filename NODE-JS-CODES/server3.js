var http = require('http');
var server = http.createServer(function (req, res) {
    const Pages = (title, content) => {
        return `
        <html>
        <body>
         </h1>${title}</h1>
         <h2>${content}</h2>
         <button onClick="location.href='/'">Home</button>
          <button onclick="location.href='/student'">Student</button>
          <button onclick="location.href='/admin'">Admin</button>
    </body>
             </html>
        `
    }
    if (req.url == "/") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(Pages('HomePage', 'Home page here'));
        res.end();
    }
    else if (req.url == '/student') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(Pages('Student', 'Student page here'));
        res.end();
    }
    else if (req.url == "/admin") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(Pages('Admin', 'Admin page here'));
        res.end();
    }
    else {
        res.end('Invalid Request');
    }
});
server.listen(5000);
console.log("Server is running on port : 5000");
console.log("Go to http://localhost:5000");

