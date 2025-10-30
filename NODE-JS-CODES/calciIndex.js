const express = require('express');

const app = express();

const path = require('path');

const userf = require("./user");
userf("Shahid", "firozabad");

const calculator = require("./calculator");
const add = calculator.add(4,5);
console.log("Addition: ", add);
const subt = calculator.sub(6,5);
console.log("Subtraction: ", subt);

const port = 3000;
app.listen(port, () => {
    console.log("Server is running on port: ", port)
})

