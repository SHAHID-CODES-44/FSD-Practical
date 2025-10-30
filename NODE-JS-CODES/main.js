const { log } = require('./logs');
console.log();
console.log("-------------------Logs on Browser---------------------");
console.log();
var http = require('http');

var server = http.createServer(function (req, res) {

    const LogsInfo = () => {
        return log.info("Starting Node Js.........");
    };

    const LogsWarning = () => {
        return log.warning("Warning : ! Battery Low ! ");
    };

    const LogsError = () => {
        return log.error("Error : ! Server Crashed !");
    };

    const LogsText1 = LogsInfo();
    const LogsText2 = LogsWarning();
    const LogsText3 = LogsError();

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`<html><body><h3>${LogsText1}</h3></body></html>`);
    res.write(`<html><body><h3>${LogsText2}</h3></body></html>`);
    res.write(`<html><body><h3>${LogsText3}</h3></body></html>`);
    res.end();
});

server.listen(5000);
console.log("Server is running on port : 5000");
console.log("Go to http://localhost:5000");

// Greet

console.log("\n","-------------------Greet---------------------","\n");

const {greet} = require('./greet');

const message = greet("Shahid");

console.log(message);

// Math -----

console.log("\n","-----------------Math---------------------","\n")
const Math = require('./math');

console.log("Addition: ", Math.math.add(10,20));
console.log("Subtract: ", Math.math.sub(10,20));
console.log("Multiply: ", Math.math.mul(10,20));
console.log("Divide: ", Math.math.div(10,20));

//  DATE ............
console.log("\n","-----------------Date----------------","\n")
const GetCurrentDateTime = require('./date');
console.log("Date:", GetCurrentDateTime());

