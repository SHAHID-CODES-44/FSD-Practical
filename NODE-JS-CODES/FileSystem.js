const fs = require("fs");

fs.writeFileSync('File.txt', 'This is a simple file.\n New Text');

const data = fs.readFileSync('File.txt', 'utf-8');

console.log("\n");
console.log(data);
console.log("File Name: ", __filename);
console.log("File Location: ", __dirname);
console.log("Current Dir is in: ", process.cwd());

try {
    process.chdir('/');
} catch (error) {
    console.log("chdir: ", error.message);
}

console.log("Currently Working Dir is now: ", process.cwd());``
console.log("\n");