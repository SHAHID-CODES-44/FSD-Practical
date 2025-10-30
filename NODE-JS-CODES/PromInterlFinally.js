const colors = require("colors");

let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = false``;
        if (success) {
            console.log("\n");
            resolve("Data Fetched Successfully.", colors.green);
        }
        else {
            console.log("\n");
            reject("Error Fetched Data", colors.red);
        }
    }, 2000);
});

myPromise.then((message) => {
    console.log("Success: ", message);
}).catch((error) => {
    console.error(("Error: ", error));
}).finally(() => {
    console.log("Promise Settled (Fullfilled or may Rejected).");
    console.log("\n");
});

