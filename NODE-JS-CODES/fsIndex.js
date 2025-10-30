const path = require('path');
const fileObject = require("fs");

const filePath = path.join(__dirname, "data", "simple.txt");

console.log("\n", "-------File Created--------", "\n", "Path: ", filePath);

fileObject.writeFileSync(filePath, "this is a simple file.");
fileObject.appendFileSync(filePath, "\nThis file contains all the data.");

const fileContent = fileObject.readFileSync(filePath, 'utf8');
console.log(fileContent);

fileObject.unlinkSync(filePath);

console.log("\n", "-------File Deleted--------", "\n", "Path: ", filePath, "\n");
