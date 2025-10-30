const express = require('express');
const app = express();

app.get("/", (req,res) => {
    const name = req.query.name || 'Guest';
    res.send(`Hello ${name}`);
})
app.listen(3000, () => {
   console.log("App is listening on port: ", 3000);
    console.log("Visit: http://localhost:3000");
})