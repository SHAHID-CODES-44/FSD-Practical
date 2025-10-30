const express = require('express');
const app = express();
const port = 3000

const Pages = (title) => {
    return `
      <html>
      <body>
      <h1>${title}</h2>
      <button onClick=location.href="/">Home</button>
      <button onClick=location.href="/about">About</button>
      <button onClick=location.href="/contact">Contact</button>
      </body>
      </html>
    `
}

app.get("/", (req,res) => {
    res.send(Pages(("Home Page")));
    res.send("This is Home Page");
});

app.get("/about", (req,res) => {
    res.send(Pages(("About Page")));
});

app.get("/contact", (req,res) => {
    res.send(Pages(("Contact Page")));
});

app.listen(port, () => {
    console.log("App is listening on port: ", port);
    console.log("Visit: http://localhost:3000");
})