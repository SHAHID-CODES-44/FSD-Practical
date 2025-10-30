// index.js

const express = require('express');
const app = express();
const pingroutes = require('./controller');  // Correct path to the controller.js file

app.use('/', pingroutes);  // Using the router correctly

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
